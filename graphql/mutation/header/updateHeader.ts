import { gql } from "@apollo/client";

export const UPDATE_HEADER = gql`
  mutation UpdateHeader(
    $siteId: Int!
    $backgroundColor: String
    $textColor: String
    $textSize: Int
    $file: Upload
  ) {
    updateHeader(
      siteId: $siteId
      backgroundColor: $backgroundColor
      textColor: $textColor
      textSize: $textSize
      file: $file
    )
  }
`;
