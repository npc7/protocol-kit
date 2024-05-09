"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../../adapters/web3/utils");
class SafeProxyFactoryWeb3Contract {
    constructor(contract) {
        this.contract = contract;
    }
    getAddress() {
        return Promise.resolve(this.contract.options.address);
    }
    async proxyCreationCode() {
        return this.contract.methods.proxyCreationCode().call();
    }
    async createProxy({ safeSingletonAddress, initializer, saltNonce, options, callback }) {
        if (BigInt(saltNonce) < 0)
            throw new Error('saltNonce must be greater than or equal to 0');
        if (options && !options.gas) {
            options.gas = await this.estimateGas('createProxyWithNonce', [safeSingletonAddress, initializer, saltNonce], {
                ...options
            });
        }
        const txResponse = this.contract.methods
            .createProxyWithNonce(safeSingletonAddress, initializer, saltNonce)
            .send(options);
        if (callback) {
            const txResult = await (0, utils_1.toTxResult)(txResponse);
            callback(txResult.hash);
        }
        const txResult = await new Promise((resolve, reject) => txResponse.once('receipt', (receipt) => resolve(receipt)).catch(reject));
        const proxyAddress = txResult.events?.ProxyCreation?.returnValues?.proxy;
        if (!proxyAddress) {
            throw new Error('SafeProxy was not deployed correctly');
        }
        return proxyAddress;
    }
    encode(methodName, params) {
        return this.contract.methods[methodName](...params).encodeABI();
    }
    async estimateGas(methodName, params, options) {
        return (await this.contract.methods[methodName](...params).estimateGas(options)).toString();
    }
}
exports.default = SafeProxyFactoryWeb3Contract;
//# sourceMappingURL=SafeProxyFactoryWeb3Contract.js.map