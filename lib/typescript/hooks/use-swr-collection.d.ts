import { ConfigInterface } from 'swr';
import { FieldPath, OrderByDirection, WhereFilterOp } from '@firebase/firestore-types';
import { Document } from '../types';
import { FirestoreSWRError } from "../classes/FirestoreSWRError";
declare type KeyHack = string & {};
declare type OrderByArray<Doc extends object = {}, Key = keyof Doc> = [
    Key | FieldPath | KeyHack,
    OrderByDirection
];
declare type OrderByItem<Doc extends object = {}, Key = keyof Doc> = OrderByArray<Doc> | Key | KeyHack;
declare type OrderByType<Doc extends object = {}> = OrderByItem<Doc> | OrderByArray<Doc>[];
declare type WhereItem<Doc extends object = {}, Key = keyof Doc> = [
    Key | FieldPath | KeyHack,
    WhereFilterOp,
    unknown
];
declare type WhereArray<Doc extends object = {}> = WhereItem<Doc>[];
declare type WhereType<Doc extends object = {}> = WhereItem<Doc> | WhereArray<Doc>;
export declare type CollectionQueryType<Doc extends object = {}> = {
    limit?: number;
    orderBy?: OrderByType<Doc>;
    where?: WhereType<Doc>;
    isCollectionGroup?: boolean;
    /**
     * For now, this can only be a number, since it has to be JSON serializable.
     *
     * **TODO** allow DocumentSnapshot here too. This will probably be used with a useStaticCollection hook in the future.
     */
    startAt?: number;
    /**
     * For now, this can only be a number, since it has to be JSON serializable.
     *
     * **TODO** allow DocumentSnapshot here too. This will probably be used with a useStaticCollection hook in the future.
     */
    endAt?: number;
    /**
     * For now, this can only be a number, since it has to be JSON serializable.
     *
     * **TODO** allow DocumentSnapshot here too. This will probably be used with a useStaticCollection hook in the future.
     */
    startAfter?: number;
    /**
     * For now, this can only be a number, since it has to be JSON serializable.
     *
     * **TODO** allow DocumentSnapshot here too. This will probably be used with a useStaticCollection hook in the future.
     */
    endBefore?: number;
};
export declare const getCollection: <Doc extends {
    id: string;
    exists?: boolean | undefined;
    hasPendingWrites?: boolean | undefined;
    __snapshot?: import("@firebase/firestore-types").QueryDocumentSnapshot<import("@firebase/firestore-types").DocumentData> | undefined;
} = {
    id: string;
    exists?: boolean | undefined;
    hasPendingWrites?: boolean | undefined;
    __snapshot?: import("@firebase/firestore-types").QueryDocumentSnapshot<import("@firebase/firestore-types").DocumentData> | undefined;
}>(path: string, query?: CollectionQueryType<Doc>, { parseDates, ignoreFirestoreDocumentSnapshotField, }?: {
    parseDates?: (string | keyof Doc)[] | undefined;
    /**
     * If `true`, docs returned in `data` will not include the firestore `__snapshot` field. If `false`, it will include a `__snapshot` field. This lets you access the document snapshot, but makes the document not JSON serializable.
     *
     * Default: `false`
     */
    ignoreFirestoreDocumentSnapshotField?: boolean | undefined;
}) => Promise<Doc[]>;
export declare type CollectionSWROptions<Doc extends Document = Document> = ConfigInterface<Doc[] | null>;
/**
 * Call a Firestore Collection
 * @template Doc
 * @param path String if the document is ready. If it's not ready yet, pass `null`, and the request won't start yet.
 * @param [query] - Dictionary with options to query the collection.
 * @param [options] - Dictionary with option `listen`. If true, it will open a socket listener. Also takes any of SWR's options.
 */
export declare const useCollection: <Data extends object = {}, Doc extends {
    id: string;
    exists?: boolean | undefined;
    hasPendingWrites?: boolean | undefined;
    __snapshot?: import("@firebase/firestore-types").QueryDocumentSnapshot<import("@firebase/firestore-types").DocumentData> | undefined;
} = Document<Data>>(path: string | null, query?: CollectionQueryType<Data> & {
    /**
     * If `true`, sets up a real-time subscription to the Firestore backend.
     *
     * Default: `false`
     */
    listen?: boolean | undefined;
    /**
     * An array of key strings that indicate where there will be dates in the document.
     *
     * Example: if your dates are in the `lastUpdated` and `user.createdAt` fields, then pass `{parseDates: ["lastUpdated", "user.createdAt"]}`.
     *
     * This will automatically turn all Firestore dates into JS Date objects, removing the need to do `.toDate()` on your dates.
     */
    parseDates?: (string | keyof Doc)[] | undefined;
    /**
     * If `true`, docs returned in `data` will not include the firestore `__snapshot` field. If `false`, it will include a `__snapshot` field. This lets you access the document snapshot, but makes the document not JSON serializable.
     *
     * Default: `true`
     */
    ignoreFirestoreDocumentSnapshotField?: boolean | undefined;
}, options?: CollectionSWROptions<Doc> & {
    onSnapshotError?: ((error: FirestoreSWRError) => void) | undefined;
}) => {
    data: Doc[] | null | undefined;
    isValidating: boolean;
    revalidate: () => Promise<boolean>;
    mutate: (data?: Doc[] | Promise<Doc[] | null> | ((currentValue: Doc[] | null) => Doc[] | null) | null | undefined, shouldRevalidate?: boolean | undefined) => Promise<Doc[] | null | undefined>;
    error: any;
    add: (data: Data | Data[]) => Promise<void> | null;
    loading: boolean;
    /**
     * A function that, when called, unsubscribes the Firestore listener.
     *
     * The function can be null, so make sure to check that it exists before calling it.
     *
     * Note: This is not necessary to use. `useCollection` already unmounts the listener for you. This is only intended if you want to unsubscribe on your own.
     */
    unsubscribe: (() => void) | null;
};
export {};
