import { AccountApi } from "./account/account";
import { BaseApiRiot } from "./base/base.api.riot";
/**
 * Riot Api
 */
export declare class RiotApi extends BaseApiRiot {
    /**
     * Account methods
     */
    readonly Account: AccountApi;
}
