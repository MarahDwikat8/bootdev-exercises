function printURLParts(urlString: string): void {
  const urlObj = new URL(urlString);
    console.log(`
    protocol: ${urlObj.protocol}
    username: ${urlObj.username}
    password:  ${urlObj.password}
    hostname:  ${urlObj.hostname}
    port:  ${urlObj.port}
    pathname:  ${urlObj.pathname}
    search:  ${urlObj.search}
    hash:  ${urlObj.hash}`);
}

// don't touch below this line

const jelloURL =
  "http://waynelagner:pwn3d@jello.app:8080/boards?sort=createdAt#id";
printURLParts(jelloURL);
