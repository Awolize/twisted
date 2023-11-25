import * as _ from 'lodash'
import { endpointsAccountV1, IEndpoint } from '../../../endpoints/endpoints'
import { AccountDTO } from '../../../models-dto/accounts/account.dto'
import { Regions, regionToRegionGroup } from '../../../constants'
import { FindAccountBy } from '../../../constants/account.find'
import { BaseApiRiot } from '../../riot/base/base.api.riot'

/**
 * Account methods
 */
export class AccountApi extends BaseApiRiot {
  private parsePath (endpoint: IEndpoint, by: FindAccountBy) {
    let { path } = endpoint
    return path
  }

  /**
   * Get by name
   * @param accountName Account name
   * @param region Riot region
   */
  public async getByGameNameAndTagLine (
    gameName: string,
    tagLine: string,
    region: Regions
  ) {
    const endpoint = _.cloneDeep(endpointsAccountV1.GetAccount)
    const by = FindAccountBy.RIOT_ID
    endpoint.path = this.parsePath(endpoint, by)
    const params = {
      accountName: gameName + '/' + tagLine,
      by
    }

    return this.request<AccountDTO>(
      regionToRegionGroup(region),
      endpoint,
      params
    )
  }
  /**
   * Get by PUUID
   * @param puuid
   * @param region Riot region
   */
  public async getByPUUID (puuid: string, region: Regions) {
    const endpoint = _.cloneDeep(endpointsAccountV1.GetAccount)
    const by = FindAccountBy.RIOT_ID
    endpoint.path = this.parsePath(endpoint, by)
    const params = {
      accountName: puuid,
      by
    }

    return this.request<AccountDTO>(
      regionToRegionGroup(region),
      endpoint,
      params
    )
  }
}
