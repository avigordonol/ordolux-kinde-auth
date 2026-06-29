"use server";
import { getKindeWidget, type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import { Root } from "../../../root";

const Page: React.FC<KindePageEvent> = (event) => {
  return (
    <Root {...event}>
      <div className="auth-wrapper">
        {/* Brand panel */}
        <div className="brand-panel">
          <div className="brand-logo-row">
            <div className="brand-icon">⚖️</div>
            <div>
              <div className="brand-name">OrdoLux</div>
              <div className="brand-tag">Legal Practice Management</div>
            </div>
          </div>

          <div className="brand-body">
            <h2 className="brand-headline">
              Practice smarter.<br />
              <em>Never lose time.</em>
            </h2>
            <p className="brand-sub">
              The complete practice management platform built for modern UK law firms.
            </p>
            <div className="brand-features">
              <div className="brand-feature"><span className="dot"></span>Matter-centric time recording</div>
              <div className="brand-feature"><span className="dot"></span>Integrated Microsoft 365</div>
              <div className="brand-feature"><span className="dot"></span>Conveyancing &amp; probate workflows</div>
              <div className="brand-feature"><span className="dot"></span>HMRC SDLT recognised</div>
            </div>
          </div>

          <div className="brand-footer">© 2026 OrdoLux Limited. All rights reserved.</div>
        </div>

        {/* Auth panel */}
        <div className="auth-panel">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-sub">
            Sign in using your organisation's Microsoft credentials.
          </p>

          {getKindeWidget()}

          <div className="auth-foot">
            By signing in you agree to OrdoLux's{" "}
            <a href="https://ordolux.co.uk/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            {" "}and{" "}
            <a href="https://ordolux.co.uk/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>.
          </div>
        </div>
      </div>
    </Root>
  );
};

export default async function PageHandler(event: KindePageEvent): Promise<string> {
  const page = await Page(event);
  return renderToString(page);
}
