/*
 * Gabe Dunn 2020
 * The about command
 */

import { CommandInterface } from '../types/interfaces/CommandInterface'
import {
    Client,
    DMChannel,
    GuildMember,
    Message,
    PartialMessage,
    TextChannel
} from 'discord.js'
import { ConfigInterface } from '../types/interfaces/ConfigInterface'
import { SubmodulesInterface } from '../types/interfaces/SubmodulesInterface'
import { deleteMessage } from '../utils/functions/deleteMessage'
import { blue } from '../utils/colours'

export const about: CommandInterface = {
    name: 'About',
    aliases: ['about', 'info'],
    category: 'info',
    description: 'Shows some information about the bot.',
    permissions: 'SEND_MESSAGES',
    async exec(
        message: Message | PartialMessage,
        args: string[],
        channel: TextChannel | DMChannel,
        member: GuildMember,
        client: Client,
        config: ConfigInterface,
        sub: SubmodulesInterface
    ) {
        await deleteMessage(message)
        return channel.send(
            sub.create.message(
                'About',
                `devmod is a project started by and for the [devcord](https://devcord.com)
            community on discord. It was written in typescript as part of devcord's
            topic of the month (March 2020), in which typescript was the month's
            featured topic. The bot was written with modularity, transparency, and
            ease of use, and was reworked from the ground up in an effort to make
            the bot more stable.`,
                blue,
                member,
                {
                    fields: [
                        {
                            name: 'Author:',
                            value: '<@170451883134156800>',
                            inline: true
                        },
                        {
                            name: 'GitHub Repo:',
                            value: 'https://github.com/redxtech/devmod-core',
                            inline: true
                        }
                    ]
                }
            )
        )
    }
}
