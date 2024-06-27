import React, { useEffect, useState } from "react";
import { ComponentEntity, ComponentType, SiteEntity } from "@/graphql/generated/types";
import { SectionBox } from "../SectionBox";
import { HeaderBox } from "../HeaderBox";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { CreateBox } from "../CreateBox";
import { FooterBox } from "../FooterBox";
import * as S from "./SidePanel.style";

interface Props {
  data?: SiteEntity;
}

export const SidePanel = ({ data }: Props) => {
  const [openCreateBox, setOpenCreateBox] = useState<boolean>(false);
  const [sections, setSections] = useState<ComponentEntity[]>([]);

  const handleClickCreateButton = () => {
    setOpenCreateBox(!openCreateBox);
  };

  const handleCloseCreateBox = () => {
    setOpenCreateBox(false);
  };

  useEffect(() => {
    if (data?.components) {
      const sectionData = data.components.filter(
        (component) => component.componentType === ComponentType.Section
      );
      setSections(sectionData);

      const inquiryData = data.components.find(
        (component) => component.componentType === ComponentType.Inquiry
      );
      if (inquiryData) {
        setSections((prev) => [...prev, inquiryData]);
      }
    }
  }, [data?.components]);

  if (!data) {
    return null;
  }

  return (
    <S.Container>
      <S.TitleBox>
        <div className="flex flex-col">
          <p className="text-xl font-bold">{data?.name}</p>
          <p className="text-md text-gray-500">{data?.domain}</p>
        </div>
        <SquaresPlusIcon onClick={handleClickCreateButton} className="size-8 cursor-pointer" />
      </S.TitleBox>
      {openCreateBox && <CreateBox siteId={data.id} handleCloseCreateBox={handleCloseCreateBox} />}
      <S.ComponentBox>
        <HeaderBox siteId={data.id} data={data.header} />
        {sections.map((value: ComponentEntity, index: number) => (
          <SectionBox key={index} data={value} />
        ))}
        <FooterBox siteId={data.id} data={data.footer} />
      </S.ComponentBox>
    </S.Container>
  );
};
