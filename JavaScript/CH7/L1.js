//Loops
function bulkSendCost(numMessages) {
  let total = 0;
  for (let i = 0; i < numMessages; i++) {
    total += 1.0 + i * 0.01;
  }
  return total;
}

export { bulkSendCost };
