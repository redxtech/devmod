/*
 * Gabe Dunn 2020
 * Error for when devmod doesn't have sufficient permissions
 */

import { DevmodError } from './DevmodError'
import { Message } from "discord.js"

export class BotMissingPermissionsError extends DevmodError {
    constructor (area: string, message: string) {
        super('BotMissingPermissionsError', area, message, { deleted: true} as Message)
    }
}
