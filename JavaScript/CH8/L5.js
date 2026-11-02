const getCleanMessages = (messages, badWord) => {
  const cleanMessages = [];
  for (let message of messages) {
    if (!message.includes(badWord)) {
      cleanMessages.push(message);
    }
  }
  return cleanMessages;
};

export { getCleanMessages };
