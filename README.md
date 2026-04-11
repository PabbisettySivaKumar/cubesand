# CubeSand Website

Welcome to the official repository for the **CubeSand** stone crushing and aggregate supply business website. This project is a modern, responsive, and fast brochure website built to give stakeholders and customers a premium digital experience.

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Vanilla CSS (CSS Modules for Component Isolation, `globals.css` for Design System Variables)
- **Language**: TypeScript

## Project Structure
- `src/app/` - Contains all Next.js page routes (`page.tsx`) including Home, About, Products, Infrastructure, Compliance, and Contact.
- `src/components/` - Contains reusable UI components like `NavBar.tsx` and `Footer.tsx` alongside their respective CSS modules.
- `public/` - Contains static assets like generated AI placeholder imagery (`/images/`), and the custom branded `cubesand.ico` and `cubesand.png` files.

---

## 📝 Ongoing Changelog

We are keeping a running log of all adjustments and features added throughout the development process:

### Phase 1: Core Build & Branding
- **Initial Setup**: Bootstrapped Next.js application, purged boilerplate layout, and established the master `RootLayout`.
- **Design System**: Created `globals.css` bringing in the `Inter` font, standardized layout utilities (`.container`, `.grid-responsive`), and configured a premium charcoal and sand color palette.
- **Routing & Pages**: Engineered 6 primary pages mapping to the project PRD:
  - `/` (Home)
  - `/about` (Heritage & Service Regions)
  - `/products` (Types of Aggregates)
  - `/infrastructure` (Crushers & Logistics)
  - `/compliance` (Environment & QA)
  - `/contact` (Interactive Quote Form & Support Data)
- **Component Engineering**: Built `NavBar` (with mobile hamburger toggle) and `Footer` global layout wrappers.
- **Rebranding Phase**: 
  - Overhauled all metadata, text, and titles from "Apex Crushers" to "CubeSand".
  - Connected up verified sales contact numbers (`+91-9562347777`) and email routes (`sufiyan@cubicsglobal.in`).
  - Integrated dynamic WhatsApp chat links across primary CTAs.
- **Visual Assets**:
  - Implemented AI-generated placeholder images for the rock aggregates, crushing plant, and stockyard.
  - Generated and installed a custom 3D stone cube logo (`cubesand.png` and `cubesand.ico`) across all application instances.
- **Optimization**:
  - Fixed Next.js `<Image>` performance warnings by dynamically injecting standard responsive `sizes="(max-width: 768px) 100vw, ..."` configurations on all layout wrappers.
  - Removed outdated unused Vercel/Next templates from the `/public` root.
- **Source Control**: Initialized local git repository and executed the first total project commit.

*(More updates to be appended here as work progresses)*
