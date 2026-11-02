const getMostRecentUser = (usernames) => {
    if (!usernames.length) return null;
    return usernames[usernames.length - 1];
        
    
  };
  
  export { getMostRecentUser };
  