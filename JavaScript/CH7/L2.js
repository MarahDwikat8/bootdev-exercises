//Break
function maxMessagesWithinBudget(budget) {
  let totalCost = 0;
  let count = 0;
  for (let i = 0; ; i++) {
    const cost = 1.0 + i * 0.01;

    if (totalCost + cost > budget) {
      break;
    }
    totalCost += cost;
  }
  return count;
}

export { maxMessagesWithinBudget };
