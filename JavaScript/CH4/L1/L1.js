function createMessage(phoneNumber, message) {
  const newMessage = {
    phoneNumber: phoneNumber,
    message: message,
    messageLength: message.length,
  };
  return newMessage;
}

export { createMessage };
