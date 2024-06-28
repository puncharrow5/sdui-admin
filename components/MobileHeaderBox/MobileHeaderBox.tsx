import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import {
  FindOneSiteByIdDocument,
  HeaderEntity,
  MobileHeaderEntity,
  useUpdateHeaderMutation,
  useUpdateMobileHeaderMutation,
} from "@/graphql/generated/types";
import { useFormik } from "formik";
import { PanelButton } from "../PanelButton";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import * as yup from "yup";
import * as S from "./MobileHeaderBox.style";
import { useToastMessage } from "@/hooks";

interface Props {
  siteId: number;
  data?: MobileHeaderEntity | null;
}

export const MobileHeaderBox = ({ siteId, data }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [open, setOpen] = useState<boolean>(false);
  const [logoFile, setLogoFile] = useState<File>();
  const [buttonFile, setButtonFile] = useState<File>();

  const [loadUpdateMobileHeader, { loading }] = useUpdateMobileHeaderMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      ToastMessage("info", "헤더가 수정되었습니다.");
    },
    onError: (e) => {
      ToastMessage("error", `${e.message ?? e}`);
    },
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenUploadLogo = () => {
    document.getElementById("uploadLogo")?.click();
  };
  const handleOpenUploadButton = () => {
    document.getElementById("uploadButton")?.click();
  };

  const handleLogoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setLogoFile(selectedFile);
    }
  };
  const handleButtonFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setButtonFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    loadUpdateMobileHeader({
      variables: { ...formik.values, logoFile, buttonFile, siteId },
    });
  };

  const handleReset = () => {
    formik.resetForm();
    setLogoFile(undefined);
    setButtonFile(undefined);
  };

  const formik = useFormik({
    // validateOnChange: true,
    // validateOnMount: true,
    // validationSchema: HeaderOptionSchema,
    initialValues: {
      logo: data?.logo ?? undefined,
      logoSize: data?.logoSize ?? undefined,
      button: data?.button ?? undefined,
      buttonSize: data?.buttonSize ?? undefined,
      height: data?.height ?? undefined,
      paddingHorizontal: data?.paddingHorizontal ?? undefined,
      paddingVertical: data?.paddingVertical ?? undefined,
      backgroundColor: data?.backgroundColor ?? undefined,
      textColor: data?.textColor ?? undefined,
      textSize: data?.textSize ?? undefined,
      border: data?.border ?? undefined,
    },
    onSubmit: handleSubmit,
  });

  return (
    <S.Container onClick={handleOpen}>
      <S.SectionName>
        <p className="text-lg">헤더</p>
        {open ? <ChevronUpIcon className="size-6" /> : <ChevronDownIcon className="size-6" />}
      </S.SectionName>
      {open && (
        <S.Detail onClick={(e) => e.stopPropagation()}>
          <S.ItemBox>
            <S.FontSetting>
              <p className="font-bold">헤더 색상</p>
              <S.Input
                value={formik.values.backgroundColor ?? undefined}
                onChange={formik.handleChange("backgroundColor")}
                width="90px"
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">헤더 높이</p>
              <S.Input
                type="number"
                value={formik.values.height ?? undefined}
                onChange={formik.handleChange("height")}
                width="90px"
              />
            </S.FontSetting>
          </S.ItemBox>

          <S.ItemBox>
            <S.FontSetting>
              <p className="font-bold">가로 패딩</p>
              <S.Input
                value={formik.values.paddingHorizontal ?? undefined}
                onChange={formik.handleChange("paddingHorizontal")}
                width="90px"
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">세로 패딩</p>
              <S.Input
                value={formik.values.paddingVertical ?? undefined}
                onChange={formik.handleChange("paddingVertical")}
                width="90px"
              />
            </S.FontSetting>
          </S.ItemBox>

          <S.ItemBox>
            <S.FontSetting>
              <p className="font-bold">텍스트 색상</p>
              <S.Input
                value={formik.values.textColor ?? undefined}
                onChange={formik.handleChange("textColor")}
                width="90px"
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">텍스트 크기</p>
              <S.Input
                type="number"
                value={formik.values.textSize ?? undefined}
                onChange={formik.handleChange("textSize")}
                width="90px"
              />
            </S.FontSetting>
          </S.ItemBox>

          <S.ItemBox>
            <S.FontSetting>
              <p className="font-bold">로고 이미지</p>
              <input
                type="file"
                id="uploadLogo"
                className="hidden"
                onChange={handleLogoFileChange}
              />
              <S.FileInput
                value={logoFile ? logoFile.name : data?.logo ?? undefined}
                onClick={handleOpenUploadLogo}
                placeholder="파일 업로드"
                width="90px"
                readOnly
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">로고 사이즈</p>
              <S.Input
                value={formik.values.logoSize ?? undefined}
                onChange={formik.handleChange("logoSize")}
                width="90px"
              />
            </S.FontSetting>
          </S.ItemBox>

          <S.ItemBox>
            <S.FontSetting>
              <p className="font-bold">버튼 이미지</p>
              <input
                type="file"
                id="uploadButton"
                className="hidden"
                onChange={handleButtonFileChange}
              />
              <S.FileInput
                value={buttonFile ? buttonFile.name : data?.logo ?? undefined}
                onClick={handleOpenUploadButton}
                placeholder="파일 업로드"
                width="90px"
                readOnly
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">버튼 사이즈</p>
              <S.Input
                value={formik.values.buttonSize ?? undefined}
                onChange={formik.handleChange("buttonSize")}
                width="90px"
              />
            </S.FontSetting>
          </S.ItemBox>

          <S.ButtonBox>
            <PanelButton text="리셋" onClick={handleReset} />
            <PanelButton text="수정" color="#000" textColor="#fff" onClick={handleSubmit} />
          </S.ButtonBox>
        </S.Detail>
      )}
    </S.Container>
  );
};
