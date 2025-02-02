import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface DebugTransactionGuardInterface extends Interface {
    getFunction(nameOrSignature: "checkAfterExecution" | "checkTransaction" | "supportsInterface" | "txNonces"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "GasUsage" | "TransactionDetails"): EventFragment;
    encodeFunctionData(functionFragment: "checkAfterExecution", values: [BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "checkTransaction", values: [
        AddressLike,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        AddressLike,
        AddressLike,
        BytesLike,
        AddressLike
    ]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "txNonces", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "checkAfterExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "txNonces", data: BytesLike): Result;
}
export declare namespace GasUsageEvent {
    type InputTuple = [
        safe: AddressLike,
        txHash: BytesLike,
        nonce: BigNumberish,
        success: boolean
    ];
    type OutputTuple = [
        safe: string,
        txHash: string,
        nonce: bigint,
        success: boolean
    ];
    interface OutputObject {
        safe: string;
        txHash: string;
        nonce: bigint;
        success: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransactionDetailsEvent {
    type InputTuple = [
        safe: AddressLike,
        txHash: BytesLike,
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish,
        safeTxGas: BigNumberish,
        usesRefund: boolean,
        nonce: BigNumberish,
        signatures: BytesLike,
        executor: AddressLike
    ];
    type OutputTuple = [
        safe: string,
        txHash: string,
        to: string,
        value: bigint,
        data: string,
        operation: bigint,
        safeTxGas: bigint,
        usesRefund: boolean,
        nonce: bigint,
        signatures: string,
        executor: string
    ];
    interface OutputObject {
        safe: string;
        txHash: string;
        to: string;
        value: bigint;
        data: string;
        operation: bigint;
        safeTxGas: bigint;
        usesRefund: boolean;
        nonce: bigint;
        signatures: string;
        executor: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface DebugTransactionGuard extends BaseContract {
    connect(runner?: ContractRunner | null): DebugTransactionGuard;
    waitForDeployment(): Promise<this>;
    interface: DebugTransactionGuardInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    checkAfterExecution: TypedContractMethod<[
        txHash: BytesLike,
        success: boolean
    ], [
        void
    ], "nonpayable">;
    checkTransaction: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish,
        safeTxGas: BigNumberish,
        baseGas: BigNumberish,
        gasPrice: BigNumberish,
        gasToken: AddressLike,
        refundReceiver: AddressLike,
        signatures: BytesLike,
        executor: AddressLike
    ], [
        void
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    txNonces: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "checkAfterExecution"): TypedContractMethod<[
        txHash: BytesLike,
        success: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "checkTransaction"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        operation: BigNumberish,
        safeTxGas: BigNumberish,
        baseGas: BigNumberish,
        gasPrice: BigNumberish,
        gasToken: AddressLike,
        refundReceiver: AddressLike,
        signatures: BytesLike,
        executor: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "txNonces"): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
    getEvent(key: "GasUsage"): TypedContractEvent<GasUsageEvent.InputTuple, GasUsageEvent.OutputTuple, GasUsageEvent.OutputObject>;
    getEvent(key: "TransactionDetails"): TypedContractEvent<TransactionDetailsEvent.InputTuple, TransactionDetailsEvent.OutputTuple, TransactionDetailsEvent.OutputObject>;
    filters: {
        "GasUsage(address,bytes32,uint256,bool)": TypedContractEvent<GasUsageEvent.InputTuple, GasUsageEvent.OutputTuple, GasUsageEvent.OutputObject>;
        GasUsage: TypedContractEvent<GasUsageEvent.InputTuple, GasUsageEvent.OutputTuple, GasUsageEvent.OutputObject>;
        "TransactionDetails(address,bytes32,address,uint256,bytes,uint8,uint256,bool,uint256,bytes,address)": TypedContractEvent<TransactionDetailsEvent.InputTuple, TransactionDetailsEvent.OutputTuple, TransactionDetailsEvent.OutputObject>;
        TransactionDetails: TypedContractEvent<TransactionDetailsEvent.InputTuple, TransactionDetailsEvent.OutputTuple, TransactionDetailsEvent.OutputObject>;
    };
}
