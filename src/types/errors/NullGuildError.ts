/*
 * Gabe Dunn 2020
 * Error for when a guild is null when it shouldn't be
 */

import { DevmodError } from './DevmodError'
import { Message } from 'discord.js'

export class NullGuildError extends DevmodError {
    constructor(area: string, message: string) {
        super('NullGuildError', area, message, { deleted: true } as Message)
    }
}
