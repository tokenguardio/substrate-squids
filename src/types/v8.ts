import type {Result, Option} from './support'

export type CurrencyId = CurrencyId_Token | CurrencyId_DEXShare | CurrencyId_ERC20

export interface CurrencyId_Token {
    __kind: 'Token'
    value: TokenSymbol
}

export interface CurrencyId_DEXShare {
    __kind: 'DEXShare'
    value: [TokenSymbol, TokenSymbol]
}

export interface CurrencyId_ERC20 {
    __kind: 'ERC20'
    value: Uint8Array
}

export type TokenSymbol = TokenSymbol_REEF | TokenSymbol_RUSD

export interface TokenSymbol_REEF {
    __kind: 'REEF'
}

export interface TokenSymbol_RUSD {
    __kind: 'RUSD'
}
