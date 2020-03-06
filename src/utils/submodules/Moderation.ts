/*
 * Gabe Dunn 2020
 * Class file for the bot's moderation submodules
 */

import { Client, GuildMember, Role } from 'discord.js'
import { ConfigInterface } from '../../types/interfaces/ConfigInterface'

export class Moderation {
    // The client, config, and processes are all accessible from anywhere within the class
    private readonly client: Client
    private readonly config: ConfigInterface

    // Passes the bot's instance and config
    constructor (client: Client, config: ConfigInterface) {
        this.client = client
        this.config = config
    }

    // Add a role to a member
    public addRole (member: GuildMember, role: Role): Promise<GuildMember> {
        return member.roles.add(role)
    }

    // Remove a role from a member
    public removeRole (member: GuildMember, role: Role): Promise<GuildMember> {
        return member.roles.remove(role)
    }
}
