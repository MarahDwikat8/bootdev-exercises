import {readFile,writeFile,mkdir} from "node:fs/promises";
import type { Todo } from "../models/todoType.model";
import path from "node:path";

export const SRC_DIR = path.join(process.cwd(), "src");
export const DATA_DIR = path.join(SRC_DIR, "data");
export const DATA_FILE = path.join(DATA_DIR, 'todo.json')

const readFromJsonFile = async () : Promise<Todo[]> =>{
    try {
        const data= await readFile(DATA_FILE,"utf8");
        return JSON.parse(data ?? []) as Todo[]
    } catch (error) {
        if((error as NodeJS.ErrnoException).code === 'ENOENT' ){
            console.log("File Not Found");
           await mkdir(DATA_DIR,{
            recursive:true 
           });
           await writeFile(DATA_FILE,JSON.stringify([],null,2),"utf8");
           return []
        }
        throw error
    }
}


const  writeToJsonFile = async (todo:Todo[]): Promise<void> =>{
    try {
        await writeFile(DATA_FILE,JSON.stringify(todo,null,2));
    } catch (error) {
        throw error
    }
}

export {readFromJsonFile,writeToJsonFile} ;