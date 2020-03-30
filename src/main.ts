/*
 * Gabe Dunn 2020
 * Currently does nothing. Will be the main initiation for the bot
 */

import { Devmod } from './Devmod'
import { config } from 'dotenv'
import { UserConfigInterface } from './types/interfaces/UserConfigInterface'
import { logError } from './utils/log'
import { MissingConfigError } from './types/errors/MissingConfigError'

config()

const main = () => {
    let userConfig

    try {
        userConfig = require('../config').default as UserConfigInterface
    } catch {
        return logError(new MissingConfigError('Init', 'No config.ts file'))
    }

    new Devmod(userConfig)
}

main()
