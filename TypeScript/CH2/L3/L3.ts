//Void
/*In JavaScript, a function without a return
 statement returns undefined by default...
 but that's kinda vague. TypeScript uses the
 void keyword 
to indicate that truly nothing is returned 

function logMessage(message: string): void {
    console.log(message);
}

const result = logMessage("Hello");

console.log(result); // undefined

*/
// export function logSystemEvent(event: string, 
//   severity: "info" | "warning" | "error"
// ): void {
//   console.log(`SYSTEM ${severity.toUpperCase()}: ${event}`);
// }


export function logSystemEvent(event: string, severity: "info" | "warning" | "error") {
  return`SYSTEM ${severity.toUpperCase()}: ${event}`;
}
