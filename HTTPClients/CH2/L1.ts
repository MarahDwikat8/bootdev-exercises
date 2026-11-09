async function fetchIPAddress(domain: string): Promise<string | null> {
  const resp = await fetch(
    `https://1.1.1.1/dns-query?name=${domain}&type=A`,
    {
      headers: {
        accept: "application/dns-json",
      },
    },
  );
  const respObject = await resp.json();
  
  
  if(respObject.Answer && respObject.Answer.length){
    return respObject.Answer[0].data;
  }
  return null;}


// don't touch below this line

export { fetchIPAddress };
