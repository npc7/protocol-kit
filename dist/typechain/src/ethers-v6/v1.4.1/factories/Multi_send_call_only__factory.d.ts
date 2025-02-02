import { type ContractRunner } from "ethers";
import type { Multi_send_call_only, Multi_send_call_onlyInterface } from "../Multi_send_call_only";
export declare class Multi_send_call_only__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "transactions";
            readonly type: "bytes";
        }];
        readonly name: "multiSend";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): Multi_send_call_onlyInterface;
    static connect(address: string, runner?: ContractRunner | null): Multi_send_call_only;
}
