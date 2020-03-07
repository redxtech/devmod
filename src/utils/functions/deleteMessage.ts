/*
 * Gabe Dunn 2020
 * Function to delete a message
 */

import { Message, PartialMessage } from 'discord.js'

export const deleteMessage = (message: Message | PartialMessage): Promise<Message | void> => {
    if (!message.deleted) {
        return message.delete({
            reason: 'command invocation'
        })
    }
}
