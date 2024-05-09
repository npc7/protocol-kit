import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export interface SocialRecoveryModuleInterface extends Interface {
    getFunction(nameOrSignature: "NAME" | "VERSION" | "changeMasterCopy" | "confirmTransaction" | "friends" | "getDataHash" | "isConfirmed" | "isConfirmedByRequiredFriends" | "isExecuted" | "isFriend" | "manager" | "recoverAccess" | "setup" | "threshold"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedMasterCopy"): EventFragment;
    encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeMasterCopy", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "confirmTransaction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "friends", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDataHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isConfirmed", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isConfirmedByRequiredFriends", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isExecuted", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isFriend", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "recoverAccess", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setup", values: [AddressLike[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "threshold", values?: undefined): string;
    decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeMasterCopy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "friends", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDataHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isConfirmed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isConfirmedByRequiredFriends", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isExecuted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFriend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;
}
export declare namespace ChangedMasterCopyEvent {
    type InputTuple = [masterCopy: AddressLike];
    type OutputTuple = [masterCopy: string];
    interface OutputObject {
        masterCopy: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface SocialRecoveryModule extends BaseContract {
    connect(runner?: ContractRunner | null): SocialRecoveryModule;
    waitForDeployment(): Promise<this>;
    interface: SocialRecoveryModuleInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    NAME: TypedContractMethod<[], [string], "view">;
    VERSION: TypedContractMethod<[], [string], "view">;
    changeMasterCopy: TypedContractMethod<[
        _masterCopy: AddressLike
    ], [
        void
    ], "nonpayable">;
    confirmTransaction: TypedContractMethod<[
        dataHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    friends: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getDataHash: TypedContractMethod<[data: BytesLike], [string], "view">;
    isConfirmed: TypedContractMethod<[
        arg0: BytesLike,
        arg1: AddressLike
    ], [
        boolean
    ], "view">;
    isConfirmedByRequiredFriends: TypedContractMethod<[
        dataHash: BytesLike
    ], [
        boolean
    ], "view">;
    isExecuted: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
    isFriend: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    manager: TypedContractMethod<[], [string], "view">;
    recoverAccess: TypedContractMethod<[
        prevOwner: AddressLike,
        oldOwner: AddressLike,
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    setup: TypedContractMethod<[
        _friends: AddressLike[],
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    threshold: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "NAME"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "changeMasterCopy"): TypedContractMethod<[_masterCopy: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "confirmTransaction"): TypedContractMethod<[dataHash: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "friends"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "getDataHash"): TypedContractMethod<[data: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "isConfirmed"): TypedContractMethod<[
        arg0: BytesLike,
        arg1: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "isConfirmedByRequiredFriends"): TypedContractMethod<[dataHash: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "isExecuted"): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "isFriend"): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "manager"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "recoverAccess"): TypedContractMethod<[
        prevOwner: AddressLike,
        oldOwner: AddressLike,
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setup"): TypedContractMethod<[
        _friends: AddressLike[],
        _threshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "threshold"): TypedContractMethod<[], [bigint], "view">;
    getEvent(key: "ChangedMasterCopy"): TypedContractEvent<ChangedMasterCopyEvent.InputTuple, ChangedMasterCopyEvent.OutputTuple, ChangedMasterCopyEvent.OutputObject>;
    filters: {
        "ChangedMasterCopy(address)": TypedContractEvent<ChangedMasterCopyEvent.InputTuple, ChangedMasterCopyEvent.OutputTuple, ChangedMasterCopyEvent.OutputObject>;
        ChangedMasterCopy: TypedContractEvent<ChangedMasterCopyEvent.InputTuple, ChangedMasterCopyEvent.OutputTuple, ChangedMasterCopyEvent.OutputObject>;
    };
}
