import React, { useEffect, useState } from "react";
import { ComponentEntity, ComponentType, SiteEntity } from "@/graphql/generated/types";
import { Footer } from "../Footer";
import { MobileHeader } from "../MobileHeader";
import { MobileSection } from "../MobileSection";
import { MobileInquiry } from "../MobileInquiry";
import * as S from "./MobileContainer.style";

interface Props {
  data?: SiteEntity;
}

export const MobileContainer = ({ data }: Props) => {
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
    <S.Background>
      <S.Container $paddingTop={data.mobileHeader?.height}>
        <MobileHeader sectionNames={sectionNames} data={data.mobileHeader ?? undefined} />
        {sections.map((value: ComponentEntity, index: number) => (
          <MobileSection key={index} id={value.name} data={value} />
        ))}
        {inquiry && <MobileInquiry id={inquiry.name} data={inquiry} siteEmail={data.email} />}
        <Footer data={data.footer ?? undefined} />
      </S.Container>
    </S.Background>
  );
};
