/*
 * Gabe Dunn 2020
 * Command aggregator file
 */

import { CommandInterface } from '../types/interfaces/CommandInterface'

import { about } from './about'
import { kill } from './kill'
import { ping } from './ping'
import { stats } from './stats'
import { users } from './users'

export const commands: CommandInterface[] = [
    about,
    // ban,
    // buildInfo,
    // buildRoles,
    // clearWarns,
    // help,
    kill,
    // lmgtfy,
    // lock,
    // mdn,
    // move,
    // mute,
    ping,
    // prune,
    // report,
    // reputation,
    // role,
    // roles,
    stats,
    // tag,
    // tags, (do this if no command passed to tag)
    // unban,
    // unlock,
    // unmute,
    users
    // warn,
    // warns
]
