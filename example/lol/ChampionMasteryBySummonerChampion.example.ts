import { LolApi } from "../../src";
import { config } from "../config/config";

const api = new LolApi();

export async function championMasteryBySummonerByChampion() {
	const { region } = config;
	const {
		response: { id },
	} = await api.Summoner.getByName(config.summonerName, region);
	return await api.Champion.masteryBySummonerChampion(id, 1, region);
}
