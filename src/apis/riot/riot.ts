import { AccountApi } from "./account/account";
import { BaseApiRiot } from "./base/base.api.riot";

/**
 * Riot Api
 */
export class RiotApi extends BaseApiRiot {
	/**
	 * Account methods
	 */
	public readonly Account = new AccountApi(this.getParam());
}
