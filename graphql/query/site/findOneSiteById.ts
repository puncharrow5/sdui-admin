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
        isDelete
        titleStyle {
          id
          margin
          textSize
          textColor
          lineHeight
          componentId
        }
        contentStyle {
          id
          margin
          textSize
          textColor
          lineHeight
          componentId
        }
        children {
          id
          name
          image
          width
          height
          margin
          componentId
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
