/*
 * Gabe Dunn 2020
 * Function to take a GuildResolvable and turn it into a Guild
 */

import { Client, Guild, GuildResolvable } from "discord.js";
import { NullGuildError } from "../../types/errors/NullGuildError";

export const hydrateGuild = (
	client: Client,
	guildID: GuildResolvable
): Guild => {
	// Resolve the guild from the discord.js client
	const guild = client.guilds.resolve(guildID);

	// Throw an error if it doesn't exist
	if (guild == null) {
		throw new NullGuildError("Hydration", `A guild is null (${guildID})`);
	}

	return guild;
};
