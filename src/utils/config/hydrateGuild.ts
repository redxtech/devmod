/*
 * Gabe Dunn 2020
 * Function to take a GuildResolvable and turn it into a Guild
 */

import { Client, Guild, GuildResolvable } from 'discord.js'
import { NullGuildError } from '../../types/errors/NullGuildError'

export const hydrateGuild = (client: Client, guildID: GuildResolvable): Guild => {
    const guild = client.guilds.resolve(guildID)
    if (guild == null) {
        throw new NullGuildError(`A guild is null (${guildID})`, 'Hydration')
    }
    return guild
}
