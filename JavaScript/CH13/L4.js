//Task Queue
function processMessages(messages, batchSize, startIndex = 0) {
  const nextIndex = processBatch(messages, batchSize, startIndex);
  if (nextIndex < messages.length) {
    setTimeout(() => {
      processMessages(messages, batchSize, nextIndex);
    }, 0);
  }
}

// don't touch below this line

function processBatch(messages, batchSize, startIndex) {
  const batch = messages.slice(startIndex, startIndex + batchSize);
  if (batch.length > 0) {
    console.log(`Processed batch: ${batch.join(", ")}`);
  }
  return startIndex + batch.length;
}

console.log("Main thread: starting message processing");
processMessages(
  [
    "you're hired",
    "standup in 5",
    "deploy failed",
    "deploy fixed",
    "pizza's here",
  ],
  3,
);
console.log("Main thread: ready to handle another request");
