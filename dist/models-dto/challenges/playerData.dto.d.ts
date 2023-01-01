import { ChallengeV1DTO } from "./challenges.dto";
import { Levels } from "../../constants";
export declare class Points {
    /**
     * Level of the category points.
     */
    readonly level: Levels;
    /**
     * Current number of points in the category.
     */
    readonly current: number;
    /**
     * Maximum number of points in the category.
     */
    readonly max: number;
    /**
     * Percentile of the category points.
     */
    readonly percentile: number;
}
export interface Preferences {
    bannerAccent: string;
    title: string;
    challengeIds: number[];
}
export declare class ProfileV1DTO {
    /**
     * Total points data.
     */
    readonly totalPoints: Points;
    /**
     * Category points data.
     */
    readonly categoryPoints: {
        [key: string]: Points;
    };
    /**
     * List of challenges.
     */
    readonly challenges: ChallengeV1DTO[];
    /**
     * Preferences.
     */
    readonly preferences: Preferences;
}
