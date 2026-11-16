export interface WhetherRespons{
   current :{
    time:string,
    temperature_2m:number,
    wind_speed_10m:number
   },
   hourly:{
    time: Array<string>,
    temperature_2m:Array<number>,
    wind_speed_10m:Array<number>,
    relative_humidity_2m:Array<number>
   }

}

export function validationData(data:unknown):WhetherRespons{

    const {current,hourly}= data as WhetherRespons;
    if (!current || !hourly){
        throw new Error ("Invalid response data");
    }
    if(typeof current!=="object"||current===null||typeof hourly!=="object"||hourly===null||
       !("time" in current)||!("temperature_2m" in current) ||!("wind_speed_10m" in current)
       || !("time" in hourly) || !("temperature_2m" in hourly) || !("wind_speed_10m" in hourly) || !("relative_humidity_2m" in hourly)
     ){
          throw new Error("Invalid response data ")
    }

   
  if (typeof current.time !== "string" || typeof current.temperature_2m !== "number" || 
        typeof current.wind_speed_10m !== "number" || !Array.isArray(hourly.time) || 
        !Array.isArray(hourly.temperature_2m) || !Array.isArray(hourly.wind_speed_10m) || !Array.isArray(hourly.relative_humidity_2m)
    ) {
        throw new Error("Invalid response data ")

    }

    return{
        current:{
            time:current.time,
            temperature_2m:current.temperature_2m,
            wind_speed_10m:current.wind_speed_10m,


        },
        hourly:{
            time: hourly.time,
            temperature_2m:hourly.temperature_2m,
            wind_speed_10m:hourly.wind_speed_10m,
            relative_humidity_2m:hourly.relative_humidity_2m
        }
    }
}