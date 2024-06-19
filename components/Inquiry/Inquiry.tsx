import React, { useState } from "react";
import { ComponentEntity } from "@/graphql/generated/types";

interface Props {
  id: string;
  data: ComponentEntity;
  siteEmail: string;
}

export const Inquiry = ({ id, data, siteEmail }: Props) => {
  const [emailForm, setEmailForm] = useState({
    email: "",
    phoneNumber: "",
    content: "",
    siteEmail,
  });

  const handleChange = (key: string) => (e: any) => {
    setEmailForm({
      ...emailForm,
      [key]: key === "phoneNumber" ? e.target.value.replace(/\D/g, "") : e.target.value,
    });
  };

  return (
    <div id={id} className="flex justify-center w-full min-h-[754px] h-full">
      <div className="flex items-center justify-center w-1/2 bg-blue-500">배경</div>
      <div className="flex flex-col justify-start w-1/2 p-20 bg-[#F9F9F9]">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content as TrustedHTML }} />

        <div className="flex flex-col mt-10">
          <label className="mb-2 text-[20px]">이메일</label>
          <input
            value={emailForm.email}
            onChange={handleChange("email")}
            placeholder="abc@gmail.com"
            className="p-3 border rounded-md"
          />

          <label className="mt-6 mb-2 text-[20px]">전화번호</label>
          <input
            value={emailForm.phoneNumber}
            onChange={handleChange("phoneNumber")}
            placeholder="01012341234"
            className="p-3 border rounded-md"
          />

          <label className="mt-6 mb-2 text-[20px]">문의내용</label>
          <textarea
            value={emailForm.content}
            onChange={handleChange("content")}
            placeholder="최소 10자 이상 작성해주세요."
            className="h-[200px] p-3 border rounded-md"
          />

          <button className="mt-16 p-4 bg-blue-900 border rounded-full text-xl">문의하기</button>
        </div>
      </div>
    </div>
  );
};
