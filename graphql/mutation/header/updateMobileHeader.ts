import { gql } from "@apollo/client";

export const UPDATE_MOBILE_HEADER = gql`
  mutation UpdateMobileHeader(
    $siteId: Int!
    $logoSize: String
    $buttonSize: String
    $height: Int
    $paddingHorizontal: String
    $paddingVertical: String
    $backgroundColor: String
    $textSize: Int
    $textColor: String
    $border: String
    $logoFile: Upload
    $buttonFile: Upload
  ) {
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
