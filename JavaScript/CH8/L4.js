//Includes array or string 
function getCleanRank(reviewWords) {
    // ?
    let count =0;
    reviewWords.includes("dang") && count++;
    reviewWords.includes("shoot") && count++;
    reviewWords.includes("heck") && count++;
    return count===0 ?"clean" : count ===1 ? "dirty": count >=2 ? "filthy": null;
  }
  
  export { getCleanRank };
  