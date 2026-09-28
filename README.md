# TUVEES™ BuyHub 🍊

[![Platform](https://shields.io)](https://github.io)
[![Hosting](https://shields.io)](https://github.io)
[![Framework](https://shields.io)](https://github.io)

An elite, high-performance **Progressive Web App (PWA)** acting as an ultra-lightweight Affiliate Showcase Storefront. Designed with a mobile-first, media-centric layout, this platform eliminates traditional database and checkout system latency to deliver instant, standalone application speeds across desktop, tablet, and smartphone ecosystems.

🔗 **Live Production Link:** [https://github.io](https://github.io)

---

## 🚀 Core Features & Architectural Highlights

*   **📱 Native Multi-Device Installation (PWA):** Configured via an optimized asset service matrix (`manifest.json`) and background script engine (`sw.js`). Installs natively onto iOS, Android, and Desktop environments with standalone window viewing capabilities, completely removing browser URL bars.
*   **🌓 State-Retaining Theme Architecture:** Engineered a lightweight, zero-dependency Dark/Light layout toggle utilizing CSS custom variables, modern data-attributes (`data-theme`), and client-side web memory configuration storage (`localStorage`) to guarantee user preference persistence across sessions.
*   **🎛️ Zero-Latency Category Filtering:** Built an instant, client-side item sorting pipeline using Vanilla JavaScript DOM manipulation. Provides smooth micro-animations during tag changes without requiring tedious external server queries or page refreshes.
*   **🔋 Intersection Observer Media Optimization:** Features a custom asynchronous rendering loop that tracks viewports. It programmatically triggers looping high-definition product video cards *only* when they cross the user's active viewport space, heavily cutting mobile processing drain, bandwidth usage, and battery consumption.
*   **🎨 Vector Graphic Efficiency:** Built entirely using native inline SVG code blocks. Keeps initial structural layout data footprints exceptionally minimal to completely eliminate layout shifting (CLS) and maximize Lighthouse performance scores.

---

## 🛠️ Tech Stack & Tooling

*   **Languages:** HTML5, CSS3 (Modern Flexbox / Grid Matrix), JavaScript (ES6+ Web APIs)
*   **Core APIs:** Service Workers API, Web Storage API, Intersection Observer API
*   **Branding & Asset Assets:** Custom Inline SVG Vector Framework
*   **IDE & Version Control:** VS Code, Git CLI Ecosystem
*   **CI/CD Infrastructure:** Automated Deployment Pipeline via GitHub Pages Secure HTTPS Tier

---

## 📂 Project Directory Structure

```text
tuvees-buyhub/
├── assets/
│   ├── icon-192.svg          # High-performance mobile grid branding icon
│   └── icon-512.svg          # Ultra-res splash screen logo vector asset
├── app.js                    # UI Interaction Core, Local Storage Engine & Filter Logic
├── index.html                # Modern semantic structure layout & inline SVG injection
├── manifest.json             # Progressive Web Application settings registry 
├── styles.css                # Fluid multi-aspect ratio rules & theme parameters
└── sw.js                     # Advanced caching layer & service worker execution script
```

---

## ⚙️ Local Development Setup & Deployment Staging

To run this platform and modify or scale out the product selection cards locally:

1. Clone the repository down to your computer environment:
   ```bash
   git clone https://github.com
   ```
2. Open the directory tree using **VS Code**:
   ```bash
   cd tuvees-buyhub && code .
   ```
3. Boot up the local development web server using the **Live Server Extension** in VS Code to ensure smooth, secure cross-origin execution hooks.
4. Scale up inventory components by adding a `data-category` block into the `index.html` layout matrix.

---

## ⚖️ Production Licensing & Credit Attribution

Architected, designed, and deployed by **LogicMinds Technologies**.  
All rights reserved © 2026 **TUVEES™ BuyHub**.
