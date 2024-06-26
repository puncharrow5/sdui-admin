import { gql } from "@apollo/client";

export const UPDATE_HEADER = gql`
  mutation UpdateHeader(
    $siteId: Int!
    $logoSize: String
    $height: Int
    $backgroundColor: String
    $textColor: String
    $textSize: Int
    $file: Upload
  ) {
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
