export type Todo={
   readonly id:number,
    title:string ,
    completed:boolean,
   readonly createdAt:Date
}
//#
export type Command = "add" | "list" | "done" | "delete";