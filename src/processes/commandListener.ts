/*
 * Gabe Dunn 2020
 * Process file for the command listener
 */

import { Client, Message } from 'discord.js'
import { ConfigInterface } from '../types/interfaces/ConfigInterface'
import { ProcessInterface } from '../types/interfaces/ProcessInterface'
import { InsufficientPermissionsError } from '../types/errors/InsufficientPermissionsError'
import { SubmodulesInterface } from '../types/interfaces/SubmodulesInterface'
import { expandCommands } from '../utils/expandCommands'

export const commandListener: ProcessInterface = {
    name: 'CommandListener',
    init(client: Client, config: ConfigInterface, sub: SubmodulesInterface) {
        client.on('message', async (message: Message) => {
            if (
                ['text', 'dm'].some(
                    channelType => message.channel.type == channelType
                ) &&
                message.content[0] == config.prefix
            ) {
                // Separate the entire command after the prefix into args.
                const args = message.content.substr(1).split(' ')

                // Set the command to the first argument and remove it from the args array.
                const commandName = args.shift()

                // Expand the command list
                const commands = expandCommands(config.commands)

                // If the command exists, test for permissions and run the command function.
                if (
                    Object.prototype.hasOwnProperty.call(commands, commandName)
                ) {
                    // Save the command to a variable.
                    const command = commands[commandName]

                    // Set the member to be consistent between DMChannel and TextChannel
                    const member =
                        message.channel.type === 'dm'
                            ? sub.create.member(message.author)
                            : message.member

                    // Test that the users has the proper permissions to run the command.
                    if (sub.utils.hasPermissions(member, command.permissions)) {
                        // Run the command.
                        await command.exec(
                            message,
                            args,
                            message.channel,
                            member,
                            client,
                            config,
                            sub
                        )
                    } else {
                        throw new InsufficientPermissionsError(
                            'CommandListener',
                            `Insufficient permissions to run command (${commandName} - ${member.user.tag}:${member.user.id})`,
                            message
                        )
                    }
                }
            }
        })
    }
}
