/*
 * Gabe Dunn 2020
 * Error for when a user doesn't have sufficient permissions
 */

import { DevmodError } from './DevmodError'
import { Message } from 'discord.js'

export class InsufficientPermissionsError extends DevmodError {
    constructor(area: string, message: string, messageToReact: Message) {
        super('InsufficientPermissionsError', area, message, messageToReact)
    }
}
