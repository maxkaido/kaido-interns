import { ethers } from "ethers";

class Kit {
  jsonRpcApiUrl: string = "https://cloudflare-eth.com";
  provider: any;
  constructor(jsonRpcApiUrl?: any) {
    this.jsonRpcApiUrl = this.jsonRpcApiUrl || jsonRpcApiUrl;
    this.provider = ethers.getDefaultProvider(this.jsonRpcApiUrl);
  }
  getBlockNumber() {
    return this.provider.getBlockNumber();
  }

  onceBlock = (blockNumberHandler: Function) => {
    return this.provider.once("block", blockNumberHandler);
  };
}

const getBlockNumber = () => {
  return new Kit().getBlockNumber();
};

export { getBlockNumber, Kit };
