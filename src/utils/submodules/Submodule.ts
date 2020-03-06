/*
 * Gabe Dunn 2020
 * Class file for the bot's moderation submodules
 */

import { Client, GuildMember, Role } from 'discord.js'
import { ConfigInterface } from '../../types/interfaces/ConfigInterface'

export class Submodule {
    // The client, config, and processes are all accessible from anywhere within the class
    public readonly client: Client
    public readonly config: ConfigInterface

    // Passes the bot's instance and config
    constructor (client: Client, config: ConfigInterface) {
        this.client = client
        this.config = config
    }
}
