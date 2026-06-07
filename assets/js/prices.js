/**
 * KeebForge.in — Centralized Service & Pricing Config
 * =====================================================
 * Edit prices, names, and descriptions here.
 * This file is loaded by index.html (and any future pages).
 *
 * Units:
 *   "sw"   → priced per switch   (uses qty-sw counter)
 *   "stab" → priced per stab     (uses qty-stab counter)
 *   "flat" → flat / fixed price  (qty = 1, always)
 *   "quote"→ no fixed price, goes to "quoted" list
 *
 * price:
 *   - For "sw" / "stab" / "flat": set the number (e.g. 12)
 *   - For a range (e.g. builds): set priceMin + priceMax, leave price: 0
 *   - For "quote": set price: 0
 *
 * flags:
 *   combo: true   → highlighted combo row
 *   popular: true → shows ★ Popular badge
 *   comboReplaces → array of service names this combo deselects when picked
 *   exclusiveWith → array of service names that deselect this when picked
 */

window.KEEBFORGE_PRICES = {

  /* ─────────────────────────────────────────
     SWITCH SERVICES  (per switch)
  ───────────────────────────────────────── */
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
        name: "Durock Films",
        desc: "Reduce wobble, tighter feel",
        price: 7,
      },
      {
        name: "TX Films",
        desc: "Heavy-duty housing stability",
        price: 9,
      },
      {
        name: "Spring Swap & Oil",
        desc: "Your springs, we handle the rest",
        price: 3,
      },
      {
        name: "Switch Stem Tuning",
        desc: "Polish stems, reduce scratchiness",
        price: 5,
      },
      {
        name: "🔥 Complete Mod (Combo)",
        desc: "Lube + Film + Spring Swap",
        price: 20,
        combo: true,
        popular: true,
        comboReplaces: [
          "Krytox 205g0 Lubing",
          "Durock Films",
          "TX Films",
          "Spring Swap & Oil",
          "Switch Stem Tuning",
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────
     STABILIZER SERVICES  (per stabilizer)
  ───────────────────────────────────────── */
  stabServices: {
    label: "Stabilizer Services (per stabilizer)",
    unit: "stab",
    items: [
      {
        name: "Full Stabilizer Service",
        desc: "Disassembly, clean, lube, tune",
        price: 65,
        comboReplaces: ["Wire Balancing Only", "Restore Old Stabilizers"],
      },
      {
        name: "Wire Balancing Only",
        desc: "Eliminate rattle and wobble",
        price: 25,
        exclusiveWith: ["Full Stabilizer Service"],
      },
      {
        name: "Restore Old Stabilizers",
        desc: "Deep clean, back to like-new",
        price: 40,
        exclusiveWith: ["Full Stabilizer Service"],
      },
    ],
  },

  /* ─────────────────────────────────────────
     BUILD & SOLDERING SERVICES
  ───────────────────────────────────────── */
  solderServices: {
    label: "Build & Soldering Services",
    unit: "sw",
    items: [
      {
        name: "Solder Switches",
        desc: "Clean joints on every pin, 60/40 solder",
        price: 7,
        unit: "sw",
      },
      {
        name: "Desolder Switches",
        desc: "Gentle removal & PCB cleanup, no damage",
        price: 12,
        unit: "sw",
      },
      {
        name: "60–65% Keyboard Build",
        desc: "Full assembly + solder",
        price: 0,
        priceMin: 500,
        priceMax: 550,
        unit: "flat",
      },
      {
        name: "TKL Keyboard Build",
        desc: "Full assembly + solder",
        price: 0,
        priceMin: 650,
        priceMax: 800,
        unit: "flat",
      },
      {
        name: "Millmax Socket Install",
        desc: "Precision hotswap conversion",
        price: 18,
        unit: "sw",
        priceLabel: "₹18/SK",
      },
      {
        name: "Hotswap Socket Install / Replace",
        desc: "New install or damaged socket replacement",
        price: 13,
        unit: "sw",
        priceLabel: "₹13/SK",
      },
      {
        name: "Split Keyboard Build",
        desc: "Custom ergonomic split assembly & wiring",
        price: 0,
        unit: "quote",
      },
      {
        name: "PCB Troubleshooting & Repair",
        desc: "Trace shorts, dead keys, component faults",
        price: 0,
        unit: "quote",
      },
    ],
  },

  /* ─────────────────────────────────────────
     CUSTOM PCB & KEYBOARD DESIGN
  ───────────────────────────────────────── */
  customWork: {
    label: "Custom PCB & Keyboard Design (quoted after review)",
    unit: "quote",
    items: [
      {
        name: "Custom PCB Design & Layout",
        desc: "Schematic to routed, DRC-verified layout",
        price: 0,
        unit: "quote",
      },
      {
        name: "PCB Fabrication Support",
        desc: "Gerber files, sourcing & assembly coordination",
        price: 0,
        unit: "quote",
      },
      {
        name: "Full Custom Keyboard Build",
        desc: "Case + PCB + stabs + switches + keycaps, bespoke",
        price: 0,
        unit: "quote",
      },
      {
        name: "Firmware Upload & Testing",
        desc: "QMK/ZMK flashing & full key verification",
        price: 0,
        unit: "quote",
      },
      {
        name: "General Electronics Repair",
        desc: "Component-level diagnosis & repair",
        price: 0,
        unit: "quote",
      },
    ],
  },
};