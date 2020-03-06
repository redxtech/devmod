/*
 * Gabe Dunn 2020
 * Class file for the bot's moderation functions
 */

import { Client } from "discord.js"
import { ConfigInterface } from '../../types/interfaces/ConfigInterface'

export class Moderation {
    // The client, config, and processes are all accessible from anywhere within the class
    private readonly client: Client
    private readonly config: ConfigInterface

    constructor (client: Client, config: ConfigInterface) {
        this.client = client
        this.config = config
    }
}
