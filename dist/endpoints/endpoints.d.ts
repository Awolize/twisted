export interface IEndpoint {
    path: string;
    version: number;
    prefix: string;
}
interface IEndpoints {
    [key: string]: IEndpoint;
}
export declare const endpointsV5: IEndpoints;
export declare const endpointsV4: IEndpoints;
export declare const endpointsV3: IEndpoints;
export declare const endpointsTFTV1: IEndpoints;
export declare const endpointsClashV1: IEndpoints;
export declare const endpointsChallengesV1: IEndpoints;
export declare const endpointsAccountV1: IEndpoints;
export {};
