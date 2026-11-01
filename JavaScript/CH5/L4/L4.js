//Getters and Setters
class User {
  constructor(name, username) {
    this.name = name;
    this._username = username;
  }

  set username(value) {
    if (!value.length) {
      throw new Error("Error username cant be empty ");
    }
    this._username = value.lowercase();
  }
  get username() {
    return `@${this._username}`;
  }
}

// don't touch below this line

export { User };
