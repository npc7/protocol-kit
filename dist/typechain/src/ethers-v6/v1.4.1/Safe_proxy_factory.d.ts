import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface Safe_proxy_factoryInterface extends Interface {
    getFunction(nameOrSignature: "createChainSpecificProxyWithNonce" | "createProxyWithCallback" | "createProxyWithNonce" | "getChainId" | "proxyCreationCode"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ProxyCreation"): EventFragment;
    encodeFunctionData(functionFragment: "createChainSpecificProxyWithNonce", values: [AddressLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createProxyWithCallback", values: [AddressLike, BytesLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "createProxyWithNonce", values: [AddressLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxyCreationCode", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createChainSpecificProxyWithNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxyWithCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxyWithNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyCreationCode", data: BytesLike): Result;
}
export declare namespace ProxyCreationEvent {
    type InputTuple = [proxy: AddressLike, singleton: AddressLike];
    type OutputTuple = [proxy: string, singleton: string];
    interface OutputObject {
        proxy: string;
        singleton: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Safe_proxy_factory extends BaseContract {
    connect(runner?: ContractRunner | null): Safe_proxy_factory;
    waitForDeployment(): Promise<this>;
    interface: Safe_proxy_factoryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    createChainSpecificProxyWithNonce: TypedContractMethod<[
        _singleton: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    createProxyWithCallback: TypedContractMethod<[
        _singleton: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish,
        callback: AddressLike
    ], [
        string
    ], "nonpayable">;
    createProxyWithNonce: TypedContractMethod<[
        _singleton: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getChainId: TypedContractMethod<[], [bigint], "view">;
    proxyCreationCode: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "createChainSpecificProxyWithNonce"): TypedContractMethod<[
        _singleton: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "createProxyWithCallback"): TypedContractMethod<[
        _singleton: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish,
        callback: AddressLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "createProxyWithNonce"): TypedContractMethod<[
        _singleton: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "getChainId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "proxyCreationCode"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "ProxyCreation"): TypedContractEvent<ProxyCreationEvent.InputTuple, ProxyCreationEvent.OutputTuple, ProxyCreationEvent.OutputObject>;
    filters: {
        "ProxyCreation(address,address)": TypedContractEvent<ProxyCreationEvent.InputTuple, ProxyCreationEvent.OutputTuple, ProxyCreationEvent.OutputObject>;
        ProxyCreation: TypedContractEvent<ProxyCreationEvent.InputTuple, ProxyCreationEvent.OutputTuple, ProxyCreationEvent.OutputObject>;
    };
}
