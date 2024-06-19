import React, { useEffect, useState } from "react";
import * as S from "./SidePanel.style";
import { ComponentEntity, ComponentType, SiteEntity } from "@/graphql/generated/types";
import { SectionBox } from "../SectionBox";

interface Props {
  data?: SiteEntity;
}

export const SidePanel = ({ data }: Props) => {
  const [sections, setSections] = useState<ComponentEntity[]>([]);
  const [sectionNames, setSectionNames] = useState<string[]>([]);
  const [inquiry, setInquiry] = useState<ComponentEntity>();

  useEffect(() => {
    if (data?.components) {
      const sectionData = data.components.filter(
        (component) => component.componentType === ComponentType.Section
      );

      setSections(sectionData);
      setSectionNames(sectionData.map((section) => section.name));

      const inquiryData = data.components.find(
        (component) => component.componentType === ComponentType.Inquiry
      );

      if (inquiryData) {
        setInquiry(inquiryData);
        setSectionNames((prev) => [...prev, inquiryData.name]);
      }
    }
  }, [data?.components]);

  if (!data) {
    return null;
  }

  return (
    <S.Container>
      <S.InfoBox>
        <p className="text-md font-bold">{data?.name}</p>
        <p className="text-sm text-gray-500">{data?.domain}</p>
      </S.InfoBox>
      {sections.map((value: ComponentEntity, index: number) => (
        <SectionBox key={index} data={value} />
      ))}
    </S.Container>
  );
};
