"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArticle = exports.updateArticle = exports.createArticle = void 0;
exports.createArticle = `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
exports.updateArticle = `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
exports.deleteArticle = `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
