/*
 * Gabe Dunn 2020
 * Error for when a user doesn't have sufficient permissions
 */

import { DevmodError } from './DevmodError'

export class InsufficientPermissionsError extends DevmodError {
    constructor (message: string, area: string) {
        super(message, 'InsufficientPermissionsError', area)
    }
}
