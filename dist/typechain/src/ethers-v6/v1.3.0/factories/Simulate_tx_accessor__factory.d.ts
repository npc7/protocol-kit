import { type ContractRunner } from "ethers";
import type { Simulate_tx_accessor, Simulate_tx_accessorInterface } from "../Simulate_tx_accessor";
export declare class Simulate_tx_accessor__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "enum Enum.Operation";
            readonly name: "operation";
            readonly type: "uint8";
        }];
        readonly name: "simulate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "estimate";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "returnData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): Simulate_tx_accessorInterface;
    static connect(address: string, runner?: ContractRunner | null): Simulate_tx_accessor;
}
