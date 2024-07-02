import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { useToastMessage } from "@/hooks";
import { PanelButton } from "../PanelButton";
import {
  BackgroundType,
  FindOneSiteByIdDocument,
  MobileChildEntity,
  useDeleteMobileChildMutation,
  useUpdateMobileChildMutation,
} from "@/graphql/generated/types";
import { useFormik } from "formik";
import { TrashIcon } from "@heroicons/react/24/outline";
import * as S from "./MobileChildForm.style";

interface Props {
  index: number;
  data: MobileChildEntity;
}

export const MobileChildForm = ({ index, data }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [file, setFile] = useState<File>();

  const [loadUpdateMobileChild, { loading: updateLoading }] = useUpdateMobileChildMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      ToastMessage("info", "컴포넌트가 수정되었습니다.");
    },
    onError: (e) => {
      ToastMessage("error", `${e.message ?? e}`);
    },
  });

  const [loadDeleteMobileChild, { loading: deleteLoading }] = useDeleteMobileChildMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      ToastMessage("info", "컴포넌트가 삭제되었습니다.");
    },
    onError: (e) => {
      ToastMessage("error", `${e.message ?? e}`);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleOpenUpload = () => {
    document.getElementById("uploadFile")?.click();
  };

  const handleSubmit = () => {
    loadUpdateMobileChild({
      variables: {
        ...formik.values,
        ...(formik.values.mobileChildStyle.backgroundType === BackgroundType.Image && { file }),
        id: data.id,
      },
    });
  };

  const handleDelete = () => {
    loadDeleteMobileChild({
      variables: {
        id: data.id,
      },
    });
  };

  const handleReset = () => {
    formik.resetForm();
    setFile(undefined);
  };

  const formik = useFormik({
    initialValues: {
      title: data?.title ?? undefined,
      mobileChildStyle: {
        width: data.mobileChildStyle?.width ?? undefined,
        height: data.mobileChildStyle?.height ?? undefined,
        margin: data.mobileChildStyle?.margin ?? undefined,
        padding: data.mobileChildStyle?.padding ?? undefined,
        background: data?.mobileChildStyle?.background ?? undefined,
        backgroundType: data?.mobileChildStyle?.backgroundType ?? BackgroundType.Color,
        border: data.mobileChildStyle?.border ?? undefined,
        borderRadius: data.mobileChildStyle?.borderRadius ?? undefined,
      },
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    formik.setFieldValue("mobileChildStyle.background", undefined);
  }, [formik.values.mobileChildStyle.backgroundType]);

  return (
    <S.Container>
      <S.ComponentType>
        <S.Item>컴포넌트 {index + 1}</S.Item>
        <TrashIcon onClick={handleDelete} className="size-6 cursor-pointer" />
      </S.ComponentType>

      <S.ItemBox $alignItems="center" $marginTop={10}>
        <p className="font-bold">배경</p>
        <S.BackgroundArea>
          <S.Select
            width="90px"
            value={formik.values.mobileChildStyle.backgroundType}
            onChange={formik.handleChange("mobileChildStyle.backgroundType")}
          >
            <option value={BackgroundType.Color} label="색상" />
            <option value={BackgroundType.Image} label="이미지" />
          </S.Select>
          {formik.values.mobileChildStyle.backgroundType === BackgroundType.Image ? (
            <>
              <input type="file" id="uploadFile" className="hidden" onChange={handleFileChange} />
              <S.FileInput
                value={
                  file
                    ? file.name
                    : data?.mobileChildStyle?.backgroundType === BackgroundType.Image &&
                      data?.mobileChildStyle.background
                    ? data?.mobileChildStyle.background
                    : undefined
                }
                onClick={handleOpenUpload}
                width="170px"
                readOnly
              />
            </>
          ) : (
            <S.Input
              value={formik.values.mobileChildStyle.background ?? undefined}
              onChange={formik.handleChange("mobileChildStyle.background")}
              width="170px"
              $textAlign="center"
            />
          )}
        </S.BackgroundArea>
      </S.ItemBox>

      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">너비</p>
          <S.Input
            name="mobileChildStyle.width"
            value={formik.values.mobileChildStyle.width ?? undefined}
            onChange={(e) => formik.setFieldValue("mobileChildStyle.width", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">높이</p>
          <S.Input
            name="mobileChildStyle.height"
            value={formik.values.mobileChildStyle.height ?? undefined}
            onChange={(e) => formik.setFieldValue("mobileChildStyle.height", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>

      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">마진</p>
          <S.Input
            name="mobileChildStyle.margin"
            value={formik.values.mobileChildStyle.margin ?? undefined}
            onChange={(e) => formik.setFieldValue("mobileChildStyle.margin", e.target.value)}
            placeholder="ex) 0 0 0 0"
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">패딩</p>
          <S.Input
            name="mobileChildStyle.padding"
            value={formik.values.mobileChildStyle.padding ?? undefined}
            onChange={(e) => formik.setFieldValue("mobileChildStyle.padding", e.target.value)}
            placeholder="ex) 0 0 0 0"
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>

      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">테두리</p>
          <S.Input
            name="mobileChildStyle.border"
            value={formik.values.mobileChildStyle.border ?? undefined}
            onChange={(e) => formik.setFieldValue("mobileChildStyle.border", e.target.value)}
            width="90px"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">테두리 곡률</p>
          <S.Input
            name="mobileChildStyle.borderRadius"
            value={formik.values.mobileChildStyle.borderRadius ?? undefined}
            onChange={(e) => formik.setFieldValue("mobileChildStyle.borderRadius", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>

      <S.ButtonBox>
        <S.SubmitButton>
          <PanelButton text="리셋" onClick={handleReset} />
          <PanelButton text="수정" color="#000" textColor="#fff" onClick={handleSubmit} />
        </S.SubmitButton>
      </S.ButtonBox>
    </S.Container>
  );
};
