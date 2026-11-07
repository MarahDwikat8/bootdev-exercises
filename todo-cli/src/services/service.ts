import type {Todo} from "../models/todoType.model";
import {readFromJsonFile,writeToJsonFile} from "../utils/storage";

export const listAllTodo = async () :Promise<Todo[]>=>{   
    return await readFromJsonFile();
}

const nextID= (todo:Todo[]) :Number =>{
    return todo.length===0 ? 1 : Math.max(...todo.map(item=>item.id)) + 1
}
export const AddTodo = async(title:string):Promise<boolean> =>{
    try { 
        if (title.trim().length===0){
            console.log("The Title is Empty");
            return false;
        }
        const todoData= await listAllTodo();
        const newData:Todo ={
            id : Number(nextID(todoData)),
            title: title.trim(),
            completed: false,
            createdAt: new Date()
        }
        todoData.push(newData);
        await writeToJsonFile(todoData);
        return true;
        
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const doneTodo = async (id : number) : Promise<boolean> => {
    try {
        if (id < 0) {
            throw new Error('Invalid ID Select a Positive ID')
        }
        const toData =await listAllTodo();
        const toDoItem= toData.find((item)=> item.id===id);
        if(!toDoItem){
            console.log("The Item Not Found");
            return false;
        }
        toDoItem.completed=true;
        await writeToJsonFile(toData);
        return true;

    } catch (error) {
        console.log(error);
        return false;
    }

}
export const deleteTodo =async(id :number) : Promise<boolean>=>{

    try {
        if (id < 0) {
            throw new Error('Invalid ID Select a Positive ID')
        }
        const toData= await listAllTodo();
        const newTodoData= toData.filter((item)=> item.id!==id)
        if(toData.length===newTodoData.length){
            console.log("The item not found");
            return false;
        }
        await writeToJsonFile(newTodoData);
        return true;
        
    } catch (error) {
        console.log(error);
        return false;
    }

}

