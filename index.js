const SHA256 = require("crypto-js/sha256");

class CryptoBlock {
  constructor(index, timestamp, data, precedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
  }

  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}

class CryptoBlockChain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    // console.log(this.blockchain)
  }
  startGenesisBlock() {
    return new CryptoBlock(0, "01/01/2021", "Block 0", "0");
  }
  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.blockchain.push(newBlock);
  }
}

let Cowellereum = new CryptoBlockChain();

Cowellereum.addNewBlock(
  new CryptoBlock(1, "01/01/2021", {
    sender: "Alan Turing",
    recipient: "Frodo Baggins",
    quantity: 30,
  })
);

Cowellereum.addNewBlock(
  new CryptoBlock(2, "01/02/2021", {
    sender: "Gandalf White",
    recipient: " Albus DUmbledore",
    quantity: 123,
  })
);

//console.log(JSON.stringify(Cowellereum, null, 4));
