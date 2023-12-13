"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengesApi = void 0;
const endpoints_1 = require("../../../endpoints");
const base_api_lol_1 = require("../base/base.api.lol");
/**
 * Challenges methods
 */
class ChallengesApi extends base_api_lol_1.BaseApiLol {
    /**
     * Get config
     */
    getConfig(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(region, endpoints_1.endpointsChallengesV1.GetConfig);
        });
    }
    /**
     * Get percentiles
     */
    getPercentiles(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(region, endpoints_1.endpointsChallengesV1.GetPercentiles);
        });
    }
    /**
     * Get getChallengePercentile by challengeId
     * @param challengeId
     */
    getChallengeConfig(challengeId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                challengeId,
            };
            return this.request(region, endpoints_1.endpointsChallengesV1.GetChallengeConfig, params);
        });
    }
    /**
     * Get Leaderboards By Level
     * @param challengeId
     * @param level rank tier
     */
    getLeaderboardsByLevel(challengeId, level, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                challengeId,
                level,
            };
            return this.request(region, endpoints_1.endpointsChallengesV1.GetLeaderboardsByLevel, params);
        });
    }
    /**
     * Get Challenge Percentiles
     * @param challengeId
     */
    getChallengePercentiles(challengeId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                challengeId,
            };
            return this.request(region, endpoints_1.endpointsChallengesV1.GetChallengePercentiles, params);
        });
    }
    /**
     * Get player data
     * @param puuid
     */
    getPlayerData(puuid, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                puuid,
            };
            return this.request(region, endpoints_1.endpointsChallengesV1.GetPlayerData, params);
        });
    }
}
exports.ChallengesApi = ChallengesApi;
