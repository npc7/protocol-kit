/// <reference types="node" />
import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type { Callback, NonPayableTransactionObject, BlockType, ContractEventLog, BaseContract } from "../../../types";
export interface EventOptions {
    filter?: object;
    fromBlock?: BlockType;
    topics?: string[];
}
export type ChangedMasterCopy = ContractEventLog<{
    masterCopy: string;
    0: string;
}>;
export interface SocialRecoveryModule extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): SocialRecoveryModule;
    clone(): SocialRecoveryModule;
    methods: {
        NAME(): NonPayableTransactionObject<string>;
        VERSION(): NonPayableTransactionObject<string>;
        changeMasterCopy(_masterCopy: string): NonPayableTransactionObject<void>;
        confirmTransaction(dataHash: string | number[]): NonPayableTransactionObject<void>;
        friends(arg0: number | string | BN): NonPayableTransactionObject<string>;
        getDataHash(data: string | number[]): NonPayableTransactionObject<string>;
        isConfirmed(arg0: string | number[], arg1: string): NonPayableTransactionObject<boolean>;
        isConfirmedByRequiredFriends(dataHash: string | number[]): NonPayableTransactionObject<boolean>;
        isExecuted(arg0: string | number[]): NonPayableTransactionObject<boolean>;
        isFriend(arg0: string): NonPayableTransactionObject<boolean>;
        manager(): NonPayableTransactionObject<string>;
        recoverAccess(prevOwner: string, oldOwner: string, newOwner: string): NonPayableTransactionObject<void>;
        setup(_friends: string[], _threshold: number | string | BN): NonPayableTransactionObject<void>;
        threshold(): NonPayableTransactionObject<string>;
    };
    events: {
        ChangedMasterCopy(cb?: Callback<ChangedMasterCopy>): EventEmitter;
        ChangedMasterCopy(options?: EventOptions, cb?: Callback<ChangedMasterCopy>): EventEmitter;
        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
    };
    once(event: "ChangedMasterCopy", cb: Callback<ChangedMasterCopy>): void;
    once(event: "ChangedMasterCopy", options: EventOptions, cb: Callback<ChangedMasterCopy>): void;
}
