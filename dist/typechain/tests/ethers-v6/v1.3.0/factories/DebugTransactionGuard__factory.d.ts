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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061075e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100455760003560e01c806375f0bb52146100485780639327136814610250578063ddbdba631461028a57610046565b5b005b61024e600480360361016081101561005f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100a657600080fd5b8201836020820111156100b857600080fd5b803590602001918460018302840111640100000000831117156100da57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803560ff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156101a857600080fd5b8201836020820111156101ba57600080fd5b803590602001918460018302840111640100000000831117156101dc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102cc565b005b6102886004803603604081101561026657600080fd5b8101908080359060200190929190803515159060200190929190505050610613565b005b6102b6600480360360208110156102a057600080fd5b8101908080359060200190929190505050610710565b6040518082815260200191505060405180910390f35b600080600033905060018173ffffffffffffffffffffffffffffffffffffffff1663affed0e06040518163ffffffff1660e01b815260040160206040518083038186803b15801561031c57600080fd5b505afa158015610330573d6000803e3d6000fd5b505050506040513d602081101561034657600080fd5b81019080805190602001909291905050500392508073ffffffffffffffffffffffffffffffffffffffff1663d8d11f788f8f8f8f8f8f8f8f8f8d6040518b63ffffffff1660e01b8152600401808b73ffffffffffffffffffffffffffffffffffffffff1681526020018a8152602001806020018960018111156103c557fe5b81526020018881526020018781526020018681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182810382528a818151815260200191508051906020019080838360005b83811015610452578082015181840152602081019050610437565b50505050905090810190601f16801561047f5780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060206040518083038186803b1580156104a557600080fd5b505afa1580156104b9573d6000803e3d6000fd5b505050506040513d60208110156104cf57600080fd5b8101908080519060200190929190505050915050803373ffffffffffffffffffffffffffffffffffffffff167f1b68334da83afaffd8348d6c85c5146d8e7de31a6c034d2d522be12d615c4f7b8f8f8f8f8f60008f118a604051808873ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018060200186600181111561055c57fe5b81526020018581526020018415158152602001838152602001828103825287818151815260200191508051906020019080838360005b838110156105ad578082015181840152602081019050610592565b50505050905090810190601f1680156105da5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a3816000808381526020019081526020016000208190555050505050505050505050505050565b600080600084815260200190815260200160002054905060008114156106a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f436f756c64206e6f7420676574206e6f6e63650000000000000000000000000081525060200191505060405180910390fd5b60008060008581526020019081526020016000208190555080833373ffffffffffffffffffffffffffffffffffffffff167f0dcc0fb56a30b6fe6b188f45b47369bc7f3c928a9748e245a79fc3f54ddd05688560405180821515815260200191505060405180910390a4505050565b6000602052806000526040600020600091509050548156fea26469706673582212203d9744d3d3cc44b54b7478cf053b7ae087d0ccebb0335c3e3ba60e8338d6d25964736f6c63430007060033";
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
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "checkTransaction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
