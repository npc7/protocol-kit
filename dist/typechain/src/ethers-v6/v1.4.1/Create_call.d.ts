import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface Create_callInterface extends Interface {
    getFunction(nameOrSignature: "performCreate" | "performCreate2"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ContractCreation"): EventFragment;
    encodeFunctionData(functionFragment: "performCreate", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "performCreate2", values: [BigNumberish, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "performCreate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "performCreate2", data: BytesLike): Result;
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
export interface Create_call extends BaseContract {
    connect(runner?: ContractRunner | null): Create_call;
    waitForDeployment(): Promise<this>;
    interface: Create_callInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    performCreate: TypedContractMethod<[
        value: BigNumberish,
        deploymentData: BytesLike
    ], [
        string
    ], "nonpayable">;
    performCreate2: TypedContractMethod<[
        value: BigNumberish,
        deploymentData: BytesLike,
        salt: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "performCreate"): TypedContractMethod<[
        value: BigNumberish,
        deploymentData: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "performCreate2"): TypedContractMethod<[
        value: BigNumberish,
        deploymentData: BytesLike,
        salt: BytesLike
    ], [
        string
    ], "nonpayable">;
    getEvent(key: "ContractCreation"): TypedContractEvent<ContractCreationEvent.InputTuple, ContractCreationEvent.OutputTuple, ContractCreationEvent.OutputObject>;
    filters: {
        "ContractCreation(address)": TypedContractEvent<ContractCreationEvent.InputTuple, ContractCreationEvent.OutputTuple, ContractCreationEvent.OutputObject>;
        ContractCreation: TypedContractEvent<ContractCreationEvent.InputTuple, ContractCreationEvent.OutputTuple, ContractCreationEvent.OutputObject>;
    };
}
