/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any; }
};

export type AmazonHeroSection = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'AmazonHeroSection';
  BackgroundImage?: Maybe<ContentReference>;
  CardDescription?: Maybe<Scalars['String']['output']>;
  CardImage?: Maybe<ContentReference>;
  CardLink?: Maybe<Array<Maybe<Link>>>;
  CardTitle?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Headline?: Maybe<Scalars['String']['output']>;
  ScrollDownText?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type AmazonHeroSectionCardDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type AmazonHeroSectionCardTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type AmazonHeroSectionDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type AmazonHeroSectionHeadlineArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type AmazonHeroSection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type AmazonHeroSection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type AmazonHeroSectionAutocomplete = {
  __typename?: 'AmazonHeroSectionAutocomplete';
  BackgroundImage?: Maybe<ContentReferenceAutocomplete>;
  CardImage?: Maybe<ContentReferenceAutocomplete>;
  CardLink?: Maybe<LinkAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type AmazonHeroSectionFacet = {
  __typename?: 'AmazonHeroSectionFacet';
  BackgroundImage?: Maybe<ContentReferenceFacet>;
  CardDescription?: Maybe<Array<Maybe<StringFacet>>>;
  CardImage?: Maybe<ContentReferenceFacet>;
  CardLink?: Maybe<LinkFacet>;
  CardTitle?: Maybe<Array<Maybe<StringFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Headline?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type AmazonHeroSectionFacetCardDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AmazonHeroSectionFacetCardTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AmazonHeroSectionFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AmazonHeroSectionFacetHeadlineArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type AmazonHeroSectionOrderByInput = {
  BackgroundImage?: InputMaybe<ContentReferenceOrderByInput>;
  CardDescription?: InputMaybe<OrderBy>;
  CardImage?: InputMaybe<ContentReferenceOrderByInput>;
  CardLink?: InputMaybe<LinkOrderByInput>;
  CardTitle?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  Headline?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type AmazonHeroSectionOutput = {
  __typename?: 'AmazonHeroSectionOutput';
  autocomplete?: Maybe<AmazonHeroSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<AmazonHeroSectionFacet>;
  item?: Maybe<AmazonHeroSection>;
  items?: Maybe<Array<Maybe<AmazonHeroSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type AmazonHeroSectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AmazonHeroSectionWhereInput = {
  BackgroundImage?: InputMaybe<ContentReferenceWhereInput>;
  CardDescription?: InputMaybe<SearchableStringFilterInput>;
  CardImage?: InputMaybe<ContentReferenceWhereInput>;
  CardLink?: InputMaybe<LinkWhereInput>;
  CardTitle?: InputMaybe<SearchableStringFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  Headline?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<AmazonHeroSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<AmazonHeroSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<AmazonHeroSectionWhereInput>>>;
};

export type ArticleList = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ArticleList';
  ArticleRoot?: Maybe<ContentReference>;
  IncludeAllSites?: Maybe<Scalars['Boolean']['output']>;
  NumberOfArticles?: Maybe<Scalars['Int']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ArticleListTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticleList_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticleList_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticleListAutocomplete = {
  __typename?: 'ArticleListAutocomplete';
  ArticleRoot?: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ArticleListFacet = {
  __typename?: 'ArticleListFacet';
  ArticleRoot?: Maybe<ContentReferenceFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type ArticleListFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticleListOrderByInput = {
  ArticleRoot?: InputMaybe<ContentReferenceOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ArticleListOutput = {
  __typename?: 'ArticleListOutput';
  autocomplete?: Maybe<ArticleListAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticleListFacet>;
  item?: Maybe<ArticleList>;
  items?: Maybe<Array<Maybe<ArticleList>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticleListOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleListWhereInput = {
  ArticleRoot?: InputMaybe<ContentReferenceWhereInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ArticleListWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticleListWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticleListWhereInput>>>;
};

export type ArticlePage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'ArticlePage';
  Author?: Maybe<Scalars['String']['output']>;
  AuthorEmail?: Maybe<Scalars['String']['output']>;
  Body?: Maybe<SearchableRichText>;
  Heading?: Maybe<Scalars['String']['output']>;
  PageAdminSettings?: Maybe<PageAdminSettingsProperty>;
  PromoImage?: Maybe<ContentReference>;
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  SubHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ArticlePageAuthorArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticlePageAuthorEmailArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticlePageHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticlePageSubHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticlePage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticlePage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticlePageAutocomplete = {
  __typename?: 'ArticlePageAutocomplete';
  PromoImage?: Maybe<ContentReferenceAutocomplete>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ArticlePageFacet = {
  __typename?: 'ArticlePageFacet';
  Author?: Maybe<Array<Maybe<StringFacet>>>;
  AuthorEmail?: Maybe<Array<Maybe<StringFacet>>>;
  Body?: Maybe<SearchableRichTextFacet>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  PageAdminSettings?: Maybe<Array<Maybe<StringFacet>>>;
  PromoImage?: Maybe<ContentReferenceFacet>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  SubHeading?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type ArticlePageFacetAuthorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetAuthorEmailArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetPageAdminSettingsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetSubHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticlePageOrderByInput = {
  Author?: InputMaybe<OrderBy>;
  AuthorEmail?: InputMaybe<OrderBy>;
  Body?: InputMaybe<SearchableRichTextOrderByInput>;
  Heading?: InputMaybe<OrderBy>;
  PageAdminSettings?: InputMaybe<OrderBy>;
  PromoImage?: InputMaybe<ContentReferenceOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  SubHeading?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ArticlePageOutput = {
  __typename?: 'ArticlePageOutput';
  autocomplete?: Maybe<ArticlePageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticlePageFacet>;
  item?: Maybe<ArticlePage>;
  items?: Maybe<Array<Maybe<ArticlePage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticlePageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePageWhereInput = {
  Author?: InputMaybe<SearchableStringFilterInput>;
  AuthorEmail?: InputMaybe<SearchableStringFilterInput>;
  Body?: InputMaybe<SearchableRichTextWhereInput>;
  Heading?: InputMaybe<SearchableStringFilterInput>;
  PageAdminSettings?: InputMaybe<StringFilterInput>;
  PromoImage?: InputMaybe<ContentReferenceWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  SubHeading?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
};

export type AutoGeneratedSection = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: 'AutoGeneratedSection';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type AutoGeneratedSection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type AutoGeneratedSection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type AutoGeneratedSectionAutocomplete = {
  __typename?: 'AutoGeneratedSectionAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type AutoGeneratedSectionFacet = {
  __typename?: 'AutoGeneratedSectionFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type AutoGeneratedSectionOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type AutoGeneratedSectionOutput = {
  __typename?: 'AutoGeneratedSectionOutput';
  autocomplete?: Maybe<AutoGeneratedSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<AutoGeneratedSectionFacet>;
  item?: Maybe<AutoGeneratedSection>;
  items?: Maybe<Array<Maybe<AutoGeneratedSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type AutoGeneratedSectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AutoGeneratedSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<AutoGeneratedSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<AutoGeneratedSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<AutoGeneratedSectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'BlankExperience';
  BlankExperienceSeoSettings?: Maybe<PageSeoSettingsProperty>;
  PageAdminSettings?: Maybe<PageAdminSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  BlankExperienceSeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  BlankExperienceSeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  PageAdminSettings?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};


export type BlankExperienceFacetPageAdminSettingsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlankExperienceOrderByInput = {
  BlankExperienceSeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  PageAdminSettings?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete?: Maybe<BlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankExperienceFacet>;
  item?: Maybe<BlankExperience>;
  items?: Maybe<Array<Maybe<BlankExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  BlankExperienceSeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  PageAdminSettings?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete?: Maybe<BlankSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankSectionFacet>;
  item?: Maybe<BlankSection>;
  items?: Maybe<Array<Maybe<BlankSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BoolFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Burger = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Burger';
  Image?: Maybe<ContentReference>;
  Ingredients?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Scalars['String']['output']>;
  Protein?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Burger_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Burger_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BurgerAutocomplete = {
  __typename?: 'BurgerAutocomplete';
  Image?: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type BurgerFacet = {
  __typename?: 'BurgerFacet';
  Image?: Maybe<ContentReferenceFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type BurgerOrderByInput = {
  Image?: InputMaybe<ContentReferenceOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type BurgerOutput = {
  __typename?: 'BurgerOutput';
  autocomplete?: Maybe<BurgerAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BurgerFacet>;
  item?: Maybe<Burger>;
  items?: Maybe<Array<Maybe<Burger>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BurgerOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BurgerWhereInput = {
  Image?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<BurgerWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BurgerWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BurgerWhereInput>>>;
};

export type Button = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Button';
  ButtonLabel?: Maybe<Scalars['String']['output']>;
  ButtonLink?: Maybe<Link>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ButtonButtonLabelArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Button_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Button_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ButtonAutocomplete = {
  __typename?: 'ButtonAutocomplete';
  ButtonLink?: Maybe<LinkAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ButtonFacet = {
  __typename?: 'ButtonFacet';
  ButtonLabel?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonLink?: Maybe<LinkFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type ButtonFacetButtonLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ButtonOrderByInput = {
  ButtonLabel?: InputMaybe<OrderBy>;
  ButtonLink?: InputMaybe<LinkOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ButtonOutput = {
  __typename?: 'ButtonOutput';
  autocomplete?: Maybe<ButtonAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ButtonFacet>;
  item?: Maybe<Button>;
  items?: Maybe<Array<Maybe<Button>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ButtonOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonWhereInput = {
  ButtonLabel?: InputMaybe<SearchableStringFilterInput>;
  ButtonLink?: InputMaybe<LinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ButtonWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ButtonWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ButtonWhereInput>>>;
};

export type CallToAction = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'CallToAction';
  Links?: Maybe<Array<Maybe<Link>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type CallToAction_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CallToAction_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CallToActionAutocomplete = {
  __typename?: 'CallToActionAutocomplete';
  Links?: Maybe<LinkAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CallToActionFacet = {
  __typename?: 'CallToActionFacet';
  Links?: Maybe<LinkFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CallToActionOrderByInput = {
  Links?: InputMaybe<LinkOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CallToActionOutput = {
  __typename?: 'CallToActionOutput';
  autocomplete?: Maybe<CallToActionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CallToActionFacet>;
  item?: Maybe<CallToAction>;
  items?: Maybe<Array<Maybe<CallToAction>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CallToActionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CallToActionWhereInput = {
  Links?: InputMaybe<LinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CallToActionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CallToActionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CallToActionWhereInput>>>;
};

export type Card = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Card';
  Asset?: Maybe<ContentReference>;
  Body?: Maybe<SearchableRichText>;
  DisplayAs?: Maybe<Scalars['String']['output']>;
  Heading?: Maybe<Scalars['String']['output']>;
  Links?: Maybe<Array<Maybe<Link>>>;
  SubHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type CardHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CardSubHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Card_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Card_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CardAutocomplete = {
  __typename?: 'CardAutocomplete';
  Asset?: Maybe<ContentReferenceAutocomplete>;
  Links?: Maybe<LinkAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CardFacet = {
  __typename?: 'CardFacet';
  Asset?: Maybe<ContentReferenceFacet>;
  Body?: Maybe<SearchableRichTextFacet>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  Links?: Maybe<LinkFacet>;
  SubHeading?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type CardFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardFacetSubHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CardOrderByInput = {
  Asset?: InputMaybe<ContentReferenceOrderByInput>;
  Body?: InputMaybe<SearchableRichTextOrderByInput>;
  Heading?: InputMaybe<OrderBy>;
  Links?: InputMaybe<LinkOrderByInput>;
  SubHeading?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CardOutput = {
  __typename?: 'CardOutput';
  autocomplete?: Maybe<CardAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CardFacet>;
  item?: Maybe<Card>;
  items?: Maybe<Array<Maybe<Card>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CardOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardWhereInput = {
  Asset?: InputMaybe<ContentReferenceWhereInput>;
  Body?: InputMaybe<SearchableRichTextWhereInput>;
  Heading?: InputMaybe<SearchableStringFilterInput>;
  Links?: InputMaybe<LinkWhereInput>;
  SubHeading?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CardWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CardWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CardWhereInput>>>;
};

export type Carousel = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Carousel';
  Assets?: Maybe<Array<Maybe<Link>>>;
  Heading?: Maybe<Scalars['String']['output']>;
  Link?: Maybe<Link>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type CarouselHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Carousel_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Carousel_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CarouselAutocomplete = {
  __typename?: 'CarouselAutocomplete';
  Assets?: Maybe<LinkAutocomplete>;
  Link?: Maybe<LinkAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CarouselFacet = {
  __typename?: 'CarouselFacet';
  Assets?: Maybe<LinkFacet>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  Link?: Maybe<LinkFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type CarouselFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CarouselOrderByInput = {
  Assets?: InputMaybe<LinkOrderByInput>;
  Heading?: InputMaybe<OrderBy>;
  Link?: InputMaybe<LinkOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CarouselOutput = {
  __typename?: 'CarouselOutput';
  autocomplete?: Maybe<CarouselAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CarouselFacet>;
  item?: Maybe<Carousel>;
  items?: Maybe<Array<Maybe<Carousel>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CarouselOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselWhereInput = {
  Assets?: InputMaybe<LinkWhereInput>;
  Heading?: InputMaybe<SearchableStringFilterInput>;
  Link?: InputMaybe<LinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CarouselWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CarouselWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CarouselWhereInput>>>;
};

export type Collapse = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Collapse';
  Body?: Maybe<SearchableRichText>;
  Heading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type CollapseHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Collapse_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Collapse_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CollapseAutocomplete = {
  __typename?: 'CollapseAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CollapseFacet = {
  __typename?: 'CollapseFacet';
  Body?: Maybe<SearchableRichTextFacet>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type CollapseFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CollapseOrderByInput = {
  Body?: InputMaybe<SearchableRichTextOrderByInput>;
  Heading?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CollapseOutput = {
  __typename?: 'CollapseOutput';
  autocomplete?: Maybe<CollapseAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CollapseFacet>;
  item?: Maybe<Collapse>;
  items?: Maybe<Array<Maybe<Collapse>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CollapseOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollapseWhereInput = {
  Body?: InputMaybe<SearchableRichTextWhereInput>;
  Heading?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CollapseWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CollapseWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CollapseWhereInput>>>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  value?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes?: Maybe<ICompositionNodeAutocomplete>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  component?: Maybe<_IComponentFacet>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  layoutType?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  nodes?: Maybe<ICompositionNodeFacet>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetLayoutTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  component?: InputMaybe<_IComponentOrderByInput>;
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  layoutType?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  nodes?: InputMaybe<ICompositionNodeOrderByInput>;
  type?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  component?: InputMaybe<_IComponentWhereInput>;
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  layoutType?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  nodes?: InputMaybe<ICompositionNodeWhereInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  /**
   * `reference`
   * |          |        |      |
   * | -------: | ------ | :--- |
   * | **type** | &nbsp; | `Data` |
   * | **id**   | &nbsp; | `_id` |
   *
   */
  item?: Maybe<IData>;
  key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  graph?: Maybe<Scalars['String']['output']>;
  hierarchical?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteGraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base?: Maybe<Array<Maybe<StringFacet>>>;
  default?: Maybe<Array<Maybe<StringFacet>>>;
  graph?: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<StringFacet>>>;
  internal?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetGraphArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  graph?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  graph?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type CssMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: 'CssMedia';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type CssMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CssMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CssMediaAutocomplete = {
  __typename?: 'CssMediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CssMediaFacet = {
  __typename?: 'CssMediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CssMediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CssMediaOutput = {
  __typename?: 'CssMediaOutput';
  autocomplete?: Maybe<CssMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CssMediaFacet>;
  item?: Maybe<CssMedia>;
  items?: Maybe<Array<Maybe<CssMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CssMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CssMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<CssMediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CssMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CssMediaWhereInput>>>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Data_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  item?: Maybe<IData>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};

export type Divider = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Divider';
  DividerDirection?: Maybe<Scalars['String']['output']>;
  DividerText?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Divider_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Divider_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DividerAutocomplete = {
  __typename?: 'DividerAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DividerFacet = {
  __typename?: 'DividerFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DividerOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DividerOutput = {
  __typename?: 'DividerOutput';
  autocomplete?: Maybe<DividerAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DividerFacet>;
  item?: Maybe<Divider>;
  items?: Maybe<Array<Maybe<Divider>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DividerOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DividerWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DividerWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DividerWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DividerWhereInput>>>;
};

export type FacetedSearch = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'FacetedSearch';
  DefaultFiltersState?: Maybe<Scalars['String']['output']>;
  DefaultSortOrder?: Maybe<Scalars['String']['output']>;
  DefaultViewMode?: Maybe<Scalars['String']['output']>;
  GridColumns?: Maybe<Scalars['String']['output']>;
  IntroText?: Maybe<SearchableRichText>;
  ItemsPerPage?: Maybe<Scalars['Int']['output']>;
  NoResultsMessage?: Maybe<Scalars['String']['output']>;
  SearchPlaceholder?: Maybe<Scalars['String']['output']>;
  SemanticWeight?: Maybe<Scalars['String']['output']>;
  ShowAuthorFacet?: Maybe<Scalars['Boolean']['output']>;
  ShowSearchInput?: Maybe<Scalars['Boolean']['output']>;
  ShowTypeFacet?: Maybe<Scalars['Boolean']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  UseSemanticSearch?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type FacetedSearchNoResultsMessageArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FacetedSearchSearchPlaceholderArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FacetedSearchTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FacetedSearch_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FacetedSearch_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FacetedSearchAutocomplete = {
  __typename?: 'FacetedSearchAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type FacetedSearchFacet = {
  __typename?: 'FacetedSearchFacet';
  IntroText?: Maybe<SearchableRichTextFacet>;
  NoResultsMessage?: Maybe<Array<Maybe<StringFacet>>>;
  SearchPlaceholder?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type FacetedSearchFacetNoResultsMessageArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FacetedSearchFacetSearchPlaceholderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FacetedSearchFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type FacetedSearchOrderByInput = {
  IntroText?: InputMaybe<SearchableRichTextOrderByInput>;
  NoResultsMessage?: InputMaybe<OrderBy>;
  SearchPlaceholder?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type FacetedSearchOutput = {
  __typename?: 'FacetedSearchOutput';
  autocomplete?: Maybe<FacetedSearchAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FacetedSearchFacet>;
  item?: Maybe<FacetedSearch>;
  items?: Maybe<Array<Maybe<FacetedSearch>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FacetedSearchOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FacetedSearchWhereInput = {
  IntroText?: InputMaybe<SearchableRichTextWhereInput>;
  NoResultsMessage?: InputMaybe<SearchableStringFilterInput>;
  SearchPlaceholder?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<FacetedSearchWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FacetedSearchWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FacetedSearchWhereInput>>>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  Log = 'LOG',
  /** Do not apply any multiplier to the field value */
  None = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  Reciprocal = 'RECIPROCAL',
  /** Take the square root of the field value */
  Sqrt = 'SQRT',
  /** Square the field value (multiply it by itself) */
  Square = 'SQUARE'
}

export type FolderPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'FolderPage';
  FolderDescription?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type FolderPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FolderPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FolderPageAutocomplete = {
  __typename?: 'FolderPageAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type FolderPageFacet = {
  __typename?: 'FolderPageFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type FolderPageOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type FolderPageOutput = {
  __typename?: 'FolderPageOutput';
  autocomplete?: Maybe<FolderPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FolderPageFacet>;
  item?: Maybe<FolderPage>;
  items?: Maybe<Array<Maybe<FolderPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FolderPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FolderPageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<FolderPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FolderPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FolderPageWhereInput>>>;
};

export type GenericMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: 'GenericMedia';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete?: Maybe<GenericMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericMediaFacet>;
  item?: Maybe<GenericMedia>;
  items?: Maybe<Array<Maybe<GenericMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type Grid = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Grid';
  Items?: Maybe<Array<Maybe<_IContent>>>;
  RichText?: Maybe<SearchableRichText>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Grid_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Grid_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GridAutocomplete = {
  __typename?: 'GridAutocomplete';
  Items?: Maybe<_IContentAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type GridFacet = {
  __typename?: 'GridFacet';
  Items?: Maybe<_IContentFacet>;
  RichText?: Maybe<SearchableRichTextFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type GridOrderByInput = {
  Items?: InputMaybe<_IContentOrderByInput>;
  RichText?: InputMaybe<SearchableRichTextOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GridOutput = {
  __typename?: 'GridOutput';
  autocomplete?: Maybe<GridAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GridFacet>;
  item?: Maybe<Grid>;
  items?: Maybe<Array<Maybe<Grid>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GridOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GridWhereInput = {
  Items?: InputMaybe<_IContentWhereInput>;
  RichText?: InputMaybe<SearchableRichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<GridWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GridWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GridWhereInput>>>;
};

export type Hero = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Hero';
  Body?: Maybe<SearchableRichText>;
  Heading?: Maybe<Scalars['String']['output']>;
  Image?: Maybe<ContentReference>;
  Links?: Maybe<Array<Maybe<Link>>>;
  SubHeading?: Maybe<Scalars['String']['output']>;
  Video?: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type HeroHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeroSubHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Hero_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Hero_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeroAutocomplete = {
  __typename?: 'HeroAutocomplete';
  Image?: Maybe<ContentReferenceAutocomplete>;
  Links?: Maybe<LinkAutocomplete>;
  Video?: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HeroFacet = {
  __typename?: 'HeroFacet';
  Body?: Maybe<SearchableRichTextFacet>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  Image?: Maybe<ContentReferenceFacet>;
  Links?: Maybe<LinkFacet>;
  SubHeading?: Maybe<Array<Maybe<StringFacet>>>;
  Video?: Maybe<ContentReferenceFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type HeroFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroFacetSubHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HeroOrderByInput = {
  Body?: InputMaybe<SearchableRichTextOrderByInput>;
  Heading?: InputMaybe<OrderBy>;
  Image?: InputMaybe<ContentReferenceOrderByInput>;
  Links?: InputMaybe<LinkOrderByInput>;
  SubHeading?: InputMaybe<OrderBy>;
  Video?: InputMaybe<ContentReferenceOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HeroOutput = {
  __typename?: 'HeroOutput';
  autocomplete?: Maybe<HeroAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeroFacet>;
  item?: Maybe<Hero>;
  items?: Maybe<Array<Maybe<Hero>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeroOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroWhereInput = {
  Body?: InputMaybe<SearchableRichTextWhereInput>;
  Heading?: InputMaybe<SearchableStringFilterInput>;
  Image?: InputMaybe<ContentReferenceWhereInput>;
  Links?: InputMaybe<LinkWhereInput>;
  SubHeading?: InputMaybe<SearchableStringFilterInput>;
  Video?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HeroWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeroWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeroWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  layoutType?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetLayoutTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  layoutType?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  layoutType?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
  variation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVariationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset?: Maybe<Array<Maybe<StringFacet>>>;
  created?: Maybe<Array<Maybe<DateFacet>>>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  locale?: Maybe<Array<Maybe<StringFacet>>>;
  published?: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder?: Maybe<Array<Maybe<NumberFacet>>>;
  status?: Maybe<Array<Maybe<StringFacet>>>;
  types?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
  variation?: Maybe<Array<Maybe<StringFacet>>>;
  version?: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetFallbackForLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetSortOrderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVariationArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  fallbackForLocale?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  sortOrder?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  variation?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  displayName?: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  sortOrder?: InputMaybe<IntFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  variation?: InputMaybe<StringFilterInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type IData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Icmp_Asset = {
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<Cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Tags?: Maybe<Array<Maybe<Cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Icmp_AssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Icmp_AssetTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Icmp_Asset_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Icmp_Asset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Icmp_Field = {
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Icmp_Field_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Icmp_Field_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Icmp_FieldAutocomplete = {
  __typename?: 'Icmp_FieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Icmp_FieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Icmp_FieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Icmp_FieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Icmp_FieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Icmp_FieldFacet = {
  __typename?: 'Icmp_FieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Icmp_FieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Icmp_FieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Icmp_FieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Icmp_FieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Icmp_FieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Icmp_FieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Icmp_FieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Icmp_FieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Icmp_FieldWhereInput>>>;
};

export type Iframe = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Iframe';
  IframePageUrl?: Maybe<Scalars['String']['output']>;
  ManualHeight?: Maybe<Scalars['Int']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  Width?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type IframeTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Iframe_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Iframe_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IframeAutocomplete = {
  __typename?: 'IframeAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type IframeFacet = {
  __typename?: 'IframeFacet';
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type IframeFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IframeOrderByInput = {
  Title?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type IframeOutput = {
  __typename?: 'IframeOutput';
  autocomplete?: Maybe<IframeAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<IframeFacet>;
  item?: Maybe<Iframe>;
  items?: Maybe<Array<Maybe<Iframe>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type IframeOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IframeWhereInput = {
  Title?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<IframeWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IframeWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IframeWhereInput>>>;
};

export type Image = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Image';
  AltText?: Maybe<Scalars['String']['output']>;
  Image?: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ImageAltTextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Image_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Image_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageAutocomplete = {
  __typename?: 'ImageAutocomplete';
  Image?: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageFacet = {
  __typename?: 'ImageFacet';
  AltText?: Maybe<Array<Maybe<StringFacet>>>;
  Image?: Maybe<ContentReferenceFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type ImageFacetAltTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ImageMedia = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: 'ImageMedia';
  AltText?: Maybe<Scalars['String']['output']>;
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ImageMediaAltTextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  AltText?: Maybe<Array<Maybe<StringFacet>>>;
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _imageMetadata?: Maybe<_ImageMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type ImageMediaFacetAltTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ImageMediaOrderByInput = {
  AltText?: InputMaybe<OrderBy>;
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete?: Maybe<ImageMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageMediaFacet>;
  item?: Maybe<ImageMedia>;
  items?: Maybe<Array<Maybe<ImageMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  AltText?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type ImageOrderByInput = {
  AltText?: InputMaybe<OrderBy>;
  Image?: InputMaybe<ContentReferenceOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageOutput = {
  __typename?: 'ImageOutput';
  autocomplete?: Maybe<ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageFacet>;
  item?: Maybe<Image>;
  items?: Maybe<Array<Maybe<Image>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageWhereInput = {
  AltText?: InputMaybe<SearchableStringFilterInput>;
  Image?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LandingPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'LandingPage';
  MainContentArea?: Maybe<Array<Maybe<_IContent>>>;
  PageAdminSettings?: Maybe<PageAdminSettingsProperty>;
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  TopContentArea?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type LandingPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LandingPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  MainContentArea?: Maybe<_IContentAutocomplete>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  TopContentArea?: Maybe<_IContentAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  MainContentArea?: Maybe<_IContentFacet>;
  PageAdminSettings?: Maybe<Array<Maybe<StringFacet>>>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  TopContentArea?: Maybe<_IContentFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type LandingPageFacetPageAdminSettingsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LandingPageOrderByInput = {
  MainContentArea?: InputMaybe<_IContentOrderByInput>;
  PageAdminSettings?: InputMaybe<OrderBy>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  TopContentArea?: InputMaybe<_IContentOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete?: Maybe<LandingPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LandingPageFacet>;
  item?: Maybe<LandingPage>;
  items?: Maybe<Array<Maybe<LandingPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LandingPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageWhereInput = {
  MainContentArea?: InputMaybe<_IContentWhereInput>;
  PageAdminSettings?: InputMaybe<StringFilterInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  TopContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type Link = {
  __typename?: 'Link';
  target?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};


export type LinkTextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type LinkAutocompleteTargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type LinkFacet = {
  __typename?: 'LinkFacet';
  target?: Maybe<Array<Maybe<StringFacet>>>;
  text?: Maybe<Array<Maybe<StringFacet>>>;
  title?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type LinkFacetTargetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkOrderByInput = {
  target?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  Assets = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `ContentLink.GuidValue` |
   * | *to*        |        | `ParentLink.GuidValue`   |
   */
  Default = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Items = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  Path = 'PATH'
}

export type LinkWhereInput = {
  target?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<SearchableStringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  De = 'de',
  En = 'en',
  EnGb = 'en_GB',
  EnNz = 'en_NZ',
  NlBe = 'nl_BE',
  Sv = 'sv'
}

export type Marvin5Experience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'Marvin5Experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
  field1?: Maybe<Scalars['String']['output']>;
  field2?: Maybe<Scalars['String']['output']>;
};


export type Marvin5Experience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Marvin5Experience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type Marvin5ExperienceField1Args = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Marvin5ExperienceField2Args = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Marvin5ExperienceAutocomplete = {
  __typename?: 'Marvin5ExperienceAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type Marvin5ExperienceFacet = {
  __typename?: 'Marvin5ExperienceFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
  field1?: Maybe<Array<Maybe<StringFacet>>>;
  field2?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Marvin5ExperienceFacetField1Args = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Marvin5ExperienceFacetField2Args = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Marvin5ExperienceOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
  field1?: InputMaybe<OrderBy>;
  field2?: InputMaybe<OrderBy>;
};

export type Marvin5ExperienceOutput = {
  __typename?: 'Marvin5ExperienceOutput';
  autocomplete?: Maybe<Marvin5ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Marvin5ExperienceFacet>;
  item?: Maybe<Marvin5Experience>;
  items?: Maybe<Array<Maybe<Marvin5Experience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Marvin5ExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Marvin5ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<Marvin5ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Marvin5ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Marvin5ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
  field1?: InputMaybe<SearchableStringFilterInput>;
  field2?: InputMaybe<SearchableStringFilterInput>;
};

export type MarvinExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'MarvinExperience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type MarvinExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MarvinExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MarvinExperienceAutocomplete = {
  __typename?: 'MarvinExperienceAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type MarvinExperienceFacet = {
  __typename?: 'MarvinExperienceFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type MarvinExperienceOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type MarvinExperienceOutput = {
  __typename?: 'MarvinExperienceOutput';
  autocomplete?: Maybe<MarvinExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MarvinExperienceFacet>;
  item?: Maybe<MarvinExperience>;
  items?: Maybe<Array<Maybe<MarvinExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MarvinExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MarvinExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<MarvinExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MarvinExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MarvinExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type MenuItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'MenuItem';
  Link?: Maybe<Link>;
  LinkText?: Maybe<Scalars['String']['output']>;
  SubMenuItems?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type MenuItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MenuItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MenuItemAutocomplete = {
  __typename?: 'MenuItemAutocomplete';
  Link?: Maybe<LinkAutocomplete>;
  SubMenuItems?: Maybe<_IContentAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MenuItemFacet = {
  __typename?: 'MenuItemFacet';
  Link?: Maybe<LinkFacet>;
  SubMenuItems?: Maybe<_IContentFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MenuItemOrderByInput = {
  Link?: InputMaybe<LinkOrderByInput>;
  SubMenuItems?: InputMaybe<_IContentOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type MenuItemOutput = {
  __typename?: 'MenuItemOutput';
  autocomplete?: Maybe<MenuItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MenuItemFacet>;
  item?: Maybe<MenuItem>;
  items?: Maybe<Array<Maybe<MenuItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MenuItemOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuItemWhereInput = {
  Link?: InputMaybe<LinkWhereInput>;
  SubMenuItems?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<MenuItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MenuItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MenuItemWhereInput>>>;
};

export type MockupPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'MockupPage';
  HtmlMockup?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type MockupPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MockupPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MockupPageAutocomplete = {
  __typename?: 'MockupPageAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MockupPageFacet = {
  __typename?: 'MockupPageFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MockupPageOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type MockupPageOutput = {
  __typename?: 'MockupPageOutput';
  autocomplete?: Maybe<MockupPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MockupPageFacet>;
  item?: Maybe<MockupPage>;
  items?: Maybe<Array<Maybe<MockupPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MockupPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MockupPageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<MockupPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MockupPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MockupPageWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier?: InputMaybe<FactorModifier>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type OdpForm = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OdpForm';
  SelectorName?: Maybe<Scalars['String']['output']>;
  SelectorType?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OdpForm_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OdpForm_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OdpFormAutocomplete = {
  __typename?: 'OdpFormAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OdpFormFacet = {
  __typename?: 'OdpFormFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OdpFormOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OdpFormOutput = {
  __typename?: 'OdpFormOutput';
  autocomplete?: Maybe<OdpFormAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OdpFormFacet>;
  item?: Maybe<OdpForm>;
  items?: Maybe<Array<Maybe<OdpForm>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OdpFormOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OdpFormWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OdpFormWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OdpFormWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OdpFormWhereInput>>>;
};

export type OptiFormsChoiceElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsChoiceElement';
  AllowMultiSelect?: Maybe<Scalars['Boolean']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Options?: Maybe<Scalars['JSON']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsChoiceElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsChoiceElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsChoiceElementAutocomplete = {
  __typename?: 'OptiFormsChoiceElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsChoiceElementFacet = {
  __typename?: 'OptiFormsChoiceElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsChoiceElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsChoiceElementOutput = {
  __typename?: 'OptiFormsChoiceElementOutput';
  autocomplete?: Maybe<OptiFormsChoiceElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsChoiceElementFacet>;
  item?: Maybe<OptiFormsChoiceElement>;
  items?: Maybe<Array<Maybe<OptiFormsChoiceElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsChoiceElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsChoiceElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsChoiceElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsChoiceElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsChoiceElementWhereInput>>>;
};

export type OptiFormsCondition = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsCondition';
  ComparisonOperator?: Maybe<Scalars['String']['output']>;
  ComparisonValue?: Maybe<Scalars['String']['output']>;
  DependsOnField?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsCondition_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsCondition_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsConditionAutocomplete = {
  __typename?: 'OptiFormsConditionAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsConditionFacet = {
  __typename?: 'OptiFormsConditionFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsConditionOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsConditionOutput = {
  __typename?: 'OptiFormsConditionOutput';
  autocomplete?: Maybe<OptiFormsConditionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsConditionFacet>;
  item?: Maybe<OptiFormsCondition>;
  items?: Maybe<Array<Maybe<OptiFormsCondition>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsConditionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsConditionProperty = {
  __typename?: 'OptiFormsConditionProperty';
  ComparisonOperator?: Maybe<Scalars['String']['output']>;
  ComparisonValue?: Maybe<Scalars['String']['output']>;
  DependsOnField?: Maybe<Scalars['String']['output']>;
};

export type OptiFormsConditionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsConditionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsConditionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsConditionWhereInput>>>;
};

export type OptiFormsContainerData = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: 'OptiFormsContainerData';
  DependencyRules?: Maybe<Array<Maybe<OptiFormsDependencyRuleProperty>>>;
  Description?: Maybe<Scalars['String']['output']>;
  ResetConfirmationMessage?: Maybe<Scalars['String']['output']>;
  ShowSummaryMessageAfterSubmission?: Maybe<Scalars['Boolean']['output']>;
  SubmitConfirmationMessage?: Maybe<Scalars['String']['output']>;
  SubmitUrl?: Maybe<ContentUrl>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type OptiFormsContainerData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsContainerData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsContainerDataAutocomplete = {
  __typename?: 'OptiFormsContainerDataAutocomplete';
  SubmitUrl?: Maybe<ContentUrlAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type OptiFormsContainerDataFacet = {
  __typename?: 'OptiFormsContainerDataFacet';
  DependencyRules?: Maybe<OptiFormsDependencyRulePropertyFacet>;
  SubmitUrl?: Maybe<ContentUrlFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type OptiFormsContainerDataOrderByInput = {
  DependencyRules?: InputMaybe<OptiFormsDependencyRulePropertyOrderByInput>;
  SubmitUrl?: InputMaybe<ContentUrlOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type OptiFormsContainerDataOutput = {
  __typename?: 'OptiFormsContainerDataOutput';
  autocomplete?: Maybe<OptiFormsContainerDataAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsContainerDataFacet>;
  item?: Maybe<OptiFormsContainerData>;
  items?: Maybe<Array<Maybe<OptiFormsContainerData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsContainerDataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsContainerDataWhereInput = {
  DependencyRules?: InputMaybe<OptiFormsDependencyRulePropertyWhereInput>;
  SubmitUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<OptiFormsContainerDataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsContainerDataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsContainerDataWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type OptiFormsDependencyRule = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsDependencyRule';
  ConditionCombination?: Maybe<Scalars['String']['output']>;
  Conditions?: Maybe<Array<Maybe<OptiFormsConditionProperty>>>;
  SatisfiedAction?: Maybe<Scalars['String']['output']>;
  TargetElement?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsDependencyRule_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsDependencyRule_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsDependencyRuleAutocomplete = {
  __typename?: 'OptiFormsDependencyRuleAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsDependencyRuleFacet = {
  __typename?: 'OptiFormsDependencyRuleFacet';
  Conditions?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type OptiFormsDependencyRuleFacetConditionsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type OptiFormsDependencyRuleOrderByInput = {
  Conditions?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsDependencyRuleOutput = {
  __typename?: 'OptiFormsDependencyRuleOutput';
  autocomplete?: Maybe<OptiFormsDependencyRuleAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsDependencyRuleFacet>;
  item?: Maybe<OptiFormsDependencyRule>;
  items?: Maybe<Array<Maybe<OptiFormsDependencyRule>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsDependencyRuleOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsDependencyRuleProperty = {
  __typename?: 'OptiFormsDependencyRuleProperty';
  ConditionCombination?: Maybe<Scalars['String']['output']>;
  Conditions?: Maybe<Array<Maybe<OptiFormsConditionProperty>>>;
  SatisfiedAction?: Maybe<Scalars['String']['output']>;
  TargetElement?: Maybe<Scalars['String']['output']>;
};

export type OptiFormsDependencyRulePropertyFacet = {
  __typename?: 'OptiFormsDependencyRulePropertyFacet';
  Conditions?: Maybe<Array<Maybe<StringFacet>>>;
};


export type OptiFormsDependencyRulePropertyFacetConditionsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type OptiFormsDependencyRulePropertyOrderByInput = {
  Conditions?: InputMaybe<OrderBy>;
};

export type OptiFormsDependencyRulePropertyWhereInput = {
  Conditions?: InputMaybe<StringFilterInput>;
};

export type OptiFormsDependencyRuleWhereInput = {
  Conditions?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<OptiFormsDependencyRuleWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsDependencyRuleWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsDependencyRuleWhereInput>>>;
};

export type OptiFormsNumberElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsNumberElement';
  AutoComplete?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Placeholder?: Maybe<Scalars['String']['output']>;
  PredefinedValue?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsNumberElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsNumberElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsNumberElementAutocomplete = {
  __typename?: 'OptiFormsNumberElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsNumberElementFacet = {
  __typename?: 'OptiFormsNumberElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsNumberElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsNumberElementOutput = {
  __typename?: 'OptiFormsNumberElementOutput';
  autocomplete?: Maybe<OptiFormsNumberElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsNumberElementFacet>;
  item?: Maybe<OptiFormsNumberElement>;
  items?: Maybe<Array<Maybe<OptiFormsNumberElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsNumberElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsNumberElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsNumberElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsNumberElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsNumberElementWhereInput>>>;
};

export type OptiFormsRangeElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsRangeElement';
  Increment?: Maybe<Scalars['Int']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Max?: Maybe<Scalars['Int']['output']>;
  Min?: Maybe<Scalars['Int']['output']>;
  PredefinedValue?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsRangeElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsRangeElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsRangeElementAutocomplete = {
  __typename?: 'OptiFormsRangeElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsRangeElementFacet = {
  __typename?: 'OptiFormsRangeElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsRangeElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsRangeElementOutput = {
  __typename?: 'OptiFormsRangeElementOutput';
  autocomplete?: Maybe<OptiFormsRangeElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsRangeElementFacet>;
  item?: Maybe<OptiFormsRangeElement>;
  items?: Maybe<Array<Maybe<OptiFormsRangeElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsRangeElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsRangeElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsRangeElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsRangeElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsRangeElementWhereInput>>>;
};

export type OptiFormsResetElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsResetElement';
  Label?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsResetElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsResetElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsResetElementAutocomplete = {
  __typename?: 'OptiFormsResetElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsResetElementFacet = {
  __typename?: 'OptiFormsResetElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsResetElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsResetElementOutput = {
  __typename?: 'OptiFormsResetElementOutput';
  autocomplete?: Maybe<OptiFormsResetElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsResetElementFacet>;
  item?: Maybe<OptiFormsResetElement>;
  items?: Maybe<Array<Maybe<OptiFormsResetElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsResetElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsResetElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsResetElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsResetElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsResetElementWhereInput>>>;
};

export type OptiFormsSelectionElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsSelectionElement';
  AllowMultiSelect?: Maybe<Scalars['Boolean']['output']>;
  AutoComplete?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Options?: Maybe<Scalars['JSON']['output']>;
  Placeholder?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsSelectionElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsSelectionElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsSelectionElementAutocomplete = {
  __typename?: 'OptiFormsSelectionElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsSelectionElementFacet = {
  __typename?: 'OptiFormsSelectionElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsSelectionElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsSelectionElementOutput = {
  __typename?: 'OptiFormsSelectionElementOutput';
  autocomplete?: Maybe<OptiFormsSelectionElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsSelectionElementFacet>;
  item?: Maybe<OptiFormsSelectionElement>;
  items?: Maybe<Array<Maybe<OptiFormsSelectionElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsSelectionElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsSelectionElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsSelectionElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsSelectionElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsSelectionElementWhereInput>>>;
};

export type OptiFormsSubmitElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsSubmitElement';
  Label?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsSubmitElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsSubmitElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsSubmitElementAutocomplete = {
  __typename?: 'OptiFormsSubmitElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsSubmitElementFacet = {
  __typename?: 'OptiFormsSubmitElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsSubmitElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsSubmitElementOutput = {
  __typename?: 'OptiFormsSubmitElementOutput';
  autocomplete?: Maybe<OptiFormsSubmitElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsSubmitElementFacet>;
  item?: Maybe<OptiFormsSubmitElement>;
  items?: Maybe<Array<Maybe<OptiFormsSubmitElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsSubmitElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsSubmitElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsSubmitElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsSubmitElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsSubmitElementWhereInput>>>;
};

export type OptiFormsTextareaElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsTextareaElement';
  AutoComplete?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Placeholder?: Maybe<Scalars['String']['output']>;
  PredefinedValue?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsTextareaElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsTextareaElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsTextareaElementAutocomplete = {
  __typename?: 'OptiFormsTextareaElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsTextareaElementFacet = {
  __typename?: 'OptiFormsTextareaElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsTextareaElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsTextareaElementOutput = {
  __typename?: 'OptiFormsTextareaElementOutput';
  autocomplete?: Maybe<OptiFormsTextareaElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsTextareaElementFacet>;
  item?: Maybe<OptiFormsTextareaElement>;
  items?: Maybe<Array<Maybe<OptiFormsTextareaElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsTextareaElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsTextareaElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsTextareaElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsTextareaElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsTextareaElementWhereInput>>>;
};

export type OptiFormsTextboxElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsTextboxElement';
  AutoComplete?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Placeholder?: Maybe<Scalars['String']['output']>;
  PredefinedValue?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsTextboxElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsTextboxElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsTextboxElementAutocomplete = {
  __typename?: 'OptiFormsTextboxElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsTextboxElementFacet = {
  __typename?: 'OptiFormsTextboxElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsTextboxElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsTextboxElementOutput = {
  __typename?: 'OptiFormsTextboxElementOutput';
  autocomplete?: Maybe<OptiFormsTextboxElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsTextboxElementFacet>;
  item?: Maybe<OptiFormsTextboxElement>;
  items?: Maybe<Array<Maybe<OptiFormsTextboxElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsTextboxElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsTextboxElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsTextboxElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsTextboxElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsTextboxElementWhereInput>>>;
};

export type OptiFormsUrlElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsUrlElement';
  Label?: Maybe<Scalars['String']['output']>;
  Placeholder?: Maybe<Scalars['String']['output']>;
  PredefinedValue?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsUrlElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsUrlElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsUrlElementAutocomplete = {
  __typename?: 'OptiFormsUrlElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsUrlElementFacet = {
  __typename?: 'OptiFormsUrlElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsUrlElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsUrlElementOutput = {
  __typename?: 'OptiFormsUrlElementOutput';
  autocomplete?: Maybe<OptiFormsUrlElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsUrlElementFacet>;
  item?: Maybe<OptiFormsUrlElement>;
  items?: Maybe<Array<Maybe<OptiFormsUrlElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsUrlElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsUrlElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsUrlElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsUrlElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsUrlElementWhereInput>>>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type PageAdminSettings = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PageAdminSettings';
  EnableExternalPreview?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type PageAdminSettings_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageAdminSettings_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PageAdminSettingsAutocomplete = {
  __typename?: 'PageAdminSettingsAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PageAdminSettingsFacet = {
  __typename?: 'PageAdminSettingsFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type PageAdminSettingsOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PageAdminSettingsOutput = {
  __typename?: 'PageAdminSettingsOutput';
  autocomplete?: Maybe<PageAdminSettingsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PageAdminSettingsFacet>;
  item?: Maybe<PageAdminSettings>;
  items?: Maybe<Array<Maybe<PageAdminSettings>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PageAdminSettingsOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageAdminSettingsProperty = {
  __typename?: 'PageAdminSettingsProperty';
  EnableExternalPreview?: Maybe<Scalars['Boolean']['output']>;
};

export type PageAdminSettingsWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<PageAdminSettingsWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PageAdminSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PageAdminSettingsWhereInput>>>;
};

export type PageSeoSettings = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PageSeoSettings';
  DisplayInMenu?: Maybe<Scalars['Boolean']['output']>;
  GraphType?: Maybe<Scalars['String']['output']>;
  Indexing?: Maybe<Scalars['Boolean']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type PageSeoSettingsMetaDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsMetaTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  SharingImage?: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage?: Maybe<ContentReferenceFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type PageSeoSettingsFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PageSeoSettingsOrderByInput = {
  MetaDescription?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  SharingImage?: InputMaybe<ContentReferenceOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete?: Maybe<PageSeoSettingsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PageSeoSettingsFacet>;
  item?: Maybe<PageSeoSettings>;
  items?: Maybe<Array<Maybe<PageSeoSettings>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PageSeoSettingsOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettingsProperty = {
  __typename?: 'PageSeoSettingsProperty';
  DisplayInMenu?: Maybe<Scalars['Boolean']['output']>;
  GraphType?: Maybe<Scalars['String']['output']>;
  Indexing?: Maybe<Scalars['Boolean']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentReference>;
};


export type PageSeoSettingsPropertyMetaDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsPropertyMetaTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type PageSeoSettingsPropertyAutocomplete = {
  __typename?: 'PageSeoSettingsPropertyAutocomplete';
  SharingImage?: Maybe<ContentReferenceAutocomplete>;
};

export type PageSeoSettingsPropertyFacet = {
  __typename?: 'PageSeoSettingsPropertyFacet';
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage?: Maybe<ContentReferenceFacet>;
};


export type PageSeoSettingsPropertyFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsPropertyFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PageSeoSettingsPropertyOrderByInput = {
  MetaDescription?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  SharingImage?: InputMaybe<ContentReferenceOrderByInput>;
};

export type PageSeoSettingsPropertyWhereInput = {
  MetaDescription?: InputMaybe<SearchableStringFilterInput>;
  MetaTitle?: InputMaybe<SearchableStringFilterInput>;
  SharingImage?: InputMaybe<ContentReferenceWhereInput>;
};

export type PageSeoSettingsWhereInput = {
  MetaDescription?: InputMaybe<SearchableStringFilterInput>;
  MetaTitle?: InputMaybe<SearchableStringFilterInput>;
  SharingImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type Paragraph = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Paragraph';
  Text?: Maybe<SearchableRichText>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Paragraph_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Paragraph_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ParagraphAutocomplete = {
  __typename?: 'ParagraphAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ParagraphFacet = {
  __typename?: 'ParagraphFacet';
  Text?: Maybe<SearchableRichTextFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ParagraphOrderByInput = {
  Text?: InputMaybe<SearchableRichTextOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ParagraphOutput = {
  __typename?: 'ParagraphOutput';
  autocomplete?: Maybe<ParagraphAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ParagraphFacet>;
  item?: Maybe<Paragraph>;
  items?: Maybe<Array<Maybe<Paragraph>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ParagraphOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphWhereInput = {
  Text?: InputMaybe<SearchableRichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ParagraphWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ParagraphWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ParagraphWhereInput>>>;
};

export type PinnedInput = {
  /** Pinned collection keys */
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase?: InputMaybe<Scalars['String']['input']>;
};

export type PlaceholderItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PlaceholderItem';
  Key?: Maybe<Scalars['String']['output']>;
  Value?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type PlaceholderItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PlaceholderItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PlaceholderItemAutocomplete = {
  __typename?: 'PlaceholderItemAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PlaceholderItemFacet = {
  __typename?: 'PlaceholderItemFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type PlaceholderItemOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PlaceholderItemOutput = {
  __typename?: 'PlaceholderItemOutput';
  autocomplete?: Maybe<PlaceholderItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PlaceholderItemFacet>;
  item?: Maybe<PlaceholderItem>;
  items?: Maybe<Array<Maybe<PlaceholderItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PlaceholderItemOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PlaceholderItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<PlaceholderItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PlaceholderItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PlaceholderItemWhereInput>>>;
};

export type PlaceholdersConfiguration = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PlaceholdersConfiguration';
  Domain?: Maybe<Scalars['String']['output']>;
  Placeholders?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type PlaceholdersConfiguration_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PlaceholdersConfiguration_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PlaceholdersConfigurationAutocomplete = {
  __typename?: 'PlaceholdersConfigurationAutocomplete';
  Domain?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Placeholders?: Maybe<_IContentAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};


export type PlaceholdersConfigurationAutocompleteDomainArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PlaceholdersConfigurationFacet = {
  __typename?: 'PlaceholdersConfigurationFacet';
  Domain?: Maybe<Array<Maybe<StringFacet>>>;
  Placeholders?: Maybe<_IContentFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type PlaceholdersConfigurationFacetDomainArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PlaceholdersConfigurationOrderByInput = {
  Domain?: InputMaybe<OrderBy>;
  Placeholders?: InputMaybe<_IContentOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PlaceholdersConfigurationOutput = {
  __typename?: 'PlaceholdersConfigurationOutput';
  autocomplete?: Maybe<PlaceholdersConfigurationAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PlaceholdersConfigurationFacet>;
  item?: Maybe<PlaceholdersConfiguration>;
  items?: Maybe<Array<Maybe<PlaceholdersConfiguration>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PlaceholdersConfigurationOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PlaceholdersConfigurationWhereInput = {
  Domain?: InputMaybe<StringFilterInput>;
  Placeholders?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<PlaceholdersConfigurationWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PlaceholdersConfigurationWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PlaceholdersConfigurationWhereInput>>>;
};

export type PressRelease = IData & _IContent & _IItem & _IPage & {
  __typename?: 'PressRelease';
  Author?: Maybe<Scalars['String']['output']>;
  BodyContent?: Maybe<SearchableRichText>;
  Summary?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type PressReleaseAuthorArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PressReleaseSummaryArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PressReleaseTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PressRelease_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PressRelease_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PressReleaseAutocomplete = {
  __typename?: 'PressReleaseAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PressReleaseFacet = {
  __typename?: 'PressReleaseFacet';
  Author?: Maybe<Array<Maybe<StringFacet>>>;
  BodyContent?: Maybe<SearchableRichTextFacet>;
  Summary?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type PressReleaseFacetAuthorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PressReleaseFacetSummaryArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PressReleaseFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PressReleaseOrderByInput = {
  Author?: InputMaybe<OrderBy>;
  BodyContent?: InputMaybe<SearchableRichTextOrderByInput>;
  Summary?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PressReleaseOutput = {
  __typename?: 'PressReleaseOutput';
  autocomplete?: Maybe<PressReleaseAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PressReleaseFacet>;
  item?: Maybe<PressRelease>;
  items?: Maybe<Array<Maybe<PressRelease>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PressReleaseOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PressReleaseWhereInput = {
  Author?: InputMaybe<SearchableStringFilterInput>;
  BodyContent?: InputMaybe<SearchableRichTextWhereInput>;
  Summary?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<PressReleaseWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PressReleaseWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PressReleaseWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  AmazonHeroSection?: Maybe<AmazonHeroSectionOutput>;
  ArticleList?: Maybe<ArticleListOutput>;
  ArticlePage?: Maybe<ArticlePageOutput>;
  AutoGeneratedSection?: Maybe<AutoGeneratedSectionOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  Burger?: Maybe<BurgerOutput>;
  Button?: Maybe<ButtonOutput>;
  CallToAction?: Maybe<CallToActionOutput>;
  Card?: Maybe<CardOutput>;
  Carousel?: Maybe<CarouselOutput>;
  Collapse?: Maybe<CollapseOutput>;
  CssMedia?: Maybe<CssMediaOutput>;
  Data?: Maybe<DataOutput>;
  Divider?: Maybe<DividerOutput>;
  FacetedSearch?: Maybe<FacetedSearchOutput>;
  FolderPage?: Maybe<FolderPageOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  Grid?: Maybe<GridOutput>;
  Hero?: Maybe<HeroOutput>;
  Iframe?: Maybe<IframeOutput>;
  Image?: Maybe<ImageOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  Marvin5Experience?: Maybe<Marvin5ExperienceOutput>;
  MarvinExperience?: Maybe<MarvinExperienceOutput>;
  MenuItem?: Maybe<MenuItemOutput>;
  MockupPage?: Maybe<MockupPageOutput>;
  OdpForm?: Maybe<OdpFormOutput>;
  OptiFormsChoiceElement?: Maybe<OptiFormsChoiceElementOutput>;
  OptiFormsCondition?: Maybe<OptiFormsConditionOutput>;
  OptiFormsContainerData?: Maybe<OptiFormsContainerDataOutput>;
  OptiFormsDependencyRule?: Maybe<OptiFormsDependencyRuleOutput>;
  OptiFormsNumberElement?: Maybe<OptiFormsNumberElementOutput>;
  OptiFormsRangeElement?: Maybe<OptiFormsRangeElementOutput>;
  OptiFormsResetElement?: Maybe<OptiFormsResetElementOutput>;
  OptiFormsSelectionElement?: Maybe<OptiFormsSelectionElementOutput>;
  OptiFormsSubmitElement?: Maybe<OptiFormsSubmitElementOutput>;
  OptiFormsTextareaElement?: Maybe<OptiFormsTextareaElementOutput>;
  OptiFormsTextboxElement?: Maybe<OptiFormsTextboxElementOutput>;
  OptiFormsUrlElement?: Maybe<OptiFormsUrlElementOutput>;
  PageAdminSettings?: Maybe<PageAdminSettingsOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  Paragraph?: Maybe<ParagraphOutput>;
  PlaceholderItem?: Maybe<PlaceholderItemOutput>;
  PlaceholdersConfiguration?: Maybe<PlaceholdersConfigurationOutput>;
  PressRelease?: Maybe<PressReleaseOutput>;
  SiteSettings?: Maybe<SiteSettingsOutput>;
  SiteStyles?: Maybe<SiteStylesOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TestimonialCard?: Maybe<TestimonialCardOutput>;
  TestimonialCardComponent?: Maybe<TestimonialCardComponentOutput>;
  Text?: Maybe<TextOutput>;
  Video?: Maybe<VideoOutput>;
  VideoExternal?: Maybe<VideoExternalOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _AssetItem?: Maybe<_AssetItemOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _ImageItem?: Maybe<_ImageItemOutput>;
  _Item?: Maybe<_ItemOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
  amazon_exchange_experience?: Maybe<Amazon_Exchange_ExperienceOutput>;
  cmp_Asset?: Maybe<Cmp_AssetOutput>;
  cmp_CheckboxField?: Maybe<Cmp_CheckboxFieldOutput>;
  cmp_CurrencyField?: Maybe<Cmp_CurrencyFieldOutput>;
  cmp_DateField?: Maybe<Cmp_DateFieldOutput>;
  cmp_DropdownField?: Maybe<Cmp_DropdownFieldOutput>;
  cmp_Field?: Maybe<Cmp_FieldOutput>;
  cmp_ImageField?: Maybe<Cmp_ImageFieldOutput>;
  cmp_LabelField?: Maybe<Cmp_LabelFieldOutput>;
  cmp_NumberField?: Maybe<Cmp_NumberFieldOutput>;
  cmp_PercentField?: Maybe<Cmp_PercentFieldOutput>;
  cmp_PublicImageAsset?: Maybe<Cmp_PublicImageAssetOutput>;
  cmp_PublicRawFileAsset?: Maybe<Cmp_PublicRawFileAssetOutput>;
  cmp_PublicVideoAsset?: Maybe<Cmp_PublicVideoAssetOutput>;
  cmp_RadioField?: Maybe<Cmp_RadioFieldOutput>;
  cmp_RichTextField?: Maybe<Cmp_RichTextFieldOutput>;
  cmp_StructuredContentAsset?: Maybe<Cmp_StructuredContentAssetOutput>;
  cmp_TextAreaField?: Maybe<Cmp_TextAreaFieldOutput>;
  cmp_TextField?: Maybe<Cmp_TextFieldOutput>;
  cmp_VideoField?: Maybe<Cmp_VideoFieldOutput>;
  marvinBlock?: Maybe<MarvinBlockOutput>;
  test?: Maybe<TestOutput>;
};


export type QueryAmazonHeroSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AmazonHeroSectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<AmazonHeroSectionWhereInput>;
};


export type QueryArticleListArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticleListWhereInput>;
};


export type QueryArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryAutoGeneratedSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AutoGeneratedSectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<AutoGeneratedSectionWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryBurgerArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BurgerOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BurgerWhereInput>;
};


export type QueryButtonArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ButtonWhereInput>;
};


export type QueryCallToActionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CallToActionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CallToActionWhereInput>;
};


export type QueryCardArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CardOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CardWhereInput>;
};


export type QueryCarouselArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CarouselOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CarouselWhereInput>;
};


export type QueryCollapseArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CollapseOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CollapseWhereInput>;
};


export type QueryCssMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CssMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CssMediaWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryDividerArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DividerOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DividerWhereInput>;
};


export type QueryFacetedSearchArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FacetedSearchOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<FacetedSearchWhereInput>;
};


export type QueryFolderPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FolderPageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<FolderPageWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryGridArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GridOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GridWhereInput>;
};


export type QueryHeroArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeroWhereInput>;
};


export type QueryIframeArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<IframeOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<IframeWhereInput>;
};


export type QueryImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryMarvin5ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<Marvin5ExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Marvin5ExperienceWhereInput>;
};


export type QueryMarvinExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MarvinExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MarvinExperienceWhereInput>;
};


export type QueryMenuItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MenuItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MenuItemWhereInput>;
};


export type QueryMockupPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MockupPageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MockupPageWhereInput>;
};


export type QueryOdpFormArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OdpFormOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OdpFormWhereInput>;
};


export type QueryOptiFormsChoiceElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsChoiceElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsChoiceElementWhereInput>;
};


export type QueryOptiFormsConditionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsConditionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsConditionWhereInput>;
};


export type QueryOptiFormsContainerDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsContainerDataOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsContainerDataWhereInput>;
};


export type QueryOptiFormsDependencyRuleArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsDependencyRuleOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsDependencyRuleWhereInput>;
};


export type QueryOptiFormsNumberElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsNumberElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsNumberElementWhereInput>;
};


export type QueryOptiFormsRangeElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsRangeElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsRangeElementWhereInput>;
};


export type QueryOptiFormsResetElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsResetElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsResetElementWhereInput>;
};


export type QueryOptiFormsSelectionElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsSelectionElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsSelectionElementWhereInput>;
};


export type QueryOptiFormsSubmitElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsSubmitElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsSubmitElementWhereInput>;
};


export type QueryOptiFormsTextareaElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsTextareaElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsTextareaElementWhereInput>;
};


export type QueryOptiFormsTextboxElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsTextboxElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsTextboxElementWhereInput>;
};


export type QueryOptiFormsUrlElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsUrlElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsUrlElementWhereInput>;
};


export type QueryPageAdminSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageAdminSettingsOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PageAdminSettingsWhereInput>;
};


export type QueryPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryParagraphArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ParagraphWhereInput>;
};


export type QueryPlaceholderItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PlaceholderItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PlaceholderItemWhereInput>;
};


export type QueryPlaceholdersConfigurationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PlaceholdersConfigurationOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PlaceholdersConfigurationWhereInput>;
};


export type QueryPressReleaseArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PressReleaseOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PressReleaseWhereInput>;
};


export type QuerySiteSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteSettingsOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SiteSettingsWhereInput>;
};


export type QuerySiteStylesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteStylesOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SiteStylesWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTestimonialCardArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialCardOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestimonialCardWhereInput>;
};


export type QueryTestimonialCardComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialCardComponentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestimonialCardComponentWhereInput>;
};


export type QueryTextArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TextWhereInput>;
};


export type QueryVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryVideoExternalArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoExternalOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoExternalWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type Query_AssetItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<_AssetItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_AssetItemWhereInput>;
};


export type Query_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageWhereInput>;
};


export type Query_ImageItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<_ImageItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageItemWhereInput>;
};


export type Query_ItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<_ItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ItemWhereInput>;
};


export type Query_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_VideoWhereInput>;
};


export type QueryAmazon_Exchange_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<Amazon_Exchange_ExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Amazon_Exchange_ExperienceWhereInput>;
};


export type QueryCmp_AssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_AssetOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_AssetWhereInput>;
};


export type QueryCmp_CheckboxFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_CheckboxFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_CheckboxFieldWhereInput>;
};


export type QueryCmp_CurrencyFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_CurrencyFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_CurrencyFieldWhereInput>;
};


export type QueryCmp_DateFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_DateFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_DateFieldWhereInput>;
};


export type QueryCmp_DropdownFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_DropdownFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_DropdownFieldWhereInput>;
};


export type QueryCmp_FieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_FieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_FieldWhereInput>;
};


export type QueryCmp_ImageFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_ImageFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_ImageFieldWhereInput>;
};


export type QueryCmp_LabelFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_LabelFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_LabelFieldWhereInput>;
};


export type QueryCmp_NumberFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_NumberFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_NumberFieldWhereInput>;
};


export type QueryCmp_PercentFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_PercentFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_PercentFieldWhereInput>;
};


export type QueryCmp_PublicImageAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_PublicImageAssetOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_PublicImageAssetWhereInput>;
};


export type QueryCmp_PublicRawFileAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_PublicRawFileAssetOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_PublicRawFileAssetWhereInput>;
};


export type QueryCmp_PublicVideoAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_PublicVideoAssetOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_PublicVideoAssetWhereInput>;
};


export type QueryCmp_RadioFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_RadioFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_RadioFieldWhereInput>;
};


export type QueryCmp_RichTextFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_RichTextFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_RichTextFieldWhereInput>;
};


export type QueryCmp_StructuredContentAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_StructuredContentAssetOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_StructuredContentAssetWhereInput>;
};


export type QueryCmp_TextAreaFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_TextAreaFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_TextAreaFieldWhereInput>;
};


export type QueryCmp_TextFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_TextFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_TextFieldWhereInput>;
};


export type QueryCmp_VideoFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_VideoFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_VideoFieldWhereInput>;
};


export type QueryMarvinBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MarvinBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MarvinBlockWhereInput>;
};


export type QueryTestArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  AmazonHeroSection?: Maybe<AmazonHeroSectionOutput>;
  ArticleList?: Maybe<ArticleListOutput>;
  ArticlePage?: Maybe<ArticlePageOutput>;
  AutoGeneratedSection?: Maybe<AutoGeneratedSectionOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  Burger?: Maybe<BurgerOutput>;
  Button?: Maybe<ButtonOutput>;
  CallToAction?: Maybe<CallToActionOutput>;
  Card?: Maybe<CardOutput>;
  Carousel?: Maybe<CarouselOutput>;
  Collapse?: Maybe<CollapseOutput>;
  CssMedia?: Maybe<CssMediaOutput>;
  Data?: Maybe<DataOutput>;
  Divider?: Maybe<DividerOutput>;
  FacetedSearch?: Maybe<FacetedSearchOutput>;
  FolderPage?: Maybe<FolderPageOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  Grid?: Maybe<GridOutput>;
  Hero?: Maybe<HeroOutput>;
  Iframe?: Maybe<IframeOutput>;
  Image?: Maybe<ImageOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  Marvin5Experience?: Maybe<Marvin5ExperienceOutput>;
  MarvinExperience?: Maybe<MarvinExperienceOutput>;
  MenuItem?: Maybe<MenuItemOutput>;
  MockupPage?: Maybe<MockupPageOutput>;
  OdpForm?: Maybe<OdpFormOutput>;
  OptiFormsChoiceElement?: Maybe<OptiFormsChoiceElementOutput>;
  OptiFormsCondition?: Maybe<OptiFormsConditionOutput>;
  OptiFormsContainerData?: Maybe<OptiFormsContainerDataOutput>;
  OptiFormsDependencyRule?: Maybe<OptiFormsDependencyRuleOutput>;
  OptiFormsNumberElement?: Maybe<OptiFormsNumberElementOutput>;
  OptiFormsRangeElement?: Maybe<OptiFormsRangeElementOutput>;
  OptiFormsResetElement?: Maybe<OptiFormsResetElementOutput>;
  OptiFormsSelectionElement?: Maybe<OptiFormsSelectionElementOutput>;
  OptiFormsSubmitElement?: Maybe<OptiFormsSubmitElementOutput>;
  OptiFormsTextareaElement?: Maybe<OptiFormsTextareaElementOutput>;
  OptiFormsTextboxElement?: Maybe<OptiFormsTextboxElementOutput>;
  OptiFormsUrlElement?: Maybe<OptiFormsUrlElementOutput>;
  PageAdminSettings?: Maybe<PageAdminSettingsOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  Paragraph?: Maybe<ParagraphOutput>;
  PlaceholderItem?: Maybe<PlaceholderItemOutput>;
  PlaceholdersConfiguration?: Maybe<PlaceholdersConfigurationOutput>;
  PressRelease?: Maybe<PressReleaseOutput>;
  SiteSettings?: Maybe<SiteSettingsOutput>;
  SiteStyles?: Maybe<SiteStylesOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TestimonialCard?: Maybe<TestimonialCardOutput>;
  TestimonialCardComponent?: Maybe<TestimonialCardComponentOutput>;
  Text?: Maybe<TextOutput>;
  Video?: Maybe<VideoOutput>;
  VideoExternal?: Maybe<VideoExternalOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _AssetItem?: Maybe<_AssetItemOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _ImageItem?: Maybe<_ImageItemOutput>;
  _Item?: Maybe<_ItemOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
  amazon_exchange_experience?: Maybe<Amazon_Exchange_ExperienceOutput>;
  cmp_Asset?: Maybe<Cmp_AssetOutput>;
  cmp_CheckboxField?: Maybe<Cmp_CheckboxFieldOutput>;
  cmp_CurrencyField?: Maybe<Cmp_CurrencyFieldOutput>;
  cmp_DateField?: Maybe<Cmp_DateFieldOutput>;
  cmp_DropdownField?: Maybe<Cmp_DropdownFieldOutput>;
  cmp_Field?: Maybe<Cmp_FieldOutput>;
  cmp_ImageField?: Maybe<Cmp_ImageFieldOutput>;
  cmp_LabelField?: Maybe<Cmp_LabelFieldOutput>;
  cmp_NumberField?: Maybe<Cmp_NumberFieldOutput>;
  cmp_PercentField?: Maybe<Cmp_PercentFieldOutput>;
  cmp_PublicImageAsset?: Maybe<Cmp_PublicImageAssetOutput>;
  cmp_PublicRawFileAsset?: Maybe<Cmp_PublicRawFileAssetOutput>;
  cmp_PublicVideoAsset?: Maybe<Cmp_PublicVideoAssetOutput>;
  cmp_RadioField?: Maybe<Cmp_RadioFieldOutput>;
  cmp_RichTextField?: Maybe<Cmp_RichTextFieldOutput>;
  cmp_StructuredContentAsset?: Maybe<Cmp_StructuredContentAssetOutput>;
  cmp_TextAreaField?: Maybe<Cmp_TextAreaFieldOutput>;
  cmp_TextField?: Maybe<Cmp_TextFieldOutput>;
  cmp_VideoField?: Maybe<Cmp_VideoFieldOutput>;
  marvinBlock?: Maybe<MarvinBlockOutput>;
  test?: Maybe<TestOutput>;
};


export type QueryRefAmazonHeroSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AmazonHeroSectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<AmazonHeroSectionWhereInput>;
};


export type QueryRefArticleListArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticleListWhereInput>;
};


export type QueryRefArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryRefAutoGeneratedSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AutoGeneratedSectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<AutoGeneratedSectionWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefBurgerArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BurgerOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BurgerWhereInput>;
};


export type QueryRefButtonArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ButtonWhereInput>;
};


export type QueryRefCallToActionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CallToActionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CallToActionWhereInput>;
};


export type QueryRefCardArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CardOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CardWhereInput>;
};


export type QueryRefCarouselArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CarouselOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CarouselWhereInput>;
};


export type QueryRefCollapseArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CollapseOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CollapseWhereInput>;
};


export type QueryRefCssMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CssMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CssMediaWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefDividerArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DividerOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DividerWhereInput>;
};


export type QueryRefFacetedSearchArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FacetedSearchOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<FacetedSearchWhereInput>;
};


export type QueryRefFolderPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FolderPageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<FolderPageWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefGridArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GridOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GridWhereInput>;
};


export type QueryRefHeroArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeroWhereInput>;
};


export type QueryRefIframeArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<IframeOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<IframeWhereInput>;
};


export type QueryRefImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryRefMarvin5ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<Marvin5ExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Marvin5ExperienceWhereInput>;
};


export type QueryRefMarvinExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MarvinExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MarvinExperienceWhereInput>;
};


export type QueryRefMenuItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MenuItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MenuItemWhereInput>;
};


export type QueryRefMockupPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MockupPageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MockupPageWhereInput>;
};


export type QueryRefOdpFormArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OdpFormOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OdpFormWhereInput>;
};


export type QueryRefOptiFormsChoiceElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsChoiceElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsChoiceElementWhereInput>;
};


export type QueryRefOptiFormsConditionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsConditionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsConditionWhereInput>;
};


export type QueryRefOptiFormsContainerDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsContainerDataOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsContainerDataWhereInput>;
};


export type QueryRefOptiFormsDependencyRuleArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsDependencyRuleOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsDependencyRuleWhereInput>;
};


export type QueryRefOptiFormsNumberElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsNumberElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsNumberElementWhereInput>;
};


export type QueryRefOptiFormsRangeElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsRangeElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsRangeElementWhereInput>;
};


export type QueryRefOptiFormsResetElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsResetElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsResetElementWhereInput>;
};


export type QueryRefOptiFormsSelectionElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsSelectionElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsSelectionElementWhereInput>;
};


export type QueryRefOptiFormsSubmitElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsSubmitElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsSubmitElementWhereInput>;
};


export type QueryRefOptiFormsTextareaElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsTextareaElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsTextareaElementWhereInput>;
};


export type QueryRefOptiFormsTextboxElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsTextboxElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsTextboxElementWhereInput>;
};


export type QueryRefOptiFormsUrlElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsUrlElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsUrlElementWhereInput>;
};


export type QueryRefPageAdminSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageAdminSettingsOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PageAdminSettingsWhereInput>;
};


export type QueryRefPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryRefParagraphArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ParagraphWhereInput>;
};


export type QueryRefPlaceholderItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PlaceholderItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PlaceholderItemWhereInput>;
};


export type QueryRefPlaceholdersConfigurationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PlaceholdersConfigurationOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PlaceholdersConfigurationWhereInput>;
};


export type QueryRefPressReleaseArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PressReleaseOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PressReleaseWhereInput>;
};


export type QueryRefSiteSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteSettingsOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SiteSettingsWhereInput>;
};


export type QueryRefSiteStylesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteStylesOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SiteStylesWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTestimonialCardArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialCardOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestimonialCardWhereInput>;
};


export type QueryRefTestimonialCardComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialCardComponentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestimonialCardComponentWhereInput>;
};


export type QueryRefTextArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TextWhereInput>;
};


export type QueryRefVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryRefVideoExternalArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoExternalOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoExternalWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_AssetItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<_AssetItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_AssetItemWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_ImageItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<_ImageItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageItemWhereInput>;
};


export type QueryRef_ItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<_ItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ItemWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_VideoWhereInput>;
};


export type QueryRefAmazon_Exchange_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<Amazon_Exchange_ExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Amazon_Exchange_ExperienceWhereInput>;
};


export type QueryRefCmp_AssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_AssetOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_AssetWhereInput>;
};


export type QueryRefCmp_CheckboxFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_CheckboxFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_CheckboxFieldWhereInput>;
};


export type QueryRefCmp_CurrencyFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_CurrencyFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_CurrencyFieldWhereInput>;
};


export type QueryRefCmp_DateFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_DateFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_DateFieldWhereInput>;
};


export type QueryRefCmp_DropdownFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_DropdownFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_DropdownFieldWhereInput>;
};


export type QueryRefCmp_FieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_FieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_FieldWhereInput>;
};


export type QueryRefCmp_ImageFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_ImageFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_ImageFieldWhereInput>;
};


export type QueryRefCmp_LabelFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_LabelFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_LabelFieldWhereInput>;
};


export type QueryRefCmp_NumberFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_NumberFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_NumberFieldWhereInput>;
};


export type QueryRefCmp_PercentFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_PercentFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_PercentFieldWhereInput>;
};


export type QueryRefCmp_PublicImageAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_PublicImageAssetOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_PublicImageAssetWhereInput>;
};


export type QueryRefCmp_PublicRawFileAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_PublicRawFileAssetOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_PublicRawFileAssetWhereInput>;
};


export type QueryRefCmp_PublicVideoAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_PublicVideoAssetOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_PublicVideoAssetWhereInput>;
};


export type QueryRefCmp_RadioFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_RadioFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_RadioFieldWhereInput>;
};


export type QueryRefCmp_RichTextFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_RichTextFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_RichTextFieldWhereInput>;
};


export type QueryRefCmp_StructuredContentAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_StructuredContentAssetOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_StructuredContentAssetWhereInput>;
};


export type QueryRefCmp_TextAreaFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_TextAreaFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_TextAreaFieldWhereInput>;
};


export type QueryRefCmp_TextFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_TextFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_TextFieldWhereInput>;
};


export type QueryRefCmp_VideoFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Cmp_Locales>>>;
  orderBy?: InputMaybe<Cmp_VideoFieldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<Cmp_VideoFieldWhereInput>;
};


export type QueryRefMarvinBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MarvinBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MarvinBlockWhereInput>;
};


export type QueryRefTestArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestWhereInput>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html?: InputMaybe<StringFilterInput>;
};

export type SearchableRichText = {
  __typename?: 'SearchableRichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type SearchableRichTextHtmlArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type SearchableRichTextFacet = {
  __typename?: 'SearchableRichTextFacet';
  html?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SearchableRichTextFacetHtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SearchableRichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type SearchableRichTextWhereInput = {
  html?: InputMaybe<SearchableStringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SiteSettings = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'SiteSettings';
  FooterLinks?: Maybe<Array<Maybe<_IContent>>>;
  FooterText?: Maybe<Scalars['String']['output']>;
  HeaderLinks?: Maybe<Array<Maybe<_IContent>>>;
  Logo?: Maybe<ContentReference>;
  LogoResolution?: Maybe<Scalars['String']['output']>;
  OptiWebProjectId?: Maybe<Scalars['String']['output']>;
  SiteDomain?: Maybe<Scalars['String']['output']>;
  SocialFacebook?: Maybe<Scalars['String']['output']>;
  SocialGitHub?: Maybe<Scalars['String']['output']>;
  SocialInstagram?: Maybe<Scalars['String']['output']>;
  SocialTikTok?: Maybe<Scalars['String']['output']>;
  SocialTwitter?: Maybe<Scalars['String']['output']>;
  TopNavStyle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type SiteSettingsFooterTextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteSettingsSiteDomainArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteSettingsSocialFacebookArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteSettingsSocialGitHubArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteSettingsSocialInstagramArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteSettingsSocialTikTokArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteSettingsSocialTwitterArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteSettings_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteSettings_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SiteSettingsAutocomplete = {
  __typename?: 'SiteSettingsAutocomplete';
  FooterLinks?: Maybe<_IContentAutocomplete>;
  HeaderLinks?: Maybe<_IContentAutocomplete>;
  Logo?: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SiteSettingsFacet = {
  __typename?: 'SiteSettingsFacet';
  FooterLinks?: Maybe<_IContentFacet>;
  FooterText?: Maybe<Array<Maybe<StringFacet>>>;
  HeaderLinks?: Maybe<_IContentFacet>;
  Logo?: Maybe<ContentReferenceFacet>;
  SiteDomain?: Maybe<Array<Maybe<StringFacet>>>;
  SocialFacebook?: Maybe<Array<Maybe<StringFacet>>>;
  SocialGitHub?: Maybe<Array<Maybe<StringFacet>>>;
  SocialInstagram?: Maybe<Array<Maybe<StringFacet>>>;
  SocialTikTok?: Maybe<Array<Maybe<StringFacet>>>;
  SocialTwitter?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type SiteSettingsFacetFooterTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteSettingsFacetSiteDomainArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteSettingsFacetSocialFacebookArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteSettingsFacetSocialGitHubArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteSettingsFacetSocialInstagramArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteSettingsFacetSocialTikTokArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteSettingsFacetSocialTwitterArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteSettingsOrderByInput = {
  FooterLinks?: InputMaybe<_IContentOrderByInput>;
  FooterText?: InputMaybe<OrderBy>;
  HeaderLinks?: InputMaybe<_IContentOrderByInput>;
  Logo?: InputMaybe<ContentReferenceOrderByInput>;
  SiteDomain?: InputMaybe<OrderBy>;
  SocialFacebook?: InputMaybe<OrderBy>;
  SocialGitHub?: InputMaybe<OrderBy>;
  SocialInstagram?: InputMaybe<OrderBy>;
  SocialTikTok?: InputMaybe<OrderBy>;
  SocialTwitter?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SiteSettingsOutput = {
  __typename?: 'SiteSettingsOutput';
  autocomplete?: Maybe<SiteSettingsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SiteSettingsFacet>;
  item?: Maybe<SiteSettings>;
  items?: Maybe<Array<Maybe<SiteSettings>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SiteSettingsOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteSettingsWhereInput = {
  FooterLinks?: InputMaybe<_IContentWhereInput>;
  FooterText?: InputMaybe<SearchableStringFilterInput>;
  HeaderLinks?: InputMaybe<_IContentWhereInput>;
  Logo?: InputMaybe<ContentReferenceWhereInput>;
  SiteDomain?: InputMaybe<SearchableStringFilterInput>;
  SocialFacebook?: InputMaybe<SearchableStringFilterInput>;
  SocialGitHub?: InputMaybe<SearchableStringFilterInput>;
  SocialInstagram?: InputMaybe<SearchableStringFilterInput>;
  SocialTikTok?: InputMaybe<SearchableStringFilterInput>;
  SocialTwitter?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<SiteSettingsWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SiteSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SiteSettingsWhereInput>>>;
};

export type SiteStyles = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'SiteStyles';
  SiteStylesDomain?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  accent?: Maybe<Scalars['String']['output']>;
  accentContent?: Maybe<Scalars['String']['output']>;
  base100?: Maybe<Scalars['String']['output']>;
  base200?: Maybe<Scalars['String']['output']>;
  base300?: Maybe<Scalars['String']['output']>;
  baseContent?: Maybe<Scalars['String']['output']>;
  borderWidth?: Maybe<Scalars['Float']['output']>;
  cssFile?: Maybe<_IContent>;
  daisyuiTheme?: Maybe<Scalars['String']['output']>;
  depth?: Maybe<Scalars['Boolean']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  errorContent?: Maybe<Scalars['String']['output']>;
  font?: Maybe<Scalars['String']['output']>;
  freeFormStyles?: Maybe<Scalars['String']['output']>;
  info?: Maybe<Scalars['String']['output']>;
  infoContent?: Maybe<Scalars['String']['output']>;
  neutral?: Maybe<Scalars['String']['output']>;
  neutralContent?: Maybe<Scalars['String']['output']>;
  noise?: Maybe<Scalars['Boolean']['output']>;
  primary?: Maybe<Scalars['String']['output']>;
  primaryContent?: Maybe<Scalars['String']['output']>;
  radiusBox?: Maybe<Scalars['String']['output']>;
  radiusField?: Maybe<Scalars['String']['output']>;
  radiusSelector?: Maybe<Scalars['String']['output']>;
  secondary?: Maybe<Scalars['String']['output']>;
  secondaryContent?: Maybe<Scalars['String']['output']>;
  sizeField?: Maybe<Scalars['String']['output']>;
  sizeSelector?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['String']['output']>;
  successContent?: Maybe<Scalars['String']['output']>;
  text2xl?: Maybe<Scalars['String']['output']>;
  text3xl?: Maybe<Scalars['String']['output']>;
  text4xl?: Maybe<Scalars['String']['output']>;
  text5xl?: Maybe<Scalars['String']['output']>;
  text6xl?: Maybe<Scalars['String']['output']>;
  text7xl?: Maybe<Scalars['String']['output']>;
  text8xl?: Maybe<Scalars['String']['output']>;
  text9xl?: Maybe<Scalars['String']['output']>;
  textBase?: Maybe<Scalars['String']['output']>;
  textLg?: Maybe<Scalars['String']['output']>;
  textSm?: Maybe<Scalars['String']['output']>;
  textXl?: Maybe<Scalars['String']['output']>;
  textXs?: Maybe<Scalars['String']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
  warningContent?: Maybe<Scalars['String']['output']>;
};


export type SiteStylesSiteStylesDomainArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteStyles_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteStyles_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SiteStylesAutocomplete = {
  __typename?: 'SiteStylesAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  cssFile?: Maybe<_IContentAutocomplete>;
};

export type SiteStylesFacet = {
  __typename?: 'SiteStylesFacet';
  SiteStylesDomain?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  cssFile?: Maybe<_IContentFacet>;
};


export type SiteStylesFacetSiteStylesDomainArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteStylesOrderByInput = {
  SiteStylesDomain?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  cssFile?: InputMaybe<_IContentOrderByInput>;
};

export type SiteStylesOutput = {
  __typename?: 'SiteStylesOutput';
  autocomplete?: Maybe<SiteStylesAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SiteStylesFacet>;
  item?: Maybe<SiteStyles>;
  items?: Maybe<Array<Maybe<SiteStyles>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SiteStylesOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteStylesWhereInput = {
  SiteStylesDomain?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<SiteStylesWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SiteStylesWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SiteStylesWhereInput>>>;
  cssFile?: InputMaybe<_IContentWhereInput>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & _IItem & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete?: Maybe<SysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SysContentFolderFacet>;
  item?: Maybe<SysContentFolder>;
  items?: Maybe<Array<Maybe<SysContentFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TestimonialCard = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialCard';
  AuthorAvatar?: Maybe<ContentReference>;
  AuthorName?: Maybe<Scalars['String']['output']>;
  AuthorRole?: Maybe<Scalars['String']['output']>;
  BackgroundColor?: Maybe<Scalars['String']['output']>;
  BorderColor?: Maybe<Scalars['String']['output']>;
  BorderWidth?: Maybe<Scalars['Int']['output']>;
  QuoteText?: Maybe<RichText>;
  QuoteTextAlignment?: Maybe<Scalars['String']['output']>;
  Rating?: Maybe<Scalars['Int']['output']>;
  RatingColor?: Maybe<Scalars['String']['output']>;
  ShowAvatar?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type TestimonialCard_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TestimonialCard_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestimonialCardAutocomplete = {
  __typename?: 'TestimonialCardAutocomplete';
  AuthorAvatar?: Maybe<ContentReferenceAutocomplete>;
  QuoteText?: Maybe<RichTextAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialCardComponent = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialCardComponent';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  authorName?: Maybe<Scalars['String']['output']>;
  authorRole?: Maybe<Scalars['String']['output']>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  borderThickness?: Maybe<Scalars['Int']['output']>;
  quoteText?: Maybe<RichText>;
  rating?: Maybe<Scalars['Int']['output']>;
  roundedCorners?: Maybe<Scalars['String']['output']>;
  shadowStyle?: Maybe<Scalars['String']['output']>;
  showAvatar?: Maybe<Scalars['Boolean']['output']>;
};


export type TestimonialCardComponent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TestimonialCardComponent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestimonialCardComponentAutocomplete = {
  __typename?: 'TestimonialCardComponentAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  quoteText?: Maybe<RichTextAutocomplete>;
};

export type TestimonialCardComponentFacet = {
  __typename?: 'TestimonialCardComponentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  quoteText?: Maybe<RichTextFacet>;
};

export type TestimonialCardComponentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  quoteText?: InputMaybe<RichTextOrderByInput>;
};

export type TestimonialCardComponentOutput = {
  __typename?: 'TestimonialCardComponentOutput';
  autocomplete?: Maybe<TestimonialCardComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestimonialCardComponentFacet>;
  item?: Maybe<TestimonialCardComponent>;
  items?: Maybe<Array<Maybe<TestimonialCardComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestimonialCardComponentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialCardComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TestimonialCardComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestimonialCardComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestimonialCardComponentWhereInput>>>;
  quoteText?: InputMaybe<RichTextWhereInput>;
};

export type TestimonialCardFacet = {
  __typename?: 'TestimonialCardFacet';
  AuthorAvatar?: Maybe<ContentReferenceFacet>;
  QuoteText?: Maybe<RichTextFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type TestimonialCardOrderByInput = {
  AuthorAvatar?: InputMaybe<ContentReferenceOrderByInput>;
  QuoteText?: InputMaybe<RichTextOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialCardOutput = {
  __typename?: 'TestimonialCardOutput';
  autocomplete?: Maybe<TestimonialCardAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestimonialCardFacet>;
  item?: Maybe<TestimonialCard>;
  items?: Maybe<Array<Maybe<TestimonialCard>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestimonialCardOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialCardWhereInput = {
  AuthorAvatar?: InputMaybe<ContentReferenceWhereInput>;
  QuoteText?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<TestimonialCardWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestimonialCardWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestimonialCardWhereInput>>>;
};

export type Text = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Text';
  Content?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type TextContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Text_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Text_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TextAutocomplete = {
  __typename?: 'TextAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type TextFacet = {
  __typename?: 'TextFacet';
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type TextFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type TextOrderByInput = {
  Content?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type TextOutput = {
  __typename?: 'TextOutput';
  autocomplete?: Maybe<TextAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TextFacet>;
  item?: Maybe<Text>;
  items?: Maybe<Array<Maybe<Text>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TextOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextWhereInput = {
  Content?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<TextWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TextWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TextWhereInput>>>;
};

export enum VariationIncludeMode {
  All = 'ALL',
  None = 'NONE',
  Some = 'SOME'
}

export type VariationInput = {
  include?: InputMaybe<VariationIncludeMode>;
  includeOriginal?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'Video';
  Video?: Maybe<ContentReference>;
  VideoPosterImage?: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Video_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Video_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoAutocomplete = {
  __typename?: 'VideoAutocomplete';
  Video?: Maybe<ContentReferenceAutocomplete>;
  VideoPosterImage?: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoExternal = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'VideoExternal';
  DisplayWidth?: Maybe<Scalars['String']['output']>;
  Params?: Maybe<Scalars['String']['output']>;
  PlayLabel?: Maybe<Scalars['String']['output']>;
  Poster?: Maybe<ContentReference>;
  Provider?: Maybe<Scalars['String']['output']>;
  Video?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type VideoExternalPlayLabelArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoExternalVideoArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoExternal_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoExternal_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoExternalAutocomplete = {
  __typename?: 'VideoExternalAutocomplete';
  Poster?: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoExternalFacet = {
  __typename?: 'VideoExternalFacet';
  PlayLabel?: Maybe<Array<Maybe<StringFacet>>>;
  Poster?: Maybe<ContentReferenceFacet>;
  Video?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type VideoExternalFacetPlayLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VideoExternalFacetVideoArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type VideoExternalOrderByInput = {
  PlayLabel?: InputMaybe<OrderBy>;
  Poster?: InputMaybe<ContentReferenceOrderByInput>;
  Video?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoExternalOutput = {
  __typename?: 'VideoExternalOutput';
  autocomplete?: Maybe<VideoExternalAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoExternalFacet>;
  item?: Maybe<VideoExternal>;
  items?: Maybe<Array<Maybe<VideoExternal>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoExternalOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoExternalWhereInput = {
  PlayLabel?: InputMaybe<SearchableStringFilterInput>;
  Poster?: InputMaybe<ContentReferenceWhereInput>;
  Video?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<VideoExternalWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoExternalWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoExternalWhereInput>>>;
};

export type VideoFacet = {
  __typename?: 'VideoFacet';
  Video?: Maybe<ContentReferenceFacet>;
  VideoPosterImage?: Maybe<ContentReferenceFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete?: Maybe<VideoMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoMediaFacet>;
  item?: Maybe<VideoMedia>;
  items?: Maybe<Array<Maybe<VideoMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type VideoOrderByInput = {
  Video?: InputMaybe<ContentReferenceOrderByInput>;
  VideoPosterImage?: InputMaybe<ContentReferenceOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoOutput = {
  __typename?: 'VideoOutput';
  autocomplete?: Maybe<VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoFacet>;
  item?: Maybe<Video>;
  items?: Maybe<Array<Maybe<Video>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoWhereInput = {
  Video?: InputMaybe<ContentReferenceWhereInput>;
  VideoPosterImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
};

export type _AssetItem = IData & _IAssetItem & _IItem & {
  __typename?: '_AssetItem';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _AssetItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _AssetItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _AssetItemAutocomplete = {
  __typename?: '_AssetItemAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
};

export type _AssetItemFacet = {
  __typename?: '_AssetItemFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
};

export type _AssetItemOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _AssetItemOutput = {
  __typename?: '_AssetItemOutput';
  autocomplete?: Maybe<_AssetItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_AssetItemFacet>;
  item?: Maybe<_IAssetItem>;
  items?: Maybe<Array<Maybe<_IAssetItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _AssetItemOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _AssetItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
};

export type _AssetMetadata = {
  __typename?: '_AssetMetadata';
  fileSize?: Maybe<Scalars['Int']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type _AssetMetadataAutocomplete = {
  __typename?: '_AssetMetadataAutocomplete';
  mimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _AssetMetadataAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _AssetMetadataAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _AssetMetadataFacet = {
  __typename?: '_AssetMetadataFacet';
  fileSize?: Maybe<Array<Maybe<NumberFacet>>>;
  mimeType?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type _AssetMetadataFacetFileSizeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _AssetMetadataFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _AssetMetadataFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _AssetMetadataOrderByInput = {
  fileSize?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

export type _AssetMetadataWhereInput = {
  fileSize?: InputMaybe<IntFilterInput>;
  mimeType?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type _Component = IData & _IComponent & _IContent & _IItem & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Component_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete?: Maybe<_ComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ComponentFacet>;
  item?: Maybe<_IComponent>;
  items?: Maybe<Array<Maybe<_IComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & _IItem & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Content_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete?: Maybe<_ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ContentFacet>;
  item?: Maybe<_IContent>;
  items?: Maybe<Array<Maybe<_IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete?: Maybe<_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ExperienceFacet>;
  item?: Maybe<_IExperience>;
  items?: Maybe<Array<Maybe<_IExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & _IItem & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete?: Maybe<_FolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_FolderFacet>;
  item?: Maybe<_IFolder>;
  items?: Maybe<Array<Maybe<_IFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IAssetItem = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IAssetItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IAssetItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IComponentFacet = {
  __typename?: '_IComponentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IComponentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImage = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImageItem = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IImageItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImageItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IItem = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: '_Image';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Image_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _imageMetadata?: Maybe<_ImageMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ImageItem = IData & _IAssetItem & _IImageItem & _IItem & {
  __typename?: '_ImageItem';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _ImageItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ImageItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageItemAutocomplete = {
  __typename?: '_ImageItemAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
};

export type _ImageItemFacet = {
  __typename?: '_ImageItemFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _imageMetadata?: Maybe<_ImageMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
};

export type _ImageItemOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageItemOutput = {
  __typename?: '_ImageItemOutput';
  autocomplete?: Maybe<_ImageItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageItemFacet>;
  item?: Maybe<_IImageItem>;
  items?: Maybe<Array<Maybe<_IImageItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageItemOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
};

export type _ImageMetadata = {
  __typename?: '_ImageMetadata';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type _ImageMetadataFacet = {
  __typename?: '_ImageMetadataFacet';
  height?: Maybe<Array<Maybe<NumberFacet>>>;
  width?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type _ImageMetadataFacetHeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _ImageMetadataFacetWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type _ImageMetadataOrderByInput = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

export type _ImageMetadataWhereInput = {
  height?: InputMaybe<IntFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type _ImageOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete?: Maybe<_ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageFacet>;
  item?: Maybe<_IImage>;
  items?: Maybe<Array<Maybe<_IImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Item = IData & _IItem & {
  __typename?: '_Item';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Item_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Item_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ItemAutocomplete = {
  __typename?: '_ItemAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
};

export type _ItemFacet = {
  __typename?: '_ItemFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
};

export type _ItemOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ItemOutput = {
  __typename?: '_ItemOutput';
  autocomplete?: Maybe<_ItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ItemFacet>;
  item?: Maybe<_IItem>;
  items?: Maybe<Array<Maybe<_IItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ItemOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
};

export type _Media = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: '_Media';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Media_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete?: Maybe<_MediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_MediaFacet>;
  item?: Maybe<_IMedia>;
  items?: Maybe<Array<Maybe<_IMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Metadata = {
  __typename?: '_Metadata';
  displayName?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['Date']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type _MetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _MetadataAutocomplete = {
  __typename?: '_MetadataAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _MetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _MetadataAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _MetadataFacet = {
  __typename?: '_MetadataFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type _MetadataFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type _MetadataFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _MetadataOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type _MetadataWhereInput = {
  displayName?: InputMaybe<SearchableStringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type _Page = IData & _IContent & _IItem & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Page_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete?: Maybe<_PageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_PageFacet>;
  item?: Maybe<_IPage>;
  items?: Maybe<Array<Maybe<_IPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete?: Maybe<_SectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_SectionFacet>;
  item?: Maybe<_ISection>;
  items?: Maybe<Array<Maybe<_ISection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: '_Video';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Video_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete?: Maybe<_VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_VideoFacet>;
  item?: Maybe<_IVideo>;
  items?: Maybe<Array<Maybe<_IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export type Amazon_Exchange_Experience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'amazon_exchange_experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type Amazon_Exchange_Experience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Amazon_Exchange_Experience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Amazon_Exchange_ExperienceAutocomplete = {
  __typename?: 'amazon_exchange_experienceAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type Amazon_Exchange_ExperienceFacet = {
  __typename?: 'amazon_exchange_experienceFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type Amazon_Exchange_ExperienceOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type Amazon_Exchange_ExperienceOutput = {
  __typename?: 'amazon_exchange_experienceOutput';
  autocomplete?: Maybe<Amazon_Exchange_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Amazon_Exchange_ExperienceFacet>;
  item?: Maybe<Amazon_Exchange_Experience>;
  items?: Maybe<Array<Maybe<Amazon_Exchange_Experience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Amazon_Exchange_ExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Amazon_Exchange_ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<Amazon_Exchange_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Amazon_Exchange_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Amazon_Exchange_ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type Cmp_Asset = IData & Icmp_Asset & {
  __typename?: 'cmp_Asset';
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<Cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Tags?: Maybe<Array<Maybe<Cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_AssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_AssetTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_Asset_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_Asset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_AssetAutocomplete = {
  __typename?: 'cmp_AssetAutocomplete';
  Fields?: Maybe<Icmp_FieldAutocomplete>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Labels?: Maybe<Cmp_AssetLabelAutocomplete>;
  LibraryPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Tags?: Maybe<Cmp_TagAutocomplete>;
};


export type Cmp_AssetAutocompleteFolderGuidsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_AssetAutocompleteLibraryPathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_AssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_AssetAutocompleteParentFolderGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_AssetFacet = {
  __typename?: 'cmp_AssetFacet';
  DateCreated?: Maybe<Array<Maybe<DateFacet>>>;
  DateModified?: Maybe<Array<Maybe<DateFacet>>>;
  ExpiryDate?: Maybe<Array<Maybe<DateFacet>>>;
  Fields?: Maybe<Icmp_FieldFacet>;
  FolderGuids?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Labels?: Maybe<Cmp_AssetLabelFacet>;
  LibraryPath?: Maybe<Array<Maybe<StringFacet>>>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<StringFacet>>>;
  Tags?: Maybe<Cmp_TagFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_AssetFacetDateCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_AssetFacetDateModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_AssetFacetExpiryDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_AssetFacetFolderGuidsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_AssetFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_AssetFacetLibraryPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_AssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_AssetFacetParentFolderGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_AssetFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_AssetLabel = {
  __typename?: 'cmp_AssetLabel';
  Group?: Maybe<Cmp_AssetLabelGroup>;
  Values?: Maybe<Array<Maybe<Cmp_AssetLabelValue>>>;
};

export type Cmp_AssetLabelAutocomplete = {
  __typename?: 'cmp_AssetLabelAutocomplete';
  Group?: Maybe<Cmp_AssetLabelGroupAutocomplete>;
};

export type Cmp_AssetLabelFacet = {
  __typename?: 'cmp_AssetLabelFacet';
  Group?: Maybe<Cmp_AssetLabelGroupFacet>;
  Values?: Maybe<Cmp_AssetLabelValueFacet>;
};

export type Cmp_AssetLabelGroup = {
  __typename?: 'cmp_AssetLabelGroup';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type Cmp_AssetLabelGroupAutocomplete = {
  __typename?: 'cmp_AssetLabelGroupAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_AssetLabelGroupAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_AssetLabelGroupAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_AssetLabelGroupFacet = {
  __typename?: 'cmp_AssetLabelGroupFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_AssetLabelGroupFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_AssetLabelGroupFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_AssetLabelGroupOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type Cmp_AssetLabelGroupWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type Cmp_AssetLabelOrderByInput = {
  Group?: InputMaybe<Cmp_AssetLabelGroupOrderByInput>;
  Values?: InputMaybe<Cmp_AssetLabelValueOrderByInput>;
};

export type Cmp_AssetLabelValue = {
  __typename?: 'cmp_AssetLabelValue';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type Cmp_AssetLabelValueFacet = {
  __typename?: 'cmp_AssetLabelValueFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_AssetLabelValueFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_AssetLabelValueFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_AssetLabelValueOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type Cmp_AssetLabelValueWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type Cmp_AssetLabelWhereInput = {
  Group?: InputMaybe<Cmp_AssetLabelGroupWhereInput>;
  Values?: InputMaybe<Cmp_AssetLabelValueWhereInput>;
};

export type Cmp_AssetOrderByInput = {
  DateCreated?: InputMaybe<OrderBy>;
  DateModified?: InputMaybe<OrderBy>;
  ExpiryDate?: InputMaybe<OrderBy>;
  Fields?: InputMaybe<Icmp_FieldOrderByInput>;
  FolderGuids?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Labels?: InputMaybe<Cmp_AssetLabelOrderByInput>;
  LibraryPath?: InputMaybe<OrderBy>;
  MimeType?: InputMaybe<OrderBy>;
  ParentFolderGuid?: InputMaybe<OrderBy>;
  Tags?: InputMaybe<Cmp_TagOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_AssetOutput = {
  __typename?: 'cmp_AssetOutput';
  autocomplete?: Maybe<Cmp_AssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_AssetFacet>;
  item?: Maybe<Icmp_Asset>;
  items?: Maybe<Array<Maybe<Icmp_Asset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_AssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_AssetWhereInput = {
  DateCreated?: InputMaybe<DateFilterInput>;
  DateModified?: InputMaybe<DateFilterInput>;
  ExpiryDate?: InputMaybe<DateFilterInput>;
  Fields?: InputMaybe<Icmp_FieldWhereInput>;
  FolderGuids?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Labels?: InputMaybe<Cmp_AssetLabelWhereInput>;
  LibraryPath?: InputMaybe<StringFilterInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  ParentFolderGuid?: InputMaybe<StringFilterInput>;
  Tags?: InputMaybe<Cmp_TagWhereInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_AssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_AssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_AssetWhereInput>>>;
};

export type Cmp_CheckboxField = IData & Icmp_Field & {
  __typename?: 'cmp_CheckboxField';
  Choices?: Maybe<Array<Maybe<Cmp_FieldChoiceProperty>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_CheckboxField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_CheckboxField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_CheckboxFieldAutocomplete = {
  __typename?: 'cmp_CheckboxFieldAutocomplete';
  Choices?: Maybe<Cmp_FieldChoicePropertyAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_CheckboxFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_CheckboxFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_CheckboxFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_CheckboxFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_CheckboxFieldFacet = {
  __typename?: 'cmp_CheckboxFieldFacet';
  Choices?: Maybe<Cmp_FieldChoicePropertyFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_CheckboxFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_CheckboxFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_CheckboxFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_CheckboxFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_CheckboxFieldOrderByInput = {
  Choices?: InputMaybe<Cmp_FieldChoicePropertyOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_CheckboxFieldOutput = {
  __typename?: 'cmp_CheckboxFieldOutput';
  autocomplete?: Maybe<Cmp_CheckboxFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_CheckboxFieldFacet>;
  item?: Maybe<Cmp_CheckboxField>;
  items?: Maybe<Array<Maybe<Cmp_CheckboxField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_CheckboxFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_CheckboxFieldWhereInput = {
  Choices?: InputMaybe<Cmp_FieldChoicePropertyWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_CheckboxFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_CheckboxFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_CheckboxFieldWhereInput>>>;
};

export type Cmp_CurrencyField = IData & Icmp_Field & {
  __typename?: 'cmp_CurrencyField';
  CurrencyCode?: Maybe<Scalars['String']['output']>;
  DecimalPlaces?: Maybe<Scalars['Int']['output']>;
  HasThousandSeparator?: Maybe<Scalars['Boolean']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_CurrencyField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_CurrencyField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_CurrencyFieldAutocomplete = {
  __typename?: 'cmp_CurrencyFieldAutocomplete';
  CurrencyCode?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_CurrencyFieldAutocompleteCurrencyCodeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_CurrencyFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_CurrencyFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_CurrencyFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_CurrencyFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_CurrencyFieldFacet = {
  __typename?: 'cmp_CurrencyFieldFacet';
  CurrencyCode?: Maybe<Array<Maybe<StringFacet>>>;
  DecimalPlaces?: Maybe<Array<Maybe<NumberFacet>>>;
  HasThousandSeparator?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_CurrencyFieldFacetCurrencyCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_CurrencyFieldFacetDecimalPlacesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type Cmp_CurrencyFieldFacetHasThousandSeparatorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_CurrencyFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_CurrencyFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_CurrencyFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_CurrencyFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_CurrencyFieldOrderByInput = {
  CurrencyCode?: InputMaybe<OrderBy>;
  DecimalPlaces?: InputMaybe<OrderBy>;
  HasThousandSeparator?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_CurrencyFieldOutput = {
  __typename?: 'cmp_CurrencyFieldOutput';
  autocomplete?: Maybe<Cmp_CurrencyFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_CurrencyFieldFacet>;
  item?: Maybe<Cmp_CurrencyField>;
  items?: Maybe<Array<Maybe<Cmp_CurrencyField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_CurrencyFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_CurrencyFieldWhereInput = {
  CurrencyCode?: InputMaybe<StringFilterInput>;
  DecimalPlaces?: InputMaybe<IntFilterInput>;
  HasThousandSeparator?: InputMaybe<BoolFilterInput>;
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_CurrencyFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_CurrencyFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_CurrencyFieldWhereInput>>>;
};

export type Cmp_DateField = IData & Icmp_Field & {
  __typename?: 'cmp_DateField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type Cmp_DateField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_DateField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type Cmp_DateFieldNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Cmp_DateFieldAutocomplete = {
  __typename?: 'cmp_DateFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_DateFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_DateFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_DateFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_DateFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_DateFieldFacet = {
  __typename?: 'cmp_DateFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_DateFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_DateFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_DateFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_DateFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_DateFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_DateFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type Cmp_DateFieldOutput = {
  __typename?: 'cmp_DateFieldOutput';
  autocomplete?: Maybe<Cmp_DateFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_DateFieldFacet>;
  item?: Maybe<Cmp_DateField>;
  items?: Maybe<Array<Maybe<Cmp_DateField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_DateFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_DateFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_DateFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_DateFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_DateFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type Cmp_DropdownField = IData & Icmp_Field & {
  __typename?: 'cmp_DropdownField';
  Choices?: Maybe<Array<Maybe<Cmp_FieldChoiceProperty>>>;
  Id?: Maybe<Scalars['String']['output']>;
  IsMultiSelect?: Maybe<Scalars['Boolean']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_DropdownField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_DropdownField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_DropdownFieldAutocomplete = {
  __typename?: 'cmp_DropdownFieldAutocomplete';
  Choices?: Maybe<Cmp_FieldChoicePropertyAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_DropdownFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_DropdownFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_DropdownFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_DropdownFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_DropdownFieldFacet = {
  __typename?: 'cmp_DropdownFieldFacet';
  Choices?: Maybe<Cmp_FieldChoicePropertyFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  IsMultiSelect?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_DropdownFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_DropdownFieldFacetIsMultiSelectArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_DropdownFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_DropdownFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_DropdownFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_DropdownFieldOrderByInput = {
  Choices?: InputMaybe<Cmp_FieldChoicePropertyOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  IsMultiSelect?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_DropdownFieldOutput = {
  __typename?: 'cmp_DropdownFieldOutput';
  autocomplete?: Maybe<Cmp_DropdownFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_DropdownFieldFacet>;
  item?: Maybe<Cmp_DropdownField>;
  items?: Maybe<Array<Maybe<Cmp_DropdownField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_DropdownFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_DropdownFieldWhereInput = {
  Choices?: InputMaybe<Cmp_FieldChoicePropertyWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  IsMultiSelect?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_DropdownFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_DropdownFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_DropdownFieldWhereInput>>>;
};

export type Cmp_Field = IData & Icmp_Field & {
  __typename?: 'cmp_Field';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_Field_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_Field_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_FieldAutocomplete = {
  __typename?: 'cmp_FieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_FieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_FieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_FieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_FieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_FieldChoiceProperty = {
  __typename?: 'cmp_FieldChoiceProperty';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type Cmp_FieldChoicePropertyAutocomplete = {
  __typename?: 'cmp_FieldChoicePropertyAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_FieldChoicePropertyAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_FieldChoicePropertyAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_FieldChoicePropertyFacet = {
  __typename?: 'cmp_FieldChoicePropertyFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_FieldChoicePropertyFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_FieldChoicePropertyFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_FieldChoicePropertyOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type Cmp_FieldChoicePropertyWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type Cmp_FieldFacet = {
  __typename?: 'cmp_FieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_FieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_FieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_FieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_FieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_FieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_FieldOutput = {
  __typename?: 'cmp_FieldOutput';
  autocomplete?: Maybe<Cmp_FieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_FieldFacet>;
  item?: Maybe<Icmp_Field>;
  items?: Maybe<Array<Maybe<Icmp_Field>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_FieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_FieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_FieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_FieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_FieldWhereInput>>>;
};

export type Cmp_FocalPoint = {
  __typename?: 'cmp_FocalPoint';
  X?: Maybe<Scalars['Int']['output']>;
  Y?: Maybe<Scalars['Int']['output']>;
};

export type Cmp_FocalPointFacet = {
  __typename?: 'cmp_FocalPointFacet';
  X?: Maybe<Array<Maybe<NumberFacet>>>;
  Y?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type Cmp_FocalPointFacetXArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type Cmp_FocalPointFacetYArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type Cmp_FocalPointOrderByInput = {
  X?: InputMaybe<OrderBy>;
  Y?: InputMaybe<OrderBy>;
};

export type Cmp_FocalPointWhereInput = {
  X?: InputMaybe<IntFilterInput>;
  Y?: InputMaybe<IntFilterInput>;
};

export type Cmp_ImageField = IData & Icmp_Field & {
  __typename?: 'cmp_ImageField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type Cmp_ImageField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_ImageField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type Cmp_ImageFieldNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Cmp_ImageFieldAutocomplete = {
  __typename?: 'cmp_ImageFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_ImageFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_ImageFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_ImageFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_ImageFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_ImageFieldFacet = {
  __typename?: 'cmp_ImageFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_ImageFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_ImageFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_ImageFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_ImageFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_ImageFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_ImageFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type Cmp_ImageFieldOutput = {
  __typename?: 'cmp_ImageFieldOutput';
  autocomplete?: Maybe<Cmp_ImageFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_ImageFieldFacet>;
  item?: Maybe<Cmp_ImageField>;
  items?: Maybe<Array<Maybe<Cmp_ImageField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_ImageFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_ImageFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_ImageFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_ImageFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_ImageFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type Cmp_LabelField = IData & Icmp_Field & {
  __typename?: 'cmp_LabelField';
  Choices?: Maybe<Array<Maybe<Cmp_FieldChoiceProperty>>>;
  Id?: Maybe<Scalars['String']['output']>;
  IsMultiSelect?: Maybe<Scalars['Boolean']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_LabelField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_LabelField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_LabelFieldAutocomplete = {
  __typename?: 'cmp_LabelFieldAutocomplete';
  Choices?: Maybe<Cmp_FieldChoicePropertyAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_LabelFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_LabelFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_LabelFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_LabelFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_LabelFieldFacet = {
  __typename?: 'cmp_LabelFieldFacet';
  Choices?: Maybe<Cmp_FieldChoicePropertyFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  IsMultiSelect?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_LabelFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_LabelFieldFacetIsMultiSelectArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_LabelFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_LabelFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_LabelFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_LabelFieldOrderByInput = {
  Choices?: InputMaybe<Cmp_FieldChoicePropertyOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  IsMultiSelect?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_LabelFieldOutput = {
  __typename?: 'cmp_LabelFieldOutput';
  autocomplete?: Maybe<Cmp_LabelFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_LabelFieldFacet>;
  item?: Maybe<Cmp_LabelField>;
  items?: Maybe<Array<Maybe<Cmp_LabelField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_LabelFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_LabelFieldWhereInput = {
  Choices?: InputMaybe<Cmp_FieldChoicePropertyWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  IsMultiSelect?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_LabelFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_LabelFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_LabelFieldWhereInput>>>;
};

export enum Cmp_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export type Cmp_NumberField = IData & Icmp_Field & {
  __typename?: 'cmp_NumberField';
  DecimalPlaces?: Maybe<Scalars['Int']['output']>;
  HasThousandSeparator?: Maybe<Scalars['Boolean']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_NumberField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_NumberField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_NumberFieldAutocomplete = {
  __typename?: 'cmp_NumberFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_NumberFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_NumberFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_NumberFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_NumberFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_NumberFieldFacet = {
  __typename?: 'cmp_NumberFieldFacet';
  DecimalPlaces?: Maybe<Array<Maybe<NumberFacet>>>;
  HasThousandSeparator?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_NumberFieldFacetDecimalPlacesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type Cmp_NumberFieldFacetHasThousandSeparatorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_NumberFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_NumberFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_NumberFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_NumberFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_NumberFieldOrderByInput = {
  DecimalPlaces?: InputMaybe<OrderBy>;
  HasThousandSeparator?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_NumberFieldOutput = {
  __typename?: 'cmp_NumberFieldOutput';
  autocomplete?: Maybe<Cmp_NumberFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_NumberFieldFacet>;
  item?: Maybe<Cmp_NumberField>;
  items?: Maybe<Array<Maybe<Cmp_NumberField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_NumberFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_NumberFieldWhereInput = {
  DecimalPlaces?: InputMaybe<IntFilterInput>;
  HasThousandSeparator?: InputMaybe<BoolFilterInput>;
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_NumberFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_NumberFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_NumberFieldWhereInput>>>;
};

export type Cmp_PercentField = IData & Icmp_Field & {
  __typename?: 'cmp_PercentField';
  DecimalPlaces?: Maybe<Scalars['Int']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_PercentField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PercentField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_PercentFieldAutocomplete = {
  __typename?: 'cmp_PercentFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_PercentFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PercentFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PercentFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PercentFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_PercentFieldFacet = {
  __typename?: 'cmp_PercentFieldFacet';
  DecimalPlaces?: Maybe<Array<Maybe<NumberFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_PercentFieldFacetDecimalPlacesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type Cmp_PercentFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PercentFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PercentFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PercentFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_PercentFieldOrderByInput = {
  DecimalPlaces?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_PercentFieldOutput = {
  __typename?: 'cmp_PercentFieldOutput';
  autocomplete?: Maybe<Cmp_PercentFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_PercentFieldFacet>;
  item?: Maybe<Cmp_PercentField>;
  items?: Maybe<Array<Maybe<Cmp_PercentField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_PercentFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_PercentFieldWhereInput = {
  DecimalPlaces?: InputMaybe<IntFilterInput>;
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_PercentFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_PercentFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_PercentFieldWhereInput>>>;
};

export type Cmp_PublicImageAsset = IData & Icmp_Asset & {
  __typename?: 'cmp_PublicImageAsset';
  AltText?: Maybe<Scalars['String']['output']>;
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FocalPoint?: Maybe<Cmp_FocalPoint>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Height?: Maybe<Scalars['Int']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<Cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Renditions?: Maybe<Array<Maybe<Cmp_RenditionProperty>>>;
  Tags?: Maybe<Array<Maybe<Cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  Width?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_PublicImageAssetDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicImageAssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicImageAssetTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicImageAsset_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicImageAsset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_PublicImageAssetAutocomplete = {
  __typename?: 'cmp_PublicImageAssetAutocomplete';
  AltText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Fields?: Maybe<Icmp_FieldAutocomplete>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Labels?: Maybe<Cmp_AssetLabelAutocomplete>;
  LibraryPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Renditions?: Maybe<Cmp_RenditionPropertyAutocomplete>;
  Tags?: Maybe<Cmp_TagAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_PublicImageAssetAutocompleteAltTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicImageAssetAutocompleteFolderGuidsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicImageAssetAutocompleteLibraryPathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicImageAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicImageAssetAutocompleteParentFolderGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicImageAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_PublicImageAssetFacet = {
  __typename?: 'cmp_PublicImageAssetFacet';
  AltText?: Maybe<Array<Maybe<StringFacet>>>;
  DateCreated?: Maybe<Array<Maybe<DateFacet>>>;
  DateModified?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExpiryDate?: Maybe<Array<Maybe<DateFacet>>>;
  Fields?: Maybe<Icmp_FieldFacet>;
  FocalPoint?: Maybe<Cmp_FocalPointFacet>;
  FolderGuids?: Maybe<Array<Maybe<StringFacet>>>;
  Height?: Maybe<Array<Maybe<NumberFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Labels?: Maybe<Cmp_AssetLabelFacet>;
  LibraryPath?: Maybe<Array<Maybe<StringFacet>>>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<StringFacet>>>;
  Renditions?: Maybe<Cmp_RenditionPropertyFacet>;
  Tags?: Maybe<Cmp_TagFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Width?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type Cmp_PublicImageAssetFacetAltTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicImageAssetFacetDateCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_PublicImageAssetFacetDateModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_PublicImageAssetFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicImageAssetFacetExpiryDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_PublicImageAssetFacetFolderGuidsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicImageAssetFacetHeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type Cmp_PublicImageAssetFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicImageAssetFacetLibraryPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicImageAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicImageAssetFacetParentFolderGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicImageAssetFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicImageAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicImageAssetFacetWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type Cmp_PublicImageAssetOrderByInput = {
  AltText?: InputMaybe<OrderBy>;
  DateCreated?: InputMaybe<OrderBy>;
  DateModified?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExpiryDate?: InputMaybe<OrderBy>;
  Fields?: InputMaybe<Icmp_FieldOrderByInput>;
  FocalPoint?: InputMaybe<Cmp_FocalPointOrderByInput>;
  FolderGuids?: InputMaybe<OrderBy>;
  Height?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Labels?: InputMaybe<Cmp_AssetLabelOrderByInput>;
  LibraryPath?: InputMaybe<OrderBy>;
  MimeType?: InputMaybe<OrderBy>;
  ParentFolderGuid?: InputMaybe<OrderBy>;
  Renditions?: InputMaybe<Cmp_RenditionPropertyOrderByInput>;
  Tags?: InputMaybe<Cmp_TagOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Width?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_PublicImageAssetOutput = {
  __typename?: 'cmp_PublicImageAssetOutput';
  autocomplete?: Maybe<Cmp_PublicImageAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_PublicImageAssetFacet>;
  item?: Maybe<Cmp_PublicImageAsset>;
  items?: Maybe<Array<Maybe<Cmp_PublicImageAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_PublicImageAssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_PublicImageAssetWhereInput = {
  AltText?: InputMaybe<StringFilterInput>;
  DateCreated?: InputMaybe<DateFilterInput>;
  DateModified?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExpiryDate?: InputMaybe<DateFilterInput>;
  Fields?: InputMaybe<Icmp_FieldWhereInput>;
  FocalPoint?: InputMaybe<Cmp_FocalPointWhereInput>;
  FolderGuids?: InputMaybe<StringFilterInput>;
  Height?: InputMaybe<IntFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Labels?: InputMaybe<Cmp_AssetLabelWhereInput>;
  LibraryPath?: InputMaybe<StringFilterInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  ParentFolderGuid?: InputMaybe<StringFilterInput>;
  Renditions?: InputMaybe<Cmp_RenditionPropertyWhereInput>;
  Tags?: InputMaybe<Cmp_TagWhereInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Width?: InputMaybe<IntFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_PublicImageAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_PublicImageAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_PublicImageAssetWhereInput>>>;
};

export type Cmp_PublicRawFileAsset = IData & Icmp_Asset & {
  __typename?: 'cmp_PublicRawFileAsset';
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<Cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Tags?: Maybe<Array<Maybe<Cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_PublicRawFileAssetDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicRawFileAssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicRawFileAssetTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicRawFileAsset_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicRawFileAsset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_PublicRawFileAssetAutocomplete = {
  __typename?: 'cmp_PublicRawFileAssetAutocomplete';
  Fields?: Maybe<Icmp_FieldAutocomplete>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Labels?: Maybe<Cmp_AssetLabelAutocomplete>;
  LibraryPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Tags?: Maybe<Cmp_TagAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_PublicRawFileAssetAutocompleteFolderGuidsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicRawFileAssetAutocompleteLibraryPathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicRawFileAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicRawFileAssetAutocompleteParentFolderGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicRawFileAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_PublicRawFileAssetFacet = {
  __typename?: 'cmp_PublicRawFileAssetFacet';
  DateCreated?: Maybe<Array<Maybe<DateFacet>>>;
  DateModified?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExpiryDate?: Maybe<Array<Maybe<DateFacet>>>;
  Fields?: Maybe<Icmp_FieldFacet>;
  FolderGuids?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Labels?: Maybe<Cmp_AssetLabelFacet>;
  LibraryPath?: Maybe<Array<Maybe<StringFacet>>>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<StringFacet>>>;
  Tags?: Maybe<Cmp_TagFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_PublicRawFileAssetFacetDateCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_PublicRawFileAssetFacetDateModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_PublicRawFileAssetFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicRawFileAssetFacetExpiryDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_PublicRawFileAssetFacetFolderGuidsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicRawFileAssetFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicRawFileAssetFacetLibraryPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicRawFileAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicRawFileAssetFacetParentFolderGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicRawFileAssetFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicRawFileAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_PublicRawFileAssetOrderByInput = {
  DateCreated?: InputMaybe<OrderBy>;
  DateModified?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExpiryDate?: InputMaybe<OrderBy>;
  Fields?: InputMaybe<Icmp_FieldOrderByInput>;
  FolderGuids?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Labels?: InputMaybe<Cmp_AssetLabelOrderByInput>;
  LibraryPath?: InputMaybe<OrderBy>;
  MimeType?: InputMaybe<OrderBy>;
  ParentFolderGuid?: InputMaybe<OrderBy>;
  Tags?: InputMaybe<Cmp_TagOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_PublicRawFileAssetOutput = {
  __typename?: 'cmp_PublicRawFileAssetOutput';
  autocomplete?: Maybe<Cmp_PublicRawFileAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_PublicRawFileAssetFacet>;
  item?: Maybe<Cmp_PublicRawFileAsset>;
  items?: Maybe<Array<Maybe<Cmp_PublicRawFileAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_PublicRawFileAssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_PublicRawFileAssetWhereInput = {
  DateCreated?: InputMaybe<DateFilterInput>;
  DateModified?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExpiryDate?: InputMaybe<DateFilterInput>;
  Fields?: InputMaybe<Icmp_FieldWhereInput>;
  FolderGuids?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Labels?: InputMaybe<Cmp_AssetLabelWhereInput>;
  LibraryPath?: InputMaybe<StringFilterInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  ParentFolderGuid?: InputMaybe<StringFilterInput>;
  Tags?: InputMaybe<Cmp_TagWhereInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_PublicRawFileAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_PublicRawFileAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_PublicRawFileAssetWhereInput>>>;
};

export type Cmp_PublicVideoAsset = IData & Icmp_Asset & {
  __typename?: 'cmp_PublicVideoAsset';
  AltText?: Maybe<Scalars['String']['output']>;
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<Cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Renditions?: Maybe<Array<Maybe<Cmp_RenditionProperty>>>;
  Tags?: Maybe<Array<Maybe<Cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_PublicVideoAssetDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicVideoAssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicVideoAssetTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicVideoAsset_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_PublicVideoAsset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_PublicVideoAssetAutocomplete = {
  __typename?: 'cmp_PublicVideoAssetAutocomplete';
  AltText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Fields?: Maybe<Icmp_FieldAutocomplete>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Labels?: Maybe<Cmp_AssetLabelAutocomplete>;
  LibraryPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Renditions?: Maybe<Cmp_RenditionPropertyAutocomplete>;
  Tags?: Maybe<Cmp_TagAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_PublicVideoAssetAutocompleteAltTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicVideoAssetAutocompleteFolderGuidsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicVideoAssetAutocompleteLibraryPathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicVideoAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicVideoAssetAutocompleteParentFolderGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_PublicVideoAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_PublicVideoAssetFacet = {
  __typename?: 'cmp_PublicVideoAssetFacet';
  AltText?: Maybe<Array<Maybe<StringFacet>>>;
  DateCreated?: Maybe<Array<Maybe<DateFacet>>>;
  DateModified?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExpiryDate?: Maybe<Array<Maybe<DateFacet>>>;
  Fields?: Maybe<Icmp_FieldFacet>;
  FolderGuids?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Labels?: Maybe<Cmp_AssetLabelFacet>;
  LibraryPath?: Maybe<Array<Maybe<StringFacet>>>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<StringFacet>>>;
  Renditions?: Maybe<Cmp_RenditionPropertyFacet>;
  Tags?: Maybe<Cmp_TagFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_PublicVideoAssetFacetAltTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicVideoAssetFacetDateCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_PublicVideoAssetFacetDateModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_PublicVideoAssetFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicVideoAssetFacetExpiryDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_PublicVideoAssetFacetFolderGuidsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicVideoAssetFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicVideoAssetFacetLibraryPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicVideoAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicVideoAssetFacetParentFolderGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicVideoAssetFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_PublicVideoAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_PublicVideoAssetOrderByInput = {
  AltText?: InputMaybe<OrderBy>;
  DateCreated?: InputMaybe<OrderBy>;
  DateModified?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExpiryDate?: InputMaybe<OrderBy>;
  Fields?: InputMaybe<Icmp_FieldOrderByInput>;
  FolderGuids?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Labels?: InputMaybe<Cmp_AssetLabelOrderByInput>;
  LibraryPath?: InputMaybe<OrderBy>;
  MimeType?: InputMaybe<OrderBy>;
  ParentFolderGuid?: InputMaybe<OrderBy>;
  Renditions?: InputMaybe<Cmp_RenditionPropertyOrderByInput>;
  Tags?: InputMaybe<Cmp_TagOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_PublicVideoAssetOutput = {
  __typename?: 'cmp_PublicVideoAssetOutput';
  autocomplete?: Maybe<Cmp_PublicVideoAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_PublicVideoAssetFacet>;
  item?: Maybe<Cmp_PublicVideoAsset>;
  items?: Maybe<Array<Maybe<Cmp_PublicVideoAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_PublicVideoAssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_PublicVideoAssetWhereInput = {
  AltText?: InputMaybe<StringFilterInput>;
  DateCreated?: InputMaybe<DateFilterInput>;
  DateModified?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExpiryDate?: InputMaybe<DateFilterInput>;
  Fields?: InputMaybe<Icmp_FieldWhereInput>;
  FolderGuids?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Labels?: InputMaybe<Cmp_AssetLabelWhereInput>;
  LibraryPath?: InputMaybe<StringFilterInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  ParentFolderGuid?: InputMaybe<StringFilterInput>;
  Renditions?: InputMaybe<Cmp_RenditionPropertyWhereInput>;
  Tags?: InputMaybe<Cmp_TagWhereInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_PublicVideoAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_PublicVideoAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_PublicVideoAssetWhereInput>>>;
};

export type Cmp_RadioField = IData & Icmp_Field & {
  __typename?: 'cmp_RadioField';
  Choices?: Maybe<Array<Maybe<Cmp_FieldChoiceProperty>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Cmp_RadioField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_RadioField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Cmp_RadioFieldAutocomplete = {
  __typename?: 'cmp_RadioFieldAutocomplete';
  Choices?: Maybe<Cmp_FieldChoicePropertyAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_RadioFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_RadioFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_RadioFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_RadioFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_RadioFieldFacet = {
  __typename?: 'cmp_RadioFieldFacet';
  Choices?: Maybe<Cmp_FieldChoicePropertyFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_RadioFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_RadioFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_RadioFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_RadioFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_RadioFieldOrderByInput = {
  Choices?: InputMaybe<Cmp_FieldChoicePropertyOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Cmp_RadioFieldOutput = {
  __typename?: 'cmp_RadioFieldOutput';
  autocomplete?: Maybe<Cmp_RadioFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_RadioFieldFacet>;
  item?: Maybe<Cmp_RadioField>;
  items?: Maybe<Array<Maybe<Cmp_RadioField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_RadioFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_RadioFieldWhereInput = {
  Choices?: InputMaybe<Cmp_FieldChoicePropertyWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_RadioFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_RadioFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_RadioFieldWhereInput>>>;
};

export type Cmp_RenditionProperty = {
  __typename?: 'cmp_RenditionProperty';
  Height?: Maybe<Scalars['Int']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  Width?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_RenditionPropertyIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Cmp_RenditionPropertyAutocomplete = {
  __typename?: 'cmp_RenditionPropertyAutocomplete';
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_RenditionPropertyAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_RenditionPropertyAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_RenditionPropertyFacet = {
  __typename?: 'cmp_RenditionPropertyFacet';
  Height?: Maybe<Array<Maybe<NumberFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Width?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type Cmp_RenditionPropertyFacetHeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type Cmp_RenditionPropertyFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_RenditionPropertyFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_RenditionPropertyFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_RenditionPropertyFacetWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type Cmp_RenditionPropertyOrderByInput = {
  Height?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Width?: InputMaybe<OrderBy>;
};

export type Cmp_RenditionPropertyWhereInput = {
  Height?: InputMaybe<IntFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Width?: InputMaybe<IntFilterInput>;
};

export type Cmp_RichTextField = IData & Icmp_Field & {
  __typename?: 'cmp_RichTextField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type Cmp_RichTextField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_RichTextField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type Cmp_RichTextFieldNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Cmp_RichTextFieldAutocomplete = {
  __typename?: 'cmp_RichTextFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_RichTextFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_RichTextFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_RichTextFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_RichTextFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_RichTextFieldFacet = {
  __typename?: 'cmp_RichTextFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_RichTextFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_RichTextFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_RichTextFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_RichTextFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_RichTextFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_RichTextFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type Cmp_RichTextFieldOutput = {
  __typename?: 'cmp_RichTextFieldOutput';
  autocomplete?: Maybe<Cmp_RichTextFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_RichTextFieldFacet>;
  item?: Maybe<Cmp_RichTextField>;
  items?: Maybe<Array<Maybe<Cmp_RichTextField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_RichTextFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_RichTextFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_RichTextFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_RichTextFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_RichTextFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type Cmp_StructuredContentAsset = IData & Icmp_Asset & {
  __typename?: 'cmp_StructuredContentAsset';
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<Cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Tags?: Maybe<Array<Maybe<Cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type Cmp_StructuredContentAssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_StructuredContentAssetTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_StructuredContentAsset_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_StructuredContentAsset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type Cmp_StructuredContentAssetNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Cmp_StructuredContentAssetAutocomplete = {
  __typename?: 'cmp_StructuredContentAssetAutocomplete';
  Fields?: Maybe<Icmp_FieldAutocomplete>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Labels?: Maybe<Cmp_AssetLabelAutocomplete>;
  LibraryPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Tags?: Maybe<Cmp_TagAutocomplete>;
};


export type Cmp_StructuredContentAssetAutocompleteFolderGuidsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_StructuredContentAssetAutocompleteLibraryPathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_StructuredContentAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_StructuredContentAssetAutocompleteParentFolderGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_StructuredContentAssetFacet = {
  __typename?: 'cmp_StructuredContentAssetFacet';
  DateCreated?: Maybe<Array<Maybe<DateFacet>>>;
  DateModified?: Maybe<Array<Maybe<DateFacet>>>;
  ExpiryDate?: Maybe<Array<Maybe<DateFacet>>>;
  Fields?: Maybe<Icmp_FieldFacet>;
  FolderGuids?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Labels?: Maybe<Cmp_AssetLabelFacet>;
  LibraryPath?: Maybe<Array<Maybe<StringFacet>>>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<StringFacet>>>;
  Tags?: Maybe<Cmp_TagFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_StructuredContentAssetFacetDateCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_StructuredContentAssetFacetDateModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_StructuredContentAssetFacetExpiryDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type Cmp_StructuredContentAssetFacetFolderGuidsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_StructuredContentAssetFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_StructuredContentAssetFacetLibraryPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_StructuredContentAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_StructuredContentAssetFacetParentFolderGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_StructuredContentAssetFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_StructuredContentAssetFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_StructuredContentAssetOrderByInput = {
  DateCreated?: InputMaybe<OrderBy>;
  DateModified?: InputMaybe<OrderBy>;
  ExpiryDate?: InputMaybe<OrderBy>;
  Fields?: InputMaybe<Icmp_FieldOrderByInput>;
  FolderGuids?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Labels?: InputMaybe<Cmp_AssetLabelOrderByInput>;
  LibraryPath?: InputMaybe<OrderBy>;
  MimeType?: InputMaybe<OrderBy>;
  ParentFolderGuid?: InputMaybe<OrderBy>;
  Tags?: InputMaybe<Cmp_TagOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type Cmp_StructuredContentAssetOutput = {
  __typename?: 'cmp_StructuredContentAssetOutput';
  autocomplete?: Maybe<Cmp_StructuredContentAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_StructuredContentAssetFacet>;
  item?: Maybe<Cmp_StructuredContentAsset>;
  items?: Maybe<Array<Maybe<Cmp_StructuredContentAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_StructuredContentAssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_StructuredContentAssetWhereInput = {
  DateCreated?: InputMaybe<DateFilterInput>;
  DateModified?: InputMaybe<DateFilterInput>;
  ExpiryDate?: InputMaybe<DateFilterInput>;
  Fields?: InputMaybe<Icmp_FieldWhereInput>;
  FolderGuids?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Labels?: InputMaybe<Cmp_AssetLabelWhereInput>;
  LibraryPath?: InputMaybe<StringFilterInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  ParentFolderGuid?: InputMaybe<StringFilterInput>;
  Tags?: InputMaybe<Cmp_TagWhereInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_StructuredContentAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_StructuredContentAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_StructuredContentAssetWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type Cmp_Tag = {
  __typename?: 'cmp_Tag';
  Guid?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type Cmp_TagAutocomplete = {
  __typename?: 'cmp_TagAutocomplete';
  Guid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_TagAutocompleteGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_TagAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_TagFacet = {
  __typename?: 'cmp_TagFacet';
  Guid?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_TagFacetGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_TagFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_TagOrderByInput = {
  Guid?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type Cmp_TagWhereInput = {
  Guid?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type Cmp_TextAreaField = IData & Icmp_Field & {
  __typename?: 'cmp_TextAreaField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type Cmp_TextAreaField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_TextAreaField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type Cmp_TextAreaFieldNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Cmp_TextAreaFieldAutocomplete = {
  __typename?: 'cmp_TextAreaFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_TextAreaFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_TextAreaFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_TextAreaFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_TextAreaFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_TextAreaFieldFacet = {
  __typename?: 'cmp_TextAreaFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_TextAreaFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_TextAreaFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_TextAreaFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_TextAreaFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_TextAreaFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_TextAreaFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type Cmp_TextAreaFieldOutput = {
  __typename?: 'cmp_TextAreaFieldOutput';
  autocomplete?: Maybe<Cmp_TextAreaFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_TextAreaFieldFacet>;
  item?: Maybe<Cmp_TextAreaField>;
  items?: Maybe<Array<Maybe<Cmp_TextAreaField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_TextAreaFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_TextAreaFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_TextAreaFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_TextAreaFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_TextAreaFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type Cmp_TextField = IData & Icmp_Field & {
  __typename?: 'cmp_TextField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type Cmp_TextField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_TextField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type Cmp_TextFieldNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Cmp_TextFieldAutocomplete = {
  __typename?: 'cmp_TextFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_TextFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_TextFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_TextFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_TextFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_TextFieldFacet = {
  __typename?: 'cmp_TextFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_TextFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_TextFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_TextFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_TextFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_TextFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_TextFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type Cmp_TextFieldOutput = {
  __typename?: 'cmp_TextFieldOutput';
  autocomplete?: Maybe<Cmp_TextFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_TextFieldFacet>;
  item?: Maybe<Cmp_TextField>;
  items?: Maybe<Array<Maybe<Cmp_TextField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_TextFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_TextFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_TextFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_TextFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_TextFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type Cmp_VideoField = IData & Icmp_Field & {
  __typename?: 'cmp_VideoField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type Cmp_VideoField_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Cmp_VideoField_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type Cmp_VideoFieldNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Cmp_VideoFieldAutocomplete = {
  __typename?: 'cmp_VideoFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Cmp_VideoFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_VideoFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_VideoFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Cmp_VideoFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Cmp_VideoFieldFacet = {
  __typename?: 'cmp_VideoFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Cmp_VideoFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_VideoFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_VideoFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_VideoFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Cmp_VideoFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Cmp_VideoFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type Cmp_VideoFieldOutput = {
  __typename?: 'cmp_VideoFieldOutput';
  autocomplete?: Maybe<Cmp_VideoFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Cmp_VideoFieldFacet>;
  item?: Maybe<Cmp_VideoField>;
  items?: Maybe<Array<Maybe<Cmp_VideoField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Cmp_VideoFieldOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cmp_VideoFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Cmp_VideoFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Cmp_VideoFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Cmp_VideoFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type MarvinBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'marvinBlock';
  Text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type MarvinBlock_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MarvinBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MarvinBlockAutocomplete = {
  __typename?: 'marvinBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MarvinBlockFacet = {
  __typename?: 'marvinBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MarvinBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type MarvinBlockOutput = {
  __typename?: 'marvinBlockOutput';
  autocomplete?: Maybe<MarvinBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MarvinBlockFacet>;
  item?: Maybe<MarvinBlock>;
  items?: Maybe<Array<Maybe<MarvinBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MarvinBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MarvinBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<MarvinBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MarvinBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MarvinBlockWhereInput>>>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type Test = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'test';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Test_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Test_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestAutocomplete = {
  __typename?: 'testAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type TestFacet = {
  __typename?: 'testFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type TestOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type TestOutput = {
  __typename?: 'testOutput';
  autocomplete?: Maybe<TestAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestFacet>;
  item?: Maybe<Test>;
  items?: Maybe<Array<Maybe<Test>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TestWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestWhereInput>>>;
};

export type UsePinnedInput = {
  collectionId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase?: InputMaybe<Scalars['String']['input']>;
};

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', Data?: { __typename?: 'DataOutput', total?: number | null, item?:
      | { __typename?: 'AmazonHeroSection', _json?: any | null }
      | { __typename?: 'ArticleList', _json?: any | null }
      | { __typename?: 'ArticlePage', _json?: any | null }
      | { __typename?: 'AutoGeneratedSection', _json?: any | null }
      | { __typename?: 'BlankExperience', _json?: any | null }
      | { __typename?: 'BlankSection', _json?: any | null }
      | { __typename?: 'Burger', _json?: any | null }
      | { __typename?: 'Button', _json?: any | null }
      | { __typename?: 'CallToAction', _json?: any | null }
      | { __typename?: 'Card', _json?: any | null }
      | { __typename?: 'Carousel', _json?: any | null }
      | { __typename?: 'Collapse', _json?: any | null }
      | { __typename?: 'CssMedia', _json?: any | null }
      | { __typename?: 'Data', _json?: any | null }
      | { __typename?: 'Divider', _json?: any | null }
      | { __typename?: 'FacetedSearch', _json?: any | null }
      | { __typename?: 'FolderPage', _json?: any | null }
      | { __typename?: 'GenericMedia', _json?: any | null }
      | { __typename?: 'Grid', _json?: any | null }
      | { __typename?: 'Hero', _json?: any | null }
      | { __typename?: 'Iframe', _json?: any | null }
      | { __typename?: 'Image', _json?: any | null }
      | { __typename?: 'ImageMedia', _json?: any | null }
      | { __typename?: 'LandingPage', _json?: any | null }
      | { __typename?: 'Marvin5Experience', _json?: any | null }
      | { __typename?: 'MarvinExperience', _json?: any | null }
      | { __typename?: 'MenuItem', _json?: any | null }
      | { __typename?: 'MockupPage', _json?: any | null }
      | { __typename?: 'OdpForm', _json?: any | null }
      | { __typename?: 'OptiFormsChoiceElement', _json?: any | null }
      | { __typename?: 'OptiFormsCondition', _json?: any | null }
      | { __typename?: 'OptiFormsContainerData', _json?: any | null }
      | { __typename?: 'OptiFormsDependencyRule', _json?: any | null }
      | { __typename?: 'OptiFormsNumberElement', _json?: any | null }
      | { __typename?: 'OptiFormsRangeElement', _json?: any | null }
      | { __typename?: 'OptiFormsResetElement', _json?: any | null }
      | { __typename?: 'OptiFormsSelectionElement', _json?: any | null }
      | { __typename?: 'OptiFormsSubmitElement', _json?: any | null }
      | { __typename?: 'OptiFormsTextareaElement', _json?: any | null }
      | { __typename?: 'OptiFormsTextboxElement', _json?: any | null }
      | { __typename?: 'OptiFormsUrlElement', _json?: any | null }
      | { __typename?: 'PageAdminSettings', _json?: any | null }
      | { __typename?: 'PageSeoSettings', _json?: any | null }
      | { __typename?: 'Paragraph', _json?: any | null }
      | { __typename?: 'PlaceholderItem', _json?: any | null }
      | { __typename?: 'PlaceholdersConfiguration', _json?: any | null }
      | { __typename?: 'PressRelease', _json?: any | null }
      | { __typename?: 'SiteSettings', _json?: any | null }
      | { __typename?: 'SiteStyles', _json?: any | null }
      | { __typename?: 'SysContentFolder', _json?: any | null }
      | { __typename?: 'TestimonialCard', _json?: any | null }
      | { __typename?: 'TestimonialCardComponent', _json?: any | null }
      | { __typename?: 'Text', _json?: any | null }
      | { __typename?: 'Video', _json?: any | null }
      | { __typename?: 'VideoExternal', _json?: any | null }
      | { __typename?: 'VideoMedia', _json?: any | null }
      | { __typename?: '_AssetItem', _json?: any | null }
      | { __typename?: '_Component', _json?: any | null }
      | { __typename?: '_Content', _json?: any | null }
      | { __typename?: '_Experience', _json?: any | null }
      | { __typename?: '_Folder', _json?: any | null }
      | { __typename?: '_Image', _json?: any | null }
      | { __typename?: '_ImageItem', _json?: any | null }
      | { __typename?: '_Item', _json?: any | null }
      | { __typename?: '_Media', _json?: any | null }
      | { __typename?: '_Page', _json?: any | null }
      | { __typename?: '_Section', _json?: any | null }
      | { __typename?: '_Video', _json?: any | null }
      | { __typename?: 'amazon_exchange_experience', _json?: any | null }
      | { __typename?: 'cmp_Asset', _json?: any | null }
      | { __typename?: 'cmp_CheckboxField', _json?: any | null }
      | { __typename?: 'cmp_CurrencyField', _json?: any | null }
      | { __typename?: 'cmp_DateField', _json?: any | null }
      | { __typename?: 'cmp_DropdownField', _json?: any | null }
      | { __typename?: 'cmp_Field', _json?: any | null }
      | { __typename?: 'cmp_ImageField', _json?: any | null }
      | { __typename?: 'cmp_LabelField', _json?: any | null }
      | { __typename?: 'cmp_NumberField', _json?: any | null }
      | { __typename?: 'cmp_PercentField', _json?: any | null }
      | { __typename?: 'cmp_PublicImageAsset', _json?: any | null }
      | { __typename?: 'cmp_PublicRawFileAsset', _json?: any | null }
      | { __typename?: 'cmp_PublicVideoAsset', _json?: any | null }
      | { __typename?: 'cmp_RadioField', _json?: any | null }
      | { __typename?: 'cmp_RichTextField', _json?: any | null }
      | { __typename?: 'cmp_StructuredContentAsset', _json?: any | null }
      | { __typename?: 'cmp_TextAreaField', _json?: any | null }
      | { __typename?: 'cmp_TextField', _json?: any | null }
      | { __typename?: 'cmp_VideoField', _json?: any | null }
      | { __typename?: 'marvinBlock', _json?: any | null }
      | { __typename?: 'test', _json?: any | null }
     | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const TestDocument = new TypedDocumentString(`
    query Test {
  Data {
    total
    item {
      _json
    }
  }
}
    `) as unknown as TypedDocumentString<TestQuery, TestQueryVariables>;