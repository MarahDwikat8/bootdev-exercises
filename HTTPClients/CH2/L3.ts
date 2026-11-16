function getDomainNameFromURL(url: string): string {
   const hostName = new URL(url);
   console.log(hostName)
   return hostName.hostname;
}
getDomainNameFromURL("https://www.boot.dev/lessons/ed35749d-6ac5-4426-879f-c3dbc87a20ce")
// don't touch below this line

export { getDomainNameFromURL };
