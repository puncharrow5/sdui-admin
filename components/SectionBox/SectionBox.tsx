import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import { BackgroundType, ComponentEntity } from "@/graphql/generated/types";
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

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSubmit = () => {
    // loadUpdateHeader({
    //   variables: { ...formik.values, logoFile: file, siteId },
    // });
  };

  const handleReset = () => {
    formik.resetForm();
    setFile(undefined);
  };

  const handleDelete = () => {};

  const formik = useFormik({
    // validateOnChange: true,
    // validateOnMount: true,
    // validationSchema: HeaderOptionSchema,
    initialValues: {
      name: data.name,
      title: data?.title ?? undefined,
      titleTextSize: data?.titleStyle?.textSize ?? undefined,
      titleTextColor: data?.titleStyle?.textColor ?? undefined,
      content: data.content ?? undefined,
      contentTextSize: data.contentStyle?.textSize ?? undefined,
      contentTextColor: data?.contentStyle?.textColor ?? undefined,
      background: data?.background ?? undefined,
      backgroundType: data?.backgroundType ?? undefined,
    },
    onSubmit: handleSubmit,
  });

  return (
    <S.Container>
      <S.SectionName>
        <p>{data.name}</p>
        {open ? (
          <ChevronUpIcon onClick={handleClick} className="size-6 cursor-pointer" />
        ) : (
          <ChevronDownIcon onClick={handleClick} className="size-6 cursor-pointer" />
        )}
      </S.SectionName>
      {open && (
        <S.Detail>
          <S.ComponentType>
            <S.Item>{getComponentType(data.componentType)}</S.Item>
            <TrashIcon onClick={handleDelete} className="size-6 cursor-pointer" />
          </S.ComponentType>
          <S.ItemBox marginTop={5}>
            <p className="font-bold">이름</p>
            <S.Input
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              width="280px"
            />
          </S.ItemBox>
          <S.ItemBox alignItems="center" marginTop={5} hasBorder>
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
              <S.Input
                value={formik.values.background ?? undefined}
                onChange={formik.handleChange("background")}
                width="170px"
                textAlign="center"
                placeholder="배경 타입"
              />
            </S.BackgroundArea>
          </S.ItemBox>

          <S.Item marginTop={15}>제목</S.Item>
          <S.ItemBox marginTop={5}>
            <p className="font-bold">텍스트</p>
            <S.Input
              value={formik.values.title ?? undefined}
              onChange={formik.handleChange("title")}
              width="280px"
            />
          </S.ItemBox>
          <S.ItemBox marginTop={5} hasBorder>
            <S.FontSetting>
              <p className="font-bold">텍스트 색상</p>
              <S.Input
                value={formik.values.titleTextColor ?? undefined}
                onChange={formik.handleChange("titleTextColor")}
                width="90px"
                textAlign="center"
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">텍스트 크기</p>
              <S.Input
                type="number"
                value={formik.values.titleTextSize ?? undefined}
                onChange={formik.handleChange("titleTextSize")}
                width="90px"
                textAlign="center"
              />
            </S.FontSetting>
          </S.ItemBox>

          <S.Item marginTop={15}>부제목</S.Item>
          <S.ItemBox marginTop={5} alignItems="flex-start">
            <p className="font-bold">텍스트</p>
            <S.Textarea
              value={formik.values.content ?? undefined}
              onChange={formik.handleChange("content")}
              width="280px"
            />
          </S.ItemBox>
          <S.ItemBox marginTop={5} hasBorder>
            <S.FontSetting>
              <p className="font-bold">텍스트 색상</p>
              <S.Input
                value={formik.values.contentTextColor ?? undefined}
                onChange={formik.handleChange("contentTextColor")}
                width="90px"
                textAlign="center"
              />
            </S.FontSetting>
            <S.FontSetting>
              <p className="font-bold">텍스트 크기</p>
              <S.Input
                type="number"
                value={formik.values.contentTextSize ?? undefined}
                onChange={formik.handleChange("contentTextSize")}
                width="90px"
                textAlign="center"
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
