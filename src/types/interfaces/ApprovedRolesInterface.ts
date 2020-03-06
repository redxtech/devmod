/*
 * Gabe Dunn 2020
 * Interface file for approved roles
 */

import { ApprovedRoleInterface } from './ApprovedRoleInterface'

export interface ApprovedRolesInterface {
    id: string
    name: string
    message: string
    roles: ApprovedRoleInterface[]
}
