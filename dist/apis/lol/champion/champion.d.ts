import { Regions } from "../../../constants";
import { ChampionMasteryDTO } from "../../../models-dto/champion/champion-mastery.dto";
import { ChampionsScoreDTO } from "../../../models-dto/champion/champions-score.dto";
import { BaseApiLol } from "../base/base.api.lol";
/**
 * Third party methods
 */
export declare class ChampionApi extends BaseApiLol {
	/**
	 * Get champion rotation
	 * @param region Riot region
	 */
	rotation(
		region: Regions,
	): Promise<import("../../../models-dto").ApiResponseDTO<unknown>>;
	/**
	 * Champion mastery by puuid
	 * @param encryptedPUUID
	 * @param region
	 */
	masteryByPUUID(
		encryptedPUUID: string,
		region: Regions,
	): Promise<
		import("../../../models-dto").ApiResponseDTO<ChampionMasteryDTO[]>
	>;
	/**
	 * Champion mastery by summoner
	 * @param encryptedPUUID
	 * @param region
	 */
	masteryByPUUIDChampion(
		encryptedPUUID: string,
		championId: number,
		region: Regions,
	): Promise<import("../../../models-dto").ApiResponseDTO<ChampionMasteryDTO>>;
	/**
	 * Champions mastery score
	 * @param encryptedPUUID
	 * @param region
	 */
	championsScore(
		encryptedPUUID: string,
		region: Regions,
	): Promise<ChampionsScoreDTO>;
}
