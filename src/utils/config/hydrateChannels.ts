/*
 * Gabe Dunn 2020
 * Function to take a list of ChannelResolvables and turn it into a list of Channels
 */

import { Guild } from 'discord.js'
import {
    ConfigChannelsInterface,
    LiveConfigChannelsInterface
} from '../../types/interfaces/ConfigChannelsInterface'
import { NullChannelError } from '../../types/errors/NullChannelError'

export const hydrateChannels = (
    guild: Guild,
    channels: ConfigChannelsInterface
): LiveConfigChannelsInterface => {
    // Initialize the hydrated channels object
    const hydrated: LiveConfigChannelsInterface = {}

    // For each channel ID in channels, find the channel object in the guild and add it to the hydrated object
    for (const channel of Object.keys(channels)) {
        // Resolve the channel from the guild
        hydrated[channel] = guild.channels.resolve(channels[channel])

        // Throw an error if it doesn't exist
        if (hydrated[channel] == null) {
            throw new NullChannelError(
                'Hydration',
                `A channel is null (${channel}:${channels[channel]})`
            )
        }
    }

    return hydrated
}
