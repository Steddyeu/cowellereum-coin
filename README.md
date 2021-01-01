# cowellereum-coin

Install: npm install --save crypto-js
 
Step 1: Creating the Block

require in  crypto-js/sha256 module. this will allow me to calculate the hash of each block. 

* I create a cryptoBlock class and assign an:
* Index - a unique bumber to track the postition of each block in the chain
* Timestamp - to keep a record of eachtransaction
* Data - this will include details of completed transactions such as sender/reciever details and amount sent/recived. 
* Preceding hash - it will connect to the preceding block in the chain. This is vital for a blockchain

Step 2: Create the Blockchain

I created a block chain propery, then passed it into startGenesisBlock(). This creates Block 0





