//Maps
/*
const var = new Map<K, V>();
.size
for iteration
for (const [racer, speed] of podracerSpeeds) {
  console.log(`${racer} raced at ${speed} speed`);
}
  Here's the most important methods of a map, get, delete, and has.
*/
export function getFileLength(files: Map<string, string>, filename: string) {
 
 
    if (!files.has(filename)){
    return 0
 }
 return new TextEncoder().encode(files.get(filename)!).length;
 
 
 
  
}
/*
يعني اول اشي بجيب القيمه الي مرتبطه بالكي 
بعدين بعملها كودينج بحولها لارري 
بعدين بحوله من بايت ل يو تي 8

بعدين بجيب عددهاالبايت  

*/