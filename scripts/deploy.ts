import { ethers } from "hardhat";

async function main() {
  const [addr] = await ethers.getSigners();
  const nftContract = await ethers.deployContract("KittyNFT");
  await nftContract.waitForDeployment();

  console.log(`------ Token deployed to ${nftContract.target} ------`);

  await nftContract.gift(addr.address);
  await nftContract.gift("0x5CB700c9Dc5771Ff57f44858E66007EC722976da");
  await nftContract.gift("0x20FeA4Aa1552fE46893cDB5b4B4c365c4114a378");
  await nftContract.gift("0x3C5E0d51B3E5a09981bD070Fc7d1D4ABfD0f076C");

  const ownerOfZero = await nftContract.ownerOf(1);

  console.log(`--- Owner of Zero is ${ownerOfZero}`);

  const uri1 = await nftContract.tokenURI(1);

  console.log({ uri1 });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
