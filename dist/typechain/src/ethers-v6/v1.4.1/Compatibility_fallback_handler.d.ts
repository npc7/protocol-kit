import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface Compatibility_fallback_handlerInterface extends Interface {
    getFunction(nameOrSignature: "encodeMessageDataForSafe" | "getMessageHash" | "getMessageHashForSafe" | "getModules" | "isValidSignature(bytes32,bytes)" | "isValidSignature(bytes,bytes)" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "simulate" | "supportsInterface" | "tokensReceived"): FunctionFragment;
    encodeFunctionData(functionFragment: "encodeMessageDataForSafe", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "getMessageHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getMessageHashForSafe", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "getModules", values?: undefined): string;
    encodeFunctionData(functionFragment: "isValidSignature(bytes32,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "isValidSignature(bytes,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [
        AddressLike,
        AddressLike,
        BigNumberish[],
        BigNumberish[],
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [AddressLike, AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "simulate", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tokensReceived", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "encodeMessageDataForSafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMessageHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMessageHashForSafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature(bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature(bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensReceived", data: BytesLike): Result;
}
export interface Compatibility_fallback_handler extends BaseContract {
    connect(runner?: ContractRunner | null): Compatibility_fallback_handler;
    waitForDeployment(): Promise<this>;
    interface: Compatibility_fallback_handlerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    encodeMessageDataForSafe: TypedContractMethod<[
        safe: AddressLike,
        message: BytesLike
    ], [
        string
    ], "view">;
    getMessageHash: TypedContractMethod<[message: BytesLike], [string], "view">;
    getMessageHashForSafe: TypedContractMethod<[
        safe: AddressLike,
        message: BytesLike
    ], [
        string
    ], "view">;
    getModules: TypedContractMethod<[], [string[]], "view">;
    "isValidSignature(bytes32,bytes)": TypedContractMethod<[
        _dataHash: BytesLike,
        _signature: BytesLike
    ], [
        string
    ], "view">;
    "isValidSignature(bytes,bytes)": TypedContractMethod<[
        _data: BytesLike,
        _signature: BytesLike
    ], [
        string
    ], "view">;
    onERC1155BatchReceived: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish[],
        arg3: BigNumberish[],
        arg4: BytesLike
    ], [
        string
    ], "view">;
    onERC1155Received: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish,
        arg3: BigNumberish,
        arg4: BytesLike
    ], [
        string
    ], "view">;
    onERC721Received: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish,
        arg3: BytesLike
    ], [
        string
    ], "view">;
    simulate: TypedContractMethod<[
        targetContract: AddressLike,
        calldataPayload: BytesLike
    ], [
        string
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    tokensReceived: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: AddressLike,
        arg3: BigNumberish,
        arg4: BytesLike,
        arg5: BytesLike
    ], [
        void
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "encodeMessageDataForSafe"): TypedContractMethod<[
        safe: AddressLike,
        message: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getMessageHash"): TypedContractMethod<[message: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getMessageHashForSafe"): TypedContractMethod<[
        safe: AddressLike,
        message: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getModules"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "isValidSignature(bytes32,bytes)"): TypedContractMethod<[
        _dataHash: BytesLike,
        _signature: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "isValidSignature(bytes,bytes)"): TypedContractMethod<[
        _data: BytesLike,
        _signature: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "onERC1155BatchReceived"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish[],
        arg3: BigNumberish[],
        arg4: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "onERC1155Received"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish,
        arg3: BigNumberish,
        arg4: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "onERC721Received"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish,
        arg3: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "simulate"): TypedContractMethod<[
        targetContract: AddressLike,
        calldataPayload: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "tokensReceived"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: AddressLike,
        arg3: BigNumberish,
        arg4: BytesLike,
        arg5: BytesLike
    ], [
        void
    ], "view">;
    filters: {};
}
