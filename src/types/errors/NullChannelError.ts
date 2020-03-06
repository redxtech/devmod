/*
 * Gabe Dunn 2020
 * Error for when a channel is null when it shouldn't be
 */

import { DevmodError } from './DevmodError'

export class NullChannelError extends DevmodError {
    constructor (message: string, area: string) {
        super(message, 'NullChannelError', area)
    }
}
