/*
 * Gabe Dunn 2020
 * Error for when a user doesn't have sufficient permissions
 */

import { DevmodError } from './DevmodError'

export class InsufficientPermissionsError extends DevmodError {
    constructor (area: string, message: string) {
        super('InsufficientPermissionsError', area, message)
    }
}
