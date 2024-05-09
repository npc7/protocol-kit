/// <reference types="node" />
import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type { Callback, NonPayableTransactionObject, BlockType, ContractEventLog, BaseContract } from "../../../../types";
export interface EventOptions {
    filter?: object;
    fromBlock?: BlockType;
    topics?: string[];
}
export type Approval = ContractEventLog<{
    owner: string;
    spender: string;
    value: string;
    0: string;
    1: string;
    2: string;
}>;
export type MinterAdded = ContractEventLog<{
    account: string;
    0: string;
}>;
export type MinterRemoved = ContractEventLog<{
    account: string;
    0: string;
}>;
export type Transfer = ContractEventLog<{
    from: string;
    to: string;
    value: string;
    0: string;
    1: string;
    2: string;
}>;
export interface ERC20Mintable extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): ERC20Mintable;
    clone(): ERC20Mintable;
    methods: {
        addMinter(account: string): NonPayableTransactionObject<void>;
        allowance(owner: string, spender: string): NonPayableTransactionObject<string>;
        approve(spender: string, amount: number | string | BN): NonPayableTransactionObject<boolean>;
        balanceOf(account: string): NonPayableTransactionObject<string>;
        decreaseAllowance(spender: string, subtractedValue: number | string | BN): NonPayableTransactionObject<boolean>;
        increaseAllowance(spender: string, addedValue: number | string | BN): NonPayableTransactionObject<boolean>;
        isMinter(account: string): NonPayableTransactionObject<boolean>;
        mint(account: string, amount: number | string | BN): NonPayableTransactionObject<boolean>;
        renounceMinter(): NonPayableTransactionObject<void>;
        totalSupply(): NonPayableTransactionObject<string>;
        transfer(recipient: string, amount: number | string | BN): NonPayableTransactionObject<boolean>;
        transferFrom(sender: string, recipient: string, amount: number | string | BN): NonPayableTransactionObject<boolean>;
    };
    events: {
        Approval(cb?: Callback<Approval>): EventEmitter;
        Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;
        MinterAdded(cb?: Callback<MinterAdded>): EventEmitter;
        MinterAdded(options?: EventOptions, cb?: Callback<MinterAdded>): EventEmitter;
        MinterRemoved(cb?: Callback<MinterRemoved>): EventEmitter;
        MinterRemoved(options?: EventOptions, cb?: Callback<MinterRemoved>): EventEmitter;
        Transfer(cb?: Callback<Transfer>): EventEmitter;
        Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;
        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
    };
    once(event: "Approval", cb: Callback<Approval>): void;
    once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;
    once(event: "MinterAdded", cb: Callback<MinterAdded>): void;
    once(event: "MinterAdded", options: EventOptions, cb: Callback<MinterAdded>): void;
    once(event: "MinterRemoved", cb: Callback<MinterRemoved>): void;
    once(event: "MinterRemoved", options: EventOptions, cb: Callback<MinterRemoved>): void;
    once(event: "Transfer", cb: Callback<Transfer>): void;
    once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
