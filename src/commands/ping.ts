/*
 * Gabe Dunn 2020
 * Ping command
 */

import { CommandInterface } from '../types/interfaces/CommandInterface'
import {
    Client,
    DMChannel,
    GuildMember,
    Message,
    PartialMessage,
    TextChannel
} from 'discord.js'
import { ConfigInterface } from '../types/interfaces/ConfigInterface'
import { SubmodulesInterface } from '../types/interfaces/SubmodulesInterface'
import { blue } from '../utils/colours'
import { deleteMessage } from '../utils/functions/deleteMessage'

export const ping: CommandInterface = {
    name: 'Ping',
    aliases: ['ping'],
    category: 'utils',
    description: 'Shows round trip time for the bot.',
    permissions: 'SEND_MESSAGES',
    async exec(
        message: Message | PartialMessage,
        args: string[],
        channel: TextChannel | DMChannel,
        member: GuildMember,
        client: Client,
        config: ConfigInterface,
        sub: SubmodulesInterface
    ) {
        await deleteMessage(message)

        const sent = await channel.send(
            sub.create.message('Ping', 'Ping!', blue, {
                author: sub.create.author(member)
            })
        )

        // Edit the message.
        return sent.edit(
            sub.create.message('Ping', 'Ping!', blue, {
                author: sub.create.author(member),
                fields: [
                    {
                        name: 'Round Trip Time:',
                        value: `${sent.createdAt.getTime() -
                            message.createdAt.getTime()}ms.`,
                        inline: false
                    }
                ]
            })
        )
    }
}
