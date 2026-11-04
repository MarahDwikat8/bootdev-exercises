//Inferred Return Types
// اذا كانت كل القيم متوحده 
// ممكن نستغني عن تحديد الريتيرن 
// او اذا ما بدنا احنا نحدده 
export function combinePrompts(systemPrompt:string, userPrompt:string ) {
  // ?
  return `${systemPrompt}\n${userPrompt}`;
}
