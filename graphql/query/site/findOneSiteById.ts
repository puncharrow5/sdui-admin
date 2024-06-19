import { gql } from "@apollo/client";

export const FIND_ONE_SITE_BY_ID = gql`
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
        backgroundType
        background
        siteId
        titleStyle {
          id
          marginTop
          marginBottom
          marginRight
          marginLeft
          textSize
          textColor
          componentId
        }
        contentStyle {
          id
          marginTop
          marginBottom
          marginRight
          marginLeft
          textSize
          textColor
          componentId
        }
      }
      header {
        id
        logo
        backgroundColor
        textSize
        textColor
        siteId
      }
    }
  }
`;
