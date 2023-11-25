"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.AccountApi = void 0;
const _ = __importStar(require("lodash"));
const endpoints_1 = require("../../../endpoints/endpoints");
const account_find_1 = require("../../../constants/account.find");
const base_api_riot_1 = require("../../riot/base/base.api.riot");
/**
 * Account methods
 */
class AccountApi extends base_api_riot_1.BaseApiRiot {
    parsePath(endpoint, by) {
        let { path } = endpoint;
        return path;
    }
    /**
     * Get by name
     * @param accountName Account name
     * @param region Riot region
     */
    getByGameNameAndTagLine(gameName, tagLine, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = _.cloneDeep(endpoints_1.endpointsAccountV1.GetAccount);
            const by = account_find_1.FindAccountBy.RIOT_ID;
            endpoint.path = this.parsePath(endpoint, by);
            const params = {
                accountName: gameName + '/' + tagLine,
                by
            };
            return this.request(region, endpoint, params);
        });
    }
    /**
     * Get by PUUID
     * @param puuid
     * @param region Riot region
     */
    getByPUUID(puuid, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = _.cloneDeep(endpoints_1.endpointsAccountV1.GetAccount);
            const by = account_find_1.FindAccountBy.RIOT_ID;
            endpoint.path = this.parsePath(endpoint, by);
            const params = {
                accountName: puuid,
                by
            };
            return this.request(region, endpoint, params);
        });
    }
}
exports.AccountApi = AccountApi;
