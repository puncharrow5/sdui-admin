import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import {
  FindOneSiteByIdDocument,
  HeaderEntity,
  useUpdateHeaderMutation,
} from "@/graphql/generated/types";
import { useFormik } from "formik";
import { PanelButton } from "../PanelButton";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import * as yup from "yup";
import * as S from "./HeaderBox.style";
import { useToastMessage } from "@/hooks";

interface Props {
  siteId: number;
  data?: HeaderEntity | null;
}

const HeaderOptionSchema = yup.object().shape({
  logoSie: yup.string(),
  height: yup.number(),
  backgroundColor: yup.string(),
  textSize: yup.number(),
  textColor: yup.string(),
});

export const HeaderBox = ({ siteId, data }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File>();

  const [loadUpdateHeader, { loading }] = useUpdateHeaderMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      ToastMessage("info", "헤더가 수정되었습니다.");
    },
    onError: (e) => {
      ToastMessage("error", `${e.message ?? e}`);
    },
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpenUpload = () => {
    document.getElementById("uploadLogo")?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    loadUpdateHeader({
      variables: { ...formik.values, file, siteId },
    });
  };

  const handleReset = () => {
    formik.resetForm();
    setFile(undefined);
  };

  const formik = useFormik({
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: HeaderOptionSchema,
    initialValues: {
      logo: data?.logo ?? undefined,
      logoSize: data?.logoSize ?? undefined,
      height: data?.height ?? undefined,
      backgroundColor: data?.backgroundColor ?? undefined,
      textColor: data?.textColor ?? undefined,
      textSize: data?.textSize ?? undefined,
    },
    onSubmit: handleSubmit,
  });

  return (
    <S.Container onClick={handleClick}>
      <S.SectionName>
        <p className="text-lg">헤더</p>
        {open ? <ChevronUpIcon className="size-6" /> : <ChevronDownIcon className="size-6" />}
      </S.SectionName>
      {open && (
        <S.Detail onClick={(e) => e.stopPropagation()}>
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
              <p className="font-bold">로고 이미지</p>
              <input type="file" id="uploadLogo" className="hidden" onChange={handleFileChange} />
              <S.FileInput
                value={file ? file.name : data?.logo ?? undefined}
                onClick={handleOpenUpload}
                width="90px"
                readOnly
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">이미지 크기</p>
              <S.Input
                value={formik.values.logoSize ?? undefined}
                onChange={formik.handleChange("logoSize")}
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
