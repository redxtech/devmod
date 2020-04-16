/*
 * André Weller 2020
 * Process file for the antiraid listener
 */

import { Client, Message } from 'discord.js'
import { ConfigInterface } from '../types/interfaces/ConfigInterface'
import { ProcessInterface } from '../types/interfaces/ProcessInterface'
import { SubmodulesInterface } from '../types/interfaces/SubmodulesInterface'

import * as moment from 'moment'

export const antiraidListener: ProcessInterface = {
    name: 'AntiraidListener',
    init(client: Client, config: ConfigInterface, sub: SubmodulesInterface) {
        const mentions = new Map()
        const mutedRole = config.roleIDs.muted

        // TODO: fix staffRole to mention properly, cannot be string
        //const staffRole = config.roleIDs.staff
        const staffRole = 662405675107876864

        client.on('message', async (message: Message) => {
            const lastKnownTimestamp = mentions.get(message.author.id) ?? null

            // TODO: escape check if user is senior
            //message.member.roles

            const {
                users: { size: mentionedUsers },
                roles: { size: mentionedRoles }
            } = message.mentions

            if (
                mentionedRoles > 1 ||
                mentionedUsers > 5 ||
                mentionedUsers + mentionedRoles > 2
            ) {
                lastKnownTimestamp
                    ? checkOffender(message, lastKnownTimestamp)
                    : addOffenderToList(message)
            }
        })

        const addOffenderToList = message => {
            mentions.set(message.author.id, [message.createdTimestamp])
        }

        const checkOffender = (message, lastKnownTimestamp) => {
            const startDate = moment(message.createdTimestamp * 1000)
            const endDate = moment(lastKnownTimestamp * 1000)

            const diff = startDate.diff(endDate)

            diff > 10 ? triggerAntiraid(message) : addOffenderToList(message)
        }

        const triggerAntiraid = async message => {
            await message.delete()
            message.member.roles.add(mutedRole)
            message.channel.send(
                `<@${message.author.id}> messed with the honk, so he got the bonk. (<@${staffRole}>)`
            )
        }
    }
}
