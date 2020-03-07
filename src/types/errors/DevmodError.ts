/*
 * Gabe Dunn 2020
 * Generic error type for devmod
 */

export class DevmodError extends Error {
    area: string

    constructor (name: string, area: string, message: string) {
        super(message)
        this.name = name
        this.area = area
        this.message = message
    }
}
