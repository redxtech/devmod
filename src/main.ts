/*
 * Gabe Dunn 2020
 * Currently does nothing. Will be the main initiation for the bot
 */

import { Devmod } from './Devmod'
import { config } from 'dotenv'

config()

const main = () => {
    const bot = new Devmod([], {
        token: process.env.BOT_TOKEN,
        guildID: '431641323578327050',
        channelIDs: {
            warn: '432010493213802517',
            ban: '432010505000058881',
            reports: '432998514193334283',
            assignRoles: '593131994096074764',
            info: '598697397039792128',
            antiBot: '593683776278888449',
            errors: '618740166630309909'
        },
        roleIDs: {
            muted: '593132538285916171',
            verified: '598708805487820811'
        }
    })
}

main()
