import { ComponentType } from "@/graphql/generated/types";

export const getComponentType = (componentType: ComponentType) => {
  switch (componentType) {
    case ComponentType.Section:
      return "섹션";
    case ComponentType.Popup:
      return "팝업";
    case ComponentType.Inquiry:
      return "문의";
  }
};
