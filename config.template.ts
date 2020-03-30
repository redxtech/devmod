import { UserConfigInterface } from "./src/types/interfaces/UserConfigInterface";

export default {
  token: "",
  guildID: "",
  channelIDs: {
    warn: "",
    ban: "",
    reports: "",
    assignRoles: "",
    info: "",
    errors: ""
  },
  roleIDs: {
    muted: "",
    verified: ""
  }
} as UserConfigInterface;
