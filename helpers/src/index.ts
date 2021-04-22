import { ethers } from "ethers";

const getBlockNumber = () => {
  const provider = ethers.getDefaultProvider("https://eth.kaido.team");
  return provider.getBlockNumber();
};

export { getBlockNumber };
