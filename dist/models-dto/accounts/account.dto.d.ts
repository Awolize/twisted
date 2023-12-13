/**
 * Summoner basic info
 */
export declare class AccountDTO {
    /**
     * Encrypted PUUID. Exact length of 78 characters.
     */
    readonly puuid: string;
    /**
     *  The users in game name. This field may be excluded from the response if the account doesn't have a gameName.
     */
    readonly gameName?: string;
    /**
     *  The users tag line. This field may be excluded from the response if the account doesn't have a gameName.
     */
    readonly tagLine?: string;
}
