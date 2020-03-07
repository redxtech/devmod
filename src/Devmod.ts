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
import { Create } from './utils/submodules/Create'
import { Moderation } from './utils/submodules/Moderation'
import { Utils } from './utils/submodules/Utils'
import { commandListener } from './processes/commandListener'
import { SubmodulesInterface } from './types/interfaces/SubmodulesInterface'
import { DevmodError } from './types/errors/DevmodError'

export class Devmod {
    // The client, config, and processes are all accessible from anywhere within the class
    public readonly client: Client
    public readonly config: ConfigInterface

    // Create the submodules field
    public readonly sub: Partial<SubmodulesInterface> = {}

    // The bot will be connected once the constructor is called
    constructor (commands: ConfigInterface[], processes: ProcessInterface[], config: UserConfigInterface) {
        this.config = mergeConfigs(config)

        this.client = new Client()

        this.client.on('ready', () => {
            // Once the bot has logged in, hydrate the config and log a successful login
            this.hydrateConfig()
            log('Init', `Logged in as ${this.client.user.tag}.`)

            if (this.config.loadCommandListener) {
                // Inject the command listener into the process list
                processes.push(commandListener)
            }

            // Initialize all the processes.
            for (const process of processes) {
                log('Init', `Initialized ${process.name}!`)
                process.init(this.client, this.config, this.sub as SubmodulesInterface)
            }
        })

        // Log the bot in
        this.client.login(this.config.token).then()

        // Initialize and assign the submodules
        this.sub.create = new Create(this.client, this.config)
        this.sub.moderation = new Moderation(this.client, this.config)
        this.sub.utils = new Utils(this.client, this.config)

        // Direct errors to be handled by the error handling function (uncaught exceptions left untouched for now)
        process.on('unhandledRejection', (e: DevmodError) => handleErrors(e, this.config, this.sub as SubmodulesInterface))
        // process.on('uncaughtException', handleErrors)
    }

    // Hydrates the guild, channels, and roles properties in the config
    private hydrateConfig (): void {
        this.config.guild = hydrateGuild(this.client, this.config.guildID)
        this.config.channels = hydrateChannels(this.config.guild, this.config.channelIDs)
        this.config.roles = hydrateRoles(this.config.guild, this.config.roleIDs)
    }
}
