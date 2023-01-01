/**
 * Challenge basic info
 */
export declare class ChallengeV1DTO {
    /**
     * ID of the challenge.
     */
    readonly challengeId: number;
    /**
     * Percentile of the challenge.
     */
    readonly percentile: number;
    /**
     * Level of the challenge.
     */
    readonly level: string;
    /**
     * Value of the challenge.
     */
    readonly value: number;
    /**
     * Time when the challenge was achieved, specified as epoch milliseconds.
     */
    readonly achievedTime: number;
    /**
     * Optional: position of the challenge.
     */
    readonly position?: number;
    /**
     * Optional: number of players in the challenge's level.
     */
    readonly playersInLevel?: number;
}
