import { gql } from "@apollo/client";

export const UPDATE_COMPONENT = gql`
  mutation UpdateComponent(
    $id: Int!
    $name: String!
    $title: String
    $content: String
    $componentStyle: ComponentStyleInput
    $titleStyle: TitleStyleInput
    $contentStyle: ContentStyleInput
    $file: Upload
  ) {
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
