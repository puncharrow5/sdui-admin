import React from "react";
import { useRouter } from "next/router";
import { useFindOneSiteByIdQuery } from "@/graphql/generated/types";
import { Container } from "@/components/Container";
import { SidePanel } from "@/components/SidePanel";

export default function Edit() {
  const router = useRouter();

  const { data } = useFindOneSiteByIdQuery({
    variables: {
      id: Number(router.query.siteId),
    },
    fetchPolicy: "network-only",
  });

  return (
    <>
      <Container data={data?.findOneSiteById} />
      <SidePanel data={data?.findOneSiteById} />
    </>
  );
}
