/*
 * Gabe Dunn 2020
 * Interface file for the bot's config
 */

import { Guild, GuildResolvable, MessageEmbed } from 'discord.js'

import { ApprovedRolesInterface } from './ApprovedRolesInterface'
import {
    ConfigChannelsInterface,
    LiveConfigChannelsInterface
} from './ConfigChannelsInterface'
import {
    ConfigRoleInterface,
    LiveConfigRoleInterface
} from './ConfigRolesInterface'
import { CommandInterface } from './CommandInterface'

export interface ConfigInterface {
    token: string
    guildID: GuildResolvable
    guild?: Guild
    prefix: string
    commands: CommandInterface[]
    compactMessages: boolean
    messageTTL: number
    dbFile: string
    autoBan: boolean
    autoBanThreshold: number
    antiRaidMembers: number
    antiRaidRoles: number
    repTriggers: string[]
    repEmote: string
    activities: string[]
    tags: { [key: string]: MessageEmbed }
    approvedRoles: ApprovedRolesInterface[]
    channels?: LiveConfigChannelsInterface
    channelIDs: ConfigChannelsInterface
    roles?: LiveConfigRoleInterface
    roleIDs: ConfigRoleInterface
}
