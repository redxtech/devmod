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

        // NOTE: Pull from config, same role is achieved
        const staffRoleId = config.roleIDs.staff

        // NOTE: Get role from config
        const seniorRoleId = config.roleIDs.senior

        const maxMentionedRoles = config.antiRaidRoles
        const maxMentionedMemebers = config.antiRaidMembers
        const maxMentionedEverything = maxMentionedRoles + maxMentionedMemebers

        // DEBUG: Debug console log for role comparison
        // console.log(staffRole, seniorRole)

        client.on('message', async (message: Message) => {
            if (message.author.bot) return
            const lastKnownTimestamp = mentions.get(message.author.id) ?? null

            const userRoleIds = message.member.roles.cache.map(r => r.id)

            const isStaff = userRoleIds.find(r => r === staffRoleId)
            const isSenior = userRoleIds.find(r => r === seniorRoleId)

            if (isStaff || isSenior) {
                return
            } else {
                const {
                    users: { size: mentionedUsers },
                    roles: { size: mentionedRoles }
                } = message.mentions

                if (
                    mentionedRoles > maxMentionedRoles ||
                    mentionedUsers > maxMentionedMemebers ||
                    mentionedUsers + mentionedRoles > maxMentionedEverything
                ) {
                    lastKnownTimestamp
                        ? checkOffender(message, lastKnownTimestamp)
                        : addOffenderToList(message)
                }
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
            addOffenderToList(message)

            // TODO: Send message to #mod-log
            message.channel.send(
                `<@${message.author.id}> messed with the honk, so he got the bonk. (<@&${staffRoleId}>)`
            )
        }
    }
}
