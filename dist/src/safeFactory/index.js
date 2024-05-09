"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _SafeFactory_contractNetworks, _SafeFactory_isL1SafeSingleton, _SafeFactory_safeVersion, _SafeFactory_ethAdapter, _SafeFactory_safeProxyFactoryContract, _SafeFactory_safeContract;
Object.defineProperty(exports, "__esModule", { value: true });
const Safe_1 = __importDefault(require("../Safe"));
const config_1 = require("../contracts/config");
const safeDeploymentContracts_1 = require("../contracts/safeDeploymentContracts");
const utils_1 = require("../contracts/utils");
class SafeFactory {
    constructor() {
        _SafeFactory_contractNetworks.set(this, void 0);
        _SafeFactory_isL1SafeSingleton.set(this, void 0);
        _SafeFactory_safeVersion.set(this, void 0);
        _SafeFactory_ethAdapter.set(this, void 0);
        _SafeFactory_safeProxyFactoryContract.set(this, void 0);
        _SafeFactory_safeContract.set(this, void 0);
    }
    static async create({ ethAdapter, safeVersion = config_1.DEFAULT_SAFE_VERSION, isL1SafeSingleton = false, contractNetworks }) {
        const safeFactorySdk = new SafeFactory();
        await safeFactorySdk.init({ ethAdapter, safeVersion, isL1SafeSingleton, contractNetworks });
        return safeFactorySdk;
    }
    async init({ ethAdapter, safeVersion, isL1SafeSingleton, contractNetworks }) {
        __classPrivateFieldSet(this, _SafeFactory_ethAdapter, ethAdapter, "f");
        __classPrivateFieldSet(this, _SafeFactory_safeVersion, safeVersion, "f");
        __classPrivateFieldSet(this, _SafeFactory_isL1SafeSingleton, isL1SafeSingleton, "f");
        __classPrivateFieldSet(this, _SafeFactory_contractNetworks, contractNetworks, "f");
        const chainId = await __classPrivateFieldGet(this, _SafeFactory_ethAdapter, "f").getChainId();
        const customContracts = contractNetworks?.[chainId.toString()];
        __classPrivateFieldSet(this, _SafeFactory_safeProxyFactoryContract, await (0, safeDeploymentContracts_1.getProxyFactoryContract)({
            ethAdapter,
            safeVersion,
            customContracts
        }), "f");
        __classPrivateFieldSet(this, _SafeFactory_safeContract, await (0, safeDeploymentContracts_1.getSafeContract)({
            ethAdapter,
            safeVersion,
            isL1SafeSingleton,
            customContracts
        }), "f");
    }
    getEthAdapter() {
        return __classPrivateFieldGet(this, _SafeFactory_ethAdapter, "f");
    }
    getSafeVersion() {
        return __classPrivateFieldGet(this, _SafeFactory_safeVersion, "f");
    }
    getAddress() {
        return __classPrivateFieldGet(this, _SafeFactory_safeProxyFactoryContract, "f").getAddress();
    }
    async getChainId() {
        return __classPrivateFieldGet(this, _SafeFactory_ethAdapter, "f").getChainId();
    }
    async predictSafeAddress(safeAccountConfig, saltNonce) {
        const chainId = await __classPrivateFieldGet(this, _SafeFactory_ethAdapter, "f").getChainId();
        const customContracts = __classPrivateFieldGet(this, _SafeFactory_contractNetworks, "f")?.[chainId.toString()];
        const safeVersion = __classPrivateFieldGet(this, _SafeFactory_safeVersion, "f");
        const safeDeploymentConfig = {
            saltNonce: saltNonce || (0, utils_1.getChainSpecificDefaultSaltNonce)(chainId),
            safeVersion
        };
        return (0, utils_1.predictSafeAddress)({
            ethAdapter: __classPrivateFieldGet(this, _SafeFactory_ethAdapter, "f"),
            chainId,
            safeAccountConfig,
            safeDeploymentConfig,
            isL1SafeSingleton: __classPrivateFieldGet(this, _SafeFactory_isL1SafeSingleton, "f"),
            customContracts
        });
    }
    async deploySafe({ safeAccountConfig, saltNonce, options, callback }) {
        (0, utils_1.validateSafeAccountConfig)(safeAccountConfig);
        (0, utils_1.validateSafeDeploymentConfig)({ saltNonce });
        const signerAddress = await __classPrivateFieldGet(this, _SafeFactory_ethAdapter, "f").getSignerAddress();
        if (!signerAddress) {
            throw new Error('EthAdapter must be initialized with a signer to use this method');
        }
        const chainId = await this.getChainId();
        const customContracts = __classPrivateFieldGet(this, _SafeFactory_contractNetworks, "f")?.[chainId.toString()];
        const initializer = await (0, utils_1.encodeSetupCallData)({
            ethAdapter: __classPrivateFieldGet(this, _SafeFactory_ethAdapter, "f"),
            safeAccountConfig,
            safeContract: __classPrivateFieldGet(this, _SafeFactory_safeContract, "f"),
            customContracts
        });
        if (options?.gas && options?.gasLimit) {
            throw new Error('Cannot specify gas and gasLimit together in transaction options');
        }
        const safeAddress = await __classPrivateFieldGet(this, _SafeFactory_safeProxyFactoryContract, "f").createProxy({
            safeSingletonAddress: await __classPrivateFieldGet(this, _SafeFactory_safeContract, "f").getAddress(),
            initializer,
            saltNonce: saltNonce || (0, utils_1.getChainSpecificDefaultSaltNonce)(chainId),
            options: {
                from: signerAddress,
                ...options
            },
            callback
        });
        const isContractDeployed = await __classPrivateFieldGet(this, _SafeFactory_ethAdapter, "f").isContractDeployed(safeAddress);
        if (!isContractDeployed) {
            throw new Error('SafeProxy contract is not deployed on the current network');
        }
        const safe = await Safe_1.default.create({
            ethAdapter: __classPrivateFieldGet(this, _SafeFactory_ethAdapter, "f"),
            safeAddress,
            isL1SafeSingleton: __classPrivateFieldGet(this, _SafeFactory_isL1SafeSingleton, "f"),
            contractNetworks: __classPrivateFieldGet(this, _SafeFactory_contractNetworks, "f")
        });
        return safe;
    }
}
_SafeFactory_contractNetworks = new WeakMap(), _SafeFactory_isL1SafeSingleton = new WeakMap(), _SafeFactory_safeVersion = new WeakMap(), _SafeFactory_ethAdapter = new WeakMap(), _SafeFactory_safeProxyFactoryContract = new WeakMap(), _SafeFactory_safeContract = new WeakMap();
exports.default = SafeFactory;
//# sourceMappingURL=index.js.map