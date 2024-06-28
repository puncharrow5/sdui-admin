import React, { useEffect, useState } from "react";
import { ComponentEntity, ComponentType, SiteEntity } from "@/graphql/generated/types";
import { SectionBox } from "../SectionBox";
import { HeaderBox } from "../HeaderBox";
import {
  AdjustmentsHorizontalIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/outline";
import { CreateBox } from "../CreateBox";
import { FooterBox } from "../FooterBox";
import * as S from "./SidePanel.style";
import { MobileHeaderBox } from "../MobileHeaderBox";

interface Props {
  data?: SiteEntity;
  isMobile: boolean;
  handleSetDesktop: () => void;
  handleSetMobile: () => void;
}

export const SidePanel = ({ data, isMobile, handleSetDesktop, handleSetMobile }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openCreateBox, setOpenCreateBox] = useState<boolean>(false);
  const [sections, setSections] = useState<ComponentEntity[]>([]);

  const handleMouseEnter = () => {
    setOpenMenu(true);
  };
  const handleMouseLeave = () => {
    setOpenMenu(false);
  };

  const handleOpenCreateBox = () => {
    setOpenCreateBox(true);
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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <AdjustmentsHorizontalIcon className="relative size-9 cursor-pointer" />
          {openMenu && (
            <S.Menu>
              <S.MenuItem onClick={handleSetDesktop}>
                <ComputerDesktopIcon className="size-4" />
                <p>데스크탑</p>
              </S.MenuItem>
              <S.Line />
              <S.MenuItem onClick={handleSetMobile}>
                <DevicePhoneMobileIcon className="size-4" />
                <p>모바일</p>
              </S.MenuItem>
              <S.Line />
              <S.MenuItem onClick={handleOpenCreateBox}>
                <DocumentPlusIcon className="size-4" />
                <p>컴포넌트 생성</p>
              </S.MenuItem>
            </S.Menu>
          )}
        </div>
      </S.TitleBox>
      {openCreateBox && <CreateBox siteId={data.id} handleCloseCreateBox={handleCloseCreateBox} />}

      <S.ComponentBox>
        {isMobile ? (
          <>
            <MobileHeaderBox siteId={data.id} data={data.mobileHeader} />
            {sections.map((value: ComponentEntity, index: number) => (
              <SectionBox key={index} data={value} />
            ))}
            <FooterBox siteId={data.id} data={data.footer} />
          </>
        ) : (
          <>
            <HeaderBox siteId={data.id} data={data.header} />
            {sections.map((value: ComponentEntity, index: number) => (
              <SectionBox key={index} data={value} />
            ))}
            <FooterBox siteId={data.id} data={data.footer} />
          </>
        )}
      </S.ComponentBox>
    </S.Container>
  );
};
