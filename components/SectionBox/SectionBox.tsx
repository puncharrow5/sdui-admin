import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import {
  ChildEntity,
  ComponentEntity,
  FindOneSiteByIdDocument,
  useDeleteComponentMutation,
} from "@/graphql/generated/types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { getComponentType } from "@/utils";
import { useToastMessage } from "@/hooks";
import { ChildForm } from "../ChildForm";
import { SectionForm } from "../SectionForm";
import * as S from "./SectionBox.style";
import { MobileSectionForm } from "../MobileSectionForm";

interface Props {
  data: ComponentEntity;
  isMobile?: boolean;
}

export const SectionBox = ({ data, isMobile }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [loadDeleteComponent, { loading: deleteLoading }] = useDeleteComponentMutation({
    onCompleted: () => {
      client.refetchQueries({ include: [FindOneSiteByIdDocument] });

      ToastMessage("info", "컴포넌트가 삭제되었습니다.");
    },
    onError: (e) => {
      ToastMessage("error", `${e.message ?? e}`);
    },
  });

  const handleDelete = () => {
    loadDeleteComponent({
      variables: {
        id: data.id,
      },
    });
  };

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

          {isMobile ? <MobileSectionForm data={data} /> : <SectionForm data={data} />}

          {data.children &&
            data.children.map((value: ChildEntity, index: number) => (
              <ChildForm key={index} data={value} index={index} />
            ))}
        </S.Detail>
      )}
    </S.Container>
  );
};
