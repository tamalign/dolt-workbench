import { gql } from "@apollo/client";

export const BRANCH_SELECTOR_QUERY = gql`
  fragment BranchForBranchSelector on Branch {
    branchName
    databaseName
  }
  query BranchesForSelector($databaseName: String!) {
    branches(databaseName: $databaseName) {
      list {
        ...BranchForBranchSelector
      }
    }
  }
`;

export const TAG_LIST_QUERY = gql`
  fragment DoltWriterForHistory on DoltWriter {
    _id
    username
    displayName
    emailAddress
  }
  fragment TagForList on Tag {
    _id
    tagName
    message
    taggedAt
    tagger {
      ...DoltWriterForHistory
    }
    commitId
  }
  fragment TagListForTagList on TagList {
    list {
      ...TagForList
    }
  }
  query TagList($databaseName: String!) {
    tags(databaseName: $databaseName) {
      ...TagListForTagList
    }
  }
`;
