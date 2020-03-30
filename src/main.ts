/*
 * Gabe Dunn 2020
 * Currently does nothing. Will be the main initiation for the bot
 */

import { Devmod } from './Devmod'
import { config } from 'dotenv'
import { UserConfigInterface } from './types/interfaces/UserConfigInterface'

config()

const main = () => {
    // TODO: pull config from the config file (in the root folder)
    const userConfig = {}

    const bot = new Devmod(userConfig as UserConfigInterface)
}

main()
