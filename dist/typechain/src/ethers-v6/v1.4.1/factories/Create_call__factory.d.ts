import { type ContractRunner } from "ethers";
import type { Create_call, Create_callInterface } from "../Create_call";
export declare class Create_call__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly name: "ContractCreation";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "deploymentData";
            readonly type: "bytes";
        }];
        readonly name: "performCreate";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "deploymentData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "performCreate2";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): Create_callInterface;
    static connect(address: string, runner?: ContractRunner | null): Create_call;
}
