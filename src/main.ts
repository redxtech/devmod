/*
 * Gabe Dunn 2020
 * Currently does nothing. Will be the main initiation for the bot
 */

import { Devmod } from './Devmod'
import { config } from 'dotenv'
import {
    Client,
    DMChannel,
    GuildMember,
    Message,
    PartialMessage,
    TextChannel
} from 'discord.js'
import { ConfigInterface } from './types/interfaces/ConfigInterface'
import { log } from './utils/log'
import { CommandInterface } from './types/interfaces/CommandInterface'
import { SubmodulesInterface } from './types/interfaces/SubmodulesInterface'

config()

const main = () => {
    const config = {
        token: process.env.BOT_TOKEN || '',
        guildID: '',
        channelIDs: {
            warn: '',
            ban: '',
            reports: '',
            assignRoles: '',
            info: '',
            errors: ''
        },
        roleIDs: {
            muted: '',
            verified: ''
        }
    }
    const commands: CommandInterface[] = [
        {
            name: 'Test Command',
            aliases: ['test'],
            category: 'utils',
            description: 'Test command',
            permissions: ['ADMINISTRATOR'],
            exec(
                message: Message | PartialMessage,
                args: string[],
                channel: TextChannel | DMChannel,
                member: GuildMember,
                client: Client,
                config: ConfigInterface,
                sub: SubmodulesInterface
            ) {
                log('Test', `Test Message: ${args.join(' ') || 'test!'}`)
                return channel
                    .send(`Test Message: ${args.join(' ') || 'test!'}`)
                    .then()
                    .catch()
            }
        }
    ]
    const bot = new Devmod(commands, [], config)
}

main()
