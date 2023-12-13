import { Levels, Regions } from "../../../constants";
import { ChallengeConfigV1DTO, ChallengeLeaderboardEntryV1DTO, PercentilesV1DTO, ProfileV1DTO } from "../../../models-dto/challenges/playerData.dto";
import { BaseApiLol } from "../base/base.api.lol";
/**
 * Challenges methods
 */
export declare class ChallengesApi extends BaseApiLol {
    /**
     * Get config
     */
    getConfig(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ChallengeConfigV1DTO[]>>;
    /**
     * Get percentiles
     */
    getPercentiles(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<PercentilesV1DTO[]>>;
    /**
     * Get getChallengePercentile by challengeId
     * @param challengeId
     */
    getChallengeConfig(challengeId: number, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ChallengeConfigV1DTO>>;
    /**
     * Get Leaderboards By Level
     * @param challengeId
     * @param level rank tier
     */
    getLeaderboardsByLevel(challengeId: number, level: Levels, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ChallengeLeaderboardEntryV1DTO>>;
    /**
     * Get Challenge Percentiles
     * @param challengeId
     */
    getChallengePercentiles(challengeId: number, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<PercentilesV1DTO>>;
    /**
     * Get player data
     * @param puuid
     */
    getPlayerData(puuid: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ProfileV1DTO>>;
}
