"use server";
import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import { Root } from "../../../../root";
import { DefaultLayout } from "../../../../layouts/default";
import { Widget } from "../../../../components/widget";

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Root context={context} request={request}>
      <DefaultLayout>
        <Widget heading={context.widget.content.heading} />
      </DefaultLayout>
    </Root>
  );
};

export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}
