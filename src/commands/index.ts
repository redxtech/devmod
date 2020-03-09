/*
 * Gabe Dunn 2020
 * Command aggregator file
 */

import { about } from './about'
import { ping } from './ping'
import { CommandInterface } from '../types/interfaces/CommandInterface'
import { stats } from './stats'

export const commands: CommandInterface[] = [about, ping, stats]
