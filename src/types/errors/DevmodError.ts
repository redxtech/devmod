/*
 * Gabe Dunn 2020
 * Generic error type for devmod
 */

import { Message } from 'discord.js'

export class DevmodError extends Error {
    area: string

    constructor (name: string, area: string, message: string, messageToReact: Message) {
        super(message)
        this.name = name
        this.area = area
        this.message = message

        if (!messageToReact.deleted) {
            messageToReact.react('❌').then().catch()
        }
    }
}
