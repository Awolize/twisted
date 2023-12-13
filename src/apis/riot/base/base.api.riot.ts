import { BaseApi } from "../../../base/base";
import { BaseApiGames } from "../../../base/base.const";
import { RegionGroups, Regions } from "../../../constants";

export class BaseApiRiot extends BaseApi<RegionGroups | Regions> {
	protected readonly game: BaseApiGames = BaseApiGames.RIOT;
}
