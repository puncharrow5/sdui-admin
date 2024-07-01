import React, { useState } from "react";
import { useFindManySiteQuery } from "@/graphql/generated/types";
import { useRouter } from "next/router";
import { RegisterModal } from "@/components/RegisterModal";

export default function Dashboard() {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  const { data } = useFindManySiteQuery({ fetchPolicy: "network-only" });

  const handleRoute = (siteId: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    router.push(`/edit/${siteId}`);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      {open && <RegisterModal handleCloseModal={handleCloseModal} />}
      <div className="flex justify-center w-screen min-h-screen py-40 bg-[#2D333B]">
        <div className="flex flex-col w-1/2 px-20 py-10 bg-slate-50 rounded-lg">
          <h1 className="text-center text-3xl font-bold">대시보드</h1>
          <div className="flex justify-between items-center mt-10 font-bold">
            <p className="">등록된 사이트</p>
            <div onClick={handleOpenModal} className="p-2 border-2 rounded-lg cursor-pointer">
              + 사이트 등록
            </div>
          </div>

          {!!data ? (
            <div className="flex flex-col mt-4 gap-2">
              {data.findManySite.map((value, index) => (
                <div
                  key={index}
                  onClick={handleRoute(value.id)}
                  className="p-2 border rounded-md cursor-pointer"
                >
                  <div>사이트명 : {value.name}</div>
                  <div>도메인 : {value.domain}</div>
                </div>
              ))}
            </div>
          ) : (
            <div>Empty</div>
          )}
        </div>
      </div>
    </>
  );
}
