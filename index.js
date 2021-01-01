const SHA256 = require("crypto-js/sha256");

class CryptoBlock {
  constructor(index, timestamp, data, precedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  proofOfWork(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

class CryptoBlockChain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty= 5;
    //console.log(this.blockchain)
  }
  startGenesisBlock() {
    return new CryptoBlock(0, "01/01/2021", "Block 0", "0");
  }
  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    //newBlock.hash = newBlock.computeHash(); 
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
  }

}

// checkChainValidity(){ //find out why it is asking for a ;
//   for (let i = 1; i < this.blockchain.length; i++) {
//     const currentBlock = this.blockchain[i];
//     const precedingBlock = this.blockchain[i - 1];

//     if (currentBlock.hash !== currentBlock.computeHash()) {
//       return false;
//     }
//     if (currentBlock.precedingHash !== precedingBlock.hash) return false;
//   }
//   return true;
// }


let Cowellereum = new CryptoBlockChain();
console.log("Cowellereum mining in process...")
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

console.log(JSON.stringify(Cowellereum, null, 4));
