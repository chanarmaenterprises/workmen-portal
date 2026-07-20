# Ravi Enterprises — Operational Control Portal

An integrated enterprise control platform designed for physical field engineering (Core Concrete Cutting, Structural Diamond Drilling, Chemical Anchoring, RCC Breaking) and corporate back-office workflows.

## Technology Stack
- **Structure:** Semantic HTML5
- **Styling:** Vanilla CSS (Glassmorphism design, Slate & Indigo theme, dedicated A4 portrait printing rules)
- **Logic:** Vanilla ES6+ Javascript (state-driven, responsive calculation engines, and interactive spreadsheets)

## Features Included
1. **Workmen's Record & Registration Wizard (Page 1):**
   - 5-stage automated checklist for worker onboarding.
   - Demographics profile master with simulated webcam preview.
   - KYC validation (PAN, Aadhaar, UAN, ESIC check) and localized banking metadata.
   - Clinical Medical Matrix modeled on TATA Projects Limited guidelines.
   - Statutory EPF Form 2 Revised Nominee allocation system (validates that total share equals 100%).
   - Legally-binding Appointment Enrollment Certificate generation.
2. **Chemical Anchor Quantity & Cost Calculator (Page 2):**
   - Volumetric division engine (Steel Dia &le; 10mm &rarr; 2.25 divisor; Steel Dia &gt; 10mm &rarr; 3.00 divisor).
   - Real-time volume, consumable cost, and billing revenue calculation.
   - Glowing Profit/Loss indicators (`.profit-pos` / `.profit-neg`).
3. **Core Cutting Quotation & Invoice Generator (Page 3):**
   - Live editable pricing grid with pre-seeded core diameters (50mm to 300mm).
   - Dynamic Client Registration Suffix Engine (e.g. `RE-001-A` increments site suffixes to `RE-001-B` for existing clients, or assigns new client keys).
   - Auxiliary heavy equipment (Bosch GSH 11 E Breaker) shift-based surcharges.
   - Annexure 'A' contract printing styling (forces page breaks and stretches business addresses to match EXPIRY DATE bounds).
4. **Daily Site Attendance & 40-Operator Mass Grid (Page 4):**
   - 40-operator spreadsheet canvas for quick shift inputs.
   - Absent lockout rule: setting status to "Absent" locks out inputs and resets OT, Travel, Kharchi, Repairs, and JMR to zero.
   - Bi-directional contextual tooling matrix: switches column visibility between Core Cutting and Drilling scopes.
5. **Inventory & Warehouse Ledger (Page 5):**
   - Real-time stock balancing indicator (`Purchases - Dispatched + Returns`).
   - Work Done Loss Audit: sweeps comments for string indicators ("lost", "stolen", "missing", "broken") when marked "Work Done" and blocks restocking, posting a bold red alert.
6. **Financial Reports & Reconciliation (Page 6):**
   - Interactive bank statement reconciliation ledger.
   - Site-wise Cost analysis (excluding payroll advance *Kharchi*).
   - Labor Payroll settlement calculator.
   - Master asset location mapping.
   - Certified JMR Challan logs.
   - Selective export to CSV respecting header search query filters.

## How to Run
1. Open the [index.html](file:///d:/Z-Software/index.html) file in any modern web browser.
2. Navigate through the sidebar panels to operate the different modules of the system.
3. To test printing the quote, go to the **Quotation Generator**, fill out the client details, and click **Trigger Executive Print** or press `Ctrl + P`.
