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
import * as S from "./MobileSectionForm.style";

interface Props {
  data: ComponentEntity;
}

export const MobileSectionForm = ({ data }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [mobileImageFile, setMobileImageFile] = useState<File>();

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
      setMobileImageFile(selectedFile);
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
        ...(formik.values.componentMobileStyle.backgroundType === BackgroundType.Image && {
          mobileImageFile,
        }),
      },
    });
  };

  const handleReset = () => {
    formik.resetForm();
    setMobileImageFile(undefined);
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
      componentMobileStyle: {
        height: data.componentMobileStyle?.height ?? undefined,
        padding: data.componentMobileStyle?.padding ?? undefined,
        gap: data.componentMobileStyle?.gap ?? undefined,
        background: data.componentMobileStyle?.background ?? undefined,
        backgroundType: data.componentMobileStyle?.backgroundType ?? BackgroundType.Color,
      },
      title: data?.title ?? undefined,
      titleStyle: {
        mobileSize: data?.titleStyle?.mobileSize ?? undefined,
        color: data?.titleStyle?.color ?? undefined,
        mobileMargin: data.titleStyle?.mobileMargin ?? undefined,
        mobileLineHeight: data.titleStyle?.mobileLineHeight ?? undefined,
      },
      content: data.content ?? undefined,
      contentStyle: {
        mobileSize: data.contentStyle?.mobileSize ?? undefined,
        color: data?.contentStyle?.color ?? undefined,
        mobileMargin: data.contentStyle?.mobileMargin ?? undefined,
        mobileLineHeight: data.contentStyle?.mobileLineHeight ?? undefined,
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
            value={formik.values.componentMobileStyle.backgroundType}
            onChange={formik.handleChange("componentMobileStyle.backgroundType")}
          >
            <option value={BackgroundType.Color} label="색상" />
            <option value={BackgroundType.Image} label="이미지" />
          </S.Select>
          {formik.values.componentMobileStyle.backgroundType === BackgroundType.Image ? (
            <>
              <input
                type="file"
                id="uploadBackground"
                className="hidden"
                onChange={handleFileChange}
              />
              <S.FileInput
                value={
                  mobileImageFile
                    ? mobileImageFile.name
                    : data?.componentMobileStyle?.backgroundType === BackgroundType.Image &&
                      data?.componentMobileStyle.background
                    ? data?.componentMobileStyle.background
                    : undefined
                }
                onClick={handleOpenUpload}
                width="170px"
                readOnly
              />
            </>
          ) : (
            <S.Input
              value={formik.values.componentMobileStyle.background ?? undefined}
              onChange={formik.handleChange("componentMobileStyle.background")}
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
            name="componentMobileStyle.heighte"
            value={formik.values.componentMobileStyle.height ?? undefined}
            onChange={(e) => formik.setFieldValue("componentMobileStyle.height", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">패딩</p>
          <S.Input
            name="componentMobileStyle.padding"
            value={formik.values.componentMobileStyle.padding ?? undefined}
            onChange={(e) => formik.setFieldValue("componentMobileStyle.padding", e.target.value)}
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>
      <S.ItemBox $marginTop={10} $hasBorder>
        <S.FontSetting>
          <p className="font-bold">갭</p>
          <S.Input
            name="componentMobileStyle.gap"
            value={formik.values.componentMobileStyle.gap ?? undefined}
            onChange={(e) => formik.setFieldValue("componentMobileStyle.gap", e.target.value)}
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
            name="titleStyle.mobileSize"
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
            name="titleStyle.mobileSize"
            value={formik.values.titleStyle.mobileSize ?? undefined}
            onChange={(e) =>
              formik.setFieldValue("titleStyle.mobileSize", parseInt(e.target.value))
            }
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>
      <S.ItemBox $marginTop={10} $hasBorder>
        <S.FontSetting>
          <p className="font-bold">마진</p>
          <S.Input
            name="titleStyle.mobileMargin"
            value={formik.values.titleStyle.mobileMargin ?? undefined}
            onChange={formik.handleChange("titleStyle.mobileMargin")}
            placeholder="ex) 0 0 0 0"
            width="90px"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">줄 높이</p>
          <S.Input
            type="number"
            name="titleStyle.mobileLineHeight"
            value={formik.values.titleStyle.mobileLineHeight ?? undefined}
            onChange={(e) =>
              formik.setFieldValue("titleStyle.mobileLineHeight", parseInt(e.target.value))
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
            name="contentStyle.mobileSize"
            value={formik.values.contentStyle.mobileSize ?? undefined}
            onChange={(e) =>
              formik.setFieldValue("contentStyle.mobileSize", parseInt(e.target.value))
            }
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>
      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">마진</p>
          <S.Input
            name="contentStyle.mobileMargin"
            value={formik.values.contentStyle.mobileMargin ?? undefined}
            onChange={formik.handleChange("contentStyle.mobileMargin")}
            placeholder="ex) 0 0 0 0"
            width="90px"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">줄 높이</p>
          <S.Input
            type="number"
            name="contentStyle.mobileLineHeight"
            value={formik.values.contentStyle.mobileLineHeight ?? undefined}
            onChange={(e) =>
              formik.setFieldValue("contentStyle.mobileLineHeight", parseInt(e.target.value))
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
