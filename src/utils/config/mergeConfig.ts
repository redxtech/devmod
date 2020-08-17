/*
 * Gabe Dunn 2020
 * Function to convert and fill out the user specified config to the final config
 */

import { ConfigInterface } from '../../types/interfaces/ConfigInterface'
import { UserConfigInterface } from '../../types/interfaces/UserConfigInterface'
import { commands } from '../../commands'
import { join } from 'path'

export const mergeConfigs = (config: UserConfigInterface): ConfigInterface => {
    // Set return a config object with default values replaced by user specified values.
    return {
        token: config.token, // Discord API token for the bot.
        guildID: config.guildID, // Discord ID of the server your bot is running on.
        prefix: config.prefix || '.', // Prefix to identify commands.
        commands, // Array of commands.
        compactMessages: config.compactMessages || false, // Whether or not to use compact messages.
        messageTTL: config.messageTTL || 45, // Amount of time in seconds to wait before deleting large help messages.
        dbFile: config.dbFile || join(__dirname, '..', '..', '..', 'devmod.db'), // Absolute path for the database file.
        autoBan: config.autoBan || true, // Whether or not to enforce auto-banning after a specified number of warnings.
        autoBanThreshold: config.autoBanThreshold || 3, // Amount of warnings to warrant an auto-ban if enabled.
        antiRaidMembers: config.antiRaidMembers || 1, // Amount of members that are allowed to be pinged in a message
        antiRaidRoles: config.antiRaidRoles || 2, // Amount of roles that are allowed to be pinged in a message
        repTriggers: config.repTriggers || ['thanks', 'kudos'], // List of triggers for thanking users.
        repEmote: config.repEmote || '👍', // The emoji to prefix the thanks received message with.
        activities: config.activities || ['Serving NaN users!'], // List of activities for the bot to show as a status.
        tags: config.tags || {}, // List of tags for the .tag command.
        approvedRoles: config.approvedRoles || [], // List of lists of roles the reaction roles channel.
        channelIDs: {
            warn: config.channelIDs.warn, // Channel to forward all warning confirmation messages.
            ban: config.channelIDs.ban, // Channel to forward all ban confirmation messages.
            reports: config.channelIDs.reports, // Channel to forward all reports.
            assignRoles: config.channelIDs.assignRoles, // Channel to send and listen to reactions for roles.
            info: config.channelIDs.info, // Channel to send the info message.
            errors: config.channelIDs.errors // Channel to log errors to.
        },
        roleIDs: {
            muted: config.roleIDs.muted, // ID of the role to apply to muted users.
            verified: config.roleIDs.verified, // ID of the role to apply to verified users.
            staff: config.roleIDs.staff // ID of the role for staff on the server.
        }
    }
}
