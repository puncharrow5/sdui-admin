import { gql } from "@apollo/client";

export const CREATE_MOBILE_CHILD = gql`
  mutation CreateMobileChild($componentId: Int!, $childType: ChildType!) {
    createMobileChild(componentId: $componentId, childType: $childType)
  }
`;
