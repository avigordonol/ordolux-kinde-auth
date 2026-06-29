import { KindeWidget } from "@kinde/infrastructure";

export default function SignInPage() {
  return (
    <>
      <h1 className="auth-title">Welcome back</h1>
      <p className="auth-subtitle">
        Sign in to your OrdoLux account using your organisation's Microsoft credentials.
      </p>

      <KindeWidget />

      <div className="auth-footer">
        By signing in you agree to OrdoLux's{" "}
        <a href="https://ordolux.co.uk/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="https://ordolux.co.uk/terms" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>.
      </div>
    </>
  );
}
