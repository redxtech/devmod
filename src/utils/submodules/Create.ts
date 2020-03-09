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
        if (Object.prototype.hasOwnProperty.call(user, 'user')) {
            return user as GuildMember
        } else {
            return this.config.guild.members.resolve(user.id)
        }
    }

    // Function to create an author to send with a message
    public author(user: User | GuildMember): MessageEmbedAuthor {
        const member = this.member(user)
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
        return !this.config.compactMessages
            ? {
                  embed: {
                      title,
                      description: description || undefined,
                      color: colour,
                      author: author ? this.author(author) : undefined,
                      ...rest
                  }
              }
            : `**[${title}]** ${description}`
    }

    // Function to create a unified error message
    public errorMessage(
        error: DevmodError
    ): { embed: Partial<MessageEmbed> } | string {
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
