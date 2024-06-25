import { gql } from "@apollo/client";

export const UPDATE_FOOTER = gql`
  mutation UpdateFooter(
    $siteId: Int!
    $footerType: Int!
    $contentTop: String
    $helpCenter: String
    $terms: String
    $contentBottom: String
    $backgroundColor: String
    $paddingTop: String
    $paddingBottom: String
    $textSize: Int
    $textColor: String
    $lineHeight: Int
    $file: Upload
  ) {
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
