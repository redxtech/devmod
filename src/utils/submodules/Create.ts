/*
 * Gabe Dunn 2020
 * Class file for the bot's creation submodules
 */

import { Submodule } from './Submodule'
import { GuildMember, MessageEmbed, MessageEmbedAuthor, User } from 'discord.js'
import { Colour } from '../../types/Colour'
import { DevmodError } from '../../types/errors/DevmodError'
import { red } from '../colours'
import { capitalize } from '../functions/capitalize'

export class Create extends Submodule {
    // Function to unify User & GuildMember classes
    public member(user: User | GuildMember): GuildMember {
        // If the user has the property 'user', it's a member object, in which case return it
        // Otherwise resolve the member from the guild and return that
        if (Object.prototype.hasOwnProperty.call(user, 'user')) {
            return user as GuildMember
        } else {
            return this.config.guild.members.resolve(user.id)
        }
    }

    // Function to create an author to send with a message
    public author(user: User | GuildMember): MessageEmbedAuthor {
        // Create a member instance from the user
        const member = this.member(user)

        // Return the proper fields for an author on a message embed
        return {
            name: member.nickname,
            iconURL: member.user.avatarURL({
                dynamic: true
            })
        }
    }

    // Function to create a unified message
    public message(
        title: string,
        description: string | false,
        colour: Colour,
        author: User | GuildMember | false,
        rest: Partial<MessageEmbed> = {}
    ): { embed: Partial<MessageEmbed> } | string {
        // If compactMessages is specified, return a plaintext message with the important information
        // Otherwise return a full embed
        return this.config.compactMessages
            ? `**[${title}]** ${description}`
            : {
                  embed: {
                      title,
                      description: description || undefined,
                      color: colour,
                      author: author ? this.author(author) : undefined,
                      ...rest
                  }
              }
    }

    // Function to create a unified error message
    public errorMessage(
        error: DevmodError
    ): { embed: Partial<MessageEmbed> } | string {
        // Return a message with additional fields from the error
        return this.message(error.name, error.message, red, false, {
            fields: Object.entries(error).map(field => {
                return {
                    name: `${capitalize(field[0])}:`,
                    value: field[1],
                    inline: false
                }
            })
        })
    }
}
