import { ConfigInterface } from 'swr';
import type { SetOptions, FieldValue } from '@firebase/firestore-types';
import { AllowType, Document } from '../types/Document';
import { FirestoreSWRError } from "../classes/FirestoreSWRError";
declare type Options<Doc extends Document = Document> = {
    /**
     * If `true`, sets up a real-time subscription to the Firestore backend.
     *
     * Default: `false`
     */
    listen?: boolean;
    /**
     * An array of key strings that indicate where there will be dates in the document.
     *
     * Example: if your dates are in the `lastUpdated` and `user.createdAt` fields, then pass `{parseDates: ["lastUpdated", "user.createdAt"]}`.
     *
     * This will automatically turn all Firestore dates into JS Date objects, removing the need to do `.toDate()` on your dates.
     */
    parseDates?: (string | keyof Omit<Doc, 'id' | 'exists' | 'hasPendingWrites' | '__snapshot'>)[];
    /**
     * If `true`, doc returned in `data` will not include the firestore `__snapshot` field.
     *
     * If `false`, it will include a `__snapshot` field. This lets you access the document snapshot, but makes the document not JSON serializable.
     *
     * Default: `true`
     */
    ignoreFirestoreDocumentSnapshotField?: boolean;
    onSnapshotError?: (error: FirestoreSWRError) => void;
} & ConfigInterface<Doc | null>;
export declare const getDocument: <Doc extends {
    id: string;
    exists?: boolean | undefined;
    hasPendingWrites?: boolean | undefined;
    __snapshot?: import("@firebase/firestore-types").QueryDocumentSnapshot<import("@firebase/firestore-types").DocumentData> | undefined;
} = {
    id: string;
    exists?: boolean | undefined;
    hasPendingWrites?: boolean | undefined;
    __snapshot?: import("@firebase/firestore-types").QueryDocumentSnapshot<import("@firebase/firestore-types").DocumentData> | undefined;
}>(path: string, { parseDates, ignoreFirestoreDocumentSnapshotField, }?: {
    parseDates?: (string | Exclude<keyof Doc, "id" | "exists" | "hasPendingWrites" | "__snapshot">)[] | undefined;
    /**
     * If `true`, doc returned in `data` will not include the firestore `__snapshot` field.
     *
     * If `false`, it will include a `__snapshot` field. This lets you access the document snapshot, but makes the document not JSON serializable.
     *
     * Default: `true`
     */
    ignoreFirestoreDocumentSnapshotField?: boolean | undefined;
}) => Promise<Doc>;
export declare const useDocument: <Data extends object = {}, Doc extends {
    id: string;
    exists?: boolean | undefined;
    hasPendingWrites?: boolean | undefined;
    __snapshot?: import("@firebase/firestore-types").QueryDocumentSnapshot<import("@firebase/firestore-types").DocumentData> | undefined;
} = Document<Data>>(path: string | null, options?: Options<Doc>) => {
    data: Doc | null | undefined;
    isValidating: boolean;
    revalidate: () => Promise<boolean>;
    mutate: (data?: Doc | Promise<Doc | null> | ((currentValue: Doc | null) => Doc | null) | null | undefined, shouldRevalidate?: boolean | undefined) => Promise<Doc | null | undefined>;
    error: any;
    set: (data: Partial<AllowType<Data, FieldValue>>, options?: SetOptions | undefined) => Promise<void> | null;
    update: (data: Partial<AllowType<Data, FieldValue>>) => Promise<void> | null;
    loading: boolean;
    deleteDocument: () => Promise<void> | null;
    /**
     * A function that, when called, unsubscribes the Firestore listener.
     *
     * The function can be null, so make sure to check that it exists before calling it.
     *
     * **Note**: This is not necessary to use. `useDocument` already unmounts the listener for you. This is only intended if you want to unsubscribe on your own.
     */
    unsubscribe: (() => void) | null;
};
export {};
