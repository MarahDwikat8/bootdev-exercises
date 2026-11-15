import {HttpError,NetworkError,ResponseParseError,TimeoutError} from "../error/error.js"
import{CachMemory} from "../utils/cache.js"



interface apiOption {
    retries?:number,
    backoff?:number,
    timeout?:number,
    cachTtl?:number 
}


export class ApiClient{
    private readonly retries:number;
    private readonly backoff:number;
    private readonly timeout:number;

    private readonly cach:CachMemory<unknown>;
    
    constructor(option:apiOption = {}){
        this.retries = option.retries ?? 3;
        this.backoff = option.backoff ?? 500 ;
        this.timeout = option.timeout ?? 5000 ;
        this.cach = new CachMemory(option.cachTtl ?? 60_000) ;
    }
    async get<T>(url:string, ValidationData : (data:unknown) => T):Promise<T>{
        const cachData =this.cach.get(url);  
        if(cachData !== undefined){
            return cachData as T;
        }
        const data  =await this.request<T>(url,ValidationData) ;
        this.cach.set(url,data);

        return data

    }

   private async request <T>(
        url:string ,
        ValidationData : (data:unknown) => T
    ):Promise<T>{
      for (let i=0;i<=this.retries;i++){
          try {

            const controller = new AbortController()      
            const timeoutID =setTimeout(()=>controller.abort(),this.timeout)

            let respons :Response;

            try {
                respons = await fetch(url,{
                    signal: controller.signal
                })
                
            } catch (error) {
                if(controller.signal.aborted) throw new TimeoutError("TimeOut Request  Error");
                
                throw new NetworkError(error instanceof Error ? error.message :"NetWork Request Error") 
            }
            finally{
                clearTimeout(timeoutID)
            }
               //HttpError
            if(!respons.ok){
                const retryable = respons.status===429|| respons.status >= 500;
                if(retryable){
                    throw new HttpError(`retryable http error :${respons.status}`,respons.status);
                }
                throw new HttpError(`http error :${respons.status}`,respons.status)
            }
             


            let data :unknown 
            
            try {

                data =await respons.json();
                

            } catch (error) {
                throw new ResponseParseError(" Invalid Json data");
                
            }

            try {
                return ValidationData(data);
            } catch (error) {
               if (error instanceof ResponseParseError) {
                  throw error;
                }
    
                throw new ResponseParseError(
                  error instanceof Error
                    ? error.message
                    : "Invalid response data"
                );
            }
            
          } catch (error) {
            const retryable = error instanceof NetworkError || 
            error instanceof TimeoutError ||
            (
                error instanceof HttpError && (error.status===429 || error.status>= 500)
            )
            if (!retryable || i === this.retries){
                throw error 
            }
            const delay = this.backoff*Math.pow(2,i);
            await new Promise<void>((resolve)=>{
                setTimeout(resolve,delay);
            });
          }
        }  
        throw new Error ("Request failed after all retries");

    }
    
}