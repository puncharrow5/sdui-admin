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
        siteId
        isDelete
        componentStyle {
          id
          height
          padding
          gap
          background
          backgroundType
          componentId
        }
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
          image
          width
          height
          margin
          isDelete
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
