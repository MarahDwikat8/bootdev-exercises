//String Encoding

let name = "boots";
console.log(`constant 'name' UTF-16 unit length: ${name.length}`);
console.log(`constant 'name' character length: ${[...name].length}`);
console.log("=====================================");
console.log(`Hi ${name}, welcome to Textio!`);

let name2 = "🐻";
console.log(`constant 'name' UTF-16 unit length: ${name2.length}`);
console.log(`constant 'name' character length: ${[...name2].length}`);
console.log("=====================================");
console.log(`Hi ${name2}, welcome to Textio!`);
