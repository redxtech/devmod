/*
 * Gabe Dunn 2020
 * Interface file for the roles entry in the config
 */

import { Role, RoleResolvable } from 'discord.js'

export interface ConfigRoleInterface {
    muted: RoleResolvable
    verified: RoleResolvable
    staff: RoleResolvable
    senior: RoleResolvable
}

export interface LiveConfigRoleInterface {
    muted?: Role
    verified?: Role
    staff?: Role
    senior?: Role
}
