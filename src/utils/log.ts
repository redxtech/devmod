/*
 * Gabe Dunn 2020
 * Functions that handle all our logging
 */

import { blue, green, redBright } from 'chalk'
import { DevmodError } from '../types/errors/DevmodError'
import { Message } from 'discord.js'
import { ConfigInterface } from '../types/interfaces/ConfigInterface'
import { SubmodulesInterface } from '../types/interfaces/SubmodulesInterface'

// Given an area and a message, log a nice looking message to the console.
export const log = (area, message) => {
    console.log(`${green(`[${area}]`)} ${blue(message)}`)
}

export const logError = (error: DevmodError) => {
    console.error(
        `${green(`[${error.area || 'Uncaught'}]`)} ${redBright(
            `${error.name}: ${error.message}`
        )}`
    )
}

// Function to log errors to the error channel
export const logErrorToChannel = (
    error: DevmodError,
    config: ConfigInterface,
    sub: SubmodulesInterface
): Promise<Message> => {
    logError(error)
    if (config.channels)
        return config.channels.errors.send(sub.create.errorMessage(error))
}
