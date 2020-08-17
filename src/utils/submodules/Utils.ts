/*
 * Gabe Dunn 2020
 * Class file for the bot's util submodules
 */

import { GuildMember, PermissionResolvable, Presence } from 'discord.js'
import { Submodule } from './Submodule'

export class Utils extends Submodule {
    // Function to set the bot's activity
    public setActivity(activity: string): Promise<Presence> {
        return this.client.user.setActivity(activity)
    }

    // Function to check if a user has permissions
    public hasPermissions(
        member: GuildMember,
        permissions: PermissionResolvable
    ): boolean {
        return member.hasPermission(permissions)
    }

    // TODO: build info & roles functions
}
