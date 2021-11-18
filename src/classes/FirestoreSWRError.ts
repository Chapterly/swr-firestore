export class FirestoreSWRError extends Error {
  path: string;
  queryString?: string;
  constructor(message: string, path: string, queryString?: string) {
    super(message);
    this.path = path;
    this.queryString = queryString;
  }
}
