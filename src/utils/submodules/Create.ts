/*
 * Gabe Dunn 2020
 * Class file for the bot's creation submodules
 */

import { Submodule } from './Submodule'
import { GuildMember, User } from 'discord.js'

export class Create extends Submodule {
    // Function to unify User & GuildMember classes
    public member (user: User | GuildMember): GuildMember {
        if (Object.prototype.hasOwnProperty.call(user, 'user')) {
            return user as GuildMember
        } else {
            return this.config.guild.members.resolve(user.id)
        }
    }
    // TODO: createMessage() - pass a title, message, etc. and return a message object
}
