"use server";
import { getKindeWidget, type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import { Root } from "../../../../root";
import { DefaultLayout } from "../../../../layouts/default";

const NavPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Root context={context} request={request}>
      <DefaultLayout>
        {getKindeWidget()}
      </DefaultLayout>
    </Root>
  );
};

export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await NavPage(event);
  return renderToString(page);
}
