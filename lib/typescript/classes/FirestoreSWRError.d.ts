export declare class FirestoreSWRError extends Error {
    path: string;
    queryString?: string;
    constructor(message: string, path: string, queryString?: string);
}
