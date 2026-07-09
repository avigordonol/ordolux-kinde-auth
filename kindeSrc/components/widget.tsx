"use server";
import { getKindeWidget } from "@kinde/infrastructure";
import React from "react";

export const Widget: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      {getKindeWidget()}
    </div>
  );
};
