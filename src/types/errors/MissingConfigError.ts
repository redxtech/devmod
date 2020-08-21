import { DevmodError } from "./DevmodError";
import { Message } from "discord.js";

export class MissingConfigError extends DevmodError {
	constructor(area: string, message: string) {
		super("MissingConfigError", area, message, { deleted: true } as Message);
	}
}
