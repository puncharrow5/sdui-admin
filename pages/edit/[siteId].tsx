"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFindOneSiteByIdQuery } from "@/graphql/generated/types";
import { Container } from "@/components/Container";
import { SidePanel } from "@/components/SidePanel";
import { MobileContainer } from "@/components/MobileContainer";

export default function Edit() {
  const router = useRouter();

  const [isMoblie, setIsMobile] = useState<boolean>(false);

  const { data } = useFindOneSiteByIdQuery({
    variables: {
      id: Number(router.query.siteId),
    },
    fetchPolicy: "network-only",
  });

  const handleSetDesktop = () => {
    setIsMobile(false);
  };
  const handleSetMobile = () => {
    setIsMobile(true);
  };

  return (
    <>
      {isMoblie ? (
        <MobileContainer data={data?.findOneSiteById} />
      ) : (
        <Container data={data?.findOneSiteById} />
      )}
      <SidePanel
        data={data?.findOneSiteById}
        isMobile={isMoblie}
        handleSetDesktop={handleSetDesktop}
        handleSetMobile={handleSetMobile}
      />
    </>
  );
}
