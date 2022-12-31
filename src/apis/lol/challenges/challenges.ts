import { Regions, Levels } from '../../../constants'
import { endpointsChallengesV1 } from '../../../endpoints'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * Challenges methods
 */
export class ChallengesApi extends BaseApiLol {

  /**
   * Get config
   */
  public async getConfig (region: Regions) {
    return this.request(region, endpointsChallengesV1.getConfig)
  }

  /**
   * Get percentiles
   */
  getPercentiles (region: Regions) {
    return this.request(region, endpointsChallengesV1.getPercentiles)
  }

  /**
   * Get getChallengePercentile by challengeId
   * @param challengeId
   */
  getChallengeConfig (region: Regions, challengeId: number) {
    const params = {
      challengeId
    }
    return this.request(region, endpointsChallengesV1.getChallengeConfig, params)
  }

  /**
   * Get Leaderboards By Level
   * @param challengeId
   * @param level rank tier
   */
  getLeaderboardsByLevel (region: Regions, challengeId: number, level: Levels) {
    const params = {
      challengeId, level
    }
    return this.request(region, endpointsChallengesV1.getLeaderboardsByLevel, params)
  }

  /**
   * Get Challenge Percentiles
   * @param challengeId
   */
  getChallengePercentiles (region: Regions, challengeId: number) {
    const params = {
      challengeId
    }
    return this.request(region, endpointsChallengesV1.getChallengePercentile, params)
  }

  /**
   * Get player data
   * @param puuid
   */
  getPlayerData (region: Regions, puuid: string) {
    const params = {
      puuid
    }
    return this.request(region, endpointsChallengesV1.getPlayerData, params)
  }
}
