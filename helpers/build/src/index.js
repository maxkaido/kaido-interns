"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kit = exports.getBlockNumber = void 0;
const ethers_1 = require("ethers");
class Kit {
    constructor(jsonRpcApiUrl) {
        this.jsonRpcApiUrl = "https://cloudflare-eth.com";
        this.onceBlock = (blockNumberHandler) => {
            return this.provider.once("block", blockNumberHandler);
        };
        this.jsonRpcApiUrl = this.jsonRpcApiUrl || jsonRpcApiUrl;
        this.provider = ethers_1.ethers.getDefaultProvider(this.jsonRpcApiUrl);
    }
    getBlockNumber() {
        return this.provider.getBlockNumber();
    }
}
exports.Kit = Kit;
const getBlockNumber = () => {
    return new Kit().getBlockNumber();
};
exports.getBlockNumber = getBlockNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWdDO0FBRWhDLE1BQU0sR0FBRztJQUdQLFlBQVksYUFBbUI7UUFGL0Isa0JBQWEsR0FBVyw0QkFBNEIsQ0FBQztRQVVyRCxjQUFTLEdBQUcsQ0FBQyxrQkFBNEIsRUFBRSxFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO1FBVEEsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEMsQ0FBQztDQUtGO0FBTXdCLGtCQUFHO0FBSjVCLE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRTtJQUMxQixPQUFPLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRU8sd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmNsYXNzIEtpdCB7XG4gIGpzb25ScGNBcGlVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9jbG91ZGZsYXJlLWV0aC5jb21cIjtcbiAgcHJvdmlkZXI6IGFueTtcbiAgY29uc3RydWN0b3IoanNvblJwY0FwaVVybD86IGFueSkge1xuICAgIHRoaXMuanNvblJwY0FwaVVybCA9IHRoaXMuanNvblJwY0FwaVVybCB8fCBqc29uUnBjQXBpVXJsO1xuICAgIHRoaXMucHJvdmlkZXIgPSBldGhlcnMuZ2V0RGVmYXVsdFByb3ZpZGVyKHRoaXMuanNvblJwY0FwaVVybCk7XG4gIH1cbiAgZ2V0QmxvY2tOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIuZ2V0QmxvY2tOdW1iZXIoKTtcbiAgfVxuXG4gIG9uY2VCbG9jayA9IChibG9ja051bWJlckhhbmRsZXI6IEZ1bmN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIub25jZShcImJsb2NrXCIsIGJsb2NrTnVtYmVySGFuZGxlcik7XG4gIH07XG59XG5cbmNvbnN0IGdldEJsb2NrTnVtYmVyID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IEtpdCgpLmdldEJsb2NrTnVtYmVyKCk7XG59O1xuXG5leHBvcnQgeyBnZXRCbG9ja051bWJlciwgS2l0IH07XG4iXX0=