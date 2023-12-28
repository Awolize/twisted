import { Regions } from "../../../constants";
import { endpointsV4, endpointsV3 } from "../../../endpoints/endpoints";
import { ChampionMasteryDTO } from "../../../models-dto/champion/champion-mastery.dto";
import { ChampionsScoreDTO } from "../../../models-dto/champion/champions-score.dto";
import { BaseApiLol } from "../base/base.api.lol";

/**
 * Third party methods
 */

export class ChampionApi extends BaseApiLol {
	/**
	 * Get champion rotation
	 * @param region Riot region
	 */
	public async rotation(region: Regions) {
		return this.request(region, endpointsV3.ChampionRotation);
	}
	/**
	 * Champion mastery by summoner
	 * @param encryptedPUUID
	 * @param region
	 */
	public async masteryByPUUID(encryptedPUUID: string, region: Regions) {
		const params = {
			encryptedPUUID,
		};
		return this.request<ChampionMasteryDTO[]>(
			region,
			endpointsV4.ChampionMasteryByPUUID,
			params,
		);
	}
	/**
	 * Champion mastery by summoner
	 * @param encryptedPUUID
	 * @param region
	 */
	public async masteryByPUUIDChampion(
		encryptedPUUID: string,
		championId: number,
		region: Regions,
	) {
		const params = {
			encryptedPUUID,
			championId,
		};
		return this.request<ChampionMasteryDTO>(
			region,
			endpointsV4.ChampionMasteryByPUUIDChampion,
			params,
		);
	}
	/**
	 * Champions mastery score
	 * @param encryptedPUUID
	 * @param region
	 */
	public async championsScore(
		encryptedPUUID: string,
		region: Regions,
	): Promise<ChampionsScoreDTO> {
		const params = {
			encryptedPUUID,
		};
		let { response: score } = await this.request<number | undefined>(
			region,
			endpointsV4.ChampionsScore,
			params,
		);
		if (typeof score !== "number") {
			score = 0;
		}
		return {
			score,
		};
	}
}
