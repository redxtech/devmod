/*
 * Gabe Dunn 2020
 * Error for when a role is null when it shouldn't be
 */

import { DevmodError } from './DevmodError'

export class NullRoleError extends DevmodError {
    constructor (area: string, message: string) {
        super('NullRoleError', area, message)
    }
}
