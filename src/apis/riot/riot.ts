import { BaseApiRiot } from "./base/base.api.riot";
import { AccountApi } from "./account/account";

/**
 * Riot Api
 */
export class RiotApi extends BaseApiRiot {
	/**
	 * Account methods
	 */
	public readonly Account = new AccountApi(this.getParam());
}
