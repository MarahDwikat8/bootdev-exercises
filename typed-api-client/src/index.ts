import {ApiClient} from "./api/api-client.js";
import type {WhetherRespons} from  "./models/type.models.js";
import {validationData} from "./models/type.models.js";

const client = new ApiClient({
    timeout:5000,
    retries:3,
    backoff:500,
    cachTtl :60_000
})

async function main():Promise<void>{
    try {
        const networkData = await client.get<WhetherRespons>(
        'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m',
         validationData    
        )
        
        console.log('Network', networkData)

         const cachData = await client.get<WhetherRespons>(
        'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m',
         validationData    
        )
        console.log('Cach', cachData)



        
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.name, error.message)
        }
    }
}
main()