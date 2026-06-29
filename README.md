# OrdoLux Kinde Auth UI

Custom authentication page for OrdoLux, built for Kinde's Custom UI feature.

## Structure

```
kindeSrc/
└── environment/
    └── pages/
        ├── layout.tsx          # Main layout (brand panel + auth panel)
        └── (kinde)/
            └── (default)/
                └── page.tsx    # Sign-in page with KindeWidget
```

## Design

- Split layout: OrdoLux brand panel (left) + clean auth panel (right)
- OrdoLux colour palette: deep navy `#0b1e3d`, mid-blue `#0b4d8c`, orange `#ff6a3d`
- Responsive: stacks vertically on mobile
- Microsoft SSO button styled to match OrdoLux design system

## Connect to Kinde

In Kinde dashboard: Design → Custom code → Connect repo → `avigordonol/ordolux-kinde-auth`
