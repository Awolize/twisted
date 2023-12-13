"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotApi = void 0;
const account_1 = require("./account/account");
const base_api_riot_1 = require("./base/base.api.riot");
/**
 * Riot Api
 */
class RiotApi extends base_api_riot_1.BaseApiRiot {
    constructor() {
        super(...arguments);
        /**
         * Account methods
         */
        this.Account = new account_1.AccountApi(this.getParam());
    }
}
exports.RiotApi = RiotApi;
