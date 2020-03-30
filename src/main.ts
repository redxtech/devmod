/*
 * Gabe Dunn 2020
 * Currently does nothing. Will be the main initiation for the bot
 */

import { Devmod } from './Devmod'
import { config } from 'dotenv'
import { UserConfigInterface } from './types/interfaces/UserConfigInterface'
import { config as userConfig } from '../config'

config()

const main = () => {
    const bot = new Devmod(userConfig as UserConfigInterface)
}

main()
