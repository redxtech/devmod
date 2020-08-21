/*
 * Gabe Dunn 2020
 * Error for when devmod doesn't have sufficient permissions
 */

import { DevmodError } from "./DevmodError";
import { Message } from "discord.js";

export class BotMissingPermissionsError extends DevmodError {
	constructor(area: string, message: string) {
		// Call the super constructor with a dummy message so that it won't try to react
		super("BotMissingPermissionsError", area, message, {
			deleted: true,
		} as Message);
	}
}
