/**
 * import function setChatUser and returnChatMessage
 * with from named export
 */
import { setChatUser, returnChatMessage } from "./modules-exports";

/**
 * import all from named export.
 * Store included functions in object
 */
import * as userFunctions from "./modules-exports";

/**
 * import class from default export
 */
import ChatUser from "./modules-exports";

/**
 * call the functions from the named export
 */
userFunctions.setChatUser();
userFunctions.returnChatMessage();

/**
 * create instance of class from default export
 * @type {ChatUser}
 */
let user = new ChatUser("Ann");