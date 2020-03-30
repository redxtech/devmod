/*
 * Gabe Dunn 2020
 * Function to take a list of RoleResolvables and turn it into a list of Roles
 */

import { Guild } from 'discord.js'
import {
    ConfigRoleInterface,
    LiveConfigRoleInterface
} from '../../types/interfaces/ConfigRolesInterface'
import { NullRoleError } from '../../types/errors/NullRoleError'

export const hydrateRoles = (
    guild: Guild,
    roles: ConfigRoleInterface
): LiveConfigRoleInterface => {
    // Initialize the hydrated roles object
    const hydrated: LiveConfigRoleInterface = {}

    // For each role ID in roles, find the role object in the guild and add it to the hydrated object
    for (const role of Object.keys(roles)) {
        // Resolve the channel from the guild
        hydrated[role] = guild.roles.resolve(roles[role])

        // Throw an error if it doesn't exist
        if (hydrated[role] == null) {
            throw new NullRoleError(
                'Hydration',
                `A role is null (${role}:${roles[role]})`
            )
        }
    }

    return hydrated
}
