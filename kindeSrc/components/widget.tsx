"use server";
import { getKindeWidget } from "@kinde/infrastructure";
import React from "react";

type WidgetProps = {
  heading?: string;
};

export const Widget: React.FC<WidgetProps> = ({ heading }) => {
  return (
    <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <div style={{ maxWidth: "400px", width: "100%", margin: "0 auto" }}>
        {heading && (
          <h1 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "1.5rem", color: "#ffffff" }}>
            {heading}
          </h1>
        )}
        {getKindeWidget()}
      </div>
    </div>
  );
};
