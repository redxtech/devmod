/*
 * Gabe Dunn 2020
 * Function to expand the commands list to an object with proper aliases as keys
 */

import { CommandInterface } from '../types/interfaces/CommandInterface'

export const expandCommands = (
    commands: CommandInterface[]
): { [key: string]: CommandInterface } => {
    return commands.reduce((previous, current) => {
        // Clone previous object.
        const newCommands = previous
        // For each alias in the current command, add a key to the expanded object.
        for (const alias of current.aliases) {
            // If the alias isn't already used, add it to the object.
            if (!Object.prototype.hasOwnProperty.call(newCommands, alias)) {
                newCommands[alias] = current
            }
        }
        return previous
    }, {})
}
