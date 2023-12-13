/**
 * Summoner basic info
 */
export class AccountDTO {
	/**
	 * Encrypted PUUID. Exact length of 78 characters.
	 */
	public readonly puuid: string;
	/**
	 *  The users in game name. This field may be excluded from the response if the account doesn't have a gameName.
	 */
	public readonly gameName?: string;
	/**
	 *  The users tag line. This field may be excluded from the response if the account doesn't have a gameName.
	 */
	public readonly tagLine?: string;
}
