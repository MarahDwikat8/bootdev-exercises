//Object Literal Types

/*
Object literal types allow you to describe 
the shape of an object:
*/
// ?

import type {Mail} from "./utils";

export function processMail(mail: Mail) {
return `FROM: ${mail.from}
TO: ${mail.to}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}
