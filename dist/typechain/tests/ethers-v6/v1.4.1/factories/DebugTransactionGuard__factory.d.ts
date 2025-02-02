import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { DebugTransactionGuard, DebugTransactionGuardInterface } from "../DebugTransactionGuard";
type DebugTransactionGuardConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DebugTransactionGuard__factory extends ContractFactory {
    constructor(...args: DebugTransactionGuardConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<DebugTransactionGuard & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): DebugTransactionGuard__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610929806100206000396000f3fe608060405234801561001057600080fd5b50600436106100505760003560e01c806301ffc9a71461005357806375f0bb52146100b657806393271368146102be578063ddbdba63146102f857610051565b5b005b61009e6004803603602081101561006957600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061033a565b60405180821515815260200191505060405180910390f35b6102bc60048036036101608110156100cd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561011457600080fd5b82018360208201111561012657600080fd5b8035906020019184600183028401116401000000008311171561014857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803560ff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561021657600080fd5b82018360208201111561022857600080fd5b8035906020019184600183028401116401000000008311171561024a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061040c565b005b6102f6600480360360408110156102d457600080fd5b81019080803590602001909291908035151590602001909291905050506107de565b005b6103246004803603602081101561030e57600080fd5b81019080803590602001909291905050506108db565b6040518082815260200191505060405180910390f35b60007fe6d7a83a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061040557507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600080600033905060018173ffffffffffffffffffffffffffffffffffffffff1663affed0e06040518163ffffffff1660e01b815260040160206040518083038186803b15801561045c57600080fd5b505afa158015610470573d6000803e3d6000fd5b505050506040513d602081101561048657600080fd5b81019080805190602001909291905050500392508073ffffffffffffffffffffffffffffffffffffffff1663d8d11f788f8f8f8f8f8f8f8f8f8d6040518b63ffffffff1660e01b8152600401808b73ffffffffffffffffffffffffffffffffffffffff1681526020018a81526020018060200189600181111561050557fe5b81526020018881526020018781526020018681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182810382528a818151815260200191508051906020019080838360005b83811015610592578082015181840152602081019050610577565b50505050905090810190601f1680156105bf5780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060206040518083038186803b1580156105e557600080fd5b505afa1580156105f9573d6000803e3d6000fd5b505050506040513d602081101561060f57600080fd5b8101908080519060200190929190505050915050803373ffffffffffffffffffffffffffffffffffffffff167fa65fef32cd19a6639a4bf7a6d196f132c151e4f0bbd2706f7f831b3a778e1ac08f8f8f8f8f60008f118a8d8d604051808a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018060200188600181111561069e57fe5b81526020018781526020018615158152602001858152602001806020018473ffffffffffffffffffffffffffffffffffffffff16815260200183810383528a818151815260200191508051906020019080838360005b8381101561070f5780820151818401526020810190506106f4565b50505050905090810190601f16801561073c5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561077557808201518184015260208101905061075a565b50505050905090810190601f1680156107a25780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060405180910390a3816000808381526020019081526020016000208190555050505050505050505050505050565b6000806000848152602001908152602001600020549050600081141561086c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f436f756c64206e6f7420676574206e6f6e63650000000000000000000000000081525060200191505060405180910390fd5b60008060008581526020019081526020016000208190555080833373ffffffffffffffffffffffffffffffffffffffff167f0dcc0fb56a30b6fe6b188f45b47369bc7f3c928a9748e245a79fc3f54ddd05688560405180821515815260200191505060405180910390a4505050565b6000602052806000526040600020600091509050548156fea26469706673582212206b4220320ac3fc43010ac2089f4931c4c383ca9873db22b0040a28af93142dd864736f6c63430007060033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "safe";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly name: "GasUsage";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "safe";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "enum Enum.Operation";
            readonly name: "operation";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "safeTxGas";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "usesRefund";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "signatures";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "executor";
            readonly type: "address";
        }];
        readonly name: "TransactionDetails";
        readonly type: "event";
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly name: "checkAfterExecution";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "safeTxGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "baseGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "refundReceiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "signatures";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "executor";
            readonly type: "address";
        }];
        readonly name: "checkTransaction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "txNonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): DebugTransactionGuardInterface;
    static connect(address: string, runner?: ContractRunner | null): DebugTransactionGuard;
}
export {};
