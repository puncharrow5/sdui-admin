import { gql } from "@apollo/client";

export const CREATE_CHILDREN = gql`
  mutation CreateChildren($id: Int!) {
    createChildren(componentId: $componentId)
  }
`;
