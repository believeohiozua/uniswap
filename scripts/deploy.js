async function main() {
    const Uniswap = await ethers.getContractFactory("Uniswap");
 
    // Start deployment, returning a promise that resolves to a contract object
    const uniswap = await Uniswap.deploy("0x1935990DE79Ab04CB057D606D4a62cccb2af6879");   
    console.log("Contract deployed to address:", uniswap.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });