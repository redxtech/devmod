/*
 * Gabe Dunn 2020
 * Generic error type for devmod
 */

export class DevmodError extends Error {
    constructor (message, name) {
        super(message)
        this.message = message
        this.name = name
    }
}
