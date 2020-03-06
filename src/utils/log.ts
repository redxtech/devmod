/*
 * Gabe Dunn 2020
 * Functions that handle all our logging
 */

import { blue, green, redBright } from 'chalk'
import { DevmodError } from '../types/errors/DevmodError'

// Given an area and a message, log a nice looking message to the console.
export const log = (area, message) => {
    console.log(`${green(`[${area}]`)} ${blue(message)}`)
}

export const logError = (area: string, message: string, error: DevmodError) => {
    console.error(`${green(`[${area}]`)} ${redBright(`${error.name}: ${message}`)}`)
}
