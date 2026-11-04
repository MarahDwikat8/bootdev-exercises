//Optional Parameters
/*
لما بدي ارسل براميتر للفنكشن ممكن ارسله وممكن ل 
لاز ميكون اخر واحد بعد الاساسيات 

function greet(name: string, title?: string): string {
    return "Hello";
}
name مطلوب.
- title اختياري.

function greet(name: string, title?: string): string {

}
string | undefined
بيكون عباره عن نوعين 
*/


export function calculateApiCost(numReqs: number, tier?: string) {
  // ?
  let cost = 0.1;
  
  if (tier ==="pro"){
    cost=0.05;
  }
  if (tier ==="enterprise"){
    cost=0.05;
  }
   return numReqs *cost;
}
