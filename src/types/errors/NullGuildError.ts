/*
 * Gabe Dunn 2020
 * Error for when a guild is null when it shouldn't be
 */

import { DevmodError } from './DevmodError'

export class NullGuildError extends DevmodError {
    constructor (area: string, message: string) {
        super('NullGuildError', area, message)
    }
}
