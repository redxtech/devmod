/*
 * Gabe Dunn 2020
 * Interface file for the user specified config
 */

import { GuildResolvable, MessageEmbed } from 'discord.js'

import { ApprovedRolesInterface } from './ApprovedRolesInterface'
import { ConfigChannelsInterface } from './ConfigChannelsInterface'
import { ConfigRoleInterface } from './ConfigRolesInterface'

export interface UserConfigInterface {
    token: string
    guildID: GuildResolvable
    prefix?: string
    compactMessages?: boolean
    messageTTL?: number
    dbFile?: string
    autoBan?: boolean
    autoBanThreshold?: number
    antiRaidMembers?: number
    antiRaidRoles?: number
    repTriggers?: string[]
    repEmote?: string
    activities?: string[]
    tags?: { [key: string]: MessageEmbed }
    approvedRoles?: ApprovedRolesInterface[]
    channelIDs: ConfigChannelsInterface
    roleIDs: ConfigRoleInterface
}
