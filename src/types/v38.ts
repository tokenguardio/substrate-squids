import type {Result, Option} from './support'

export interface VersionChange {
    versionIncoming: number
    session: number
}

export interface BanInfo {
    reason: BanReason
    start: number
}

export interface BanConfig {
    minimalExpectedPerformance: number
    underperformedSessionCountThreshold: number
    cleanSessionCounterDelay: number
    banPeriod: number
}

export type BanReason = BanReason_InsufficientUptime | BanReason_OtherReason

export interface BanReason_InsufficientUptime {
    __kind: 'InsufficientUptime'
    value: number
}

export interface BanReason_OtherReason {
    __kind: 'OtherReason'
    value: Uint8Array
}
