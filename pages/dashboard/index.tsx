import React from "react";
import { useFindManySiteQuery } from "@/graphql/generated/types";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  const { data } = useFindManySiteQuery({ fetchPolicy: "network-only" });

  const handleRoute = (siteId: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    router.push(`/edit/${siteId}`);
  };

  return (
    <div className="flex justify-center w-screen min-h-screen py-40 bg-gray-300">
      <div className="flex flex-col w-1/2 px-20 py-10 bg-white rounded-lg">
        <h1 className="text-center text-3xl font-bold">대시보드</h1>
        <h2 className="mt-10 font-bold">등록된 사이트</h2>
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
  );
}
