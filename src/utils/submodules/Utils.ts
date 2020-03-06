/*
 * Gabe Dunn 2020
 * Class file for the bot's util submodules
 */

import { Client, GuildMember, PermissionResolvable, Presence } from 'discord.js'
import { ConfigInterface } from '../../types/interfaces/ConfigInterface'

export class Utils {
    // The client, config, and processes are all accessible from anywhere within the class
    private readonly client: Client
    private readonly config: ConfigInterface

    // Passes the bot's instance and config
    constructor (client: Client, config: ConfigInterface) {
        this.client = client
        this.config = config
    }

    // Function to set the bot's activity
    public setActivity (activity: string): Promise<Presence> {
        return this.client.user.setActivity(activity)
    }

    // Function to check if a user has permissions
    public hasPermissions (member: GuildMember, permissions: PermissionResolvable): boolean {
        return member.hasPermission(permissions)
    }
}
