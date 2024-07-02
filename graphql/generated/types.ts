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
  /** 자식 컴포넌트 스타일 */
  childStyle?: Maybe<ChildStyleEntity>;
  /** 컴포넌트 종류 */
  childType: ChildType;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 삭제 여부 */
  isDelete: Scalars['Boolean']['output'];
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
};

/** 자식 컴포넌트 스타일 */
export type ChildStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 테두리 */
  border?: Maybe<Scalars['String']['output']>;
  /** 테두리 곡률 */
  borderRadius?: Maybe<Scalars['String']['output']>;
  /** 자식컴포넌트 ID */
  childId: Scalars['Int']['output'];
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
  /** 너비 */
  width?: Maybe<Scalars['String']['output']>;
};

export type ChildStyleInput = {
  /** 배경 */
  background?: InputMaybe<Scalars['String']['input']>;
  /** 배경 종류 */
  backgroundType?: InputMaybe<BackgroundType>;
  /** 테두리 */
  border?: InputMaybe<Scalars['String']['input']>;
  /** 테두리 곡률 */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /** 높이 */
  height?: InputMaybe<Scalars['String']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
  /** 너비 */
  width?: InputMaybe<Scalars['String']['input']>;
};

/** 자식 컴포넌트 종류 */
export enum ChildType {
  /** 박스 */
  Box = 'BOX',
  /** 이미지 */
  Image = 'IMAGE'
}

/** 컴포넌트 */
export type ComponentEntity = {
  /** 자식 컴포넌트 목록 */
  children?: Maybe<Array<ChildEntity>>;
  /** 컴포넌트 모바일 스타일 */
  componentMobileStyle?: Maybe<ComponentMobileStyleEntity>;
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
  /** 모바일 자식 컴포넌트 목록 */
  mobileChildren?: Maybe<Array<MobileChildEntity>>;
  /** 모바일 내용 */
  mobileContent?: Maybe<Scalars['String']['output']>;
  /** 모바일 제목 */
  mobileTitle?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 이름 */
  name: Scalars['String']['output'];
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 제목 스타일 */
  titleStyle?: Maybe<TitleStyleEntity>;
};

/** 컴포넌트 모바일 스타일 */
export type ComponentMobileStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 컴포넌트 ID */
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

export type ComponentMobileStyleInput = {
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

/** 컴포넌트 스타일 */
export type ComponentStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 컴포넌트 ID */
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
  /** 텍스트 색상 */
  color?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Int']['output']>;
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: Maybe<Scalars['Int']['output']>;
  /** 모바일 마진 */
  mobileMargin?: Maybe<Scalars['String']['output']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: Maybe<Scalars['Int']['output']>;
  /** 텍스트 크기 */
  size?: Maybe<Scalars['Int']['output']>;
};

export type ContentStyleInput = {
  /** 텍스트 색상 */
  color?: InputMaybe<Scalars['String']['input']>;
  /** 줄 높이 */
  lineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 모바일 마진 */
  mobileMargin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: InputMaybe<Scalars['Int']['input']>;
  /** 텍스트 크기 */
  size?: InputMaybe<Scalars['Int']['input']>;
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

/** 모바일 자식 컴포넌트 */
export type MobileChildEntity = {
  /** 컴포넌트 종류 */
  childType: ChildType;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 삭제 여부 */
  isDelete: Scalars['Boolean']['output'];
  /** 모바일 자식 컴포넌트 스타일 */
  mobileChildStyle?: Maybe<MobileChildStyleEntity>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
};

/** 모바일 자식 컴포넌트 스타일 */
export type MobileChildStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 테두리 */
  border?: Maybe<Scalars['String']['output']>;
  /** 테두리 곡률 */
  borderRadius?: Maybe<Scalars['String']['output']>;
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 모바일 자식 컴포넌트 ID */
  mobileChildId: Scalars['Int']['output'];
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
  /** 너비 */
  width?: Maybe<Scalars['String']['output']>;
};

export type MobileChildStyleInput = {
  /** 배경 */
  background?: InputMaybe<Scalars['String']['input']>;
  /** 배경 종류 */
  backgroundType?: InputMaybe<BackgroundType>;
  /** 테두리 */
  border?: InputMaybe<Scalars['String']['input']>;
  /** 테두리 곡률 */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /** 높이 */
  height?: InputMaybe<Scalars['String']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
  /** 너비 */
  width?: InputMaybe<Scalars['String']['input']>;
};

/** 헤더 */
export type MobileHeaderEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 테두리 */
  border?: Maybe<Scalars['String']['output']>;
  /** 메뉴 버튼 */
  button?: Maybe<Scalars['String']['output']>;
  /** 메뉴 버튼 사이즈 */
  buttonSize?: Maybe<Scalars['String']['output']>;
  /** 헤더 높이 */
  height?: Maybe<Scalars['Int']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 로고 사이즈 */
  logoSize?: Maybe<Scalars['String']['output']>;
  /** 가로 패딩 */
  paddingHorizontal?: Maybe<Scalars['String']['output']>;
  /** 세로 패딩 */
  paddingVertical?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  /** 사이트 연결 */
  connectSite: Scalars['Boolean']['output'];
  /** 회원가입 */
  createAdmin: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 생성 */
  createChild: Scalars['Boolean']['output'];
  /** 컴포넌트 생성 */
  createComponent: Scalars['Boolean']['output'];
  /** 모바일 자식 컴포넌트 생성 */
  createMobileChild: Scalars['Boolean']['output'];
  /** 사이트 생성 */
  createSite: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 삭제 */
  deleteChild: Scalars['Boolean']['output'];
  /** 컴포넌트 삭제 */
  deleteComponent: Scalars['Boolean']['output'];
  /** 모바일 자식 컴포넌트 삭제 */
  deleteMobileChild: Scalars['Boolean']['output'];
  /** 사이트 연결 해제 */
  disconnectSite: Scalars['Boolean']['output'];
  /** 로그인 */
  login: Scalars['Boolean']['output'];
  /** 로그아웃 */
  logout: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 업데이트 */
  updateChild: Scalars['Boolean']['output'];
  /** 컴포넌트 수정 */
  updateComponent: Scalars['Boolean']['output'];
  /** 푸터 설정 */
  updateFooter: Scalars['Boolean']['output'];
  /** 헤더 설정 */
  updateHeader: Scalars['Boolean']['output'];
  /** 모바일 자식 컴포넌트 업데이트 */
  updateMobileChild: Scalars['Boolean']['output'];
  /** 모바일 헤더 설정 */
  updateMobileHeader: Scalars['Boolean']['output'];
};


export type MutationConnectSiteArgs = {
  domain: Scalars['String']['input'];
};


export type MutationCreateAdminArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateChildArgs = {
  childType: ChildType;
  componentId: Scalars['Int']['input'];
};


export type MutationCreateComponentArgs = {
  componentType: ComponentType;
  name: Scalars['String']['input'];
  siteId: Scalars['Int']['input'];
};


export type MutationCreateMobileChildArgs = {
  childType: ChildType;
  componentId: Scalars['Int']['input'];
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


export type MutationDeleteMobileChildArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDisconnectSiteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateChildArgs = {
  childStyle?: InputMaybe<ChildStyleInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateComponentArgs = {
  componentMobileStyle?: InputMaybe<ComponentMobileStyleInput>;
  componentStyle?: InputMaybe<ComponentStyleInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentStyle?: InputMaybe<ContentStyleInput>;
  id: Scalars['Int']['input'];
  imageFile?: InputMaybe<Scalars['Upload']['input']>;
  mobileContent?: InputMaybe<Scalars['String']['input']>;
  mobileImageFile?: InputMaybe<Scalars['Upload']['input']>;
  mobileTitle?: InputMaybe<Scalars['String']['input']>;
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


export type MutationUpdateMobileChildArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['Int']['input'];
  mobileChildStyle?: InputMaybe<MobileChildStyleInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMobileHeaderArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<Scalars['String']['input']>;
  buttonFile?: InputMaybe<Scalars['Upload']['input']>;
  buttonSize?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  logoFile?: InputMaybe<Scalars['Upload']['input']>;
  logoSize?: InputMaybe<Scalars['String']['input']>;
  paddingHorizontal?: InputMaybe<Scalars['String']['input']>;
  paddingVertical?: InputMaybe<Scalars['String']['input']>;
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
  /** 모바일 헤더 */
  mobileHeader?: Maybe<MobileHeaderEntity>;
  /** 이름 */
  name: Scalars['String']['output'];
};

/** 제목 스타일 */
export type TitleStyleEntity = {
  /** 텍스트 색상 */
  color?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 ID */
  componentId: Scalars['Float']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Int']['output']>;
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: Maybe<Scalars['Int']['output']>;
  /** 모바일 마진 */
  mobileMargin?: Maybe<Scalars['String']['output']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: Maybe<Scalars['Int']['output']>;
  /** 텍스트 크기 */
  size?: Maybe<Scalars['Int']['output']>;
};

export type TitleStyleInput = {
  /** 텍스트 색상 */
  color?: InputMaybe<Scalars['String']['input']>;
  /** 줄 높이 */
  lineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 모바일 마진 */
  mobileMargin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: InputMaybe<Scalars['Int']['input']>;
  /** 텍스트 크기 */
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { login: boolean };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: boolean };

export type CreateChildMutationVariables = Exact<{
  componentId: Scalars['Int']['input'];
  childType: ChildType;
}>;


export type CreateChildMutation = { createChild: boolean };

export type CreateMobileChildMutationVariables = Exact<{
  componentId: Scalars['Int']['input'];
  childType: ChildType;
}>;


export type CreateMobileChildMutation = { createMobileChild: boolean };

export type DeleteChildMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteChildMutation = { deleteChild: boolean };

export type DeleteMobileChildMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteMobileChildMutation = { deleteMobileChild: boolean };

export type UpdateChildMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  childStyle?: InputMaybe<ChildStyleInput>;
  file?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateChildMutation = { updateChild: boolean };

export type UpdateMobileChildMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  mobileChildStyle?: InputMaybe<MobileChildStyleInput>;
  file?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateMobileChildMutation = { updateMobileChild: boolean };

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
  mobileTitle?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  mobileContent?: InputMaybe<Scalars['String']['input']>;
  componentStyle?: InputMaybe<ComponentStyleInput>;
  componentMobileStyle?: InputMaybe<ComponentMobileStyleInput>;
  titleStyle?: InputMaybe<TitleStyleInput>;
  contentStyle?: InputMaybe<ContentStyleInput>;
  imageFile?: InputMaybe<Scalars['Upload']['input']>;
  mobileImageFile?: InputMaybe<Scalars['Upload']['input']>;
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

export type UpdateMobileHeaderMutationVariables = Exact<{
  siteId: Scalars['Int']['input'];
  logoSize?: InputMaybe<Scalars['String']['input']>;
  buttonSize?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  paddingHorizontal?: InputMaybe<Scalars['String']['input']>;
  paddingVertical?: InputMaybe<Scalars['String']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['Int']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<Scalars['String']['input']>;
  logoFile?: InputMaybe<Scalars['Upload']['input']>;
  buttonFile?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateMobileHeaderMutation = { updateMobileHeader: boolean };

export type ConnectSiteMutationVariables = Exact<{
  domain: Scalars['String']['input'];
}>;


export type ConnectSiteMutation = { connectSite: boolean };

export type CreateSiteMutationVariables = Exact<{
  domain: Scalars['String']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type CreateSiteMutation = { createSite: boolean };

export type DisconnectSiteMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DisconnectSiteMutation = { disconnectSite: boolean };

export type FindManySiteQueryVariables = Exact<{ [key: string]: never; }>;


export type FindManySiteQuery = { findManySite: Array<{ id: number, domain: string, name: string, email: string }> };

export type FindOneSiteByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindOneSiteByIdQuery = { findOneSiteById: { id: number, name: string, email: string, domain: string, components?: Array<{ id: number, componentType: ComponentType, name: string, title?: string | null, mobileTitle?: string | null, content?: string | null, mobileContent?: string | null, isDelete: boolean, siteId: number, componentStyle?: { id: number, height?: string | null, padding?: string | null, gap?: string | null, background?: string | null, backgroundType?: BackgroundType | null, componentId: number } | null, componentMobileStyle?: { id: number, height?: string | null, padding?: string | null, gap?: string | null, background?: string | null, backgroundType?: BackgroundType | null, componentId: number } | null, titleStyle?: { id: number, margin?: string | null, mobileMargin?: string | null, size?: number | null, mobileSize?: number | null, color?: string | null, mobileLineHeight?: number | null, lineHeight?: number | null, componentId: number } | null, contentStyle?: { id: number, margin?: string | null, mobileMargin?: string | null, size?: number | null, mobileSize?: number | null, color?: string | null, mobileLineHeight?: number | null, lineHeight?: number | null, componentId: number } | null, children?: Array<{ id: number, childType: ChildType, title?: string | null, content?: string | null, isDelete: boolean, componentId: number, childStyle?: { id: number, width?: string | null, height?: string | null, margin?: string | null, padding?: string | null, background?: string | null, backgroundType?: BackgroundType | null, border?: string | null, borderRadius?: string | null, childId: number } | null }> | null, mobileChildren?: Array<{ id: number, childType: ChildType, title?: string | null, content?: string | null, isDelete: boolean, componentId: number, mobileChildStyle?: { id: number, width?: string | null, height?: string | null, margin?: string | null, padding?: string | null, background?: string | null, backgroundType?: BackgroundType | null, border?: string | null, borderRadius?: string | null, mobileChildId: number } | null }> | null }> | null, header?: { id: number, logo?: string | null, logoSize?: string | null, height?: number | null, backgroundColor?: string | null, textSize?: number | null, textColor?: string | null, siteId: number } | null, mobileHeader?: { id: number, logo?: string | null, logoSize?: string | null, button?: string | null, buttonSize?: string | null, height?: number | null, paddingHorizontal?: string | null, paddingVertical?: string | null, backgroundColor?: string | null, textSize?: number | null, textColor?: string | null, border?: string | null, siteId: number } | null, footer?: { id: number, footerType: number, logo?: string | null, contentTop?: string | null, helpCenter?: string | null, terms?: string | null, contentBottom?: string | null, backgroundColor?: string | null, paddingTop?: string | null, paddingBottom?: string | null, textSize?: number | null, textColor?: string | null, lineHeight?: number | null, siteId: number } | null } };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateChildDocument = gql`
    mutation CreateChild($componentId: Int!, $childType: ChildType!) {
  createChild(componentId: $componentId, childType: $childType)
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
 *      childType: // value for 'childType'
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
export const CreateMobileChildDocument = gql`
    mutation CreateMobileChild($componentId: Int!, $childType: ChildType!) {
  createMobileChild(componentId: $componentId, childType: $childType)
}
    `;
export type CreateMobileChildMutationFn = Apollo.MutationFunction<CreateMobileChildMutation, CreateMobileChildMutationVariables>;

/**
 * __useCreateMobileChildMutation__
 *
 * To run a mutation, you first call `useCreateMobileChildMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMobileChildMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMobileChildMutation, { data, loading, error }] = useCreateMobileChildMutation({
 *   variables: {
 *      componentId: // value for 'componentId'
 *      childType: // value for 'childType'
 *   },
 * });
 */
export function useCreateMobileChildMutation(baseOptions?: Apollo.MutationHookOptions<CreateMobileChildMutation, CreateMobileChildMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMobileChildMutation, CreateMobileChildMutationVariables>(CreateMobileChildDocument, options);
      }
export type CreateMobileChildMutationHookResult = ReturnType<typeof useCreateMobileChildMutation>;
export type CreateMobileChildMutationResult = Apollo.MutationResult<CreateMobileChildMutation>;
export type CreateMobileChildMutationOptions = Apollo.BaseMutationOptions<CreateMobileChildMutation, CreateMobileChildMutationVariables>;
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
export const DeleteMobileChildDocument = gql`
    mutation DeleteMobileChild($id: Int!) {
  deleteMobileChild(id: $id)
}
    `;
export type DeleteMobileChildMutationFn = Apollo.MutationFunction<DeleteMobileChildMutation, DeleteMobileChildMutationVariables>;

/**
 * __useDeleteMobileChildMutation__
 *
 * To run a mutation, you first call `useDeleteMobileChildMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMobileChildMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMobileChildMutation, { data, loading, error }] = useDeleteMobileChildMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMobileChildMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMobileChildMutation, DeleteMobileChildMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMobileChildMutation, DeleteMobileChildMutationVariables>(DeleteMobileChildDocument, options);
      }
export type DeleteMobileChildMutationHookResult = ReturnType<typeof useDeleteMobileChildMutation>;
export type DeleteMobileChildMutationResult = Apollo.MutationResult<DeleteMobileChildMutation>;
export type DeleteMobileChildMutationOptions = Apollo.BaseMutationOptions<DeleteMobileChildMutation, DeleteMobileChildMutationVariables>;
export const UpdateChildDocument = gql`
    mutation UpdateChild($id: Int!, $title: String, $content: String, $childStyle: ChildStyleInput, $file: Upload) {
  updateChild(
    id: $id
    title: $title
    content: $content
    childStyle: $childStyle
    file: $file
  )
}
    `;
export type UpdateChildMutationFn = Apollo.MutationFunction<UpdateChildMutation, UpdateChildMutationVariables>;

/**
 * __useUpdateChildMutation__
 *
 * To run a mutation, you first call `useUpdateChildMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChildMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChildMutation, { data, loading, error }] = useUpdateChildMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      childStyle: // value for 'childStyle'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateChildMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChildMutation, UpdateChildMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChildMutation, UpdateChildMutationVariables>(UpdateChildDocument, options);
      }
export type UpdateChildMutationHookResult = ReturnType<typeof useUpdateChildMutation>;
export type UpdateChildMutationResult = Apollo.MutationResult<UpdateChildMutation>;
export type UpdateChildMutationOptions = Apollo.BaseMutationOptions<UpdateChildMutation, UpdateChildMutationVariables>;
export const UpdateMobileChildDocument = gql`
    mutation UpdateMobileChild($id: Int!, $title: String, $content: String, $mobileChildStyle: MobileChildStyleInput, $file: Upload) {
  updateMobileChild(
    id: $id
    title: $title
    content: $content
    mobileChildStyle: $mobileChildStyle
    file: $file
  )
}
    `;
export type UpdateMobileChildMutationFn = Apollo.MutationFunction<UpdateMobileChildMutation, UpdateMobileChildMutationVariables>;

/**
 * __useUpdateMobileChildMutation__
 *
 * To run a mutation, you first call `useUpdateMobileChildMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMobileChildMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMobileChildMutation, { data, loading, error }] = useUpdateMobileChildMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      mobileChildStyle: // value for 'mobileChildStyle'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateMobileChildMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMobileChildMutation, UpdateMobileChildMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMobileChildMutation, UpdateMobileChildMutationVariables>(UpdateMobileChildDocument, options);
      }
export type UpdateMobileChildMutationHookResult = ReturnType<typeof useUpdateMobileChildMutation>;
export type UpdateMobileChildMutationResult = Apollo.MutationResult<UpdateMobileChildMutation>;
export type UpdateMobileChildMutationOptions = Apollo.BaseMutationOptions<UpdateMobileChildMutation, UpdateMobileChildMutationVariables>;
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
    mutation UpdateComponent($id: Int!, $name: String!, $title: String, $mobileTitle: String, $content: String, $mobileContent: String, $componentStyle: ComponentStyleInput, $componentMobileStyle: ComponentMobileStyleInput, $titleStyle: TitleStyleInput, $contentStyle: ContentStyleInput, $imageFile: Upload, $mobileImageFile: Upload) {
  updateComponent(
    id: $id
    name: $name
    title: $title
    mobileTitle: $mobileTitle
    content: $content
    mobileContent: $mobileContent
    componentStyle: $componentStyle
    componentMobileStyle: $componentMobileStyle
    titleStyle: $titleStyle
    contentStyle: $contentStyle
    imageFile: $imageFile
    mobileImageFile: $mobileImageFile
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
 *      mobileTitle: // value for 'mobileTitle'
 *      content: // value for 'content'
 *      mobileContent: // value for 'mobileContent'
 *      componentStyle: // value for 'componentStyle'
 *      componentMobileStyle: // value for 'componentMobileStyle'
 *      titleStyle: // value for 'titleStyle'
 *      contentStyle: // value for 'contentStyle'
 *      imageFile: // value for 'imageFile'
 *      mobileImageFile: // value for 'mobileImageFile'
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
export const UpdateMobileHeaderDocument = gql`
    mutation UpdateMobileHeader($siteId: Int!, $logoSize: String, $buttonSize: String, $height: Int, $paddingHorizontal: String, $paddingVertical: String, $backgroundColor: String, $textSize: Int, $textColor: String, $border: String, $logoFile: Upload, $buttonFile: Upload) {
  updateMobileHeader(
    siteId: $siteId
    logoSize: $logoSize
    buttonSize: $buttonSize
    height: $height
    paddingHorizontal: $paddingHorizontal
    paddingVertical: $paddingVertical
    backgroundColor: $backgroundColor
    textSize: $textSize
    textColor: $textColor
    border: $border
    logoFile: $logoFile
    buttonFile: $buttonFile
  )
}
    `;
export type UpdateMobileHeaderMutationFn = Apollo.MutationFunction<UpdateMobileHeaderMutation, UpdateMobileHeaderMutationVariables>;

/**
 * __useUpdateMobileHeaderMutation__
 *
 * To run a mutation, you first call `useUpdateMobileHeaderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMobileHeaderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMobileHeaderMutation, { data, loading, error }] = useUpdateMobileHeaderMutation({
 *   variables: {
 *      siteId: // value for 'siteId'
 *      logoSize: // value for 'logoSize'
 *      buttonSize: // value for 'buttonSize'
 *      height: // value for 'height'
 *      paddingHorizontal: // value for 'paddingHorizontal'
 *      paddingVertical: // value for 'paddingVertical'
 *      backgroundColor: // value for 'backgroundColor'
 *      textSize: // value for 'textSize'
 *      textColor: // value for 'textColor'
 *      border: // value for 'border'
 *      logoFile: // value for 'logoFile'
 *      buttonFile: // value for 'buttonFile'
 *   },
 * });
 */
export function useUpdateMobileHeaderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMobileHeaderMutation, UpdateMobileHeaderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMobileHeaderMutation, UpdateMobileHeaderMutationVariables>(UpdateMobileHeaderDocument, options);
      }
export type UpdateMobileHeaderMutationHookResult = ReturnType<typeof useUpdateMobileHeaderMutation>;
export type UpdateMobileHeaderMutationResult = Apollo.MutationResult<UpdateMobileHeaderMutation>;
export type UpdateMobileHeaderMutationOptions = Apollo.BaseMutationOptions<UpdateMobileHeaderMutation, UpdateMobileHeaderMutationVariables>;
export const ConnectSiteDocument = gql`
    mutation ConnectSite($domain: String!) {
  connectSite(domain: $domain)
}
    `;
export type ConnectSiteMutationFn = Apollo.MutationFunction<ConnectSiteMutation, ConnectSiteMutationVariables>;

/**
 * __useConnectSiteMutation__
 *
 * To run a mutation, you first call `useConnectSiteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConnectSiteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [connectSiteMutation, { data, loading, error }] = useConnectSiteMutation({
 *   variables: {
 *      domain: // value for 'domain'
 *   },
 * });
 */
export function useConnectSiteMutation(baseOptions?: Apollo.MutationHookOptions<ConnectSiteMutation, ConnectSiteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConnectSiteMutation, ConnectSiteMutationVariables>(ConnectSiteDocument, options);
      }
export type ConnectSiteMutationHookResult = ReturnType<typeof useConnectSiteMutation>;
export type ConnectSiteMutationResult = Apollo.MutationResult<ConnectSiteMutation>;
export type ConnectSiteMutationOptions = Apollo.BaseMutationOptions<ConnectSiteMutation, ConnectSiteMutationVariables>;
export const CreateSiteDocument = gql`
    mutation CreateSite($domain: String!, $name: String!, $email: String!) {
  createSite(domain: $domain, name: $name, email: $email)
}
    `;
export type CreateSiteMutationFn = Apollo.MutationFunction<CreateSiteMutation, CreateSiteMutationVariables>;

/**
 * __useCreateSiteMutation__
 *
 * To run a mutation, you first call `useCreateSiteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSiteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSiteMutation, { data, loading, error }] = useCreateSiteMutation({
 *   variables: {
 *      domain: // value for 'domain'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateSiteMutation(baseOptions?: Apollo.MutationHookOptions<CreateSiteMutation, CreateSiteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSiteMutation, CreateSiteMutationVariables>(CreateSiteDocument, options);
      }
export type CreateSiteMutationHookResult = ReturnType<typeof useCreateSiteMutation>;
export type CreateSiteMutationResult = Apollo.MutationResult<CreateSiteMutation>;
export type CreateSiteMutationOptions = Apollo.BaseMutationOptions<CreateSiteMutation, CreateSiteMutationVariables>;
export const DisconnectSiteDocument = gql`
    mutation DisconnectSite($id: Int!) {
  disconnectSite(id: $id)
}
    `;
export type DisconnectSiteMutationFn = Apollo.MutationFunction<DisconnectSiteMutation, DisconnectSiteMutationVariables>;

/**
 * __useDisconnectSiteMutation__
 *
 * To run a mutation, you first call `useDisconnectSiteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisconnectSiteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disconnectSiteMutation, { data, loading, error }] = useDisconnectSiteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDisconnectSiteMutation(baseOptions?: Apollo.MutationHookOptions<DisconnectSiteMutation, DisconnectSiteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DisconnectSiteMutation, DisconnectSiteMutationVariables>(DisconnectSiteDocument, options);
      }
export type DisconnectSiteMutationHookResult = ReturnType<typeof useDisconnectSiteMutation>;
export type DisconnectSiteMutationResult = Apollo.MutationResult<DisconnectSiteMutation>;
export type DisconnectSiteMutationOptions = Apollo.BaseMutationOptions<DisconnectSiteMutation, DisconnectSiteMutationVariables>;
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
      mobileTitle
      content
      mobileContent
      isDelete
      siteId
      componentStyle {
        id
        height
        padding
        gap
        background
        backgroundType
        componentId
      }
      componentMobileStyle {
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
        mobileMargin
        size
        mobileSize
        color
        mobileLineHeight
        lineHeight
        componentId
      }
      contentStyle {
        id
        margin
        mobileMargin
        size
        mobileSize
        color
        mobileLineHeight
        lineHeight
        componentId
      }
      children {
        id
        childType
        title
        content
        isDelete
        componentId
        childStyle {
          id
          width
          height
          margin
          padding
          background
          backgroundType
          border
          borderRadius
          childId
        }
      }
      mobileChildren {
        id
        childType
        title
        content
        isDelete
        componentId
        mobileChildStyle {
          id
          width
          height
          margin
          padding
          background
          backgroundType
          border
          borderRadius
          mobileChildId
        }
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
    mobileHeader {
      id
      logo
      logoSize
      button
      buttonSize
      height
      paddingHorizontal
      paddingVertical
      backgroundColor
      textSize
      textColor
      border
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