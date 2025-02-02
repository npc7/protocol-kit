/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Sign_message_lib,
  Sign_message_libInterface,
} from "../Sign_message_lib";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
    ],
    name: "SignMsg",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "getMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "signMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class Sign_message_lib__factory {
  static readonly abi = _abi;
  static createInterface(): Sign_message_libInterface {
    return new Interface(_abi) as Sign_message_libInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Sign_message_lib {
    return new Contract(address, _abi, runner) as unknown as Sign_message_lib;
  }
}
