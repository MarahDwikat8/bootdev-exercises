//Union Types
/*
Type Narrowing
if(typeof value === "type")
*/

export function getTicketInfo(id: string | number) {
  // ?
  if(typeof id ==="string"){
    const part =id.split("-")
    return `Processing ticket: ${part[1]}`;
  }
  return `Processing ticket: ${id}`;
}
