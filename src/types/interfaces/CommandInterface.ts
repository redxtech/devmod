/*
 * Gabe Dunn 2020
 * Interface file for a command
 */

import {
    Client,
    DMChannel,
    GuildMember,
    Message,
    PartialMessage,
    PermissionResolvable,
    TextChannel
} from 'discord.js'
import { ConfigInterface } from './ConfigInterface'
import { SubmodulesInterface } from './SubmodulesInterface'

export interface CommandInterface {
    name: string
    aliases: string[]
    category: 'admin' | 'fun' | 'moderation' | 'utils' | 'info'
    description: string
    permissions: PermissionResolvable
    exec: (
        message: Message | PartialMessage,
        args: string[],
        channel: TextChannel | DMChannel,
        member: GuildMember,
        client: Client,
        config: ConfigInterface,
        sub: SubmodulesInterface
    ) => Promise<Message | void>
}
