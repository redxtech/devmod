/*
 * Gabe Dunn 2020
 * Kill command
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
import { red } from '../utils/colours'
import { log } from '../utils/log'
import { deleteMessage } from '../utils/functions/deleteMessage'

export const kill: CommandInterface = {
    name: 'Kill',
    aliases: ['kill', 'die'],
    category: 'utils',
    description: "Kills the bot's process.",
    permissions: 'ADMINISTRATOR',
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
        await channel.send(
            sub.create.message('Killing the bot...', false, red, member)
        )
        log('Kill', 'Killing the bot...')
        process.exit(0)
    }
}
