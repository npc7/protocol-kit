import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface Proxy_factoryInterface extends Interface {
    getFunction(nameOrSignature: "createProxyWithNonce" | "proxyCreationCode" | "createProxy" | "proxyRuntimeCode"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ProxyCreation"): EventFragment;
    encodeFunctionData(functionFragment: "createProxyWithNonce", values: [AddressLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxyCreationCode", values?: undefined): string;
    encodeFunctionData(functionFragment: "createProxy", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "proxyRuntimeCode", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createProxyWithNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyCreationCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyRuntimeCode", data: BytesLike): Result;
}
export declare namespace ProxyCreationEvent {
    type InputTuple = [proxy: AddressLike];
    type OutputTuple = [proxy: string];
    interface OutputObject {
        proxy: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Proxy_factory extends BaseContract {
    connect(runner?: ContractRunner | null): Proxy_factory;
    waitForDeployment(): Promise<this>;
    interface: Proxy_factoryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    createProxyWithNonce: TypedContractMethod<[
        _mastercopy: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    proxyCreationCode: TypedContractMethod<[], [string], "view">;
    createProxy: TypedContractMethod<[
        masterCopy: AddressLike,
        data: BytesLike
    ], [
        string
    ], "nonpayable">;
    proxyRuntimeCode: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "createProxyWithNonce"): TypedContractMethod<[
        _mastercopy: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "proxyCreationCode"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "createProxy"): TypedContractMethod<[
        masterCopy: AddressLike,
        data: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "proxyRuntimeCode"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "ProxyCreation"): TypedContractEvent<ProxyCreationEvent.InputTuple, ProxyCreationEvent.OutputTuple, ProxyCreationEvent.OutputObject>;
    filters: {
        "ProxyCreation(address)": TypedContractEvent<ProxyCreationEvent.InputTuple, ProxyCreationEvent.OutputTuple, ProxyCreationEvent.OutputObject>;
        ProxyCreation: TypedContractEvent<ProxyCreationEvent.InputTuple, ProxyCreationEvent.OutputTuple, ProxyCreationEvent.OutputObject>;
    };
}
