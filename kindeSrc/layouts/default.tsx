"use server";
import React from "react";

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
    }}>
      <div style={{
        display: "flex",
        width: "100%",
        maxWidth: "960px",
        minHeight: "540px",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
      }}>
        {/* Brand panel */}
        <div style={{
          flex: 1,
          background: "linear-gradient(145deg, #0b1e3d 0%, #0b4d8c 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 40px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "42px", height: "42px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "10px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px",
            }}>⚖️</div>
            <div>
              <div style={{ fontSize: "21px", fontWeight: 700, color: "#fff", letterSpacing: "-0.3px" }}>OrdoLux</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.6px" }}>Legal Practice Management</div>
            </div>
          </div>

          {/* Body */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "36px 0 16px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", lineHeight: 1.28, marginBottom: "14px" }}>
              Practice smarter.<br />
              <span style={{ color: "#ff6a3d" }}>Never lose time.</span>
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, maxWidth: "270px" }}>
              The complete practice management platform built for modern UK law firms.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "28px" }}>
              {["Matter-centric time recording", "Integrated Microsoft 365", "Conveyancing & probate workflows", "HMRC SDLT recognised"].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff6a3d", flexShrink: 0, display: "inline-block" }}></span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)" }}>© 2026 OrdoLux Limited. All rights reserved.</div>
        </div>

        {/* Auth panel */}
        <div style={{
          width: "420px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "52px 44px",
          flexShrink: 0,
        }}>
          <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#0b1e3d", marginBottom: "6px" }}>Welcome back</h1>
          <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "32px", lineHeight: 1.55 }}>
            Sign in using your organisation's Microsoft credentials.
          </p>
          {props.children}
          <div style={{ marginTop: "28px", fontSize: "11px", color: "#94a3b8", textAlign: "center", lineHeight: 1.6 }}>
            By signing in you agree to OrdoLux's{" "}
            <a href="https://ordolux.co.uk/privacy" style={{ color: "#0b4d8c" }}>Privacy Policy</a>
            {" "}and{" "}
            <a href="https://ordolux.co.uk/terms" style={{ color: "#0b4d8c" }}>Terms of Service</a>.
          </div>
        </div>
      </div>
    </div>
  );
};
