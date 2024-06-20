import { gql } from "@apollo/client";

export const UPDATE_HEADER = gql`
  mutation UpdateHeader(
    $siteId: Int!
    $backgroundColor: String
    $textColor: String
    $textSize: Int
    $logoFile: Upload
  ) {
    updateHeader(
      siteId: $siteId
      backgroundColor: $backgroundColor
      textColor: $textColor
      textSize: $textSize
      logoFile: $logoFile
    )
  }
`;
