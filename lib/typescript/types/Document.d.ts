import { QueryDocumentSnapshot } from '@firebase/firestore-types';
export declare type Document<T = {}> = T & {
    id: string;
    exists?: boolean;
    hasPendingWrites?: boolean;
    __snapshot?: QueryDocumentSnapshot;
};
export declare type AllowType<O extends object, Allowed> = {
    [K in keyof O]: O[K] | Allowed;
};
