import { BaseApiRiot } from './base/base.api.riot';
import { AccountApi } from './account/account';
/**
 * Riot Api
 */
export declare class RiotApi extends BaseApiRiot {
    /**
     * Account methods
     */
    readonly Account: AccountApi;
}
