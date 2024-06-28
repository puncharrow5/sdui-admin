import { gql } from "@apollo/client";

export const UPDATE_CHILD = gql`
  mutation UpdateChild(
    $id: Int!
    $title: String
    $content: String
    $childStyle: ChildStyleInput
    $file: Upload
  ) {
    updateChild(id: $id, title: $title, content: $content, childStyle: $childStyle, file: $file)
  }
`;
