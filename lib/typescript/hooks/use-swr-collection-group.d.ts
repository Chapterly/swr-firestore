import { Document } from '../types';
import { CollectionQueryType, CollectionSWROptions } from './use-swr-collection';
/**
 *
 * 🚨 Experimental. I recommend only using this only to test for now. There are some edge cases still being figured out for caching collection groups.
 */
export declare const useExperimentalCollectionGroup: <Data extends object = {}, Doc extends {
    id: string;
    exists?: boolean | undefined;
    hasPendingWrites?: boolean | undefined;
    __snapshot?: import("@firebase/firestore-types").QueryDocumentSnapshot<import("@firebase/firestore-types").DocumentData> | undefined;
} = Document<Data>>(collection: string | null, query: Pick<CollectionQueryType<Data>, "where" | "orderBy" | "limit" | "startAt" | "endAt" | "startAfter" | "endBefore">, swrOptions: CollectionSWROptions<Doc>) => {
    data: Document<Data>[] | null | undefined;
    isValidating: boolean;
    revalidate: () => Promise<boolean>;
    mutate: (data?: Document<Data>[] | Promise<Document<Data>[] | null> | ((currentValue: Document<Data>[] | null) => Document<Data>[] | null) | null | undefined, shouldRevalidate?: boolean | undefined) => Promise<Document<Data>[] | null | undefined>;
    error: any;
    add: (data: Data | Data[]) => Promise<void> | null;
    loading: boolean;
    unsubscribe: (() => void) | null;
};
export declare const useCollectionGroup: <Data extends object = {}, Doc extends {
    id: string;
    exists?: boolean | undefined;
    hasPendingWrites?: boolean | undefined;
    __snapshot?: import("@firebase/firestore-types").QueryDocumentSnapshot<import("@firebase/firestore-types").DocumentData> | undefined;
} = Document<Data>>(collection: string | null, query: Pick<CollectionQueryType<Data>, "where" | "orderBy" | "limit" | "startAt" | "endAt" | "startAfter" | "endBefore">, swrOptions: CollectionSWROptions<Doc>) => {
    data: Document<Data>[] | null | undefined;
    isValidating: boolean;
    revalidate: () => Promise<boolean>;
    mutate: (data?: Document<Data>[] | Promise<Document<Data>[] | null> | ((currentValue: Document<Data>[] | null) => Document<Data>[] | null) | null | undefined, shouldRevalidate?: boolean | undefined) => Promise<Document<Data>[] | null | undefined>;
    error: any;
    add: (data: Data | Data[]) => Promise<void> | null;
    loading: boolean;
    unsubscribe: (() => void) | null;
};
