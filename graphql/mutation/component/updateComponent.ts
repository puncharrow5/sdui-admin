import { gql } from "@apollo/client";

export const UPDATE_COMPONENT = gql`
  mutation UpdateComponent(
    $id: Int!
    $title: String
    $content: String
    $background: String
    $backgroundType: BackgroundType
    $titleStyle: TitleStyleInput
    $contentStyle: ContentStyleInput
    $file: Upload
  ) {
    updateComponent(
      id: $id
      title: $title
      content: $content
      background: $background
      backgroundType: $backgroundType
      titleStyle: $titleStyle
      contentStyle: $contentStyle
      file: $file
    )
  }
`;
