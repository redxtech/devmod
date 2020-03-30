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
    const hydrated: LiveConfigRoleInterface = {}

    for (const role of Object.keys(roles)) {
        hydrated[role] = guild.roles.resolve(roles[role])
        if (hydrated[role] == null) {
            throw new NullRoleError(
                'Hydration',
                `A channel is null (${role}:${roles[role]})`
            )
        }
    }

    return hydrated
}
