import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xbb42a8a8f4c8478c402eda3bca3cf86c6495e9e5c9eb41900c69e05ce15217bb",
    "language": "ink! 4.0.1",
    "compiler": "rustc 1.66.1",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "2.0.2",
      "rust_toolchain": "stable-x86_64-unknown-linux-gnu",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "flipper",
    "version": "0.1.0",
    "authors": [
      "[your_name] <[your_email]>"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [
          {
            "label": "init_value",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          "Constructor that initializes the `bool` value to the given `init_value`."
        ],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 1
        },
        "selector": "0x9bae9d5e"
      },
      {
        "args": [],
        "docs": [
          "Constructor that initializes the `bool` value to `false`.",
          "",
          "Constructors can delegate to other constructors."
        ],
        "label": "default",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 1
        },
        "selector": "0xed4b9d1b"
      }
    ],
    "docs": [],
    "events": [],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 3
    },
    "messages": [
      {
        "args": [],
        "docs": [
          " A message that can be called on instantiated contracts.",
          " This one flips the value of the stored `bool` from `true`",
          " to `false` and vice versa."
        ],
        "label": "flip",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 1
        },
        "selector": "0x633aa551"
      },
      {
        "args": [],
        "docs": [
          " Simply returns the current value of our `bool`."
        ],
        "label": "get",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 4
        },
        "selector": "0x2f865bd9"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "value"
            }
          ],
          "name": "Flipper"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 2
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 3
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 2
          },
          {
            "name": "E",
            "type": 3
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 1,
                "name": "CouldNotReadInput"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "LangError"
        ]
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 3
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          },
          {
            "name": "E",
            "type": 3
          }
        ],
        "path": [
          "Result"
        ]
      }
    }
  ],
  "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(hex: string): Event {
    return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
    return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
    return _abi.decodeConstructor(hex)
}

export interface Chain {
    client: {
        call: <T=any>(method: string, params?: unknown[]) => Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: string, private blockHash?: string) { }

    get(): Promise<Result<bool, LangError>> {
        return this.stateCall('0x2f865bd9', [])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = never

export type Message = Message_flip | Message_get

/**
 *  A message that can be called on instantiated contracts.
 *  This one flips the value of the stored `bool` from `true`
 *  to `false` and vice versa.
 */
export interface Message_flip {
    __kind: 'flip'
}

/**
 *  Simply returns the current value of our `bool`.
 */
export interface Message_get {
    __kind: 'get'
}

export type Constructor = Constructor_new | Constructor_default

/**
 * Constructor that initializes the `bool` value to the given `init_value`.
 */
export interface Constructor_new {
    __kind: 'new'
    initValue: bool
}

/**
 * Constructor that initializes the `bool` value to `false`.
 * 
 * Constructors can delegate to other constructors.
 */
export interface Constructor_default {
    __kind: 'default'
}

export type bool = boolean

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
