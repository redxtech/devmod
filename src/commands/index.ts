/*
 * Gabe Dunn 2020
 * Command aggregator file
 */

import { CommandInterface } from "../types/interfaces/CommandInterface";

import { about } from "./about";
import { kill } from "./kill";
import { ping } from "./ping";
import { stats } from "./stats";
import { users } from "./users";

export const commands: CommandInterface[] = [
	about,
	// Ban,
	// buildInfo,
	// buildRoles,
	// clearWarns,
	// help,
	kill,
	// Lmgtfy,
	// lock,
	// mdn,
	// move,
	// mute,
	ping,
	// Prune,
	// report,
	// reputation,
	// role,
	// roles,
	stats,
	// Tag,
	// tags, (do this if no command passed to tag)
	// unban,
	// unlock,
	// unmute,
	users,
	// Warn,
	// warns
];
