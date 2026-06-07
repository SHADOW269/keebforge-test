# KeebForge.in — Portfolio & Custom Keyboard Architecture

A high-performance, dark-themed responsive storefront and price estimation engine tailored for electronics engineering and premium custom mechanical keyboard modifications.

---

## 🛠️ Architecture Overview

The system is engineered as a lightweight, static multi-page ecosystem designed for instant load times, high-contrast readability under complex graphic states, and frictionless order routing.

├── index.html               # Main Landing & Cinematic Interactive Portfolio
├── order/
│   └── index.html           # Dynamic Price Estimator & Client Validation Form
├── thanks/
│   └── index.html           # Transaction Success Confirmation Screen
└── assets/
├── js/
│   └── prices.js        # Centralized Global Pricing Object Configuration
└── frames/
└── frame_0001.webp  # WebP Pre-rendered Cinematic Background Assets


---

## 💎 Key Production Features

* **Cinematic Frame Interpolation:** The landing page utilizes a customized linear-interpolated (`LERP`) HTML5 Canvas rendering loop synchronized to structural viewport scroll percentages, scrolling seamlessly through `207` standalone WebP asset frames.
* **Centralized Single-Source Pricing:** Both the portfolio views and the client data sheets draw flat numbers, ranges, and structures dynamically from a unified global script token definition.
* **High-Contrast Color Profiles:** Custom-tuned palette rules (`--t1`, `--t2`, `--t3`) guarantee perfect typography parsing ($AA$ / $AAA$ compliance) over complex translucent layers and purple/pink moving canvases.
* **Frictionless Order Form Rules:** Integrates real-time price summation math, complete with complex automated checkbox logic that handles exclusive modifiers and bundled packages seamlessly.

---

## ⚙️ Configuration Module (`/assets/js/prices.js`)

To mutate service options, price structures, range metrics, or custom layout text, update the centralized `window.KEEBFORGE_PRICES` object instance. 

### Data Properties Configuration
* `unit`: Sets the dynamic evaluation scope (`"sw"` = per switch, `"stab"` = per stabilizer, `"flat"` = fixed sum, `"quote"` = custom estimation analysis).
* `combo: true`: Triggers high-contrast layout grouping background modifiers.
* `popular: true`: Spawns the custom built alignment badge framework (`★ Popular`).
* `comboReplaces`: String arrays defining target names automatically unchecked when selecting complex combination bundles.

### Object Properties Structure Example
```javascript
window.KEEBFORGE_PRICES = {
  switchServices: {
    label: "Switch Services (per switch)",
    unit: "sw",
    items: [
      {
        name: "Krytox 205g0 Lubing",
        desc: "Premium lube for buttery feel",
        price: 12,
      },
      {
        name: "🔥 Complete Mod (Combo)",
        desc: "Lube + Film + Spring Swap",
        price: 20,
        combo: true,
        popular: true,
        comboReplaces: ["Krytox 205g0 Lubing", "Durock Films"],
      }
    ]
  }
};