# Design System Document

## 1. Overview & Creative North Star

### The Creative North Star: "The Cartographic Engine"
This design system is built to mirror the precision, depth, and innovation of high-scale road infrastructure and telemetry. It moves beyond a static database interface to become a living, breathing digital map. We avoid "standard" templates by embracing **Atmospheric Depth**—a design philosophy where the UI feels like a sophisticated heads-up display (HUD) layered over a vast data landscape.

By utilizing intentional asymmetry, overlapping high-tech elements, and an editorial approach to typography, we create an experience that feels authoritative yet visionary. The goal is to convey the complexity of global mapping through a lens of extreme clarity and premium execution.

---

## 2. Colors

The color palette is rooted in the deep obsidian and navy of nighttime infrastructure, punctuated by high-energy signals.

### Tonal Foundation
- **Background (`#0d1320`)**: The primary canvas. All layouts start here to maintain a focused, low-light environment.
- **Surface Tiers**: Use `surface-container-lowest` (`#080e1b`) to `surface-container-highest` (`#2f3543`) to create architectural hierarchy. 

### Accent Strategy
- **Primary (`#aec6ff`)**: Used for core data highlights and navigational anchors.
- **Secondary (`#4ddf9b`)**: Specifically reserved for "Active" states, telemetry "Go" signals, and successful data validation.
- **Tertiary (`#9ecaff`)**: Used for secondary telemetry and interactive utility elements.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for defining sections. Structure must be achieved through **Background Shifts**.
*   **Example:** A `surface-container-low` data panel should sit directly on a `surface` background. The change in hex value provides the boundary, creating a cleaner, more sophisticated transition.

### The "Glass & Gradient" Rule
To elevate the UI from "flat" to "high-tech," floating elements (modals, dropdowns, navigation rails) should utilize **Glassmorphism**.
*   **Implementation:** Use a semi-transparent `surface-container` color with a `backdrop-blur` of 12px-20px. 
*   **Signature Textures:** Apply subtle linear gradients from `primary` to `primary-container` on high-level CTAs to simulate the glow of an illuminated dashboard.

---

## 3. Typography

The typography system uses **Inter** almost exclusively to maintain a clean, modernist aesthetic that prioritizes legibility at high data densities.

- **Display (Large/Medium)**: Used for high-impact editorial statements. Tracking should be set to -2% to give headlines a "tight," engineered feel.
- **Headline & Title**: These serve as the "road signs" of the interface. Use `headline-sm` for card titles to ensure authority without clutter.
- **Body (Medium/Large)**: Optimized for long-form data descriptions. Ensure line height is generous (1.5x) to prevent "data fatigue."
- **Label (Medium/Small)**: Specifically for telemetry readouts and metadata. These are often used in uppercase with a +5% letter spacing to evoke a technical, coded look.

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering** and **Ambient Light**.

### The Layering Principle
Depth is achieved by "stacking" the surface scale.
1.  **Level 0 (Base):** `surface`
2.  **Level 1 (Sections):** `surface-container-low`
3.  **Level 2 (Interactive Cards):** `surface-container-high`
4.  **Level 3 (Floating HUDs):** `surface-container-highest` with Glassmorphism.

### Ambient Shadows
When an element must float (e.g., a data tooltip), use a shadow tinted with the `on-surface` color (`#dde2f5`) at 4-6% opacity. Blur values should be high (20px+) to create a soft, natural lift rather than a harsh cutout.

### The "Ghost Border" Fallback
If accessibility requirements demand a container boundary, use a **Ghost Border**: the `outline-variant` token at 15% opacity. This provides a faint "tech-line" guide without breaking the tonal flow of the dark theme.

---

## 5. Components

### Buttons
- **Primary**: A solid `primary` fill with `on-primary` text. Corners use the `md` (0.375rem) radius for a "precision-tooled" look.
- **Secondary**: A `ghost border` container with `primary` text.
- **Action**: For map-based actions, use a `surface-container-high` glass base with a `secondary` (cyan) icon.

### Cards
- **Construction**: Strictly no dividers. Use `spacing.8` (2rem) of vertical white space to separate the header from the body.
- **Hover State**: Transition the background from `surface-container-low` to `surface-container-high` and slightly increase the `outline-variant` opacity.

### Mapping Inputs & Telemetry Fields
- **Input Fields**: Use `surface-container-lowest` as the field fill. The active state is signaled by a `primary` ghost border.
- **Telemetry Chips**: Small, pill-shaped (`full` roundedness) indicators using `secondary-container` for active data streams.

### Data Visualization (Specific to Mapping)
- **The HUD List**: Lists of coordinates or road assets should use alternating background shifts (`surface` and `surface-container-low`) instead of lines.
- **The "Pulse" Indicator**: For live data sources, a 4px circular element using `secondary` with a CSS ripple animation.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts where text is aligned to a different grid than the background images to create "editorial" tension.
*   **Do** use the full range of `surface-container` tokens to create a sense of "nested technology."
*   **Do** use high-quality, monochromatic icons with a 1.5px stroke weight to match the Inter typeface.

### Don't
*   **Don't** use pure black (`#000000`) or pure white borders. They break the atmospheric depth of the deep navy theme.
*   **Don't** use standard "Material" shadows. They feel like paper, whereas this system should feel like glass and light.
*   **Don't** use dividers or "HR" tags. If elements feel too close, increase the spacing scale rather than adding a line.
*   **Don't** use vibrant colors for non-interactive elements. Accents must be earned through functionality or critical data status.