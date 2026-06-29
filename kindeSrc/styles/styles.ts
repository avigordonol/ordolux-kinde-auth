const vars = {
  baseFontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  buttonPrimaryBackgroundColor: "#0b4d8c",
  buttonPrimaryColor: "#ffffff",
  buttonBorderRadius: "10px",
  buttonSecondaryBackgroundColor: "#ffffff",
  buttonSecondaryBorderWidth: "1.5px",
  buttonSecondaryBorderColor: "#e2e8f0",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "10px",
  controlSelectTextBorderRadius: "10px",
} as const;

export const getStyles = (): string => `
  :root {
    --kinde-base-font-family: ${vars.baseFontFamily};
    --kinde-button-primary-background-color: ${vars.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${vars.buttonPrimaryColor};
    --kinde-button-border-radius: ${vars.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${vars.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${vars.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${vars.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${vars.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${vars.buttonSecondaryBorderRadius};
    --kinde-control-select-text-border-radius: ${vars.controlSelectTextBorderRadius};
  }

  body {
    background: #0b1e3d !important;
    font-family: ${vars.baseFontFamily};
  }
`;
