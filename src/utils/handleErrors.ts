/*
 * Gabe Dunn 2020
 * Functions that handle all our errors
 */

import { DevmodError } from '../types/errors/DevmodError'
import { logErrorToChannel } from './log'
import { ConfigInterface } from '../types/interfaces/ConfigInterface'
import { SubmodulesInterface } from '../types/interfaces/SubmodulesInterface'
import { InvalidTokenError } from '../types/errors/InvalidTokenError'
import { BotMissingPermissionsError } from '../types/errors/BotMissingPermissionsError'

export const handleErrors = async (
    e: DevmodError,
    config: ConfigInterface,
    sub: SubmodulesInterface
): Promise<void> => {
    // noinspection FallThroughInSwitchStatementJS
    switch (e.name) {
        case 'NullGuildError':
        case 'NullChannelError':
        case 'NullRoleError':
            await logErrorToChannel(e, config, sub)
            process.exit(1)
        case 'Error [TOKEN_INVALID]':
            await logErrorToChannel(
                new InvalidTokenError('Init', e.message),
                config,
                sub
            )
            process.exit(1)
        case 'Error [DiscordAPIError]':
            if (e.message === 'Missing Permissions') {
                await logErrorToChannel(
                    new BotMissingPermissionsError(
                        'Error',
                        "devmod doesn't have sufficient permissions"
                    ),
                    config,
                    sub
                )
            }
        default:
            await logErrorToChannel(e, config, sub)
            break
    }
}
