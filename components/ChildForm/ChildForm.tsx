import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { useToastMessage } from "@/hooks";
import { PanelButton } from "../PanelButton";
import {
  BackgroundType,
  ChildEntity,
  FindOneSiteByIdDocument,
  useDeleteChildMutation,
  useUpdateChildMutation,
} from "@/graphql/generated/types";
import { useFormik } from "formik";
import { TrashIcon } from "@heroicons/react/24/outline";
import * as S from "./ChildForm.style";

interface Props {
  index: number;
  data: ChildEntity;
}

export const ChildForm = ({ index, data }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [file, setFile] = useState<File>();

  const [loadUpdateChild, { loading: updateLoading }] = useUpdateChildMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      ToastMessage("info", "컴포넌트가 수정되었습니다.");
    },
    onError: (e) => {
      ToastMessage("error", `${e.message ?? e}`);
    },
  });

  const [loadDeleteChild, { loading: deleteLoading }] = useDeleteChildMutation({
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
    loadUpdateChild({
      variables: {
        ...formik.values,
        ...(formik.values.childStyle.backgroundType === BackgroundType.Image && { file }),
        id: data.id,
      },
    });
  };

  const handleDelete = () => {
    loadDeleteChild({
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
      childStyle: {
        width: data.childStyle?.width ?? undefined,
        height: data.childStyle?.height ?? undefined,
        margin: data.childStyle?.margin ?? undefined,
        padding: data.childStyle?.padding ?? undefined,
        background: data?.childStyle?.background ?? undefined,
        backgroundType: data?.childStyle?.backgroundType ?? BackgroundType.Color,
        border: data.childStyle?.border ?? undefined,
        borderRadius: data.childStyle?.borderRadius ?? undefined,
      },
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    formik.setFieldValue("childStyle.background", undefined);
  }, [formik.values.childStyle.backgroundType]);

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
            value={formik.values.childStyle.backgroundType}
            onChange={formik.handleChange("childStyle.backgroundType")}
          >
            <option value={BackgroundType.Color} label="색상" />
            <option value={BackgroundType.Image} label="이미지" />
          </S.Select>
          {formik.values.childStyle.backgroundType === BackgroundType.Image ? (
            <>
              <input type="file" id="uploadFile" className="hidden" onChange={handleFileChange} />
              <S.FileInput
                value={
                  file
                    ? file.name
                    : data?.childStyle?.backgroundType === BackgroundType.Image &&
                      data?.childStyle.background
                    ? data?.childStyle.background
                    : undefined
                }
                onClick={handleOpenUpload}
                width="170px"
                readOnly
              />
            </>
          ) : (
            <S.Input
              value={formik.values.childStyle.background ?? undefined}
              onChange={formik.handleChange("childStyle.background")}
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
            name="childStyle.width"
            value={formik.values.childStyle.width ?? undefined}
            onChange={(e) => formik.setFieldValue("childStyle.width", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">높이</p>
          <S.Input
            name="childStyle.height"
            value={formik.values.childStyle.height ?? undefined}
            onChange={(e) => formik.setFieldValue("childStyle.height", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>

      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">마진</p>
          <S.Input
            name="childStyle.margin"
            value={formik.values.childStyle.margin ?? undefined}
            onChange={(e) => formik.setFieldValue("childStyle.margin", e.target.value)}
            placeholder="ex) 0 0 0 0"
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">패딩</p>
          <S.Input
            name="childStyle.padding"
            value={formik.values.childStyle.padding ?? undefined}
            onChange={(e) => formik.setFieldValue("childStyle.padding", e.target.value)}
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
            name="childStyle.border"
            value={formik.values.childStyle.border ?? undefined}
            onChange={(e) => formik.setFieldValue("childStyle.border", e.target.value)}
            width="90px"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">테두리 곡률</p>
          <S.Input
            name="childStyle.borderRadius"
            value={formik.values.childStyle.borderRadius ?? undefined}
            onChange={(e) => formik.setFieldValue("childStyle.borderRadius", e.target.value)}
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
