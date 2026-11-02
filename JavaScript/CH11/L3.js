//Map vs. Object

function fixUserMap(brokenMap) {
  const newMap = new Map();
  for (const [key, user] of brokenMap) {
    const key2 = `${key.fname} ${key.lname}`;
    newMap.set(key2, user);
  }
  return newMap;
}

export { fixUserMap };
