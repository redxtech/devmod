import { CommandInterface } from '../types/interfaces/CommandInterface'
import {
    Client,
    DMChannel,
    GuildMember,
    Message,
    PartialMessage,
    TextChannel
} from 'discord.js'
import * as moment from 'moment'
import { ConfigInterface } from '../types/interfaces/ConfigInterface'
import { SubmodulesInterface } from '../types/interfaces/SubmodulesInterface'
import { deleteMessage } from '../utils/functions/deleteMessage'
import { blue } from '../utils/colours'

export const stats: CommandInterface = {
    name: 'stats',
    aliases: ['stats', 'statistics'],
    category: 'info',
    description: 'Sends some stats about the bot and server.',
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
            sub.create.message('Stats', false, blue, member, {
                fields: [
                    {
                        name: `${config.guild.name}:`,
                        value: [
                            `Members: ${config.guild.memberCount}`,
                            `Server was created at: ${moment(
                                config.guild.createdAt
                            ).format('YYYY/M/D')}`,
                            `Num. of channels: ${
                                config.guild.channels.cache.filter(
                                    c => c.type != 'category'
                                ).size
                            }`,
                            `Region: ${config.guild.region}`,
                            `AFK Timeout: ${config.guild.afkTimeout}`
                        ].join('\n'),
                        inline: false
                    },
                    {
                        name: 'Bot Information:',
                        value: [
                            `Uptime: ${moment
                                .duration(client.uptime, 'milliseconds')
                                .humanize()}`
                        ].join('\n'),
                        inline: false
                    }
                ]
            })
        )
    }
}
