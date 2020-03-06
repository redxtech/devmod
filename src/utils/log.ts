/*
 * Gabe Dunn 2020
 * Functions that handle all our logging
 */

import { blue, green } from 'chalk'

// Given an area and a message, log a nice looking message to the console.
export const log = (area, message) => {
    console.log(`${green(`[${area}]`)} ${blue(message)}`)
}
