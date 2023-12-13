import { Levels } from "../../constants";
import { ChallengeV1DTO } from "./challenges.dto";
import { Level } from "./enum/enum.challenges";
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
export declare class PercentilesV1DTO {
    /**
     * Total points data.
     */
    readonly percentiles: Record<Level, number>;
}
type LocalizedNames = {
    [key in "ar_AE" | "cs_CZ" | "de_DE" | "el_GR" | "en_AU" | "en_GB" | "en_PH" | "en_SG" | "en_US" | "es_AR" | "es_ES" | "es_MX" | "fr_FR" | "hu_HU" | "it_IT" | "ja_JP" | "ko_KR" | "pl_PL" | "pt_BR" | "ru_RU" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN" | "zh_TW"]: {
        description: string;
        name: string;
        shortDescription: string;
    };
};
export declare class ChallengeConfigV1DTO {
    readonly id: number;
    readonly localizedNames: LocalizedNames;
    readonly state: "ENABLED" | "DISABLED";
    readonly leaderboard: boolean;
    readonly endTimestamp?: number;
    readonly thresholds: {
        [key: string]: number;
    };
}
export declare class ChallengeLeaderboardEntryV1DTO {
    readonly position: number;
    readonly puuid: string;
    readonly value: number;
}
export {};
