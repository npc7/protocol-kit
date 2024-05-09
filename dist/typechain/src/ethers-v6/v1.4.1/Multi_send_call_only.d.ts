import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface Multi_send_call_onlyInterface extends Interface {
    getFunction(nameOrSignature: "multiSend"): FunctionFragment;
    encodeFunctionData(functionFragment: "multiSend", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "multiSend", data: BytesLike): Result;
}
export interface Multi_send_call_only extends BaseContract {
    connect(runner?: ContractRunner | null): Multi_send_call_only;
    waitForDeployment(): Promise<this>;
    interface: Multi_send_call_onlyInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    multiSend: TypedContractMethod<[transactions: BytesLike], [void], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "multiSend"): TypedContractMethod<[transactions: BytesLike], [void], "payable">;
    filters: {};
}
