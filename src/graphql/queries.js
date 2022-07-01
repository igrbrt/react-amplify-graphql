"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.listArticles = exports.getArticle = void 0;
exports.getArticle = `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      author
      source
      sourceUrl
      articleUrl
      sentiment
      lexile
      createdAt
      updatedAt
    }
  }
`;
exports.listArticles = `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        author
        source
        sourceUrl
        articleUrl
        sentiment
        lexile
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
