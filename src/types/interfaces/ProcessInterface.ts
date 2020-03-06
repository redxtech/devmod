/*
 * Gabe Dunn 2020
 * Interface file for the processes that devmod runs
 */

import { Client, DMChannel, GuildMember, Message, TextChannel } from 'discord.js'
import { ConfigInterface } from './ConfigInterface'

export interface ProcessInterface {
    name: string
    init: (client: Client, config: ConfigInterface) => any
}
