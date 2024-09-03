import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const issue =  {
    name: 'Bonds.issue',
    /**
     * Issue new fungible bonds.
     * New asset id is registered and assigned to the bonds.
     * The number of bonds the issuer receives is 1:1 to the `amount` of the underlying asset
     * minus the protocol fee.
     * The bond asset is registered with the empty string for the asset name,
     * and with the same existential deposit as of the underlying asset.
     * Bonds can be redeemed for the underlying asset once mature.
     * Protocol fee is applied to the amount, and transferred to `T::FeeReceiver`.
     * When issuing new bonds with the underlying asset and maturity that matches existing bonds,
     * new amount of these existing bonds is issued, instead of registering new bonds.
     * It's possible to issue new bonds for bonds that are already mature.
     * 
     * Parameters:
     * - `origin`: issuer of new bonds, needs to be `T::IssueOrigin`
     * - `asset_id`: underlying asset id
     * - `amount`: the amount of the underlying asset
     * - `maturity`: Unix time in milliseconds, when the bonds will be mature.
     * 
     * Emits `BondTokenCreated` event when successful and new bonds were registered.
     * Emits `BondsIssued` event when successful.
     * 
     */
    v176: new CallType(
        'Bonds.issue',
        sts.struct({
            assetId: sts.number(),
            amount: sts.bigint(),
            maturity: sts.bigint(),
        })
    ),
}

export const redeem =  {
    name: 'Bonds.redeem',
    /**
     * Redeem bonds for the underlying asset.
     * The amount of the underlying asset the `origin` receives is 1:1 to the `amount` of the bonds.
     * Anyone who holds the bonds is able to redeem them.
     * Bonds can be both partially or fully redeemed.
     * 
     * Parameters:
     * - `origin`: account id
     * - `asset_id`: bond asset id
     * - `amount`: the amount of the bonds to redeem for the underlying asset
     * 
     * Emits `BondsRedeemed` event when successful.
     * 
     */
    v176: new CallType(
        'Bonds.redeem',
        sts.struct({
            bondId: sts.number(),
            amount: sts.bigint(),
        })
    ),
}
