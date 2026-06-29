"use server";
import {
  getKindeWidget,
  getKindeCSRF,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";

const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #0b1e3d;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  .wrap {
    display: flex;
    width: 100%;
    max-width: 960px;
    min-height: 540px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 32px 80px rgba(0,0,0,0.5);
  }
  .brand {
    flex: 1;
    background: linear-gradient(145deg, #0b1e3d 0%, #0b4d8c 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px 40px;
    position: relative;
    overflow: hidden;
  }
  .brand::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(255,106,61,0.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .logo-row { display: flex; align-items: center; gap: 12px; }
  .logo-box {
    width: 42px; height: 42px;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
  }
  .brand-name { font-size: 21px; font-weight: 700; color: #fff; letter-spacing: -0.3px; }
  .brand-tag { font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.6px; }
  .brand-body { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 36px 0 16px; }
  .headline { font-size: 28px; font-weight: 700; color: #fff; line-height: 1.28; margin-bottom: 14px; }
  .headline em { color: #ff6a3d; font-style: normal; }
  .sub { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.65; max-width: 270px; }
  .features { display: flex; flex-direction: column; gap: 10px; margin-top: 28px; }
  .feat { display: flex; align-items: center; gap: 10px; font-size: 13px; color: rgba(255,255,255,0.6); }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: #ff6a3d; flex-shrink: 0; }
  .brand-foot { font-size: 11px; color: rgba(255,255,255,0.28); }
  .auth {
    width: 420px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 52px 44px;
    flex-shrink: 0;
  }
  .auth-title { font-size: 22px; font-weight: 700; color: #0b1e3d; margin-bottom: 6px; }
  .auth-sub { font-size: 14px; color: #64748b; margin-bottom: 32px; line-height: 1.55; }
  .auth-foot { margin-top: 28px; font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.6; }
  .auth-foot a { color: #0b4d8c; text-decoration: none; }
  .auth-foot a:hover { text-decoration: underline; }
  @media (max-width: 680px) {
    .wrap { flex-direction: column; max-width: 420px; min-height: unset; }
    .brand { padding: 28px 24px; }
    .brand-body { display: none; }
    .auth { width: 100%; padding: 36px 28px; }
  }
`;

const Page: React.FC<KindePageEvent> = (event) => {
  const title = event?.context?.widget?.content?.page_title ?? "Sign in | OrdoLux";
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        {getKindeRequiredCSS()}
        {getKindeRequiredJS()}
        {getKindeCSRF()}
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <div className="wrap">
          <div className="brand">
            <div className="logo-row">
              <div className="logo-box">⚖️</div>
              <div>
                <div className="brand-name">OrdoLux</div>
                <div className="brand-tag">Legal Practice Management</div>
              </div>
            </div>
            <div className="brand-body">
              <h2 className="headline">Practice smarter.<br /><em>Never lose time.</em></h2>
              <p className="sub">The complete practice management platform built for modern UK law firms.</p>
              <div className="features">
                <div className="feat"><span className="dot"></span>Matter-centric time recording</div>
                <div className="feat"><span className="dot"></span>Integrated Microsoft 365</div>
                <div className="feat"><span className="dot"></span>Conveyancing &amp; probate workflows</div>
                <div className="feat"><span className="dot"></span>HMRC SDLT recognised</div>
              </div>
            </div>
            <div className="brand-foot">© 2026 OrdoLux Limited. All rights reserved.</div>
          </div>

          <div className="auth">
            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-sub">Sign in using your organisation's Microsoft credentials.</p>
            {getKindeWidget()}
            <div className="auth-foot">
              By signing in you agree to OrdoLux's{" "}
              <a href="https://ordolux.co.uk/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              {" "}and{" "}
              <a href="https://ordolux.co.uk/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>.
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default async function PageHandler(event: KindePageEvent): Promise<string> {
  const page = await Page(event);
  return renderToString(page);
}
