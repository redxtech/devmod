/*
 * Gabe Dunn 2020
 * Interface file for the channels entry in the config
 */

import { ChannelResolvable, TextChannel } from "discord.js";

export interface ConfigChannelsInterface {
	warn: ChannelResolvable;
	ban: ChannelResolvable;
	reports: ChannelResolvable;
	assignRoles: ChannelResolvable;
	info: ChannelResolvable;
	errors: ChannelResolvable;
}

export interface LiveConfigChannelsInterface {
	warn?: TextChannel;
	ban?: TextChannel;
	reports?: TextChannel;
	assignRoles?: TextChannel;
	info?: TextChannel;
	errors?: TextChannel;
}
