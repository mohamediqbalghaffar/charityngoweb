# Charity NGO Web 🤝 (Aid Tracking & Approvals Showcase)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-charityngoweb.vercel.app-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://charityngoweb.vercel.app)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Language](https://img.shields.io/badge/Language-Kurdish%20(Sorani)-E63946?style=for-the-badge)](https://charityngoweb.vercel.app)

A modern, comprehensive humanitarian aid management, beneficiary tracking, and donation distribution platform designed for non-governmental organizations (NGOs) and charities. Built with React 19, TypeScript, Tailwind CSS, and Vite with a native Right-to-Left (RTL) interface optimized for Central Kurdish (Sorani).

---

## 🌟 Showcase & Reviewer Notice

> **Note for Reviewers, Recruiters, and Testers:**
> This repository is the **Standalone Showcase Edition** of the Charity NGO Management System.
> 
> 1. **Immediate Exploration (No Login Wall)**: Authentication barriers have been bypassed so testers immediately enter the system as Super Administrator with full permissions.
> 2. **Multi-Role Simulation**: Test how the system looks and behaves for various organizational roles (`Admin`, `Finance Officer`, `Field Officer`, `Volunteer`, `Auditor`) via the role switcher in the top bar.
> 3. **100% Standalone Kurdish Synthetic Mock Data**: Comes pre-loaded with rich, realistic mock datasets (beneficiary families across Kurdistan cities, multi-currency donations in IQD/USD, humanitarian projects, warehouse inventory, financial ledgers, and interactive GIS map coordinates).
> 4. **Safe Local Persistence**: Any edits, aid distributions, or new records created in the browser session are stored in `localStorage` without altering or contacting external databases. A one-click reset button is available in the top bar to revert to baseline mock data.

---

## 🌐 Live Deployment

Explore the live, interactive showcase on Vercel:

👉 **[https://charityngoweb.vercel.app](https://charityngoweb.vercel.app)**

---

## ✨ Key Modules & Capabilities

### 1. 👥 Beneficiaries Management (بەڕێوەبردنی سوودمەندان)
- **9 Comprehensive Case Statuses**:
  - ⏳ `لەژێر لێکۆڵینەوە (Pending Field Investigation)`
  - ✅ `پەسەندکراو بۆ وەرگرتنی هاوکاری (Approved for Aid)`
  - 🚨 `حاڵەتی فریاگوزاری و بەپەلە (Urgent Emergency Case)`
  - 🔒 `سوودمەندی نهێنی و پارێزراو (Confidential Beneficiary)`
  - 🔄 `هاوکاری مانگانە / خولیی بەردەوام (Periodic Aid)`
  - 🎁 `هاوکاری وەرگرتووە (Aided)`
  - ⏸ `ڕاگیراوی کاتی (Temporarily Suspended)`
  - ❌ `ڕەتکراوەتەوە (Rejected)`
  - 📁 `دۆسیەی ئەرشیڤکراو (Archived Case)`
- **Dual Status Visual Architecture**: Preserves both the formal investigation status and cumulative aid distribution badges (`هاوکاریکراو (X)`).
- **Confidential Beneficiary Protection**: Sensitive cases feature security masking, privacy banners, and restricted disclosure.
- **Demographic & Socioeconomic Profiling**: Tracks household providers, primary/secondary income earners, monthly earnings, family size, and need categories (poor, orphan, sick, disabled, student, displaced).
- **Duplicate Prevention**: Real-time cross-validation against duplicate national IDs and phone numbers.
- **Excel Bulk Import/Export**: One-click bulk ingestion of Excel dossiers with Kurdish header detection and validation.
- **Interactive GPS House Pinning**: Exact geographic coordinates tagged for field distribution visits.

### 2. 💰 Donors & Contributions (بەخشەران و کۆمەکەکان)
- **Multi-Category Donors**: Individual donors, corporate partners, and international diaspora organizations.
- **Dual Currency Ledger (IQD & USD)**: Dynamic currency conversions and exchange rate snapshots.
- **Monetary & In-Kind Donations**: Support for cash, bank transfers, FastPay/FIB, and in-kind relief materials (food parcels, heating fuel, blankets, medical equipment).
- **Official Donation Receipts**: Instant receipt generation with verification codes.

### 3. 🎯 Humanitarian Projects (پڕۆژە مرۆییەکان)
- **Holistic Project Lifecycle**: Target budgets, live raised amounts, spent funds, regional coverage, volunteer deployments, and milestone tracking.
- **Automated Financial Reconciliation**: Automatically computes raised vs. spent capital across connected transactions and donation allocations.

### 4. 📦 Warehouse & Inventory (کۆگا و پێداویستییەکان)
- **Regional Warehouses**: Tracks physical stock across Erbil, Sulaymaniyah, Duhok, Halabja, Kirkuk, Garmian, and Zakho.
- **Dual Pricing & Valuation**: Tracks both individual unit costs and total remaining warehouse valuation.
- **Auto-Deducting Aid Distribution**: Seamlessly deducts stock and records corresponding expense transactions when aid is distributed to single or multiple beneficiaries.
- **Low-Stock Alerting**: Visual threshold alerts for critical supplies.

### 5. 💳 Financial Ledgers & Cashflow (ژمێریاری و دارایی)
- **Double-Entry Income & Expense Bookkeeping**: Comprehensive ledger of all cash grants, procurement costs, warehouse overhead, and logistics fees.
- **Dynamic Conversion**: Toggle between Iraqi Dinar (IQD) and US Dollar (USD) views with accurate historical exchange rates.

### 6. 🗺️ Interactive GIS Kurdistan Map (نەخشەی جوگرافی)
- **Leaflet-Powered Regional Map**: Interactive map displaying beneficiary clusters, humanitarian project footprints, and regional warehouse hubs across Kurdistan governorates.

### 7. 🤝 Volunteer Network (تۆڕی خۆبەخشان)
- **Skill-Based Volunteer Directory**: Organizes doctors, lawyers, IT engineers, drivers, and social workers.
- **Hour Tracking & Badges**: Logs service hours, emergency availability, and team assignments.

### 8. 🔍 Audit Trails & Transparency (تۆماری چالاکییەکان)
- **Immutable Activity Logging**: Records every creation, update, deletion, and distribution action with timestamps and user roles.

---

## 🛠️ Built With

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Mapping:** [Leaflet](https://leafletjs.com/)
- **Spreadsheets:** [ExcelJS](https://github.com/exceljs/exceljs) & [xlsx](https://sheetjs.com/)
- **Effects:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- `npm` or `yarn`

### Installation & Local Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohamediqbalghaffar/charityngoweb.git
   cd charityngoweb
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:5173` to explore the application.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Architecture

```
charityngoweb/
├── public/                 # Static assets, fonts, icons
├── src/
│   ├── assets/             # Images and SVG brand marks
│   ├── components/         # Reusable UI components & modals
│   │   ├── Topbar.tsx      # Header, role switcher, notification drawer
│   │   ├── NavigationDock.tsx # Floating liquid navigation dock
│   │   ├── SpotlightModal.tsx # Universal search modal
│   │   ├── LiquidBackground.tsx # Ambient background animation
│   │   └── ...             # Receipt, payment, and security modals
│   ├── context/
│   │   └── AppContext.tsx  # Central state management & LocalStorage persistence
│   ├── data/
│   │   ├── initialData.ts  # Rich Kurdish mock datasets (35+ beneficiaries, etc.)
│   │   └── kurdistanGeoJson.ts # GeoJSON boundaries for Kurdistan region
│   ├── services/
│   │   ├── auth.ts         # User profiles & role definitions
│   │   └── supabase.ts     # Standalone showcase service adapter
│   ├── types/
│   │   └── index.ts        # TypeScript data contracts & models
│   ├── utils/
│   │   ├── excelBeneficiaryUtils.ts # Excel import/export helpers
│   │   └── exchangeRates.ts # Currency conversion & exchange rates
│   ├── views/              # Core application screens
│   │   ├── DashboardView.tsx     # Executive analytics dashboard
│   │   ├── BeneficiariesView.tsx # Beneficiary dossier management
│   │   ├── DonorsView.tsx        # Donors directory & CRM
│   │   ├── ProjectsView.tsx      # Humanitarian campaigns & progress
│   │   ├── InventoryView.tsx     # Warehouse inventory & aid deduction
│   │   ├── FinanceView.tsx       # Dual-currency financial ledger
│   │   ├── VolunteersView.tsx    # Volunteer network & logged hours
│   │   ├── GeoMapView.tsx        # Interactive Leaflet GIS map
│   │   ├── DocumentsView.tsx     # Official NGO documents & licenses
│   │   ├── AuditView.tsx         # Activity audit trail
│   │   └── SettingsView.tsx      # System configuration & preferences
│   ├── App.tsx             # Root layout & view router
│   ├── main.tsx            # React DOM mounting
│   └── index.css           # Tailwind CSS imports & custom typography
├── index.html              # HTML document root with Speda font
├── package.json            # Project manifest
├── vercel.json             # Vercel SPA routing configuration
└── vite.config.ts          # Vite configuration
```

---

## 📄 License

This showcase edition is licensed under the [MIT License](LICENSE).
