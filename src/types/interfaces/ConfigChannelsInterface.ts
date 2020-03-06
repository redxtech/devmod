/*
 * Gabe Dunn 2020
 * Interface file for the channels entry in the config
 */

import { Channel, ChannelResolvable } from 'discord.js'

export interface ConfigChannelsInterface {
    warn: ChannelResolvable
    ban: ChannelResolvable
    reports: ChannelResolvable
    assignRoles: ChannelResolvable
    info: ChannelResolvable
    antiBot: ChannelResolvable
    errors: ChannelResolvable
}

export interface LiveConfigChannelsInterface {
    warn?: Channel
    ban?: Channel
    reports?: Channel
    assignRoles?: Channel
    info?: Channel
    antiBot?: Channel
    errors?: Channel
}
