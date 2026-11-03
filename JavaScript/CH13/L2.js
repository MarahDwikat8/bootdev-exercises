//Non Blocking
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// don't touch below this line

export { sleep };
