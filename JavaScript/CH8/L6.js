//Slicing Arrays
function splitLogs(logs, slug) {
  //
  if (!logs.includes(slug)) {
    return {
      before: [],
      after: [],
      i: -1,
    };
  } else {
    const slugIndex = logs.findIndex(slug);
    return {
      before: logs.slice(0, slugIndex),
      after: logs.slice(slugIndex + 1),
      i: slugIndex,
    };
  }
}

export { splitLogs };
