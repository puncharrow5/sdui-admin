import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { useToastMessage } from "@/hooks";
import {
  BackgroundType,
  ChildType,
  ComponentEntity,
  FindOneSiteByIdDocument,
  useCreateChildMutation,
  useUpdateComponentMutation,
} from "@/graphql/generated/types";
import { useFormik } from "formik";
import { PanelButton } from "../PanelButton";
import * as S from "./SectionForm.style";

interface Props {
  data: ComponentEntity;
}

export const SectionForm = ({ data }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [imageFile, setImageFile] = useState<File>();

  const [loadUpdateComponent, { loading: updateLoading }] = useUpdateComponentMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      ToastMessage("info", "컴포넌트가 수정되었습니다.");
    },
    onError: (e) => {
      ToastMessage("error", `${e.message ?? e}`);
    },
  });

  const [loadCreateChild, { loading: createLoading }] = useCreateChildMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      ToastMessage("info", "자식 컴포넌트가 생성되었습니다.");
    },
    onError: (e) => {
      ToastMessage("error", `${e.message ?? e}`);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setImageFile(selectedFile);
    }
  };

  const handleOpenUpload = () => {
    document.getElementById("uploadBackground")?.click();
  };

  const handleSubmit = () => {
    loadUpdateComponent({
      variables: {
        id: data.id,
        ...formik.values,
        ...(formik.values.componentStyle.backgroundType === BackgroundType.Image && { imageFile }),
      },
    });
  };

  const handleReset = () => {
    formik.resetForm();
    setImageFile(undefined);
  };

  const handleCreateChild = () => {
    loadCreateChild({
      variables: {
        childType: ChildType.Box,
        componentId: data.id,
      },
    });
  };

  const formik = useFormik({
    initialValues: {
      name: data.name,
      componentStyle: {
        height: data.componentStyle?.height ?? undefined,
        padding: data.componentStyle?.padding ?? undefined,
        gap: data.componentStyle?.gap ?? undefined,
        background: data?.componentStyle?.background ?? undefined,
        backgroundType: data?.componentStyle?.backgroundType ?? BackgroundType.Color,
      },
      title: data?.title ?? undefined,
      titleStyle: {
        size: data?.titleStyle?.size ?? undefined,
        color: data?.titleStyle?.color ?? undefined,
        margin: data.titleStyle?.margin ?? undefined,
        lineHeight: data.titleStyle?.lineHeight ?? undefined,
      },
      content: data.content ?? undefined,
      contentStyle: {
        size: data.contentStyle?.size ?? undefined,
        color: data?.contentStyle?.color ?? undefined,
        margin: data.contentStyle?.margin ?? undefined,
        lineHeight: data.contentStyle?.lineHeight ?? undefined,
      },
    },
    onSubmit: handleSubmit,
  });

  return (
    <>
      {/* 컴포넌트 */}
      <S.ItemBox>
        <p className="font-bold">이름</p>
        <S.Input value={formik.values.name} onChange={formik.handleChange("name")} width="280px" />
      </S.ItemBox>
      <S.ItemBox $alignItems="center" $marginTop={10}>
        <p className="font-bold">배경</p>
        <S.BackgroundArea>
          <S.Select
            width="90px"
            value={formik.values.componentStyle.backgroundType}
            onChange={formik.handleChange("componentStyle.backgroundType")}
          >
            <option value={BackgroundType.Color} label="색상" />
            <option value={BackgroundType.Image} label="이미지" />
          </S.Select>
          {formik.values.componentStyle.backgroundType === BackgroundType.Image ? (
            <>
              <input
                type="file"
                id="uploadBackground"
                className="hidden"
                onChange={handleFileChange}
              />
              <S.FileInput
                value={
                  imageFile
                    ? imageFile.name
                    : data?.componentStyle?.backgroundType === BackgroundType.Image &&
                      data?.componentStyle.background
                    ? data?.componentStyle.background
                    : undefined
                }
                onClick={handleOpenUpload}
                width="170px"
                readOnly
              />
            </>
          ) : (
            <S.Input
              value={formik.values.componentStyle.background ?? undefined}
              onChange={formik.handleChange("componentStyle.background")}
              width="170px"
              $textAlign="center"
            />
          )}
        </S.BackgroundArea>
      </S.ItemBox>
      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">높이</p>
          <S.Input
            name="componentStyle.heighte"
            value={formik.values.componentStyle.height ?? undefined}
            onChange={(e) => formik.setFieldValue("componentStyle.height", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">패딩</p>
          <S.Input
            name="componentStyle.padding"
            value={formik.values.componentStyle.padding ?? undefined}
            onChange={(e) => formik.setFieldValue("componentStyle.padding", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>
      <S.ItemBox $marginTop={10} $hasBorder>
        <S.FontSetting>
          <p className="font-bold">갭</p>
          <S.Input
            name="componentStyle.gap"
            value={formik.values.componentStyle.gap ?? undefined}
            onChange={(e) => formik.setFieldValue("componentStyle.gap", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
        <S.FontSetting />
      </S.ItemBox>

      {/* 제목 */}
      <S.Item $marginTop={15}>제목</S.Item>
      <S.ItemBox $marginTop={5}>
        <p className="font-bold">텍스트</p>
        <S.Input
          value={formik.values.title ?? undefined}
          onChange={formik.handleChange("title")}
          width="280px"
        />
      </S.ItemBox>
      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">텍스트 색상</p>
          <S.Input
            name="titleStyle.size"
            value={formik.values.titleStyle.color ?? undefined}
            onChange={(e) => formik.setFieldValue("titleStyle.color", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">텍스트 크기</p>
          <S.Input
            type="number"
            name="titleStyle.size"
            value={formik.values.titleStyle.size ?? undefined}
            onChange={(e) => formik.setFieldValue("titleStyle.size", parseInt(e.target.value))}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>
      <S.ItemBox $marginTop={10} $hasBorder>
        <S.FontSetting>
          <p className="font-bold">마진</p>
          <S.Input
            name="titleStyle.margin"
            value={formik.values.titleStyle.margin ?? undefined}
            onChange={formik.handleChange("titleStyle.margin")}
            placeholder="ex) 0 0 0 0"
            width="90px"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">줄 높이</p>
          <S.Input
            type="number"
            name="titleStyle.lineHeight"
            value={formik.values.titleStyle.lineHeight ?? undefined}
            onChange={(e) =>
              formik.setFieldValue("titleStyle.lineHeight", parseFloat(e.target.value))
            }
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>

      {/* 부제목 */}
      <S.Item $marginTop={15}>부제목</S.Item>
      <S.ItemBox $marginTop={10} $alignItems="flex-start">
        <p className="font-bold">텍스트</p>
        <S.Textarea
          value={formik.values.content ?? undefined}
          onChange={formik.handleChange("content")}
          width="280px"
        />
      </S.ItemBox>
      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">텍스트 색상</p>
          <S.Input
            name="contentStyle.color"
            value={formik.values.contentStyle.color ?? undefined}
            onChange={(e) => formik.setFieldValue("contentStyle.color", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">텍스트 크기</p>
          <S.Input
            type="number"
            name="contentStyle.size"
            value={formik.values.contentStyle.size ?? undefined}
            onChange={(e) => formik.setFieldValue("contentStyle.size", parseInt(e.target.value))}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>
      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">마진</p>
          <S.Input
            name="contentStyle.margin"
            value={formik.values.contentStyle.margin ?? undefined}
            onChange={formik.handleChange("contentStyle.margin")}
            placeholder="ex) 0 0 0 0"
            width="90px"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">줄 높이</p>
          <S.Input
            type="number"
            name="contentStyle.lineHeight"
            value={formik.values.contentStyle.lineHeight ?? undefined}
            onChange={(e) =>
              formik.setFieldValue("contentStyle.lineHeight", parseFloat(e.target.value))
            }
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>

      <S.ButtonBox>
        <S.SubmitButton>
          <PanelButton
            text="+ 컴포넌트"
            color="#E9455A"
            textColor="#fff"
            onClick={handleCreateChild}
          />
        </S.SubmitButton>
        <S.SubmitButton>
          <PanelButton text="리셋" onClick={handleReset} />
          <PanelButton text="수정" color="#000" textColor="#fff" onClick={handleSubmit} />
        </S.SubmitButton>
      </S.ButtonBox>
    </>
  );
};
