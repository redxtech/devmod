/*
 * Gabe Dunn 2020
 * Class file for the bot's moderation submodules
 */

import { GuildMember, Role } from 'discord.js'
import { Submodule } from './Submodule'

export class Moderation extends Submodule {
    // Add a role to a member
    public addRole(member: GuildMember, role: Role): Promise<GuildMember> {
        return member.roles.add(role)
    }

    // Remove a role from a member
    public removeRole(member: GuildMember, role: Role): Promise<GuildMember> {
        return member.roles.remove(role)
    }

    // TODO: warn (& clear warns) functions

    // TODO: (un)ban functions

    // TODO: (un)mute functions

    // TODO: (un)lock channel functions
}
