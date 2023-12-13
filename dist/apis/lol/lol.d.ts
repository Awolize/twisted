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
export declare class LolApi extends BaseApiLol {
    /**
     * Account methods
     */
    readonly Account: AccountApi;
    /**
     * Match methods
     * @deprecated use v5 instead
     */
    readonly Match: MatchApi;
    /**
     * MatchV5 methods
     */
    readonly MatchV5: MatchV5Api;
    /**
     * League methods
     */
    readonly League: LeagueApi;
    /**
     * Summoner methods
     */
    readonly Summoner: SummonerApi;
    /**
     * Challenges methods
     */
    readonly Challenges: ChallengesApi;
    /**
     * Third Party methods
     */
    readonly ThirdPartyCode: ThirdPartyCode;
    /**
     * Champion mastery
     */
    readonly Champion: ChampionApi;
    /**
     * Spectator methods
     */
    readonly Spectator: SpectatorApi;
    /**
     * Status methods
     * @deprecated Use StatusV4 instead
     */
    readonly Status: StatusApi;
    /**
     * StatusV4 methods
     */
    readonly StatusV4: StatusV4Api;
    /**
     * Clash methods
     */
    readonly Clash: ClashApi;
    /**
     * Data dragon
     */
    readonly DataDragon: DataDragonService;
    /**
     * Seed methods
     */
    readonly Seed: SeedApi;
}
