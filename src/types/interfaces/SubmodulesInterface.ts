/*
 * Gabe Dunn 2020
 * Interface file for the submodules property of the bot
 */

import { Create } from "../../utils/submodules/Create";
import { Moderation } from "../../utils/submodules/Moderation";
import { Utils } from "../../utils/submodules/Utils";

export interface SubmodulesInterface {
	create: Create;
	moderation: Moderation;
	utils: Utils;
}
