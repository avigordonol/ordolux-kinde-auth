"use server";
import {
  getKindeCSRF,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
import { getStyles } from "./styles/styles";

interface RootProps extends KindePageEvent {
  children: React.ReactNode;
}

export const Root = ({ children, context }: RootProps): React.JSX.Element => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{context.widget.content.page_title}</title>
        {getKindeRequiredCSS()}
        <style dangerouslySetInnerHTML={{ __html: getStyles() }} />
      </head>
      <body>
        {getKindeRequiredJS()}
        {getKindeCSRF()}
        {children}
      </body>
    </html>
  );
};
