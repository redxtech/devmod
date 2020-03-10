/*
 * Gabe Dunn 2020
 * Users command
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
import { deleteMessage } from '../utils/functions/deleteMessage'
import { blue } from '../utils/colours'

export const users: CommandInterface = {
    name: 'Users',
    aliases: ['users', 'usercount'],
    category: 'info',
    description: 'Shows how many users are on the server.',
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
        return channel.send(
            sub.create.message(
                'Users',
                `There are currently ${
                    config.guild.memberCount
                } users in this discord server (${
                    config.guild.members.cache.filter(
                        m => m.presence.status !== 'offline'
                    ).size
                } currently online).`,
                blue,
                member
            )
        )
    }
}
