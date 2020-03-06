/*
 * Gabe Dunn 2020
 * Generic error type for devmod
 */

export class DevmodError extends Error {
    area: string

    constructor (message: string, name: string, area: string) {
        super(message)
        this.message = message
        this.name = name
        this.area = area
    }
}
