import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { SocialRecoveryModule, SocialRecoveryModuleInterface } from "../../../../contracts/safe_V1_2_0/modules/SocialRecoveryModule";
type SocialRecoveryModuleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SocialRecoveryModule__factory extends ContractFactory {
    constructor(...args: SocialRecoveryModuleConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<SocialRecoveryModule & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): SocialRecoveryModule__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506116fe806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80639ca89d0d1161008c578063b79ffaff11610066578063b79ffaff14610503578063ce14682814610569578063e52cb36a146105d7578063ffa1ad741461061d576100ea565b80639ca89d0d1461036b578063a3f4df7e146103b1578063ae68b05614610434576100ea565b806368125a1b116100c857806368125a1b1461021957806377231eaa1461027557806379716e43146102f95780637de7edef14610327576100ea565b806342cde4e8146100ef578063481c6a751461010d5780634ab8842714610157575b600080fd5b6100f76106a0565b6040518082815260200191505060405180910390f35b6101156106a6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102176004803603604081101561016d57600080fd5b810190808035906020019064010000000081111561018a57600080fd5b82018360208201111561019c57600080fd5b803590602001918460208302840111640100000000831117156101be57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506106cc565b005b61025b6004803603602081101561022f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061099b565b604051808215151515815260200191505060405180910390f35b6102f76004803603606081101561028b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109bb565b005b6103256004803603602081101561030f57600080fd5b8101908080359060200190929190505050610eb2565b005b6103696004803603602081101561033d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611054565b005b6103976004803603602081101561038157600080fd5b8101908080359060200190929190505050611226565b604051808215151515815260200191505060405180910390f35b6103b961130d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103f95780820151818401526020810190506103de565b50505050905090810190601f1680156104265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104ed6004803603602081101561044a57600080fd5b810190808035906020019064010000000081111561046757600080fd5b82018360208201111561047957600080fd5b8035906020019184600183028401116401000000008311171561049b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611346565b6040518082815260200191505060405180910390f35b61054f6004803603604081101561051957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611357565b604051808215151515815260200191505060405180910390f35b6105956004803603602081101561057f57600080fd5b8101908080359060200190929190505050611386565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610603600480360360208110156105ed57600080fd5b81019080803590602001909291905050506113c2565b604051808215151515815260200191505060405180910390f35b6106256113e2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561066557808201518184015260208101905061064a565b50505050905090810190601f1680156106925780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8151811115610726576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806116356025913960400191505060405180910390fd5b600281101561079d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4174206c65617374203220667269656e6473207265717569726564000000000081525060200191505060405180910390fd5b6107a561141b565b60008090505b82518110156109785760008382815181106107c257fe5b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561086f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f496e76616c696420667269656e6420616464726573732070726f76696465640081525060200191505060405180910390fd5b600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610912576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806116146021913960400191505060405180910390fd5b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505080806001019150506107ab565b50816003908051906020019061098f929190611522565b50806002819055505050565b60046020528060005260406000206000915054906101000a900460ff1681565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610a5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061165a6025913960400191505060405180910390fd5b6060838383604051602401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200193505050506040516020818303038152906040527fe318b52b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000610b8e82611346565b90506005600082815260200190815260200160002060009054906101000a900460ff1615610c24576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f5265636f7665727920616c72656164792065786563757465640000000000000081525060200191505060405180910390fd5b610c2d81611226565b610c82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061167f6025913960400191505060405180910390fd5b60016005600083815260200190815260200160002060006101000a81548160ff021916908315150217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663468721a7600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008560006040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200180602001836001811115610d6f57fe5b60ff168152602001828103825284818151815260200191508051906020019080838360005b83811015610daf578082015181840152602081019050610d94565b50505050905090810190601f168015610ddc5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610dfe57600080fd5b505af1158015610e12573d6000803e3d6000fd5b505050506040513d6020811015610e2857600080fd5b8101908080519060200190929190505050610eab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f436f756c64206e6f742065786563757465207265636f7665727900000000000081525060200191505060405180910390fd5b5050505050565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610f54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061165a6025913960400191505060405180910390fd5b6005600082815260200190815260200160002060009054906101000a900460ff1615610fe8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f5265636f7665727920616c72656164792065786563757465640000000000000081525060200191505060405180910390fd5b60016006600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806116a46026913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611180576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806115f06024913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f75e41bc35ff1bf14d81d1d2f649c0084a0f974f9289c803ec9898eeec4c8d0b881604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60008060008090505b600380549050811015611301576006600085815260200190815260200160002060006003838154811061125e57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156112df5781806001019250505b6002548214156112f457600192505050611308565b808060010191505061122f565b5060009150505b919050565b6040518060400160405280601681526020017f536f6369616c205265636f76657279204d6f64756c650000000000000000000081525081565b600081805190602001209050919050565b60066020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b6003818154811061139357fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60056020528060005260406000206000915054906101000a900460ff1681565b6040518060400160405280600581526020017f302e312e3000000000000000000000000000000000000000000000000000000081525081565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146114df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4d616e616765722068617320616c7265616479206265656e207365740000000081525060200191505060405180910390fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b82805482825590600052602060002090810192821561159b579160200282015b8281111561159a5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611542565b5b5090506115a891906115ac565b5090565b6115ec91905b808211156115e857600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506001016115b2565b5090565b9056fe496e76616c6964206d617374657220636f707920616464726573732070726f76696465644475706c696361746520667269656e6420616464726573732070726f76696465645468726573686f6c642063616e6e6f742065786365656420667269656e647320636f756e744d6574686f642063616e206f6e6c792062652063616c6c6564206279206120667269656e645265636f7665727920686173206e6f7420656e6f75676820636f6e6669726d6174696f6e734d6574686f642063616e206f6e6c792062652063616c6c65642066726f6d206d616e61676572a265627a7a7231582028149f3337d2a37307c7f46a330cee785cfb9521767758dd47872b22378d23bb64736f6c63430005110032";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "masterCopy";
            readonly type: "address";
        }];
        readonly name: "ChangedMasterCopy";
        readonly type: "event";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "NAME";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_masterCopy";
            readonly type: "address";
        }];
        readonly name: "changeMasterCopy";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dataHash";
            readonly type: "bytes32";
        }];
        readonly name: "confirmTransaction";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "friends";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "getDataHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "isConfirmed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dataHash";
            readonly type: "bytes32";
        }];
        readonly name: "isConfirmedByRequiredFriends";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "isExecuted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "isFriend";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "manager";
        readonly outputs: readonly [{
            readonly internalType: "contract ModuleManager";
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "prevOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "oldOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "recoverAccess";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_friends";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_threshold";
            readonly type: "uint256";
        }];
        readonly name: "setup";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "threshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): SocialRecoveryModuleInterface;
    static connect(address: string, runner?: ContractRunner | null): SocialRecoveryModule;
}
export {};
