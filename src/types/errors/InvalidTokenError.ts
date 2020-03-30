/*
 * Gabe Dunn 2020
 * Error for when the token is invalid
 */

import { DevmodError } from './DevmodError'
import { Message } from 'discord.js'

export class InvalidTokenError extends DevmodError {
    constructor(area: string, message: string) {
        super('InvalidTokenError', area, message, { deleted: true } as Message)
    }
}
