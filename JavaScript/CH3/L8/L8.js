//Default Parameters
function createContact(
  phoneNumber,
  name = "Anonymous",
  avatar = "default.jpg",
) {
  if (phoneNumber === undefined) {
    return "Invalid phone number";
  }
  let str = "/public/pictures/" + avatar;
  return `Contact saved! Name: ${name}, Phone number: ${phoneNumber}, Avatar: ${str}`;
}

// don't touch below this line
// console.log(createContact());
// console.log(createContact(0));
// console.log(createContact(0, "marah"));
// console.log(createContact(0, "marah", "boot.jpg"));
export { createContact };
