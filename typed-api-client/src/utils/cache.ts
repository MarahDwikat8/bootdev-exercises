interface CachItem<T>{
value :T,
expiresAt:number,
}

export class CachMemory <T> {
    private cach :Map<string,CachItem<T>>=new Map();
    constructor(private readonly ttl =60_000){
        
    }
    get(key:string):T|undefined{
        const item = this.cach.get(key);
        if(!item){
            return undefined;
        }
        if(item.expiresAt <Date.now()){
            this.cach.delete(key);
            return undefined;
        }
        return item.value;

    }

    set(key : string, value: T) : void {
        this.cach.set(key, {
            value,
            expiresAt: Date.now() + this.ttl
        })
    }
    delete(key:string):void{
        this.cach.delete(key);
        

    }

    clear():void{
        this.cach.clear();

    }
      
    size():number{
        return this.cach.size;
    }

}