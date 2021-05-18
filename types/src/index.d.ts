declare class Kit {
    jsonRpcApiUrl: string;
    provider: any;
    constructor(jsonRpcApiUrl?: any);
    getBlockNumber(): any;
    onceBlock: (blockNumberHandler: Function) => any;
}
declare const getBlockNumber: () => any;
export { getBlockNumber, Kit };
//# sourceMappingURL=index.d.ts.map