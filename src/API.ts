/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArticleInput = {
  id?: string | null,
  title: string,
  author?: string | null,
  source?: string | null,
  sourceUrl?: string | null,
  articleUrl?: string | null,
  sentiment?: string | null,
  lexile?: string | null,
  createdAt?: string | null,
};

export type ModelArticleConditionInput = {
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  source?: ModelStringInput | null,
  sourceUrl?: ModelStringInput | null,
  articleUrl?: ModelStringInput | null,
  sentiment?: ModelStringInput | null,
  lexile?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Article = {
  __typename: "Article",
  id: string,
  title: string,
  author?: string | null,
  source?: string | null,
  sourceUrl?: string | null,
  articleUrl?: string | null,
  sentiment?: string | null,
  lexile?: string | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type UpdateArticleInput = {
  id: string,
  title?: string | null,
  author?: string | null,
  source?: string | null,
  sourceUrl?: string | null,
  articleUrl?: string | null,
  sentiment?: string | null,
  lexile?: string | null,
  createdAt?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  source?: ModelStringInput | null,
  sourceUrl?: ModelStringInput | null,
  articleUrl?: ModelStringInput | null,
  sentiment?: ModelStringInput | null,
  lexile?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    author?: string | null,
    source?: string | null,
    sourceUrl?: string | null,
    articleUrl?: string | null,
    sentiment?: string | null,
    lexile?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    author?: string | null,
    source?: string | null,
    sourceUrl?: string | null,
    articleUrl?: string | null,
    sentiment?: string | null,
    lexile?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    author?: string | null,
    source?: string | null,
    sourceUrl?: string | null,
    articleUrl?: string | null,
    sentiment?: string | null,
    lexile?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    author?: string | null,
    source?: string | null,
    sourceUrl?: string | null,
    articleUrl?: string | null,
    sentiment?: string | null,
    lexile?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title: string,
      author?: string | null,
      source?: string | null,
      sourceUrl?: string | null,
      articleUrl?: string | null,
      sentiment?: string | null,
      lexile?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    author?: string | null,
    source?: string | null,
    sourceUrl?: string | null,
    articleUrl?: string | null,
    sentiment?: string | null,
    lexile?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    author?: string | null,
    source?: string | null,
    sourceUrl?: string | null,
    articleUrl?: string | null,
    sentiment?: string | null,
    lexile?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    author?: string | null,
    source?: string | null,
    sourceUrl?: string | null,
    articleUrl?: string | null,
    sentiment?: string | null,
    lexile?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};
