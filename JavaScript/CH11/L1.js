//Maps
function addToPhonebook(phoneNumber, name, phoneBook) {
  const copyMap = new Map(phoneBook);
  copyMap.set(phoneNumber, name);
  return copyMap;
}
// don't touch below this line
export { addToPhonebook };
