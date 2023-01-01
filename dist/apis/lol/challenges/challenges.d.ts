import { Regions, Levels } from '../../../constants';
import { BaseApiLol } from '../base/base.api.lol';
/**
 * Challenges methods
 */
export declare class ChallengesApi extends BaseApiLol {
    /**
     * Get config
     */
    getConfig(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<undefined>>;
    /**
     * Get percentiles
     */
    getPercentiles(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<unknown>>;
    /**
     * Get getChallengePercentile by challengeId
     * @param challengeId
     */
    getChallengeConfig(challengeId: number, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<unknown>>;
    /**
     * Get Leaderboards By Level
     * @param challengeId
     * @param level rank tier
     */
    getLeaderboardsByLevel(challengeId: number, level: Levels, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<unknown>>;
    /**
     * Get Challenge Percentiles
     * @param challengeId
     */
    getChallengePercentiles(challengeId: number, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<unknown>>;
    /**
     * Get player data
     * @param puuid
     */
    getPlayerData(puuid: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<unknown>>;
}
