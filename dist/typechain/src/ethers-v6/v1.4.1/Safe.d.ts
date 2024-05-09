import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface SafeInterface extends Interface {
    getFunction(nameOrSignature: "VERSION" | "addOwnerWithThreshold" | "approveHash" | "approvedHashes" | "changeThreshold" | "checkNSignatures" | "checkSignatures" | "disableModule" | "domainSeparator" | "enableModule" | "encodeTransactionData" | "execTransaction" | "execTransactionFromModule" | "execTransactionFromModuleReturnData" | "getChainId" | "getModulesPaginated" | "getOwners" | "getStorageAt" | "getThreshold" | "getTransactionHash" | "isModuleEnabled" | "isOwner" | "nonce" | "removeOwner" | "setFallbackHandler" | "setGuard" | "setup" | "signedMessages" | "simulateAndRevert" | "swapOwner"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AddedOwner" | "ApproveHash" | "ChangedFallbackHandler" | "ChangedGuard" | "ChangedThreshold" | "DisabledModule" | "EnabledModule" | "ExecutionFailure" | "ExecutionFromModuleFailure" | "ExecutionFromModuleSuccess" | "ExecutionSuccess" | "RemovedOwner" | "SafeReceived" | "SafeSetup" | "SignMsg"): EventFragment;
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "addOwnerWithThreshold", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approveHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "approvedHashes", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "changeThreshold", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkNSignatures", values: [BytesLike, BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkSignatures", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "disableModule", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "domainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "enableModule", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "encodeTransactionData", values: [
        AddressLike,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        AddressLike,
        AddressLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "execTransaction", values: [
        AddressLike,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        AddressLike,
        AddressLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModule", values: [AddressLike, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModuleReturnData", values: [AddressLike, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getModulesPaginated", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStorageAt", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTransactionHash", values: [
        AddressLike,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        AddressLike,
        AddressLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "isModuleEnabled", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isOwner", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeOwner", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFallbackHandler", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setup", values: [
        AddressLike[],
        BigNumberish,
        AddressLike,
        BytesLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        AddressLike
    ]): string;
    encodeFunctionData(functionFragment: "signedMessages", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "simulateAndRevert", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "swapOwner", values: [AddressLike, AddressLike, AddressLike]): string;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addOwnerWithThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvedHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkNSignatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkSignatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeTransactionData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModuleReturnData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModulesPaginated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStorageAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isModuleEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFallbackHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulateAndRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapOwner", data: BytesLike): Result;
}
export declare namespace AddedOwnerEvent {
    type InputTuple = [owner: AddressLike];
    type OutputTuple = [owner: string];
    interface OutputObject {
        owner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ApproveHashEvent {
    type InputTuple = [approvedHash: BytesLike, owner: AddressLike];
    type OutputTuple = [approvedHash: string, owner: string];
    interface OutputObject {
        approvedHash: string;
        owner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChangedFallbackHandlerEvent {
    type InputTuple = [handler: AddressLike];
    type OutputTuple = [handler: string];
    interface OutputObject {
        handler: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChangedGuardEvent {
    type InputTuple = [guard: AddressLike];
    type OutputTuple = [guard: string];
    interface OutputObject {
        guard: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChangedThresholdEvent {
    type InputTuple = [threshold: BigNumberish];
    type OutputTuple = [threshold: bigint];
    interface OutputObject {
        threshold: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DisabledModuleEvent {
    type InputTuple = [module: AddressLike];
    type OutputTuple = [module: string];
    interface OutputObject {
        module: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace EnabledModuleEvent {
    type InputTuple = [module: AddressLike];
    type OutputTuple = [module: string];
    interface OutputObject {
        module: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ExecutionFailureEvent {
    type InputTuple = [txHash: BytesLike, payment: BigNumberish];
    type OutputTuple = [txHash: string, payment: bigint];
    interface OutputObject {
        txHash: string;
        payment: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ExecutionFromModuleFailureEvent {
    type InputTuple = [module: AddressLike];
    type OutputTuple = [module: string];
    interface OutputObject {
        module: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ExecutionFromModuleSuccessEvent {
    type InputTuple = [module: AddressLike];
    type OutputTuple = [module: string];
    interface OutputObject {
        module: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ExecutionSuccessEvent {
    type InputTuple = [txHash: BytesLike, payment: BigNumberish];
    type OutputTuple = [txHash: string, payment: bigint];
    interface OutputObject {
        txHash: string;
        payment: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RemovedOwnerEvent {
    type InputTuple = [owner: AddressLike];
    type OutputTuple = [owner: string];
    interface OutputObject {
        owner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SafeReceivedEvent {
    type InputTuple = [sender: AddressLike, value: BigNumberish];
    type OutputTuple = [sender: string, value: bigint];
    interface OutputObject {
        sender: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SafeSetupEvent {
    type InputTuple = [
        initiator: AddressLike,
        owners: AddressLike[],
        threshold: BigNumberish,
        initializer: AddressLike,
        fallbackHandler: AddressLike
    ];
    type OutputTuple = [
        initiator: string,
        owners: string[],
        threshold: bigint,
        initializer: string,
        fallbackHandler: string
    ];
    interface OutputObject {
        initiator: string;
        owners: string[];
        threshold: bigint;
        initializer: string;
        fallbackHandler: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SignMsgEvent {
    type InputTuple = [msgHash: BytesLike];
    type OutputTuple = [msgHash: string];
    interface OutputObject {
        msgHash: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Safe extends BaseContract {
    connect(runner?: ContractRunner | null): Safe;
    waitForDeployment(): Promise<this>;
    interface: SafeInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    VERSION: TypedContractMethod<[], [string], "view">;
    addOwnerWithThreshold: TypedContractMethod<[
        owner: AddressLike,
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    approveHash: TypedContractMethod<[
        hashToApprove: BytesLike
    ], [
        void
    ], "nonpayable">;
    approvedHashes: TypedContractMethod<[
        arg0: AddressLike,
        arg1: BytesLike
    ], [
        bigint
    ], "view">;
    changeThreshold: TypedContractMethod<[
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    checkNSignatures: TypedContractMethod<[
        dataHash: BytesLike,
        data: BytesLike,
        signatures: BytesLike,
        requiredSignatures: BigNumberish
    ], [
        void
    ], "view">;
    checkSignatures: TypedContractMethod<[
        dataHash: BytesLike,
        data: BytesLike,
        signatures: BytesLike
    ], [
        void
    ], "view">;
    disableModule: TypedContractMethod<[
        prevModule: AddressLike,
        module: AddressLike
    ], [
        void
    ], "nonpayable">;
    domainSeparator: TypedContractMethod<[], [string], "view">;
    enableModule: TypedContractMethod<[
        module: AddressLike
    ], [
        void
    ], "nonpayable">;
    encodeTransactionData: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish,
        safeTxGas: BigNumberish,
        baseGas: BigNumberish,
        gasPrice: BigNumberish,
        gasToken: AddressLike,
        refundReceiver: AddressLike,
        _nonce: BigNumberish
    ], [
        string
    ], "view">;
    execTransaction: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish,
        safeTxGas: BigNumberish,
        baseGas: BigNumberish,
        gasPrice: BigNumberish,
        gasToken: AddressLike,
        refundReceiver: AddressLike,
        signatures: BytesLike
    ], [
        boolean
    ], "payable">;
    execTransactionFromModule: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    execTransactionFromModuleReturnData: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish
    ], [
        [boolean, string] & {
            success: boolean;
            returnData: string;
        }
    ], "nonpayable">;
    getChainId: TypedContractMethod<[], [bigint], "view">;
    getModulesPaginated: TypedContractMethod<[
        start: AddressLike,
        pageSize: BigNumberish
    ], [
        [string[], string] & {
            array: string[];
            next: string;
        }
    ], "view">;
    getOwners: TypedContractMethod<[], [string[]], "view">;
    getStorageAt: TypedContractMethod<[
        offset: BigNumberish,
        length: BigNumberish
    ], [
        string
    ], "view">;
    getThreshold: TypedContractMethod<[], [bigint], "view">;
    getTransactionHash: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish,
        safeTxGas: BigNumberish,
        baseGas: BigNumberish,
        gasPrice: BigNumberish,
        gasToken: AddressLike,
        refundReceiver: AddressLike,
        _nonce: BigNumberish
    ], [
        string
    ], "view">;
    isModuleEnabled: TypedContractMethod<[
        module: AddressLike
    ], [
        boolean
    ], "view">;
    isOwner: TypedContractMethod<[owner: AddressLike], [boolean], "view">;
    nonce: TypedContractMethod<[], [bigint], "view">;
    removeOwner: TypedContractMethod<[
        prevOwner: AddressLike,
        owner: AddressLike,
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setFallbackHandler: TypedContractMethod<[
        handler: AddressLike
    ], [
        void
    ], "nonpayable">;
    setGuard: TypedContractMethod<[guard: AddressLike], [void], "nonpayable">;
    setup: TypedContractMethod<[
        _owners: AddressLike[],
        _threshold: BigNumberish,
        to: AddressLike,
        data: BytesLike,
        fallbackHandler: AddressLike,
        paymentToken: AddressLike,
        payment: BigNumberish,
        paymentReceiver: AddressLike
    ], [
        void
    ], "nonpayable">;
    signedMessages: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
    simulateAndRevert: TypedContractMethod<[
        targetContract: AddressLike,
        calldataPayload: BytesLike
    ], [
        void
    ], "nonpayable">;
    swapOwner: TypedContractMethod<[
        prevOwner: AddressLike,
        oldOwner: AddressLike,
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "addOwnerWithThreshold"): TypedContractMethod<[
        owner: AddressLike,
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "approveHash"): TypedContractMethod<[hashToApprove: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "approvedHashes"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: BytesLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "changeThreshold"): TypedContractMethod<[_threshold: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "checkNSignatures"): TypedContractMethod<[
        dataHash: BytesLike,
        data: BytesLike,
        signatures: BytesLike,
        requiredSignatures: BigNumberish
    ], [
        void
    ], "view">;
    getFunction(nameOrSignature: "checkSignatures"): TypedContractMethod<[
        dataHash: BytesLike,
        data: BytesLike,
        signatures: BytesLike
    ], [
        void
    ], "view">;
    getFunction(nameOrSignature: "disableModule"): TypedContractMethod<[
        prevModule: AddressLike,
        module: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "domainSeparator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "enableModule"): TypedContractMethod<[module: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "encodeTransactionData"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish,
        safeTxGas: BigNumberish,
        baseGas: BigNumberish,
        gasPrice: BigNumberish,
        gasToken: AddressLike,
        refundReceiver: AddressLike,
        _nonce: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "execTransaction"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish,
        safeTxGas: BigNumberish,
        baseGas: BigNumberish,
        gasPrice: BigNumberish,
        gasToken: AddressLike,
        refundReceiver: AddressLike,
        signatures: BytesLike
    ], [
        boolean
    ], "payable">;
    getFunction(nameOrSignature: "execTransactionFromModule"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "execTransactionFromModuleReturnData"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish
    ], [
        [boolean, string] & {
            success: boolean;
            returnData: string;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "getChainId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getModulesPaginated"): TypedContractMethod<[
        start: AddressLike,
        pageSize: BigNumberish
    ], [
        [string[], string] & {
            array: string[];
            next: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "getOwners"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getStorageAt"): TypedContractMethod<[
        offset: BigNumberish,
        length: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getThreshold"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTransactionHash"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish,
        safeTxGas: BigNumberish,
        baseGas: BigNumberish,
        gasPrice: BigNumberish,
        gasToken: AddressLike,
        refundReceiver: AddressLike,
        _nonce: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "isModuleEnabled"): TypedContractMethod<[module: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "isOwner"): TypedContractMethod<[owner: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "nonce"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "removeOwner"): TypedContractMethod<[
        prevOwner: AddressLike,
        owner: AddressLike,
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setFallbackHandler"): TypedContractMethod<[handler: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setGuard"): TypedContractMethod<[guard: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setup"): TypedContractMethod<[
        _owners: AddressLike[],
        _threshold: BigNumberish,
        to: AddressLike,
        data: BytesLike,
        fallbackHandler: AddressLike,
        paymentToken: AddressLike,
        payment: BigNumberish,
        paymentReceiver: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "signedMessages"): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "simulateAndRevert"): TypedContractMethod<[
        targetContract: AddressLike,
        calldataPayload: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "swapOwner"): TypedContractMethod<[
        prevOwner: AddressLike,
        oldOwner: AddressLike,
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "AddedOwner"): TypedContractEvent<AddedOwnerEvent.InputTuple, AddedOwnerEvent.OutputTuple, AddedOwnerEvent.OutputObject>;
    getEvent(key: "ApproveHash"): TypedContractEvent<ApproveHashEvent.InputTuple, ApproveHashEvent.OutputTuple, ApproveHashEvent.OutputObject>;
    getEvent(key: "ChangedFallbackHandler"): TypedContractEvent<ChangedFallbackHandlerEvent.InputTuple, ChangedFallbackHandlerEvent.OutputTuple, ChangedFallbackHandlerEvent.OutputObject>;
    getEvent(key: "ChangedGuard"): TypedContractEvent<ChangedGuardEvent.InputTuple, ChangedGuardEvent.OutputTuple, ChangedGuardEvent.OutputObject>;
    getEvent(key: "ChangedThreshold"): TypedContractEvent<ChangedThresholdEvent.InputTuple, ChangedThresholdEvent.OutputTuple, ChangedThresholdEvent.OutputObject>;
    getEvent(key: "DisabledModule"): TypedContractEvent<DisabledModuleEvent.InputTuple, DisabledModuleEvent.OutputTuple, DisabledModuleEvent.OutputObject>;
    getEvent(key: "EnabledModule"): TypedContractEvent<EnabledModuleEvent.InputTuple, EnabledModuleEvent.OutputTuple, EnabledModuleEvent.OutputObject>;
    getEvent(key: "ExecutionFailure"): TypedContractEvent<ExecutionFailureEvent.InputTuple, ExecutionFailureEvent.OutputTuple, ExecutionFailureEvent.OutputObject>;
    getEvent(key: "ExecutionFromModuleFailure"): TypedContractEvent<ExecutionFromModuleFailureEvent.InputTuple, ExecutionFromModuleFailureEvent.OutputTuple, ExecutionFromModuleFailureEvent.OutputObject>;
    getEvent(key: "ExecutionFromModuleSuccess"): TypedContractEvent<ExecutionFromModuleSuccessEvent.InputTuple, ExecutionFromModuleSuccessEvent.OutputTuple, ExecutionFromModuleSuccessEvent.OutputObject>;
    getEvent(key: "ExecutionSuccess"): TypedContractEvent<ExecutionSuccessEvent.InputTuple, ExecutionSuccessEvent.OutputTuple, ExecutionSuccessEvent.OutputObject>;
    getEvent(key: "RemovedOwner"): TypedContractEvent<RemovedOwnerEvent.InputTuple, RemovedOwnerEvent.OutputTuple, RemovedOwnerEvent.OutputObject>;
    getEvent(key: "SafeReceived"): TypedContractEvent<SafeReceivedEvent.InputTuple, SafeReceivedEvent.OutputTuple, SafeReceivedEvent.OutputObject>;
    getEvent(key: "SafeSetup"): TypedContractEvent<SafeSetupEvent.InputTuple, SafeSetupEvent.OutputTuple, SafeSetupEvent.OutputObject>;
    getEvent(key: "SignMsg"): TypedContractEvent<SignMsgEvent.InputTuple, SignMsgEvent.OutputTuple, SignMsgEvent.OutputObject>;
    filters: {
        "AddedOwner(address)": TypedContractEvent<AddedOwnerEvent.InputTuple, AddedOwnerEvent.OutputTuple, AddedOwnerEvent.OutputObject>;
        AddedOwner: TypedContractEvent<AddedOwnerEvent.InputTuple, AddedOwnerEvent.OutputTuple, AddedOwnerEvent.OutputObject>;
        "ApproveHash(bytes32,address)": TypedContractEvent<ApproveHashEvent.InputTuple, ApproveHashEvent.OutputTuple, ApproveHashEvent.OutputObject>;
        ApproveHash: TypedContractEvent<ApproveHashEvent.InputTuple, ApproveHashEvent.OutputTuple, ApproveHashEvent.OutputObject>;
        "ChangedFallbackHandler(address)": TypedContractEvent<ChangedFallbackHandlerEvent.InputTuple, ChangedFallbackHandlerEvent.OutputTuple, ChangedFallbackHandlerEvent.OutputObject>;
        ChangedFallbackHandler: TypedContractEvent<ChangedFallbackHandlerEvent.InputTuple, ChangedFallbackHandlerEvent.OutputTuple, ChangedFallbackHandlerEvent.OutputObject>;
        "ChangedGuard(address)": TypedContractEvent<ChangedGuardEvent.InputTuple, ChangedGuardEvent.OutputTuple, ChangedGuardEvent.OutputObject>;
        ChangedGuard: TypedContractEvent<ChangedGuardEvent.InputTuple, ChangedGuardEvent.OutputTuple, ChangedGuardEvent.OutputObject>;
        "ChangedThreshold(uint256)": TypedContractEvent<ChangedThresholdEvent.InputTuple, ChangedThresholdEvent.OutputTuple, ChangedThresholdEvent.OutputObject>;
        ChangedThreshold: TypedContractEvent<ChangedThresholdEvent.InputTuple, ChangedThresholdEvent.OutputTuple, ChangedThresholdEvent.OutputObject>;
        "DisabledModule(address)": TypedContractEvent<DisabledModuleEvent.InputTuple, DisabledModuleEvent.OutputTuple, DisabledModuleEvent.OutputObject>;
        DisabledModule: TypedContractEvent<DisabledModuleEvent.InputTuple, DisabledModuleEvent.OutputTuple, DisabledModuleEvent.OutputObject>;
        "EnabledModule(address)": TypedContractEvent<EnabledModuleEvent.InputTuple, EnabledModuleEvent.OutputTuple, EnabledModuleEvent.OutputObject>;
        EnabledModule: TypedContractEvent<EnabledModuleEvent.InputTuple, EnabledModuleEvent.OutputTuple, EnabledModuleEvent.OutputObject>;
        "ExecutionFailure(bytes32,uint256)": TypedContractEvent<ExecutionFailureEvent.InputTuple, ExecutionFailureEvent.OutputTuple, ExecutionFailureEvent.OutputObject>;
        ExecutionFailure: TypedContractEvent<ExecutionFailureEvent.InputTuple, ExecutionFailureEvent.OutputTuple, ExecutionFailureEvent.OutputObject>;
        "ExecutionFromModuleFailure(address)": TypedContractEvent<ExecutionFromModuleFailureEvent.InputTuple, ExecutionFromModuleFailureEvent.OutputTuple, ExecutionFromModuleFailureEvent.OutputObject>;
        ExecutionFromModuleFailure: TypedContractEvent<ExecutionFromModuleFailureEvent.InputTuple, ExecutionFromModuleFailureEvent.OutputTuple, ExecutionFromModuleFailureEvent.OutputObject>;
        "ExecutionFromModuleSuccess(address)": TypedContractEvent<ExecutionFromModuleSuccessEvent.InputTuple, ExecutionFromModuleSuccessEvent.OutputTuple, ExecutionFromModuleSuccessEvent.OutputObject>;
        ExecutionFromModuleSuccess: TypedContractEvent<ExecutionFromModuleSuccessEvent.InputTuple, ExecutionFromModuleSuccessEvent.OutputTuple, ExecutionFromModuleSuccessEvent.OutputObject>;
        "ExecutionSuccess(bytes32,uint256)": TypedContractEvent<ExecutionSuccessEvent.InputTuple, ExecutionSuccessEvent.OutputTuple, ExecutionSuccessEvent.OutputObject>;
        ExecutionSuccess: TypedContractEvent<ExecutionSuccessEvent.InputTuple, ExecutionSuccessEvent.OutputTuple, ExecutionSuccessEvent.OutputObject>;
        "RemovedOwner(address)": TypedContractEvent<RemovedOwnerEvent.InputTuple, RemovedOwnerEvent.OutputTuple, RemovedOwnerEvent.OutputObject>;
        RemovedOwner: TypedContractEvent<RemovedOwnerEvent.InputTuple, RemovedOwnerEvent.OutputTuple, RemovedOwnerEvent.OutputObject>;
        "SafeReceived(address,uint256)": TypedContractEvent<SafeReceivedEvent.InputTuple, SafeReceivedEvent.OutputTuple, SafeReceivedEvent.OutputObject>;
        SafeReceived: TypedContractEvent<SafeReceivedEvent.InputTuple, SafeReceivedEvent.OutputTuple, SafeReceivedEvent.OutputObject>;
        "SafeSetup(address,address[],uint256,address,address)": TypedContractEvent<SafeSetupEvent.InputTuple, SafeSetupEvent.OutputTuple, SafeSetupEvent.OutputObject>;
        SafeSetup: TypedContractEvent<SafeSetupEvent.InputTuple, SafeSetupEvent.OutputTuple, SafeSetupEvent.OutputObject>;
        "SignMsg(bytes32)": TypedContractEvent<SignMsgEvent.InputTuple, SignMsgEvent.OutputTuple, SignMsgEvent.OutputObject>;
        SignMsg: TypedContractEvent<SignMsgEvent.InputTuple, SignMsgEvent.OutputTuple, SignMsgEvent.OutputObject>;
    };
}
