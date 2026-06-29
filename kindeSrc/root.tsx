"use server";
import {
  getKindeCSRF,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";

interface RootProps extends KindePageEvent {
  children: React.ReactNode;
}

export const Root = ({ children, context }: RootProps): React.JSX.Element => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{context.widget.content.page_title || "Sign in | OrdoLux"}</title>
        {getKindeRequiredCSS()}
        {getKindeRequiredJS()}
        {getKindeCSRF()}
        <style>{`
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

          .auth-wrapper {
            display: flex;
            width: 100%;
            max-width: 960px;
            min-height: 540px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 32px 80px rgba(0,0,0,0.5);
          }

          .brand-panel {
            flex: 1;
            background: linear-gradient(145deg, #0b1e3d 0%, #0b4d8c 100%);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 48px 40px;
            position: relative;
            overflow: hidden;
          }

          .brand-panel::before {
            content: '';
            position: absolute;
            top: -80px; right: -80px;
            width: 320px; height: 320px;
            background: radial-gradient(circle, rgba(255,106,61,0.18) 0%, transparent 70%);
            pointer-events: none;
          }

          .brand-panel::after {
            content: '';
            position: absolute;
            bottom: -60px; left: -60px;
            width: 240px; height: 240px;
            background: radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%);
            pointer-events: none;
          }

          .brand-logo-row {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .brand-icon {
            width: 42px; height: 42px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            display: flex; align-items: center; justify-content: center;
            font-size: 20px;
          }

          .brand-name { font-size: 21px; font-weight: 700; color: #fff; letter-spacing: -0.3px; }
          .brand-tag { font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.6px; margin-top: 1px; }

          .brand-body { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 40px 0 20px; }

          .brand-headline { font-size: 28px; font-weight: 700; color: #fff; line-height: 1.28; margin-bottom: 14px; }
          .brand-headline em { color: #ff6a3d; font-style: normal; }

          .brand-sub { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.65; max-width: 270px; }

          .brand-features { display: flex; flex-direction: column; gap: 10px; margin-top: 28px; }
          .brand-feature { display: flex; align-items: center; gap: 10px; font-size: 13px; color: rgba(255,255,255,0.6); }
          .dot { width: 6px; height: 6px; border-radius: 50%; background: #ff6a3d; flex-shrink: 0; }

          .brand-footer { font-size: 11px; color: rgba(255,255,255,0.28); }

          .auth-panel {
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
            .auth-wrapper { flex-direction: column; max-width: 420px; min-height: unset; }
            .brand-panel { padding: 28px 24px; }
            .brand-body { display: none; }
            .auth-panel { width: 100%; padding: 36px 28px; }
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
