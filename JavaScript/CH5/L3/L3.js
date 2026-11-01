//Static Methods

class Message {
  static totalNum = 0;
  static totalLen = 0;
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    Message.totalNum++;
    Message.totalLen += this.body?.length;
  }
  static getAverageMessageLength() {
    let avg = Message.totalLen / Message.totalNum;

    return Math.round(avg * 100) / 100;
  }
}

// don't touch below this line

export { Message };
