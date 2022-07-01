"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDeleteArticle = exports.onUpdateArticle = exports.onCreateArticle = void 0;
exports.onCreateArticle = `
  subscription OnCreateArticle {
    onCreateArticle {
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
exports.onUpdateArticle = `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
exports.onDeleteArticle = `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
