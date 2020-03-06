/*
 * Gabe Dunn 2020
 * Functions that handle all our errors
 */

import { DevmodError } from '../types/errors/DevmodError'

export const handleErrors = (e: DevmodError) => {
    switch (e.name) {
        case 'NullGuildError':
            break
        default:
            console.log(`error: ${e.name}: ${e.message}`)
            break
    }
}
