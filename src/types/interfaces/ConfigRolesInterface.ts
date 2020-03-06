/*
 * Gabe Dunn 2020
 * Interface file for the channels entry in the config
 */

import { Role, RoleResolvable } from 'discord.js'

export interface ConfigRoleInterface {
    muted: RoleResolvable
    verified: RoleResolvable
}

export interface LiveConfigRoleInterface {
    muted?: Role
    verified?: Role
}
