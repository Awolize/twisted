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
exports.ChampionApi = void 0;
const endpoints_1 = require("../../../endpoints/endpoints");
const base_api_lol_1 = require("../base/base.api.lol");
/**
 * Third party methods
 */
class ChampionApi extends base_api_lol_1.BaseApiLol {
    /**
     * Get champion rotation
     * @param region Riot region
     */
    rotation(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(region, endpoints_1.endpointsV3.ChampionRotation);
        });
    }
    /**
     * Champion mastery by summoner
     * @param encryptedPUUID
     * @param region
     */
    masteryBySummoner(encryptedPUUID, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                encryptedPUUID,
            };
            return this.request(region, endpoints_1.endpointsV4.ChampionMasteryByPUUID, params);
        });
    }
    /**
     * Champion mastery by summoner
     * @param encryptedPUUID
     * @param region
     */
    masteryBySummonerChampion(encryptedPUUID, championId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                encryptedPUUID,
                championId,
            };
            return this.request(region, endpoints_1.endpointsV4.ChampionMasteryByPUUIDChampion, params);
        });
    }
    /**
     * Champions mastery score
     * @param encryptedPUUID
     * @param region
     */
    championsScore(encryptedPUUID, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                encryptedPUUID,
            };
            let { response: score } = yield this.request(region, endpoints_1.endpointsV4.ChampionsScore, params);
            if (typeof score !== "number") {
                score = 0;
            }
            return {
                score,
            };
        });
    }
}
exports.ChampionApi = ChampionApi;
