import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import {
  FindOneSiteByIdDocument,
  FooterEntity,
  useUpdateFooterMutation,
} from "@/graphql/generated/types";
import { useFormik } from "formik";
import { PanelButton } from "../PanelButton";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import * as yup from "yup";
import * as S from "./FooterBox.style";
import { useToastMessage } from "@/hooks";

const FooterOptionSchema = yup.object().shape({
  footerType: yup.number(),
  backgroundColor: yup.string(),
  textSize: yup.number(),
  textColor: yup.string(),
  lineHeight: yup.number(),
});

interface Props {
  siteId: number;
  data?: FooterEntity | null;
}

export const FooterBox = ({ siteId, data }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File>();

  const [loadUpdateFooter, { loading }] = useUpdateFooterMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      ToastMessage("info", "푸터가 수정되었습니다.");
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
    loadUpdateFooter({
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
    validationSchema: FooterOptionSchema,
    initialValues: {
      footerType: data?.footerType ?? 1,
      logo: data?.logo ?? undefined,
      contentTop: data?.contentTop ?? undefined,
      helpCenter: data?.helpCenter ?? undefined,
      terms: data?.terms ?? undefined,
      contentBottom: data?.contentBottom ?? undefined,
      backgroundColor: data?.backgroundColor ?? undefined,
      paddingTop: data?.paddingTop ?? undefined,
      paddingBottom: data?.paddingBottom ?? undefined,
      textSize: data?.textSize ?? undefined,
      textColor: data?.textColor ?? undefined,
      lineHeight: data?.lineHeight ?? undefined,
    },
    onSubmit: handleSubmit,
  });

  return (
    <S.Container onClick={handleClick}>
      <S.SectionName>
        <p className="text-lg">푸터</p>
        {open ? (
          <ChevronUpIcon className="size-6 cursor-pointer" />
        ) : (
          <ChevronDownIcon className="size-6 cursor-pointer" />
        )}
      </S.SectionName>
      {open && (
        <S.Detail onClick={(e) => e.stopPropagation()}>
          <S.ItemBox>
            <S.FontSetting>
              <p className="font-bold">푸터 타입</p>
              <S.Select
                width="90px"
                value={formik.values.footerType}
                onChange={formik.handleChange("footerType")}
              >
                <option value={1} label="1" />
                <option value={2} label="2" />
              </S.Select>
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
          <S.ItemBox>
            <S.FontSetting>
              <p className="font-bold">배경 색상</p>
              <S.Input
                value={formik.values.backgroundColor ?? undefined}
                onChange={formik.handleChange("backgroundColor")}
                width="90px"
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">줄 높이</p>
              <S.Input
                type="number"
                value={formik.values.lineHeight ?? undefined}
                onChange={formik.handleChange("lineHeight")}
                width="90px"
              />
            </S.FontSetting>
          </S.ItemBox>
          <S.ItemBox $hasBorder>
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

          <S.Item>상단</S.Item>
          <S.ItemBox $marginTop={5} $alignItems="flex-start">
            <p className="font-bold">패딩</p>
            <S.Input
              value={formik.values.paddingTop ?? undefined}
              onChange={formik.handleChange("paddingTop")}
              placeholder="ex) 0 0 0 0"
              width="280px"
            />
          </S.ItemBox>
          <S.ItemBox $marginTop={5} $alignItems="flex-start">
            <p className="font-bold">텍스트</p>
            <S.Textarea
              value={formik.values.contentTop ?? undefined}
              onChange={formik.handleChange("contentTop")}
              width="280px"
            />
          </S.ItemBox>
          <S.ItemBox $marginTop={5} $alignItems="flex-start">
            <p className="font-bold">고객센터</p>
            <S.Textarea
              value={formik.values.helpCenter ?? undefined}
              onChange={formik.handleChange("helpCenter")}
              width="280px"
            />
          </S.ItemBox>
          <S.ItemBox $marginTop={5} $alignItems="flex-start" $hasBorder>
            <p className="font-bold">약관</p>
            <S.Textarea
              value={formik.values.terms ?? undefined}
              onChange={formik.handleChange("terms")}
              width="280px"
            />
          </S.ItemBox>

          <S.Item>하단</S.Item>
          <S.ItemBox $marginTop={5} $alignItems="flex-start">
            <p className="font-bold">패딩</p>
            <S.Input
              value={formik.values.paddingBottom ?? undefined}
              onChange={formik.handleChange("paddingBottom")}
              placeholder="ex) 0 0 0 0"
              width="280px"
            />
          </S.ItemBox>
          <S.ItemBox $marginTop={5} $alignItems="flex-start">
            <p className="font-bold">텍스트</p>
            <S.Textarea
              value={formik.values.contentBottom ?? undefined}
              onChange={formik.handleChange("contentBottom")}
              width="280px"
            />
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
