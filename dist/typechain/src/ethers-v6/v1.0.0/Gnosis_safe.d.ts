import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface Gnosis_safeInterface extends Interface {
    getFunction(nameOrSignature: "addOwnerWithThreshold" | "DOMAIN_SEPARATOR_TYPEHASH" | "isOwner" | "execTransactionFromModule" | "signedMessages" | "enableModule" | "changeThreshold" | "approvedHashes" | "changeMasterCopy" | "SENTINEL_MODULES" | "SENTINEL_OWNERS" | "getOwners" | "NAME" | "nonce" | "getModules" | "SAFE_MSG_TYPEHASH" | "SAFE_TX_TYPEHASH" | "disableModule" | "swapOwner" | "getThreshold" | "domainSeparator" | "removeOwner" | "VERSION" | "setup" | "execTransaction" | "requiredTxGas" | "approveHash" | "signMessage" | "isValidSignature" | "getMessageHash" | "encodeTransactionData" | "getTransactionHash"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionFailed" | "AddedOwner" | "RemovedOwner" | "ChangedThreshold" | "EnabledModule" | "DisabledModule" | "ContractCreation"): EventFragment;
    encodeFunctionData(functionFragment: "addOwnerWithThreshold", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOwner", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModule", values: [AddressLike, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "signedMessages", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "enableModule", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeThreshold", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "approvedHashes", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "changeMasterCopy", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "SENTINEL_MODULES", values?: undefined): string;
    encodeFunctionData(functionFragment: "SENTINEL_OWNERS", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
    encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "getModules", values?: undefined): string;
    encodeFunctionData(functionFragment: "SAFE_MSG_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "SAFE_TX_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableModule", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "swapOwner", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "domainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeOwner", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "setup", values: [
        AddressLike[],
        BigNumberish,
        AddressLike,
        BytesLike,
        AddressLike,
        BigNumberish,
        AddressLike
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
    encodeFunctionData(functionFragment: "requiredTxGas", values: [AddressLike, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approveHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "signMessage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isValidSignature", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "getMessageHash", values: [BytesLike]): string;
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
    decodeFunctionResult(functionFragment: "addOwnerWithThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvedHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeMasterCopy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SENTINEL_MODULES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SENTINEL_OWNERS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SAFE_MSG_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SAFE_TX_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requiredTxGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMessageHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeTransactionData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionHash", data: BytesLike): Result;
}
export declare namespace ExecutionFailedEvent {
    type InputTuple = [txHash: BytesLike];
    type OutputTuple = [txHash: string];
    interface OutputObject {
        txHash: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
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
export declare namespace ContractCreationEvent {
    type InputTuple = [newContract: AddressLike];
    type OutputTuple = [newContract: string];
    interface OutputObject {
        newContract: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Gnosis_safe extends BaseContract {
    connect(runner?: ContractRunner | null): Gnosis_safe;
    waitForDeployment(): Promise<this>;
    interface: Gnosis_safeInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addOwnerWithThreshold: TypedContractMethod<[
        owner: AddressLike,
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    DOMAIN_SEPARATOR_TYPEHASH: TypedContractMethod<[], [string], "view">;
    isOwner: TypedContractMethod<[owner: AddressLike], [boolean], "view">;
    execTransactionFromModule: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    signedMessages: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
    enableModule: TypedContractMethod<[
        module: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeThreshold: TypedContractMethod<[
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    approvedHashes: TypedContractMethod<[
        arg0: AddressLike,
        arg1: BytesLike
    ], [
        bigint
    ], "view">;
    changeMasterCopy: TypedContractMethod<[
        _masterCopy: AddressLike
    ], [
        void
    ], "nonpayable">;
    SENTINEL_MODULES: TypedContractMethod<[], [string], "view">;
    SENTINEL_OWNERS: TypedContractMethod<[], [string], "view">;
    getOwners: TypedContractMethod<[], [string[]], "view">;
    NAME: TypedContractMethod<[], [string], "view">;
    nonce: TypedContractMethod<[], [bigint], "view">;
    getModules: TypedContractMethod<[], [string[]], "view">;
    SAFE_MSG_TYPEHASH: TypedContractMethod<[], [string], "view">;
    SAFE_TX_TYPEHASH: TypedContractMethod<[], [string], "view">;
    disableModule: TypedContractMethod<[
        prevModule: AddressLike,
        module: AddressLike
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
    getThreshold: TypedContractMethod<[], [bigint], "view">;
    domainSeparator: TypedContractMethod<[], [string], "view">;
    removeOwner: TypedContractMethod<[
        prevOwner: AddressLike,
        owner: AddressLike,
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    VERSION: TypedContractMethod<[], [string], "view">;
    setup: TypedContractMethod<[
        _owners: AddressLike[],
        _threshold: BigNumberish,
        to: AddressLike,
        data: BytesLike,
        paymentToken: AddressLike,
        payment: BigNumberish,
        paymentReceiver: AddressLike
    ], [
        void
    ], "nonpayable">;
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
    ], "nonpayable">;
    requiredTxGas: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    approveHash: TypedContractMethod<[
        hashToApprove: BytesLike
    ], [
        void
    ], "nonpayable">;
    signMessage: TypedContractMethod<[_data: BytesLike], [void], "nonpayable">;
    isValidSignature: TypedContractMethod<[
        _data: BytesLike,
        _signature: BytesLike
    ], [
        string
    ], "nonpayable">;
    getMessageHash: TypedContractMethod<[message: BytesLike], [string], "view">;
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
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addOwnerWithThreshold"): TypedContractMethod<[
        owner: AddressLike,
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "DOMAIN_SEPARATOR_TYPEHASH"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "isOwner"): TypedContractMethod<[owner: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "execTransactionFromModule"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "signedMessages"): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "enableModule"): TypedContractMethod<[module: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeThreshold"): TypedContractMethod<[_threshold: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "approvedHashes"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: BytesLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "changeMasterCopy"): TypedContractMethod<[_masterCopy: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "SENTINEL_MODULES"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SENTINEL_OWNERS"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getOwners"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "NAME"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "nonce"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getModules"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "SAFE_MSG_TYPEHASH"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SAFE_TX_TYPEHASH"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "disableModule"): TypedContractMethod<[
        prevModule: AddressLike,
        module: AddressLike
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
    getFunction(nameOrSignature: "getThreshold"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "domainSeparator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "removeOwner"): TypedContractMethod<[
        prevOwner: AddressLike,
        owner: AddressLike,
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setup"): TypedContractMethod<[
        _owners: AddressLike[],
        _threshold: BigNumberish,
        to: AddressLike,
        data: BytesLike,
        paymentToken: AddressLike,
        payment: BigNumberish,
        paymentReceiver: AddressLike
    ], [
        void
    ], "nonpayable">;
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
    ], "nonpayable">;
    getFunction(nameOrSignature: "requiredTxGas"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "approveHash"): TypedContractMethod<[hashToApprove: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "signMessage"): TypedContractMethod<[_data: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "isValidSignature"): TypedContractMethod<[
        _data: BytesLike,
        _signature: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "getMessageHash"): TypedContractMethod<[message: BytesLike], [string], "view">;
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
    getEvent(key: "ExecutionFailed"): TypedContractEvent<ExecutionFailedEvent.InputTuple, ExecutionFailedEvent.OutputTuple, ExecutionFailedEvent.OutputObject>;
    getEvent(key: "AddedOwner"): TypedContractEvent<AddedOwnerEvent.InputTuple, AddedOwnerEvent.OutputTuple, AddedOwnerEvent.OutputObject>;
    getEvent(key: "RemovedOwner"): TypedContractEvent<RemovedOwnerEvent.InputTuple, RemovedOwnerEvent.OutputTuple, RemovedOwnerEvent.OutputObject>;
    getEvent(key: "ChangedThreshold"): TypedContractEvent<ChangedThresholdEvent.InputTuple, ChangedThresholdEvent.OutputTuple, ChangedThresholdEvent.OutputObject>;
    getEvent(key: "EnabledModule"): TypedContractEvent<EnabledModuleEvent.InputTuple, EnabledModuleEvent.OutputTuple, EnabledModuleEvent.OutputObject>;
    getEvent(key: "DisabledModule"): TypedContractEvent<DisabledModuleEvent.InputTuple, DisabledModuleEvent.OutputTuple, DisabledModuleEvent.OutputObject>;
    getEvent(key: "ContractCreation"): TypedContractEvent<ContractCreationEvent.InputTuple, ContractCreationEvent.OutputTuple, ContractCreationEvent.OutputObject>;
    filters: {
        "ExecutionFailed(bytes32)": TypedContractEvent<ExecutionFailedEvent.InputTuple, ExecutionFailedEvent.OutputTuple, ExecutionFailedEvent.OutputObject>;
        ExecutionFailed: TypedContractEvent<ExecutionFailedEvent.InputTuple, ExecutionFailedEvent.OutputTuple, ExecutionFailedEvent.OutputObject>;
        "AddedOwner(address)": TypedContractEvent<AddedOwnerEvent.InputTuple, AddedOwnerEvent.OutputTuple, AddedOwnerEvent.OutputObject>;
        AddedOwner: TypedContractEvent<AddedOwnerEvent.InputTuple, AddedOwnerEvent.OutputTuple, AddedOwnerEvent.OutputObject>;
        "RemovedOwner(address)": TypedContractEvent<RemovedOwnerEvent.InputTuple, RemovedOwnerEvent.OutputTuple, RemovedOwnerEvent.OutputObject>;
        RemovedOwner: TypedContractEvent<RemovedOwnerEvent.InputTuple, RemovedOwnerEvent.OutputTuple, RemovedOwnerEvent.OutputObject>;
        "ChangedThreshold(uint256)": TypedContractEvent<ChangedThresholdEvent.InputTuple, ChangedThresholdEvent.OutputTuple, ChangedThresholdEvent.OutputObject>;
        ChangedThreshold: TypedContractEvent<ChangedThresholdEvent.InputTuple, ChangedThresholdEvent.OutputTuple, ChangedThresholdEvent.OutputObject>;
        "EnabledModule(address)": TypedContractEvent<EnabledModuleEvent.InputTuple, EnabledModuleEvent.OutputTuple, EnabledModuleEvent.OutputObject>;
        EnabledModule: TypedContractEvent<EnabledModuleEvent.InputTuple, EnabledModuleEvent.OutputTuple, EnabledModuleEvent.OutputObject>;
        "DisabledModule(address)": TypedContractEvent<DisabledModuleEvent.InputTuple, DisabledModuleEvent.OutputTuple, DisabledModuleEvent.OutputObject>;
        DisabledModule: TypedContractEvent<DisabledModuleEvent.InputTuple, DisabledModuleEvent.OutputTuple, DisabledModuleEvent.OutputObject>;
        "ContractCreation(address)": TypedContractEvent<ContractCreationEvent.InputTuple, ContractCreationEvent.OutputTuple, ContractCreationEvent.OutputObject>;
        ContractCreation: TypedContractEvent<ContractCreationEvent.InputTuple, ContractCreationEvent.OutputTuple, ContractCreationEvent.OutputObject>;
    };
}
