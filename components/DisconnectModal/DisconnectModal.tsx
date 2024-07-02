import React, { useState } from "react";
import * as S from "./DisconnectModal.style";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  CreateSiteMutationVariables,
  FindManySiteDocument,
  useCreateSiteMutation,
  useDisconnectSiteMutation,
} from "@/graphql/generated/types";
import { useToastMessage } from "@/hooks";
import { useApolloClient } from "@apollo/client";

type Step = "FirstStep" | "Create" | "Link";

interface Props {
  siteId?: number;
  handleCloseDisconnectModal: () => void;
}

export const DisconnectModal = ({ siteId, handleCloseDisconnectModal }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [loadCreateSite] = useDisconnectSiteMutation({
    fetchPolicy: "network-only",
    onCompleted: () => {
      client.refetchQueries({ include: [FindManySiteDocument] });

      ToastMessage("info", "연결이 해제되었습니다.");

      handleCloseDisconnectModal();
    },
    onError: (e) => {
      ToastMessage("error", e.message ?? e);
    },
  });

  const handleDisconnect = () => {};

  return (
    <S.Backdrop onClick={handleCloseDisconnectModal}>
      <S.Box onClick={(e) => e.stopPropagation()}>
        <XMarkIcon
          onClick={handleCloseDisconnectModal}
          className="absolute size-8 top-4 right-6 cursor-pointer"
        />

        <S.Title>사이트 연결 해제</S.Title>
        <S.Label>연결을 해제하시겠습니까?</S.Label>

        <S.SubmitButton onClick={handleDisconnect}>
          <p className="font-bold">확인</p>
        </S.SubmitButton>
      </S.Box>
    </S.Backdrop>
  );
};
