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

interface Props {
  siteId: number;
  data?: HeaderEntity | null;
}

type File = {
  uri?: string;
  type?: string;
  name?: string;
};

const HeaderOptionSchema = yup.object().shape({
  textSize: yup.number(),
  textColor: yup.string(),
  backgroundColor: yup.string(),
});

export const HeaderBox = ({ siteId, data }: Props) => {
  const client = useApolloClient();

  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File>();

  const [loadUpdateHeader, { loading }] = useUpdateHeaderMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });
      alert("헤더가 수정되었습니다.");
    },
    onError: (e) => {
      alert(e.message ?? e);
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
      const newFile: File = {
        uri: URL.createObjectURL(selectedFile),
        name: selectedFile.name,
        type: selectedFile.type,
      };

      setFile(newFile);
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
    initialValues: {
      validateOnChange: true,
      validateOnMount: true,
      validationSchema: HeaderOptionSchema,
      textColor: data?.textColor ?? undefined,
      textSize: data?.textSize ?? undefined,
      backgroundColor: data?.backgroundColor ?? undefined,
      logo: data?.logo ?? undefined,
    },
    onSubmit: handleSubmit,
  });

  return (
    <S.Container>
      <S.SectionName>
        <p className="text-lg">헤더</p>
        {open ? (
          <ChevronUpIcon onClick={handleClick} className="size-6 cursor-pointer" />
        ) : (
          <ChevronDownIcon onClick={handleClick} className="size-6 cursor-pointer" />
        )}
      </S.SectionName>
      {open && (
        <S.Detail>
          <S.Item>헤더</S.Item>
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
              <p className="font-bold">로고 이미지</p>
              <input type="file" id="uploadLogo" className="hidden" onChange={handleFileChange} />
              <S.FileInput
                value={file ? file.name : data?.logo ?? undefined}
                onClick={handleOpenUpload}
                width="90px"
                readOnly
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
