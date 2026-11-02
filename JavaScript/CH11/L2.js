//Map Keys
function createUserMap(users) {
  const newMap = new Map();
  for (const user of users) {
    const key = `${user.fname} ${user.lname};`;
    newMap.set(key, user);
  }
  return newMap;
}

export { createUserMap };
