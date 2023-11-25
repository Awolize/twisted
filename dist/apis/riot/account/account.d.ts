import { AccountDTO } from '../../../models-dto/accounts/account.dto';
import { Regions } from '../../../constants';
import { BaseApiRiot } from '../../riot/base/base.api.riot';
/**
 * Account methods
 */
export declare class AccountApi extends BaseApiRiot {
    private parsePath;
    /**
     * Get by name
     * @param accountName Account name
     * @param region Riot region
     */
    getByGameNameAndTagLine(gameName: string, tagLine: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<AccountDTO>>;
    /**
     * Get by PUUID
     * @param puuid
     * @param region Riot region
     */
    getByPUUID(puuid: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<AccountDTO>>;
}
