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

export class Devmod {
    client: Client
    config: ConfigInterface
    processes: ProcessInterface[]

    constructor (processes: ProcessInterface[], config: UserConfigInterface) {
        this.processes = processes
        this.config = mergeConfigs(config)

        this.client = new Client()

        this.client.on('ready', () => {
            this.hydrateConfig()
            log('Constructor', `Logged in as ${this.client.user.tag}.`)
        })

        try {
            this.client.login(this.config.token).then(() => {})
        } catch (e) {
            console.error('Yeah that doesn\'t work.')
        }

        process.on('unhandledRejection', handleErrors)
    }

    hydrateConfig (): void {
        this.config.guild = hydrateGuild(this.client, this.config.guildID)
        this.config.channels = hydrateChannels(this.config.guild, this.config.channelIDs)
        this.config.roles = hydrateRoles(this.config.guild, this.config.roleIDs)
    }
}
