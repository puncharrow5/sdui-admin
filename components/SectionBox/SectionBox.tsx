import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import {
  BackgroundType,
  ComponentEntity,
  FindOneSiteByIdDocument,
  UpdateComponentMutationVariables,
  useDeleteComponentMutation,
  useUpdateComponentMutation,
} from "@/graphql/generated/types";
import { useFormik } from "formik";
import { PanelButton } from "../PanelButton";
import * as yup from "yup";
import * as S from "./SectionBox.style";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { getComponentType } from "@/utils";

interface Props {
  data: ComponentEntity;
}

export const SectionBox = ({ data }: Props) => {
  const client = useApolloClient();

  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File>();

  const [loadUpdateComponent, { loading: updateLoading }] = useUpdateComponentMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      alert("컴포넌트가 수정되었습니다.");
    },
    onError: (e) => {
      alert(e.message ?? e);
    },
  });

  const [loadDeleteComponent, { loading: deleteLoading }] = useDeleteComponentMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      alert("컴포넌트가 삭제되었습니다.");
    },
    onError: (e) => {
      alert(e.message ?? e);
    },
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleOpenUpload = () => {
    document.getElementById("uploadBackground")?.click();
  };

  const handleSubmit = () => {
    loadUpdateComponent({
      variables: {
        ...formik.values,
        ...(formik.values.backgroundType === BackgroundType.Image && { file }),
        id: data.id,
      },
    });
  };

  const handleDelete = () => {
    loadDeleteComponent({
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
      name: data.name,
      title: data?.title ?? undefined,
      titleStyle: {
        textSize: data?.titleStyle?.textSize ?? undefined,
        textColor: data?.titleStyle?.textColor ?? undefined,
        margin: data.titleStyle?.margin ?? undefined,
        lineHeight: data.titleStyle?.lineHeight ?? undefined,
      },
      content: data.content ?? undefined,
      contentStyle: {
        textSize: data.contentStyle?.textSize ?? undefined,
        textColor: data?.contentStyle?.textColor ?? undefined,
        margin: data.contentStyle?.margin ?? undefined,
        lineHeight: data.contentStyle?.lineHeight ?? undefined,
      },
      background: data?.background ?? undefined,
      backgroundType: data?.backgroundType ?? undefined,
    },
    onSubmit: handleSubmit,
  });

  return (
    <S.Container onClick={handleClick}>
      <S.SectionName>
        <p className="text-lg">{data.name}</p>
        {open ? (
          <ChevronUpIcon className="size-6 cursor-pointer" />
        ) : (
          <ChevronDownIcon className="size-6 cursor-pointer" />
        )}
      </S.SectionName>
      {open && (
        <S.Detail onClick={(e) => e.stopPropagation()}>
          <S.ComponentType>
            <S.Item>{getComponentType(data.componentType)}</S.Item>
            <TrashIcon onClick={handleDelete} className="size-6 cursor-pointer" />
          </S.ComponentType>
          <S.ItemBox>
            <p className="font-bold">이름</p>
            <S.Input
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              width="280px"
            />
          </S.ItemBox>
          <S.ItemBox $alignItems="center" $marginTop={10} $hasBorder>
            <p className="font-bold">배경</p>
            <S.BackgroundArea>
              <S.Select
                width="90px"
                value={formik.values.backgroundType ?? undefined}
                onChange={formik.handleChange("backgroundType")}
              >
                <option value={BackgroundType.Color} label="색상" />
                <option value={BackgroundType.Image} label="이미지" />
              </S.Select>
              {formik.values.backgroundType === BackgroundType.Color ? (
                <S.Input
                  value={formik.values.background ?? undefined}
                  onChange={formik.handleChange("background")}
                  width="170px"
                  $textAlign="center"
                />
              ) : (
                <>
                  <input
                    type="file"
                    id="uploadBackground"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <S.FileInput
                    value={
                      file
                        ? file.name
                        : data?.backgroundType === BackgroundType.Image && data?.background
                        ? data?.background
                        : undefined
                    }
                    onClick={handleOpenUpload}
                    width="170px"
                    readOnly
                  />
                </>
              )}
            </S.BackgroundArea>
          </S.ItemBox>

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
                name="titleStyle.textSize"
                value={formik.values.titleStyle.textColor ?? undefined}
                onChange={(e) => formik.setFieldValue("titleStyle.textColor", e.target.value)}
                width="90px"
                $textAlign="center"
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">텍스트 크기</p>
              <S.Input
                type="number"
                name="titleStyle.textSize"
                value={formik.values.titleStyle.textSize ?? undefined}
                onChange={(e) =>
                  formik.setFieldValue("titleStyle.textSize", parseInt(e.target.value))
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
                  formik.setFieldValue("titleStyle.lineHeight", parseInt(e.target.value))
                }
                width="90px"
                $textAlign="center"
              />
            </S.FontSetting>
          </S.ItemBox>

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
                name="contentStyle.textColor"
                value={formik.values.contentStyle.textColor ?? undefined}
                onChange={(e) => formik.setFieldValue("contentStyle.textColor", e.target.value)}
                width="90px"
                $textAlign="center"
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">텍스트 크기</p>
              <S.Input
                type="number"
                name="contentStyle.textSize"
                value={formik.values.contentStyle.textSize ?? undefined}
                onChange={(e) =>
                  formik.setFieldValue("contentStyle.textSize", parseInt(e.target.value))
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
                  formik.setFieldValue("contentStyle.lineHeight", parseInt(e.target.value))
                }
                width="90px"
                $textAlign="center"
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
