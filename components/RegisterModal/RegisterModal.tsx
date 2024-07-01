import React, { useState } from "react";
import * as S from "./RegisterModal.style";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  CreateSiteMutationVariables,
  FindManySiteDocument,
  useCreateSiteMutation,
} from "@/graphql/generated/types";
import { useToastMessage } from "@/hooks";
import { useApolloClient } from "@apollo/client";

type Step = "FirstStep" | "Create" | "Link";

interface Props {
  handleCloseModal: () => void;
}

export const RegisterModal = ({ handleCloseModal }: Props) => {
  const client = useApolloClient();
  const { ToastMessage } = useToastMessage();

  const [step, setStep] = useState<Step>("FirstStep");
  const [createValues, setCreateValues] = useState<CreateSiteMutationVariables>({
    name: "",
    domain: "",
    email: "",
  });

  const [loadCreateSite] = useCreateSiteMutation({
    fetchPolicy: "network-only",
    onCompleted: () => {
      client.refetchQueries({ include: [FindManySiteDocument] });

      ToastMessage("info", "사이트가 생성되었습니다.");

      handleCloseModal();
    },
    onError: (e) => {
      ToastMessage("error", e.message ?? e);
    },
  });

  const handleCreate = () => {
    loadCreateSite({
      variables: {
        ...createValues,
      },
    });
  };

  const handleConnect = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateValues({
      ...createValues,
      [name]: value,
    });
  };

  const renderModalContent = () => {
    switch (step) {
      case "FirstStep":
        return (
          <S.FirstStep>
            <S.Title fontSize={24}>사이트 등록</S.Title>
            <S.Button onClick={() => setStep("Create")}>
              <p className="font-bold">사이트 생성</p>
              <ChevronRightIcon className="size-4" />
            </S.Button>
            <S.Button onClick={() => setStep("Link")}>
              <p className="font-bold">사이트 연결</p>
              <ChevronRightIcon className="size-4" />
            </S.Button>
          </S.FirstStep>
        );
      case "Create":
        return (
          <S.SecondStep>
            <S.Title fontSize={24}>사이트 생성</S.Title>
            <S.Label>사이트 이름</S.Label>
            <S.Input
              name="name"
              value={createValues.name}
              onChange={handleChange}
              placeholder="사이트 이름"
            />
            <S.Label>도메인</S.Label>
            <S.Input
              name="domain"
              value={createValues.domain}
              onChange={handleChange}
              placeholder="http://domain.com"
            />
            <S.Label>이메일</S.Label>
            <S.Input
              name="email"
              value={createValues.email}
              onChange={handleChange}
              placeholder="site@email.com"
            />
            <S.SubmitButton onClick={handleCreate}>
              <p className="font-bold">사이트 생성</p>
            </S.SubmitButton>
          </S.SecondStep>
        );
      case "Link":
        return (
          <S.SecondStep>
            <S.Title fontSize={24}>사이트 연결</S.Title>
            <S.Label>도메인</S.Label>
            <S.Input
              name="domain"
              value={createValues.domain}
              onChange={handleChange}
              placeholder="http://domain.com"
            />
            <S.SubmitButton onClick={handleConnect}>
              <p className="font-bold">사이트 연결</p>
            </S.SubmitButton>
          </S.SecondStep>
        );
    }
  };

  return (
    <S.Backdrop onClick={handleCloseModal}>
      <S.Box onClick={(e) => e.stopPropagation()}>
        <XMarkIcon
          onClick={handleCloseModal}
          className="absolute size-8 top-4 right-6 cursor-pointer"
        />

        {renderModalContent()}
      </S.Box>
    </S.Backdrop>
  );
};
