# cowellereum-coin

Install: npm install --save crypto-js

Methods used: 
computeHash()
startGenesisBlock()
obtainLatestBlock()
addNewBlock()
checkChainValidity()
proofOfWork()

Step 1: Creating the Block

require in  crypto-js/sha256 module. this will allow me to calculate the hash of each block. 

* I create a cryptoBlock class and assign an:
* Index - a unique bumber to track the postition of each block in the chain
* Timestamp - to keep a record of eachtransaction
* Data - this will include details of completed transactions such as sender/reciever details and amount sent/recived. 
* Preceding hash - it will connect to the preceding block in the chain. This is vital for a blockchain

Step 2: Create the Blockchain

I created a blockchain propery, then passed it into startGenesisBlock(). This creates Block 0.

I then created block 0 (or the genesis block) and had to hard code the initial index.

Using the obtainLatestBlock() method, i made sure the current block connects back to the preceding block. 

With the addNewBlock() method, I add a new block to the chain. 
I set the previous hash, to ewual the has of the previous block. 
I compute a new hash - once this is done, i push the new block into the array.

To test if it works i ran an instance of CryptoBlockchain, and added in data.
line 59 there is a commented out console log to see it work in the terminal. 

it shows each block referencing the previous block hash. 


Checking Validity 
A key feature of blockchain is that it cannot be changed without invalidating the rest of the chain. 

To check the integrity is intact, we can use the checkChainValidity() method. 

Proof of work

In my cryptoBlock class, i have added a proofOfWork method. Depending on the difficulty level, this will stop miners from making new blocks so easily. 



To run, make sure you have installed - npm install --save crypto-js - 
and run the command node index.js in terminal. 

You will first get a message telling you Cowellereum is mining. 

then an array of objects, displaying the blockchain. 






