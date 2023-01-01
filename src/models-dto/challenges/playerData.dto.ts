import { ChallengeV1DTO } from "./challenges.dto";
import { Levels } from "../../constants";

export class Points {
    /**
     * Level of the category points.
     */
    public readonly level: Levels; // should this be tier instead?
    /**
     * Current number of points in the category.
     */
    public readonly current: number;
    /**
     * Maximum number of points in the category.
     */
    public readonly max: number;
    /**
     * Percentile of the category points.
     */
    public readonly percentile: number;
}

export interface Preferences {
    bannerAccent: string;
    title: string;
    challengeIds: number[];
}

export class ProfileV1DTO {
    /**
     * Total points data.
     */
    public readonly totalPoints: Points;
    /**
     * Category points data.
     */
    public readonly categoryPoints: { [key: string]: Points };
    /**
     * List of challenges.
     */
    public readonly challenges: ChallengeV1DTO[];
    /**
     * Preferences.
     */
    public readonly preferences: Preferences;
}
