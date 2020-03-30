/*
 * Gabe Dunn 2020
 * Interface file for the processes that devmod runs
 */

import { Client } from 'discord.js'
import { ConfigInterface } from './ConfigInterface'
import { SubmodulesInterface } from './SubmodulesInterface'

export interface ProcessInterface {
    name: string
    init: (
        client: Client,
        config: ConfigInterface,
        sub: SubmodulesInterface
    ) => any
}
