import { UserConfigInterface } from './src/types/interfaces/UserConfigInterface'

export default <UserConfigInterface>{
    token: '',
    guildID: '',
    prefix: '.',
    compactMessages: false,
    messageTTL: 45,
    dbFile: '',
    autoBan: true,
    autoBanThreshold: 3,
    repTriggers: [],
    repEmote: '',
    activities: ['Serving NaN users!'],
    tags: {},
    approvedRoles: [],
    channelIDs: {
        warn: '',
        ban: '',
        reports: '',
        assignRoles: '',
        info: '',
        errors: ''
    },
    roleIDs: {
        muted: '',
        verified: '',
        staff: '',
        senior: '',
        mvp: ''
    }
}
