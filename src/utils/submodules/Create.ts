/*
 * Gabe Dunn 2020
 * Class file for the bot's creation submodules
 */

import { Client } from "discord.js"
import { ConfigInterface } from '../../types/interfaces/ConfigInterface'

export class Create {
    // The client, config, and processes are all accessible from anywhere within the class
    private readonly client: Client
    private readonly config: ConfigInterface

    // Passes the bot's instance and config
    constructor (client: Client, config: ConfigInterface) {
        this.client = client
        this.config = config
    }

    // TODO: createMember() - pass a member/user/etc object and return a member instance
    // TODO: createMessage() - pass a title, message, etc. and return a message object
}
