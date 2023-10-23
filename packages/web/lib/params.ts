import Maybe from "./Maybe";

export type DatabaseParams = {
  databaseName: string;
};

export type RefParams = DatabaseParams & {
  refName: string;
};

export type BranchParams = DatabaseParams & {
  branchName: string;
};

export type OptionalRefParams = DatabaseParams & {
  refName?: string;
};

export type MaybeRefParams = DatabaseParams & {
  refName?: Maybe<string>;
};

export type DatabasePageParams = OptionalRefParams & {
  tableName?: string;
  q?: string;
};

export type SqlQueryParams = RefParams & {
  q: string;
  active?: string;
};

export type TableParams = RefParams & {
  tableName: string;
};

export type DocParams = RefParams & {
  docName: string;
};

export type CommitParams = RefParams & {
  commitId: string;
};

export type CommitsParams = {
  fromCommitId?: string;
  toCommitId?: string;
};

export type RequiredCommitsParams = DatabaseParams & Required<CommitsParams>;

export type DiffParams = RefParams & CommitsParams;

export type UploadParams = DatabaseParams & {
  uploadId: string;
};
