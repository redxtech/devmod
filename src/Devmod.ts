/*
 * Gabe Dunn 2020
 * Main class file for the bot's core
 */

import { Client } from 'discord.js'
import { ConfigInterface } from './types/interfaces/ConfigInterface'
import { UserConfigInterface } from './types/interfaces/UserConfigInterface'
import { mergeConfigs } from './utils/config/mergeConfig'
import { hydrateGuild } from './utils/config/hydrateGuild'
import { ProcessInterface } from './types/interfaces/ProcessInterface'
import { hydrateChannels } from './utils/config/hydrateChannels'
import { hydrateRoles } from './utils/config/hydrateRoles'
import { handleErrors } from './utils/handleErrors'
import { log } from './utils/log'
import { Moderation } from './utils/functions/Moderation'

// The main bot class
export class Devmod {

    // The client, config, and processes are all accessible from anywhere within the class
    private readonly client: Client
    private readonly config: ConfigInterface

    // Declare the submodules
    public readonly moderation: Moderation

    // The bot will be connected once the constructor is called
    constructor (processes: ProcessInterface[], config: UserConfigInterface) {
        this.config = mergeConfigs(config)

        this.client = new Client()

        this.client.on('ready', () => {
            // Once the bot has logged in, hydrate the config and log a successful login
            this.hydrateConfig()
            log('Constructor', `Logged in as ${this.client.user.tag}.`)
            this.moderation.sayHi()
        })

        // Log the bot it
        this.client.login(this.config.token).then()

        // Initialize and assign the submodules
        this.moderation = new Moderation(this.client, this.config)

        // Initialize all the processes.
        for (const process of processes) {
            log('Init', `Initialized ${process.name}!`)
        }

        // Direct errors to be handled by the error handling function
        process.on('unhandledRejection', handleErrors)
        process.on('uncaughtException', handleErrors)
    }

    // Hydrates the guild, channels, and roles properties in the config
    private hydrateConfig (): void {
        this.config.guild = hydrateGuild(this.client, this.config.guildID)
        this.config.channels = hydrateChannels(this.config.guild, this.config.channelIDs)
        this.config.roles = hydrateRoles(this.config.guild, this.config.roleIDs)
    }
}
