import readline from "node:readline/promises";
import { stdin,stdout } from "node:process";
import {AddTodo,deleteTodo,doneTodo,listAllTodo} from "./services/service"

const RL= readline.createInterface({
    input: stdin,
    output: stdout
})

const main= async ():Promise<void>=>{
    console.log("\nToDo Platform\n");
    console.log("1.Add ToDo");
    console.log("2.List All ToDo");
    console.log("3.Done ToDo");
    console.log("4.Delete ToDo");
    console.log("5.Exit\n");
    try {
        const choice= await RL.question("Select a Choice\n");
        switch(choice){
            case "1":
                const title =await RL.question("Add a Title\n");
                const Added =await AddTodo(title);
                if(Added){
                    console.log("Add ToDo Successfully")
                }
                break;
            case "2":
                const ToDoList = await listAllTodo();
                for(const item of ToDoList){
                    console.log(`ID: ${item.id}  TITLE: ${item.title}  COMPLETED: ${item.completed? "Done":"Not Completed"}  CREAT DATE: ${item.createdAt}`)
                }
                break; 
            case "3":
                const id=await RL.question("Select The ID\n");
                const isDone= await doneTodo(Number(id));
                if (isDone){
                    console.log('ToDo Completed Success')
                }
                break; 
            case "4":
                const deleteID =await RL.question("Select The ID\n");
                const isDeleted = await deleteTodo(Number(deleteID));
                if(isDeleted){
                    console.log("Delet ToDo is Success");
                }

                break;  
            case "5":
               console.log("Good Bye :)");
               RL.close();

            return
            default:
                console.log("invalid choice pleas select again");
        }
        await main()
    } catch (error) {
        console.log(error);
    }
}

main()
