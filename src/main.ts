/*
 * Gabe Dunn 2020
 * Currently does nothing. Will be the main initiation for the bot
 */

import { Devmod } from './Devmod'
import { config } from 'dotenv'
import { Client, DMChannel, GuildMember, Message, PartialMessage, TextChannel } from 'discord.js'
import { ConfigInterface } from './types/interfaces/ConfigInterface'
import { log } from './utils/log'
import { CommandInterface } from './types/interfaces/CommandInterface'
import { SubmodulesInterface } from './types/interfaces/SubmodulesInterface'

config()

const main = () => {
    const config = {
        token: process.env.BOT_TOKEN || '',
        guildID: '431641323578327050',
        channelIDs: {
            warn: '432010493213802517',
            ban: '432010505000058881',
            reports: '432998514193334283',
            assignRoles: '593131994096074764',
            info: '598697397039792128',
            errors: '618740166630309909'
        },
        roleIDs: {
            muted: '593132538285916171',
            verified: '598708805487820811'
        }
    }
    const commands: CommandInterface[] = [
        {
            name: 'Test Command',
            aliases: ['test'],
            category: 'utils',
            description: 'Test command',
            permissions: ['ADMINISTRATOR'],
            exec (message: Message | PartialMessage, args: string[], channel: TextChannel | DMChannel, member: GuildMember, client: Client, config: ConfigInterface, sub: SubmodulesInterface) {
                log('Test', `Test Message: ${args.join(' ') || 'test!'}`)
                return channel.send(`Test Message: ${args.join(' ') || 'test!'}`).then().catch()
            }
        }
    ]
    const bot = new Devmod(commands, [], config)
}

main()
