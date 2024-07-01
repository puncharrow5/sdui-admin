import React, { useState } from "react";
import * as S from "./Footer.style";
import { FooterEntity } from "@/graphql/generated/types";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  data?: FooterEntity;
}

export const Footer = ({ data }: Props) => {
  const [openTerms, setOpenTerms] = useState<boolean>(false);

  const handleOpenTerms = () => {
    setOpenTerms(true);
  };

  const handleCloseTerms = () => {
    setOpenTerms(false);
  };

  return (
    <>
      {openTerms && (
        <S.Backdrop onClick={handleCloseTerms}>
          <S.Modal onClick={(e) => e.stopPropagation()}>
            <S.Terms dangerouslySetInnerHTML={{ __html: data?.terms ?? "" }} />
            <XMarkIcon
              onClick={handleCloseTerms}
              className="fixed top-[16%] right-[30%] size-10 text-gray-400 cursor-pointer"
            />
          </S.Modal>
        </S.Backdrop>
      )}

      <S.Container $backgrounColor={data?.backgroundColor}>
        <S.Top $paddingTop={data?.paddingTop}>
          <S.Grid>
            {data?.logo ? (
              <S.Logo
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/file/${data.logo}`}
                alt="로고 이미지"
              />
            ) : (
              <S.Title $textColor={data?.textColor} className="cursor-pointer">
                {data?.logo ?? "로고"}
              </S.Title>
            )}
            <S.Content
              dangerouslySetInnerHTML={{ __html: data?.contentTop ?? "" }}
              $textSize={data?.textSize}
              $textColor={data?.textColor}
            />

            {data?.helpCenter && (
              <>
                <S.Title $textColor={data?.textColor}>고객센터</S.Title>
                <S.Content
                  dangerouslySetInnerHTML={{ __html: data?.helpCenter ?? "" }}
                  $textSize={data?.textSize}
                  $textColor={data?.textColor}
                  $lineHeight={data?.lineHeight}
                />
              </>
            )}

            {data?.terms && (
              <>
                <S.Title $textColor={data?.textColor}>약관</S.Title>
                <S.Content
                  $textSize={data?.textSize}
                  $textColor={data?.textColor}
                  cursor="pointer"
                  onClick={handleOpenTerms}
                >
                  서비스 이용약관
                </S.Content>
              </>
            )}
          </S.Grid>
        </S.Top>
        <S.Bottom $paddingBottom={data?.paddingBottom}>
          <S.Content
            dangerouslySetInnerHTML={{ __html: data?.contentBottom ?? "" }}
            $textSize={data?.textSize}
            $textColor={data?.textColor}
            $lineHeight={data?.lineHeight}
          />
        </S.Bottom>
      </S.Container>
    </>
  );
};
