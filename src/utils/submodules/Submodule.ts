/*
 * Gabe Dunn 2020
 * Parent class file for the bot's submodules
 */

import { Client } from "discord.js";
import { ConfigInterface } from "../../types/interfaces/ConfigInterface";
import { SubmodulesInterface } from "../../types/interfaces/SubmodulesInterface";

export class Submodule {
	// The client, config, and processes are all accessible from anywhere within the class
	public readonly client: Client;
	public readonly config: ConfigInterface;

	// Create the submodules field
	public readonly sub: Partial<SubmodulesInterface> = {};

	// Passes the bot's instance and config
	constructor(client: Client, config: ConfigInterface) {
		this.client = client;
		this.config = config;
	}
}
