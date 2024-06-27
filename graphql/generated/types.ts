import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

/** 배경 종류 */
export enum BackgroundType {
  /** 색상 */
  Color = 'COLOR',
  /** 이미지 */
  Image = 'IMAGE'
}

/** 자식 컴포넌트 */
export type ChildEntity = {
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 이미지 */
  image?: Maybe<Scalars['String']['output']>;
  /** 삭제 여부 */
  isDelete: Scalars['Boolean']['output'];
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 너비 */
  width?: Maybe<Scalars['String']['output']>;
};

/** 컴포넌트 */
export type ComponentEntity = {
  /** 자식 컴포넌트 목록 */
  children?: Maybe<Array<ChildEntity>>;
  /** 컴포넌트 스타일 */
  componentStyle?: Maybe<ComponentStyleEntity>;
  /** 컴포넌트 종류 */
  componentType: ComponentType;
  /** 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 내용 스타일 */
  contentStyle?: Maybe<ContentStyleEntity>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 삭제 여부 */
  isDelete: Scalars['Boolean']['output'];
  /** 컴포넌트 이름 */
  name: Scalars['String']['output'];
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 제목 스타일 */
  titleStyle?: Maybe<TitleStyleEntity>;
};

/** 컴포넌트 */
export type ComponentStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 사이트 ID */
  componentId: Scalars['Int']['output'];
  /** 갭 */
  gap?: Maybe<Scalars['String']['output']>;
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
};

export type ComponentStyleInput = {
  /** 배경 */
  background?: InputMaybe<Scalars['String']['input']>;
  /** 배경 종류 */
  backgroundType?: InputMaybe<BackgroundType>;
  /** 갭 */
  gap?: InputMaybe<Scalars['String']['input']>;
  /** 높이 */
  height?: InputMaybe<Scalars['String']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
};

/** 컴포넌트 종류 */
export enum ComponentType {
  /** 문의 */
  Inquiry = 'INQUIRY',
  /** 팝업 */
  Popup = 'POPUP',
  /** 섹션 */
  Section = 'SECTION'
}

/** 내용 스타일 */
export type ContentStyleEntity = {
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Int']['output']>;
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

export type ContentStyleInput = {
  /** 줄 높이 */
  lineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 텍스트 색상 */
  textColor?: InputMaybe<Scalars['String']['input']>;
  /** 텍스트 크기 */
  textSize?: InputMaybe<Scalars['Int']['input']>;
};

/** 푸터 */
export type FooterEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 하단 내용 */
  contentBottom?: Maybe<Scalars['String']['output']>;
  /** 상단 내용 */
  contentTop?: Maybe<Scalars['String']['output']>;
  /** 푸터 타입 */
  footerType: Scalars['Int']['output'];
  /** 고객센터 */
  helpCenter?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Int']['output']>;
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 하단 패딩 */
  paddingBottom?: Maybe<Scalars['String']['output']>;
  /** 상단 패딩 */
  paddingTop?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 약관 */
  terms?: Maybe<Scalars['String']['output']>;
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

/** 헤더 */
export type HeaderEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 헤더 높이 */
  height?: Maybe<Scalars['Int']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 로고 사이즈 */
  logoSize?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  /** 회원가입 */
  createAdmin: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 생성 */
  createChild: Scalars['Boolean']['output'];
  /** 컴포넌트 생성 */
  createComponent: Scalars['Boolean']['output'];
  /** 사이트 생성 */
  createSite: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 삭제 */
  deleteChild: Scalars['Boolean']['output'];
  /** 컴포넌트 삭제 */
  deleteComponent: Scalars['Boolean']['output'];
  /** 로그인 */
  login: Scalars['String']['output'];
  /** 컴포넌트 수정 */
  updateComponent: Scalars['Boolean']['output'];
  /** 푸터 설정 */
  updateFooter: Scalars['Boolean']['output'];
  /** 헤더 설정 */
  updateHeader: Scalars['Boolean']['output'];
};


export type MutationCreateAdminArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateChildArgs = {
  componentId: Scalars['Int']['input'];
};


export type MutationCreateComponentArgs = {
  componentType: ComponentType;
  name: Scalars['String']['input'];
  siteId: Scalars['Int']['input'];
};


export type MutationCreateSiteArgs = {
  domain: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteChildArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteComponentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateComponentArgs = {
  componentStyle?: InputMaybe<ComponentStyleInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentStyle?: InputMaybe<ContentStyleInput>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  titleStyle?: InputMaybe<TitleStyleInput>;
};


export type MutationUpdateFooterArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  contentBottom?: InputMaybe<Scalars['String']['input']>;
  contentTop?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  footerType: Scalars['Int']['input'];
  helpCenter?: InputMaybe<Scalars['String']['input']>;
  lineHeight?: InputMaybe<Scalars['Int']['input']>;
  paddingBottom?: InputMaybe<Scalars['String']['input']>;
  paddingTop?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['Int']['input'];
  terms?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateHeaderArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  logoSize?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['Int']['input'];
  textColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  /** 관리자 ID로 사이트 목록 조회 */
  findManySite: Array<SiteEntity>;
  /** 도메인으로 사이트 조회 */
  findOneSiteByDomain: SiteEntity;
  /** ID로 사이트 조회 */
  findOneSiteById: SiteEntity;
};


export type QueryFindOneSiteByDomainArgs = {
  domain: Scalars['String']['input'];
};


export type QueryFindOneSiteByIdArgs = {
  id: Scalars['Int']['input'];
};

/** 사이트 */
export type SiteEntity = {
  /** 컴포넌트 목록 */
  components?: Maybe<Array<ComponentEntity>>;
  /** 도메인 */
  domain: Scalars['String']['output'];
  /** 사이트 이메일 */
  email: Scalars['String']['output'];
  /** 푸터 */
  footer?: Maybe<FooterEntity>;
  /** 헤더 */
  header?: Maybe<HeaderEntity>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 이름 */
  name: Scalars['String']['output'];
};

/** 제목 스타일 */
export type TitleStyleEntity = {
  /** 컴포넌트 ID */
  componentId: Scalars['Float']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Int']['output']>;
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

export type TitleStyleInput = {
  /** 줄 높이 */
  lineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 텍스트 색상 */
  textColor?: InputMaybe<Scalars['String']['input']>;
  /** 텍스트 크기 */
  textSize?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateChildMutationVariables = Exact<{
  componentId: Scalars['Int']['input'];
}>;


export type CreateChildMutation = { createChild: boolean };

export type DeleteChildMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteChildMutation = { deleteChild: boolean };

export type CreateComponentMutationVariables = Exact<{
  siteId: Scalars['Int']['input'];
  componentType: ComponentType;
  name: Scalars['String']['input'];
}>;


export type CreateComponentMutation = { createComponent: boolean };

export type DeleteComponentMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteComponentMutation = { deleteComponent: boolean };

export type UpdateComponentMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  componentStyle?: InputMaybe<ComponentStyleInput>;
  titleStyle?: InputMaybe<TitleStyleInput>;
  contentStyle?: InputMaybe<ContentStyleInput>;
  file?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateComponentMutation = { updateComponent: boolean };

export type UpdateFooterMutationVariables = Exact<{
  siteId: Scalars['Int']['input'];
  footerType: Scalars['Int']['input'];
  contentTop?: InputMaybe<Scalars['String']['input']>;
  helpCenter?: InputMaybe<Scalars['String']['input']>;
  terms?: InputMaybe<Scalars['String']['input']>;
  contentBottom?: InputMaybe<Scalars['String']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  paddingTop?: InputMaybe<Scalars['String']['input']>;
  paddingBottom?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['Int']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  lineHeight?: InputMaybe<Scalars['Int']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateFooterMutation = { updateFooter: boolean };

export type UpdateHeaderMutationVariables = Exact<{
  siteId: Scalars['Int']['input'];
  logoSize?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['Int']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateHeaderMutation = { updateHeader: boolean };

export type FindManySiteQueryVariables = Exact<{ [key: string]: never; }>;


export type FindManySiteQuery = { findManySite: Array<{ id: number, domain: string, name: string, email: string }> };

export type FindOneSiteByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindOneSiteByIdQuery = { findOneSiteById: { id: number, name: string, email: string, domain: string, components?: Array<{ id: number, componentType: ComponentType, name: string, title?: string | null, content?: string | null, siteId: number, isDelete: boolean, componentStyle?: { id: number, height?: string | null, padding?: string | null, gap?: string | null, background?: string | null, backgroundType?: BackgroundType | null, componentId: number } | null, titleStyle?: { id: number, margin?: string | null, textSize?: number | null, textColor?: string | null, lineHeight?: number | null, componentId: number } | null, contentStyle?: { id: number, margin?: string | null, textSize?: number | null, textColor?: string | null, lineHeight?: number | null, componentId: number } | null, children?: Array<{ id: number, image?: string | null, width?: string | null, height?: string | null, margin?: string | null, isDelete: boolean, componentId: number }> | null }> | null, header?: { id: number, logo?: string | null, logoSize?: string | null, height?: number | null, backgroundColor?: string | null, textSize?: number | null, textColor?: string | null, siteId: number } | null, footer?: { id: number, footerType: number, logo?: string | null, contentTop?: string | null, helpCenter?: string | null, terms?: string | null, contentBottom?: string | null, backgroundColor?: string | null, paddingTop?: string | null, paddingBottom?: string | null, textSize?: number | null, textColor?: string | null, lineHeight?: number | null, siteId: number } | null } };


export const CreateChildDocument = gql`
    mutation CreateChild($componentId: Int!) {
  createChild(componentId: $componentId)
}
    `;
export type CreateChildMutationFn = Apollo.MutationFunction<CreateChildMutation, CreateChildMutationVariables>;

/**
 * __useCreateChildMutation__
 *
 * To run a mutation, you first call `useCreateChildMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChildMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChildMutation, { data, loading, error }] = useCreateChildMutation({
 *   variables: {
 *      componentId: // value for 'componentId'
 *   },
 * });
 */
export function useCreateChildMutation(baseOptions?: Apollo.MutationHookOptions<CreateChildMutation, CreateChildMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChildMutation, CreateChildMutationVariables>(CreateChildDocument, options);
      }
export type CreateChildMutationHookResult = ReturnType<typeof useCreateChildMutation>;
export type CreateChildMutationResult = Apollo.MutationResult<CreateChildMutation>;
export type CreateChildMutationOptions = Apollo.BaseMutationOptions<CreateChildMutation, CreateChildMutationVariables>;
export const DeleteChildDocument = gql`
    mutation DeleteChild($id: Int!) {
  deleteChild(id: $id)
}
    `;
export type DeleteChildMutationFn = Apollo.MutationFunction<DeleteChildMutation, DeleteChildMutationVariables>;

/**
 * __useDeleteChildMutation__
 *
 * To run a mutation, you first call `useDeleteChildMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteChildMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteChildMutation, { data, loading, error }] = useDeleteChildMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteChildMutation(baseOptions?: Apollo.MutationHookOptions<DeleteChildMutation, DeleteChildMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteChildMutation, DeleteChildMutationVariables>(DeleteChildDocument, options);
      }
export type DeleteChildMutationHookResult = ReturnType<typeof useDeleteChildMutation>;
export type DeleteChildMutationResult = Apollo.MutationResult<DeleteChildMutation>;
export type DeleteChildMutationOptions = Apollo.BaseMutationOptions<DeleteChildMutation, DeleteChildMutationVariables>;
export const CreateComponentDocument = gql`
    mutation CreateComponent($siteId: Int!, $componentType: ComponentType!, $name: String!) {
  createComponent(siteId: $siteId, componentType: $componentType, name: $name)
}
    `;
export type CreateComponentMutationFn = Apollo.MutationFunction<CreateComponentMutation, CreateComponentMutationVariables>;

/**
 * __useCreateComponentMutation__
 *
 * To run a mutation, you first call `useCreateComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createComponentMutation, { data, loading, error }] = useCreateComponentMutation({
 *   variables: {
 *      siteId: // value for 'siteId'
 *      componentType: // value for 'componentType'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateComponentMutation(baseOptions?: Apollo.MutationHookOptions<CreateComponentMutation, CreateComponentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateComponentMutation, CreateComponentMutationVariables>(CreateComponentDocument, options);
      }
export type CreateComponentMutationHookResult = ReturnType<typeof useCreateComponentMutation>;
export type CreateComponentMutationResult = Apollo.MutationResult<CreateComponentMutation>;
export type CreateComponentMutationOptions = Apollo.BaseMutationOptions<CreateComponentMutation, CreateComponentMutationVariables>;
export const DeleteComponentDocument = gql`
    mutation DeleteComponent($id: Int!) {
  deleteComponent(id: $id)
}
    `;
export type DeleteComponentMutationFn = Apollo.MutationFunction<DeleteComponentMutation, DeleteComponentMutationVariables>;

/**
 * __useDeleteComponentMutation__
 *
 * To run a mutation, you first call `useDeleteComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteComponentMutation, { data, loading, error }] = useDeleteComponentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteComponentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteComponentMutation, DeleteComponentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteComponentMutation, DeleteComponentMutationVariables>(DeleteComponentDocument, options);
      }
export type DeleteComponentMutationHookResult = ReturnType<typeof useDeleteComponentMutation>;
export type DeleteComponentMutationResult = Apollo.MutationResult<DeleteComponentMutation>;
export type DeleteComponentMutationOptions = Apollo.BaseMutationOptions<DeleteComponentMutation, DeleteComponentMutationVariables>;
export const UpdateComponentDocument = gql`
    mutation UpdateComponent($id: Int!, $name: String!, $title: String, $content: String, $componentStyle: ComponentStyleInput, $titleStyle: TitleStyleInput, $contentStyle: ContentStyleInput, $file: Upload) {
  updateComponent(
    id: $id
    name: $name
    title: $title
    content: $content
    componentStyle: $componentStyle
    titleStyle: $titleStyle
    contentStyle: $contentStyle
    file: $file
  )
}
    `;
export type UpdateComponentMutationFn = Apollo.MutationFunction<UpdateComponentMutation, UpdateComponentMutationVariables>;

/**
 * __useUpdateComponentMutation__
 *
 * To run a mutation, you first call `useUpdateComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateComponentMutation, { data, loading, error }] = useUpdateComponentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      componentStyle: // value for 'componentStyle'
 *      titleStyle: // value for 'titleStyle'
 *      contentStyle: // value for 'contentStyle'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateComponentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateComponentMutation, UpdateComponentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateComponentMutation, UpdateComponentMutationVariables>(UpdateComponentDocument, options);
      }
export type UpdateComponentMutationHookResult = ReturnType<typeof useUpdateComponentMutation>;
export type UpdateComponentMutationResult = Apollo.MutationResult<UpdateComponentMutation>;
export type UpdateComponentMutationOptions = Apollo.BaseMutationOptions<UpdateComponentMutation, UpdateComponentMutationVariables>;
export const UpdateFooterDocument = gql`
    mutation UpdateFooter($siteId: Int!, $footerType: Int!, $contentTop: String, $helpCenter: String, $terms: String, $contentBottom: String, $backgroundColor: String, $paddingTop: String, $paddingBottom: String, $textSize: Int, $textColor: String, $lineHeight: Int, $file: Upload) {
  updateFooter(
    siteId: $siteId
    footerType: $footerType
    contentTop: $contentTop
    helpCenter: $helpCenter
    terms: $terms
    contentBottom: $contentBottom
    backgroundColor: $backgroundColor
    paddingTop: $paddingTop
    paddingBottom: $paddingBottom
    textSize: $textSize
    textColor: $textColor
    lineHeight: $lineHeight
    file: $file
  )
}
    `;
export type UpdateFooterMutationFn = Apollo.MutationFunction<UpdateFooterMutation, UpdateFooterMutationVariables>;

/**
 * __useUpdateFooterMutation__
 *
 * To run a mutation, you first call `useUpdateFooterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFooterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFooterMutation, { data, loading, error }] = useUpdateFooterMutation({
 *   variables: {
 *      siteId: // value for 'siteId'
 *      footerType: // value for 'footerType'
 *      contentTop: // value for 'contentTop'
 *      helpCenter: // value for 'helpCenter'
 *      terms: // value for 'terms'
 *      contentBottom: // value for 'contentBottom'
 *      backgroundColor: // value for 'backgroundColor'
 *      paddingTop: // value for 'paddingTop'
 *      paddingBottom: // value for 'paddingBottom'
 *      textSize: // value for 'textSize'
 *      textColor: // value for 'textColor'
 *      lineHeight: // value for 'lineHeight'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateFooterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFooterMutation, UpdateFooterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFooterMutation, UpdateFooterMutationVariables>(UpdateFooterDocument, options);
      }
export type UpdateFooterMutationHookResult = ReturnType<typeof useUpdateFooterMutation>;
export type UpdateFooterMutationResult = Apollo.MutationResult<UpdateFooterMutation>;
export type UpdateFooterMutationOptions = Apollo.BaseMutationOptions<UpdateFooterMutation, UpdateFooterMutationVariables>;
export const UpdateHeaderDocument = gql`
    mutation UpdateHeader($siteId: Int!, $logoSize: String, $height: Int, $backgroundColor: String, $textColor: String, $textSize: Int, $file: Upload) {
  updateHeader(
    siteId: $siteId
    logoSize: $logoSize
    height: $height
    backgroundColor: $backgroundColor
    textColor: $textColor
    textSize: $textSize
    file: $file
  )
}
    `;
export type UpdateHeaderMutationFn = Apollo.MutationFunction<UpdateHeaderMutation, UpdateHeaderMutationVariables>;

/**
 * __useUpdateHeaderMutation__
 *
 * To run a mutation, you first call `useUpdateHeaderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHeaderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHeaderMutation, { data, loading, error }] = useUpdateHeaderMutation({
 *   variables: {
 *      siteId: // value for 'siteId'
 *      logoSize: // value for 'logoSize'
 *      height: // value for 'height'
 *      backgroundColor: // value for 'backgroundColor'
 *      textColor: // value for 'textColor'
 *      textSize: // value for 'textSize'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateHeaderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHeaderMutation, UpdateHeaderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHeaderMutation, UpdateHeaderMutationVariables>(UpdateHeaderDocument, options);
      }
export type UpdateHeaderMutationHookResult = ReturnType<typeof useUpdateHeaderMutation>;
export type UpdateHeaderMutationResult = Apollo.MutationResult<UpdateHeaderMutation>;
export type UpdateHeaderMutationOptions = Apollo.BaseMutationOptions<UpdateHeaderMutation, UpdateHeaderMutationVariables>;
export const FindManySiteDocument = gql`
    query FindManySite {
  findManySite {
    id
    domain
    name
    email
  }
}
    `;

/**
 * __useFindManySiteQuery__
 *
 * To run a query within a React component, call `useFindManySiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManySiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManySiteQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindManySiteQuery(baseOptions?: Apollo.QueryHookOptions<FindManySiteQuery, FindManySiteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManySiteQuery, FindManySiteQueryVariables>(FindManySiteDocument, options);
      }
export function useFindManySiteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManySiteQuery, FindManySiteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManySiteQuery, FindManySiteQueryVariables>(FindManySiteDocument, options);
        }
export function useFindManySiteSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindManySiteQuery, FindManySiteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindManySiteQuery, FindManySiteQueryVariables>(FindManySiteDocument, options);
        }
export type FindManySiteQueryHookResult = ReturnType<typeof useFindManySiteQuery>;
export type FindManySiteLazyQueryHookResult = ReturnType<typeof useFindManySiteLazyQuery>;
export type FindManySiteSuspenseQueryHookResult = ReturnType<typeof useFindManySiteSuspenseQuery>;
export type FindManySiteQueryResult = Apollo.QueryResult<FindManySiteQuery, FindManySiteQueryVariables>;
export const FindOneSiteByIdDocument = gql`
    query FindOneSiteById($id: Int!) {
  findOneSiteById(id: $id) {
    id
    name
    email
    domain
    components {
      id
      componentType
      name
      title
      content
      siteId
      isDelete
      componentStyle {
        id
        height
        padding
        gap
        background
        backgroundType
        componentId
      }
      titleStyle {
        id
        margin
        textSize
        textColor
        lineHeight
        componentId
      }
      contentStyle {
        id
        margin
        textSize
        textColor
        lineHeight
        componentId
      }
      children {
        id
        image
        width
        height
        margin
        isDelete
        componentId
      }
    }
    header {
      id
      logo
      logoSize
      height
      backgroundColor
      textSize
      textColor
      siteId
    }
    footer {
      id
      footerType
      logo
      contentTop
      helpCenter
      terms
      contentBottom
      backgroundColor
      paddingTop
      paddingBottom
      textSize
      textColor
      lineHeight
      siteId
    }
  }
}
    `;

/**
 * __useFindOneSiteByIdQuery__
 *
 * To run a query within a React component, call `useFindOneSiteByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneSiteByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneSiteByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneSiteByIdQuery(baseOptions: Apollo.QueryHookOptions<FindOneSiteByIdQuery, FindOneSiteByIdQueryVariables> & ({ variables: FindOneSiteByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneSiteByIdQuery, FindOneSiteByIdQueryVariables>(FindOneSiteByIdDocument, options);
      }
export function useFindOneSiteByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneSiteByIdQuery, FindOneSiteByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneSiteByIdQuery, FindOneSiteByIdQueryVariables>(FindOneSiteByIdDocument, options);
        }
export function useFindOneSiteByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindOneSiteByIdQuery, FindOneSiteByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindOneSiteByIdQuery, FindOneSiteByIdQueryVariables>(FindOneSiteByIdDocument, options);
        }
export type FindOneSiteByIdQueryHookResult = ReturnType<typeof useFindOneSiteByIdQuery>;
export type FindOneSiteByIdLazyQueryHookResult = ReturnType<typeof useFindOneSiteByIdLazyQuery>;
export type FindOneSiteByIdSuspenseQueryHookResult = ReturnType<typeof useFindOneSiteByIdSuspenseQuery>;
export type FindOneSiteByIdQueryResult = Apollo.QueryResult<FindOneSiteByIdQuery, FindOneSiteByIdQueryVariables>;