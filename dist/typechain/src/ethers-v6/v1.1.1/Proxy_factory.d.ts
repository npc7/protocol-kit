import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface Proxy_factoryInterface extends Interface {
    getFunction(nameOrSignature: "createProxy" | "proxyRuntimeCode" | "proxyCreationCode" | "createProxyWithNonce" | "createProxyWithCallback" | "calculateCreateProxyWithNonceAddress"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ProxyCreation"): EventFragment;
    encodeFunctionData(functionFragment: "createProxy", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "proxyRuntimeCode", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxyCreationCode", values?: undefined): string;
    encodeFunctionData(functionFragment: "createProxyWithNonce", values: [AddressLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createProxyWithCallback", values: [AddressLike, BytesLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "calculateCreateProxyWithNonceAddress", values: [AddressLike, BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "createProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyRuntimeCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyCreationCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxyWithNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxyWithCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateCreateProxyWithNonceAddress", data: BytesLike): Result;
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
    createProxy: TypedContractMethod<[
        masterCopy: AddressLike,
        data: BytesLike
    ], [
        string
    ], "nonpayable">;
    proxyRuntimeCode: TypedContractMethod<[], [string], "view">;
    proxyCreationCode: TypedContractMethod<[], [string], "view">;
    createProxyWithNonce: TypedContractMethod<[
        _mastercopy: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    createProxyWithCallback: TypedContractMethod<[
        _mastercopy: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish,
        callback: AddressLike
    ], [
        string
    ], "nonpayable">;
    calculateCreateProxyWithNonceAddress: TypedContractMethod<[
        _mastercopy: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "createProxy"): TypedContractMethod<[
        masterCopy: AddressLike,
        data: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "proxyRuntimeCode"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "proxyCreationCode"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "createProxyWithNonce"): TypedContractMethod<[
        _mastercopy: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "createProxyWithCallback"): TypedContractMethod<[
        _mastercopy: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish,
        callback: AddressLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "calculateCreateProxyWithNonceAddress"): TypedContractMethod<[
        _mastercopy: AddressLike,
        initializer: BytesLike,
        saltNonce: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getEvent(key: "ProxyCreation"): TypedContractEvent<ProxyCreationEvent.InputTuple, ProxyCreationEvent.OutputTuple, ProxyCreationEvent.OutputObject>;
    filters: {
        "ProxyCreation(address)": TypedContractEvent<ProxyCreationEvent.InputTuple, ProxyCreationEvent.OutputTuple, ProxyCreationEvent.OutputObject>;
        ProxyCreation: TypedContractEvent<ProxyCreationEvent.InputTuple, ProxyCreationEvent.OutputTuple, ProxyCreationEvent.OutputObject>;
    };
}
