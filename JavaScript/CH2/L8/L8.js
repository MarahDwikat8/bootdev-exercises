//Nullish Coalescing
/*If the value on the left of ?? is null or undefined, the value on the right is returned. Otherwise, the value on the left is returned. It's a way to set sane defaults for variables that might be empty.*/
const name = "James Holden";
const provider = "AT&T";
const phoneNumber = "555-123-4567";
const subscriptionType = null;

// don't touch above this line

console.log(
  `Creating ${subscriptionType ?? "Guest"} Profile for ${name} with ${provider} at ${phoneNumber}.`,
);
