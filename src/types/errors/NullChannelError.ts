/*
 * Gabe Dunn 2020
 * Error for when a channel is null when it shouldn't be
 */

import { DevmodError } from './DevmodError'

export class NullChannelError extends DevmodError {
    constructor (area: string, message: string) {
        super('NullChannelError', area, message)
    }
}
