import { AccountApi } from "../riot/account/account";
import { BaseApiLol } from "./base/base.api.lol";
import { ChallengesApi } from "./challenges/challenges";
import { ChampionApi } from "./champion/champion";
import { ClashApi } from "./clash/clash.api.lol";
import { DataDragonService } from "./dataDragon/DataDragonService";
import { LeagueApi } from "./league/league";
import { MatchApi } from "./match/match";
import { MatchV5Api } from "./match/match-v5";
import { SeedApi } from "./seed/seed";
import { SpectatorApi } from "./spectator/spectator";
import { StatusApi } from "./status/status";
import { StatusV4Api } from "./status/status-v4";
import { SummonerApi } from "./summoner/summoner";
import { ThirdPartyCode } from "./thirdPartyCode/thirdPartyCode";

/**
 * Classic league of legends api
 */
export class LolApi extends BaseApiLol {
	/**
	 * Account methods
	 */
	public readonly Account = new AccountApi(this.getParam());
	/**
	 * Match methods
	 * @deprecated use v5 instead
	 */
	public readonly Match = new MatchApi(this.getParam());
	/**
	 * MatchV5 methods
	 */
	public readonly MatchV5 = new MatchV5Api(this.getParam());
	/**
	 * League methods
	 */
	public readonly League = new LeagueApi(this.getParam());
	/**
	 * Summoner methods
	 */
	public readonly Summoner = new SummonerApi(this.getParam());
	/**
	 * Challenges methods
	 */
	public readonly Challenges = new ChallengesApi(this.getParam());
	/**
	 * Third Party methods
	 */
	public readonly ThirdPartyCode = new ThirdPartyCode(this.getParam());
	/**
	 * Champion mastery
	 */
	public readonly Champion = new ChampionApi(this.getParam());
	/**
	 * Spectator methods
	 */
	public readonly Spectator = new SpectatorApi(this.getParam());
	/**
	 * Status methods
	 * @deprecated Use StatusV4 instead
	 */
	public readonly Status = new StatusApi(this.getParam());
	/**
	 * StatusV4 methods
	 */
	public readonly StatusV4 = new StatusV4Api(this.getParam());
	/**
	 * Clash methods
	 */
	public readonly Clash = new ClashApi(this.getParam());
	/**
	 * Data dragon
	 */
	public readonly DataDragon = new DataDragonService();
	/**
	 * Seed methods
	 */
	public readonly Seed = new SeedApi();
}
