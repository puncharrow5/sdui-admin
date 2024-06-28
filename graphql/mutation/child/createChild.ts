import { gql } from "@apollo/client";

export const CREATE_CHILD = gql`
  mutation CreateChild($componentId: Int!, $childType: ChildType!) {
    createChild(componentId: $componentId, childType: $childType)
  }
`;
