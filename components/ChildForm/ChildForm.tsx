import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import { useToastMessage } from "@/hooks";
import { PanelButton } from "../PanelButton";
import {
  ChildEntity,
  FindOneSiteByIdDocument,
  useDeleteChildMutation,
} from "@/graphql/generated/types";
import * as S from "./ChildForm.style";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Props {
  index: number;
  data: ChildEntity;
}

export const ChildForm = ({ index, data }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [file, setFile] = useState<File>();

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

  // const handleSubmit = () => {
  //   loadUpdateComponent({
  //     variables: {
  //       ...formik.values,
  //       ...(formik.values.componentStyle.backgroundType === BackgroundType.Image && { file }),
  //       id: data.id,
  //     },
  //   });
  // };

  const handleDelete = () => {
    loadDeleteChild({
      variables: {
        id: data.id,
      },
    });
  };

  // const handleReset = () => {
  //   formik.resetForm();
  //   setFile(undefined);
  // };

  const handleSubmit = () => {};

  const handleReset = () => {};

  // const formik = useFormik({
  //   initialValues: {
  //     name: data.name,
  //     title: data?.title ?? undefined,
  //     componentStyle: {
  //       height: data.componentStyle?.height ?? undefined,
  //       padding: data.componentStyle?.padding ?? undefined,
  //       gap: data.componentStyle?.gap ?? undefined,
  //       background: data?.componentStyle?.background ?? undefined,
  //       backgroundType: data?.componentStyle?.backgroundType ?? BackgroundType.Color,
  //     },
  //     titleStyle: {
  //       textSize: data?.titleStyle?.textSize ?? undefined,
  //       textColor: data?.titleStyle?.textColor ?? undefined,
  //       margin: data.titleStyle?.margin ?? undefined,
  //       lineHeight: data.titleStyle?.lineHeight ?? undefined,
  //     },
  //     content: data.content ?? undefined,
  //     contentStyle: {
  //       textSize: data.contentStyle?.textSize ?? undefined,
  //       textColor: data?.contentStyle?.textColor ?? undefined,
  //       margin: data.contentStyle?.margin ?? undefined,
  //       lineHeight: data.contentStyle?.lineHeight ?? undefined,
  //     },
  //   },
  //   onSubmit: handleSubmit,
  // });

  return (
    <S.Container>
      <S.ComponentType>
        <S.Item>컴포넌트 {index + 1}</S.Item>
        <TrashIcon onClick={handleDelete} className="size-6 cursor-pointer" />
      </S.ComponentType>

      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">이미지</p>
          <S.Input
            name="contentStyle.margin"
            // value={formik.values.contentStyle.margin ?? undefined}
            // onChange={formik.handleChange("contentStyle.margin")}

            width="90px"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">마진</p>
          <S.Input
            name="contentStyle.lineHeight"
            // value={formik.values.contentStyle.lineHeight ?? undefined}
            // onChange={(e) =>
            //   formik.setFieldValue("contentStyle.lineHeight", parseInt(e.target.value))
            // }
            placeholder="ex) 0 0 0 0"
            width="90px"
            $textAlign="center"
          />
        </S.FontSetting>
      </S.ItemBox>
      <S.ItemBox $marginTop={10}>
        <S.FontSetting>
          <p className="font-bold">너비</p>
          <S.Input
            name="contentStyle.margin"
            // value={formik.values.contentStyle.margin ?? undefined}
            // onChange={formik.handleChange("contentStyle.margin")}
            width="90px"
          />
        </S.FontSetting>
        <S.FontSetting>
          <p className="font-bold">높이</p>
          <S.Input
            name="contentStyle.lineHeight"
            // value={formik.values.contentStyle.lineHeight ?? undefined}
            // onChange={(e) =>
            //   formik.setFieldValue("contentStyle.lineHeight", parseInt(e.target.value))
            // }
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
