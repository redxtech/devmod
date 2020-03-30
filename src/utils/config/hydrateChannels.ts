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
    const hydrated: LiveConfigChannelsInterface = {}

    for (const channel of Object.keys(channels)) {
        hydrated[channel] = guild.channels.resolve(channels[channel])
        if (hydrated[channel] == null) {
            throw new NullChannelError(
                'Hydration',
                `A channel is null (${channel}:${channels[channel]})`
            )
        }
    }

    return hydrated
}
