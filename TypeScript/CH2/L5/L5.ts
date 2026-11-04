//Type Alias


// ?
export type  SupportResponse=(name:string)=>string;



export const greetCustomer: SupportResponse = (name) => {
  return `Hello ${name}, welcome to Support.ai! How can I assist you today?`;
};

export const farewellCustomer: SupportResponse = (name) => {
  return `Goodbye ${name}, have a great day!`;
};