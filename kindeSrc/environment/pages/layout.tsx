import { type ReactNode } from "@kinde/infrastructure";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sign in | OrdoLux</title>
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
            min-height: 560px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 32px 80px rgba(0,0,0,0.5);
          }

          /* Left panel — brand */
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
            top: -80px;
            right: -80px;
            width: 320px;
            height: 320px;
            background: radial-gradient(circle, rgba(255,106,61,0.15) 0%, transparent 70%);
            pointer-events: none;
          }

          .brand-panel::after {
            content: '';
            position: absolute;
            bottom: -60px;
            left: -60px;
            width: 240px;
            height: 240px;
            background: radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%);
            pointer-events: none;
          }

          .brand-logo {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .brand-logo svg {
            width: 44px;
            height: 44px;
          }

          .brand-name {
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: -0.3px;
          }

          .brand-tagline {
            font-size: 13px;
            color: rgba(255,255,255,0.5);
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }

          .brand-body {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 40px 0 20px;
          }

          .brand-headline {
            font-size: 30px;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.25;
            margin-bottom: 16px;
          }

          .brand-headline span {
            color: #ff6a3d;
          }

          .brand-sub {
            font-size: 15px;
            color: rgba(255,255,255,0.6);
            line-height: 1.6;
            max-width: 280px;
          }

          .brand-features {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 32px;
          }

          .brand-feature {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 13px;
            color: rgba(255,255,255,0.65);
          }

          .brand-feature-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #ff6a3d;
            flex-shrink: 0;
          }

          .brand-footer {
            font-size: 11px;
            color: rgba(255,255,255,0.3);
          }

          /* Right panel — auth */
          .auth-panel {
            width: 420px;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 52px 44px;
            flex-shrink: 0;
          }

          .auth-title {
            font-size: 22px;
            font-weight: 700;
            color: #0b1e3d;
            margin-bottom: 6px;
          }

          .auth-subtitle {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 36px;
            line-height: 1.5;
          }

          /* Kinde widget overrides */
          [data-kinde-component-type="kinde-widget"] button,
          button[data-provider] {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 10px !important;
            width: 100% !important;
            padding: 14px 20px !important;
            border-radius: 10px !important;
            font-size: 15px !important;
            font-weight: 500 !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
            border: 1.5px solid #e2e8f0 !important;
            background: #f8fafc !important;
            color: #0b1e3d !important;
          }

          [data-kinde-component-type="kinde-widget"] button:hover,
          button[data-provider]:hover {
            background: #f1f5f9 !important;
            border-color: #cbd5e1 !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
          }

          .auth-divider {
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 24px 0;
          }

          .auth-divider-line {
            flex: 1;
            height: 1px;
            background: #e2e8f0;
          }

          .auth-divider-text {
            font-size: 12px;
            color: #94a3b8;
          }

          .auth-footer {
            margin-top: 32px;
            font-size: 12px;
            color: #94a3b8;
            text-align: center;
            line-height: 1.6;
          }

          .auth-footer a {
            color: #0b4d8c;
            text-decoration: none;
          }

          .auth-footer a:hover {
            text-decoration: underline;
          }

          /* Responsive */
          @media (max-width: 680px) {
            .auth-wrapper {
              flex-direction: column;
              max-width: 420px;
              min-height: unset;
            }
            .brand-panel {
              padding: 32px 28px 28px;
              min-height: unset;
            }
            .brand-body { display: none; }
            .auth-panel {
              width: 100%;
              padding: 36px 28px;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="auth-wrapper">
          {/* Left brand panel */}
          <div className="brand-panel">
            <div className="brand-logo">
              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="10" fill="rgba(255,255,255,0.1)"/>
                <path d="M22 8L28 14H16L22 8Z" fill="#ff6a3d"/>
                <rect x="14" y="14" width="16" height="3" rx="1.5" fill="#ffffff"/>
                <rect x="16" y="18" width="12" height="14" rx="2" fill="rgba(255,255,255,0.9)"/>
                <rect x="18" y="32" width="8" height="3" rx="1.5" fill="#60a5fa"/>
              </svg>
              <div>
                <div className="brand-name">OrdoLux</div>
                <div className="brand-tagline">Legal Practice Management</div>
              </div>
            </div>

            <div className="brand-body">
              <h2 className="brand-headline">
                Practice smarter.<br />
                <span>Never lose time.</span>
              </h2>
              <p className="brand-sub">
                The complete practice management platform built for modern UK law firms.
              </p>
              <div className="brand-features">
                <div className="brand-feature">
                  <div className="brand-feature-dot"></div>
                  Matter-centric time recording
                </div>
                <div className="brand-feature">
                  <div className="brand-feature-dot"></div>
                  Integrated Microsoft 365
                </div>
                <div className="brand-feature">
                  <div className="brand-feature-dot"></div>
                  Conveyancing & probate workflows
                </div>
                <div className="brand-feature">
                  <div className="brand-feature-dot"></div>
                  HMRC SDLT recognised
                </div>
              </div>
            </div>

            <div className="brand-footer">
              © {new Date().getFullYear()} OrdoLux Limited. All rights reserved.
            </div>
          </div>

          {/* Right auth panel */}
          <div className="auth-panel">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
