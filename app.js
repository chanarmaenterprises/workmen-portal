// --------------------------------------------------------------------------
// 1. DATA STORES & APP STATE
// --------------------------------------------------------------------------

// Pre-seeded database of 40 active field operators
const initialWorkers = [
  { id: 101, name: "Raj Pratham", role: "Operator - Core Cutting", wage: 950, site: "Powai Metro Front", status: "Present" },
  { id: 102, name: "Suresh Kumar", role: "Technician - Chemical Anchoring", wage: 1200, site: "L&T Powai Site", status: "Present" },
  { id: 103, name: "Vijay Patel", role: "Operator - Diamond Drilling", wage: 950, site: "GHP Bungalow", status: "Present" },
  { id: 104, name: "Dinesh Sharma", role: "Rig Rigger / Concrete Breaker", wage: 600, site: "Powai Metro Front", status: "Present" },
  { id: 105, name: "Anil Patil", role: "Site Supervisor", wage: 1200, site: "L&T Powai Site", status: "Present" },
  { id: 106, name: "Mahesh Shinde", role: "Operator - Core Cutting", wage: 950, site: "GHP Bungalow", status: "Present" },
  { id: 107, name: "Ramesh Gowda", role: "Rig Rigger / Concrete Breaker", wage: 600, site: "Powai Metro Front", status: "Present" },
  { id: 108, name: "Vikram Rathore", role: "Operator - Diamond Drilling", wage: 950, site: "L&T Powai Site", status: "Present" },
  { id: 109, name: "Sanjay Dutta", role: "Technician - Chemical Anchoring", wage: 1200, site: "GHP Bungalow", status: "Present" },
  { id: 110, name: "Sunil Yadav", role: "Operator - Core Cutting", wage: 950, site: "Powai Metro Front", status: "Present" },
  { id: 111, name: "Amit Mishra", role: "Rig Rigger / Concrete Breaker", wage: 600, site: "L&T Powai Site", status: "Present" },
  { id: 112, name: "Karan Johar", role: "Operator - Diamond Drilling", wage: 950, site: "GHP Bungalow", status: "Present" },
  { id: 113, name: "Rahul Deshmukh", role: "Technician - Chemical Anchoring", wage: 1200, site: "Powai Metro Front", status: "Present" },
  { id: 114, name: "Pooja Hegde", role: "Site Supervisor", wage: 1200, site: "L&T Powai Site", status: "Present" },
  { id: 115, name: "Sachin More", role: "Operator - Core Cutting", wage: 950, site: "GHP Bungalow", status: "Present" },
  { id: 116, name: "Nitin Gadkari", role: "Rig Rigger / Concrete Breaker", wage: 600, site: "Powai Metro Front", status: "Present" },
  { id: 117, name: "Devendra F", role: "Operator - Diamond Drilling", wage: 950, site: "L&T Powai Site", status: "Present" },
  { id: 118, name: "Ajit Pawar", role: "Technician - Chemical Anchoring", wage: 1200, site: "GHP Bungalow", status: "Present" },
  { id: 119, name: "Eknath Shinde", role: "Operator - Core Cutting", wage: 950, site: "Powai Metro Front", status: "Present" },
  { id: 120, name: "Sharad Pawar", role: "Site Supervisor", wage: 1200, site: "L&T Powai Site", status: "Present" },
  { id: 121, name: "Uddhav T", role: "Operator - Diamond Drilling", wage: 950, site: "GHP Bungalow", status: "Present" },
  { id: 122, name: "Raj Thackeray", role: "Rig Rigger / Concrete Breaker", wage: 600, site: "Powai Metro Front", status: "Present" },
  { id: 123, name: "Aditya T", role: "Operator - Core Cutting", wage: 950, site: "L&T Powai Site", status: "Present" },
  { id: 124, name: "Prithviraj C", role: "Technician - Chemical Anchoring", wage: 1200, site: "GHP Bungalow", status: "Present" },
  { id: 125, name: "Ashok Chavan", role: "Site Supervisor", wage: 1200, site: "Powai Metro Front", status: "Present" },
  { id: 126, name: "Narayan Rane", role: "Operator - Diamond Drilling", wage: 950, site: "L&T Powai Site", status: "Present" },
  { id: 127, name: "Sanjay Raut", role: "Rig Rigger / Concrete Breaker", wage: 600, site: "GHP Bungalow", status: "Present" },
  { id: 128, name: "Devendra P", role: "Operator - Core Cutting", wage: 950, site: "Powai Metro Front", status: "Present" },
  { id: 129, name: "Prakash A", role: "Technician - Chemical Anchoring", wage: 1200, site: "L&T Powai Site", status: "Present" },
  { id: 130, name: "Ramdas Athawale", role: "Rig Rigger / Concrete Breaker", wage: 600, site: "GHP Bungalow", status: "Present" },
  { id: 131, name: "Chhagan Bhujbal", role: "Operator - Diamond Drilling", wage: 950, site: "Powai Metro Front", status: "Present" },
  { id: 132, name: "Dilip Walse", role: "Site Supervisor", wage: 1200, site: "L&T Powai Site", status: "Present" },
  { id: 133, name: "Jayant Patil", role: "Operator - Core Cutting", wage: 950, site: "GHP Bungalow", status: "Present" },
  { id: 134, name: "Balasaheb Thorat", role: "Rig Rigger / Concrete Breaker", wage: 600, site: "Powai Metro Front", status: "Present" },
  { id: 135, name: "Radhakrishna V", role: "Operator - Diamond Drilling", wage: 950, site: "L&T Powai Site", status: "Present" },
  { id: 136, name: "Vijay Wadettiwar", role: "Technician - Chemical Anchoring", wage: 1200, site: "GHP Bungalow", status: "Present" },
  { id: 137, name: "Nana Patole", role: "Site Supervisor", wage: 1200, site: "Powai Metro Front", status: "Present" },
  { id: 138, name: "Sudhir Mungantiwar", role: "Operator - Core Cutting", wage: 950, site: "L&T Powai Site", status: "Present" },
  { id: 139, name: "Chandrakant Patil", role: "Rig Rigger / Concrete Breaker", wage: 600, site: "GHP Bungalow", status: "Present" },
  { id: 140, name: "Girish Mahajan", role: "Operator - Diamond Drilling", wage: 950, site: "Powai Metro Front", status: "Present" }
];

// Active State Cache
let AppState = {
  workers: [...initialWorkers],
  clients: [
    { id: "CL-001", name: "Acme Infrastructure & Developers Ltd", gstin: "27AACCA1209D1Z0", address: "Bandra East, Mumbai", suffixes: ["A"] },
    { id: "CL-002", name: "Larsen & Toubro Core Division", gstin: "27AABCL8820E2ZX", address: "Gate 1, Saki Vihar Road, Powai, Mumbai", suffixes: ["A"] },
    { id: "CL-003", name: "Tata Projects Powai Site", gstin: "27AABCT5512F1ZY", address: "Tata Hangar Site, Powai, Mumbai", suffixes: ["A", "B"] }
  ],
  inventory: [
    { id: "TRN-1001", brand: "Hilti RE 500 Foil 500ml", direction: "Inward", qty: 200, uom: "Foils", operator: "Main Warehouse", remarks: "Master Purchase", status: "Active" },
    { id: "TRN-1002", brand: "Bosch SDS Hammer Drill Machine", direction: "Inward", qty: 20, uom: "Nos", operator: "Main Warehouse", remarks: "Master Purchase", status: "Active" },
    { id: "TRN-1003", brand: "Rig Stands Core Rig Base", direction: "Inward", qty: 15, uom: "Nos", operator: "Main Warehouse", remarks: "Master Purchase", status: "Active" },
    { id: "TRN-1004", brand: "Diamond Core Bit 100mm Retipped", direction: "Inward", qty: 50, uom: "Nos", operator: "Main Warehouse", remarks: "Master Purchase", status: "Active" },
    { id: "TRN-1005", brand: "Water Pump Manual Nose", direction: "Inward", qty: 10, uom: "Nos", operator: "Main Warehouse", remarks: "Master Purchase", status: "Active" }
  ],
  overheads: [
    { id: "OH-001", category: "Shop Maintenance", amount: 4500, site: "Main Office", date: "24/06/2026" },
    { id: "OH-002", category: "Chaiwallah Tea Services", amount: 1200, site: "Powai Metro Front", date: "24/06/2026" },
    { id: "OH-003", category: "Garland Expenses", amount: 500, site: "Main Office", date: "24/06/2026" }
  ],
  salesInvoices: [
    { ref: "RE-2026-QT088", clientName: "Acme Infrastructure & Developers Ltd", site: "Bandra Highway Bypass", amount: 35400, reconciled: false },
    { ref: "RE-2026-QT089", clientName: "Tata Projects Powai Site", site: "Metro Front - Tunnel A", amount: 14750, reconciled: false },
    { ref: "RE-2026-QT090", clientName: "L&T Core Division", site: "Flyover Junction", amount: 78500, reconciled: false }
  ],
  bankStatements: [
    { id: "DEP-9901", description: "NEFT FROM ACME INFRASTRUCTURE", amount: 35400, reconciled: false },
    { id: "DEP-9902", description: "RTGS CHG: TATA PROJECTS CORP DEPOSIT", amount: 14750, reconciled: false },
    { id: "DEP-9903", description: "UPI PAYMENT RAJESH GROUP CORE", amount: 8000, reconciled: false }
  ],
  activeStage: 1,
  currentReport: "report-site-ledger"
};

// Persistent Shift Logs & Modal states
let DailyShiftLogs = JSON.parse(localStorage.getItem("chanarma_daily_shift_logs")) || {};
let LogisticsHistory = JSON.parse(localStorage.getItem("chanarma_logistics_history")) || [];
let ChallansHistory = JSON.parse(localStorage.getItem("chanarma_challans_history")) || [];

// Tool Presets Configuration depending on Work Type
const TOOL_PRESETS = {
  "Core Cutting": ["Pump", "Stand", "Machine", "Handle", "Wire(mtr)", "Hammer", "Trirod"],
  "Drilling & Grouting": ["Chem Foils", "Cassette", "Gun Machine", "Blower", "DM 30mm"],
  "Pile Breaking": ["Chipping Hammer", "Compressor Hose", "Sledge Hammer", "Points"],
  "Breaker with Operator": ["Breaker Heavy", "Breaker Light", "Chisels"],
  "RCC Cutting": ["Diamond Blade", "Water System", "Power Cable", "Safeties"]
};

// Active editing modal trackers
let tempToolConfig = {}; 
let tempJmrChallan = null;

// --------------------------------------------------------------------------
// 2. BOOTSTRAPPING & DOM EVENT LISTENERS
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initWizardTimeline();
  initChemicalAnchorCalculator();
  initQuotationAutocomplete();
  
  // Set default operations date picker to today
  const picker = document.getElementById("op-date-picker");
  if (picker) {
    const todayStr = new Date().toISOString().substring(0, 10);
    picker.value = todayStr;
  }
  
  initHubDropdowns();
  loadDateShiftLogs(picker ? picker.value : new Date().toISOString().substring(0, 10));
  updateInventoryDashboard();
  renderInventoryTable();
  renderReconMatcher();
  renderReportView();
  
  // File upload trigger simulation
  document.getElementById("workman-photo-input").addEventListener("change", handlePhotoUpload);
});

// Admin Profile Settings Toggle
function toggleProfileSettings() {
  // Navigate to profile/company details page
  document.querySelectorAll(".nav-sub-item").forEach(i => i.classList.remove("active"));
  document.querySelectorAll(".panel-view").forEach(p => p.classList.remove("active"));
  
  const panel = document.getElementById("page-company-details");
  if (panel) panel.classList.add("active");
  
  // Find and highlight the company details nav item
  document.querySelectorAll(".nav-sub-item").forEach(item => {
    if (item.getAttribute("data-target") === "page-company-details") {
      item.classList.add("active");
    }
  });

  // Update header
  const titleEl = document.getElementById("current-page-title");
  const descEl = document.getElementById("current-page-desc");
  titleEl.innerText = "My Company Details";
  descEl.innerText = "Manage company name, address, GSTIN, PAN, bank details, and letterhead settings.";
}

// Top Profile Dropdown Handler
function toggleTopProfileDropdown(event) {
  event.stopPropagation();
  const dropdown = document.getElementById("admin-top-dropdown");
  if (dropdown) {
    dropdown.classList.toggle("open");
  }
}

// Global click handler to close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("admin-top-dropdown");
  if (dropdown && !e.target.closest(".admin-top-profile")) {
    dropdown.classList.remove("open");
  }
});

// Configure Top Profile Dropdown item navigation clicks
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("admin-top-dropdown");
  if (dropdown) {
    const items = dropdown.querySelectorAll(".dropdown-item");
    // Item 1: Inventory Overview -> Inventory Administration page
    items[0].addEventListener("click", () => {
      document.querySelector('[data-target="page-inventory"]').click();
      dropdown.classList.remove("open");
    });
    // Item 2: Operator Wages -> Operator page
    items[1].addEventListener("click", () => {
      document.querySelector('[data-target="page-workmen"]').click();
      dropdown.classList.remove("open");
    });
    // Item 3: Clients Details -> Client Registration page
    items[2].addEventListener("click", () => {
      document.querySelector('[data-target="page-reg-client"]').click();
      dropdown.classList.remove("open");
    });
  }
});

// Navigation Handling
function initNavigation() {
  // --- Page title & description map ---
  const pageTitles = {
    "page-quotation": ["Quotation Generator & Invoicing Engine", "Core diameter pricing matrices, client site indexing, and print-optimized corporate invoices."],
    "page-purchase": ["Purchase Entry", "Record and manage vendor purchase orders and goods received notes."],
    "page-sales-invoice": ["Sales Invoice", "Generate and manage outgoing sales invoices to clients."],
    "page-credit-note": ["Credit Note", "Issue credit notes for returns, rate adjustments, and overpayments."],
    "page-debit-note": ["Debit Note", "Issue debit notes for undercharges, penalties, and additional claims."],
    "page-work-completion": ["Work Completion Certificate", "Generate project completion certificates for site handover and billing."],
    "page-workmen": ["Operator Registration Wizard", "Stage-wise industrial operator induction, medical validation, and EPF nominating console."],
    "page-reg-client": ["Client Registration", "Register new clients, assign GSTIN, and manage client project mappings."],
    "page-reg-site": ["Site Registration", "Register project sites, assign location codes, and map clients to sites."],
    "page-overview": ["Overview Dashboard", "Enterprise-wide KPIs, revenue summary, and operational status at a glance."],
    "page-chemical": ["Chemical Anchoring Calculation", "Product catalogue, volumetric estimation worksheet, and client pricing matrix with variance analysis."],
    "page-inventory": ["Inventory Administration", "Master warehouse balancing equations and automated loss/theft verification checks."],
    "page-finance": ["Expense by Admins", "Bank statement cross-matching ledger, overhead expense registers, and site analytical reports."],
    "page-company-details": ["My Company Details", "Manage company name, address, GSTIN, PAN, bank details, and letterhead settings."],
    "page-id-operators": ["ID of Operators", "Generate and manage operator identity cards with photo, skills, and site assignments."],
    "page-pf-details": ["PF Details", "View and manage Provident Fund contribution details for all registered operators."],
    "page-home": ["Home Page — Operational Command Center", "Active site status, site costing summaries, remaining work pipelines, and active admin tasks."],
    "page-entry-bills": ["Sales Invoice Received — Entry Log", "Record incoming vendor bills, invoices, and payment obligations across project sites."],
    "page-entry-cash": ["Cash Received — Entry Log", "Track cash payments received from clients, advances, part payments, and full settlements."],
    "page-entry-cheque": ["Cheque Received — Entry Log", "Log cheque receipts with bank details, cheque dates, deposit status, and clearance tracking."],
    "page-entry-newwork": ["Work Order Record / New Work — Entry Log", "Register incoming work orders, client enquiries, site locations, and estimated project values."],
    "page-attendance": ["Operator Schedule — Daily Shift & Asset Tracker", "40-operator mass entry canvas, absent cell lockout, and task-specific tooling matrix toggles."]
  };

  // --- Accordion group header toggle ---
  document.querySelectorAll(".nav-group-header").forEach(header => {
    header.addEventListener("click", () => {
      const groupId = header.getAttribute("data-group");
      const body = document.getElementById(groupId);
      if (!body) return;
      const isOpen = body.classList.contains("open");
      if (isOpen) {
        body.classList.remove("open");
        header.classList.add("collapsed");
      } else {
        body.classList.add("open");
        header.classList.remove("collapsed");
      }
    });
  });

  // --- Sub-item click → switch pages ---
  document.querySelectorAll(".nav-sub-item").forEach(item => {
    item.addEventListener("click", () => {
      // Clear all active states
      document.querySelectorAll(".nav-sub-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const target = item.getAttribute("data-target");
      const reportId = item.getAttribute("data-report");

      if (target) {
        // Switch the visible panel
        document.querySelectorAll(".panel-view").forEach(p => p.classList.remove("active"));
        const panel = document.getElementById(target);
        if (panel) panel.classList.add("active");

        // Update top header title & description
        const titleEl = document.getElementById("current-page-title");
        const descEl = document.getElementById("current-page-desc");
        const titleData = pageTitles[target];
        if (titleData) {
          titleEl.innerText = titleData[0];
          descEl.innerText = titleData[1];
        }

        // Refresh home elements if navigating to Home
        if (target === "page-home") {
          renderHomePage();
        }

        // If this is a report sub-item, also switch the report view
        if (reportId) {
          const selector = document.getElementById("report-selector");
          if (selector) {
            selector.value = reportId;
            if (typeof switchReportView === "function") switchReportView(reportId);
          }
        }
      }
    });
  });
}

// Helper for displaying selected file name
function handleFileSelected(input, statusId) {
  const statusEl = document.getElementById(statusId);
  if (input.files && input.files.length > 0) {
    statusEl.innerHTML = `<i class="fa-solid fa-file-circle-check" style="color:var(--color-emerald);"></i> ${input.files[0].name}`;
  } else {
    statusEl.innerText = "No file";
  }
}

// Present Address copy logic
function togglePresentAddressCopy(checked) {
  const presentBlock = document.getElementById("present-address-fields-block");
  const inputs = presentBlock.querySelectorAll("input");
  
  if (checked) {
    // Hide and copy permanent to present
    presentBlock.style.display = "none";
    inputs.forEach(input => input.removeAttribute("required"));
    
    document.getElementById("workman-pres-line").value = document.getElementById("workman-perm-line").value;
    document.getElementById("workman-pres-district").value = document.getElementById("workman-perm-district").value;
    document.getElementById("workman-pres-state").value = document.getElementById("workman-perm-state").value;
    document.getElementById("workman-pres-pin").value = document.getElementById("workman-perm-pin").value;
  } else {
    // Show and clear
    presentBlock.style.display = "flex";
    inputs.forEach(input => input.setAttribute("required", "true"));
    
    document.getElementById("workman-pres-line").value = "";
    document.getElementById("workman-pres-district").value = "";
    document.getElementById("workman-pres-state").value = "";
    document.getElementById("workman-pres-pin").value = "";
  }
}

// Dynamic qualifications row management
function addEduRow() {
  const tbody = document.querySelector("#edu-history-table tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="text" required placeholder="e.g. 10th / SSC / ITI" style="width:100%;"></td>
    <td><input type="number" required placeholder="YYYY" min="1970" max="2026" style="width:100%;"></td>
    <td><input type="text" required placeholder="e.g. Maharashtra Board" style="width:100%;"></td>
    <td><input type="text" required placeholder="Location" style="width:100%;"></td>
    <td><button type="button" class="btn btn-danger btn-sm" onclick="removeEduRow(this)"><i class="fa-solid fa-trash"></i></button></td>
  `;
  tbody.appendChild(tr);
}

function removeEduRow(button) {
  const tbody = document.querySelector("#edu-history-table tbody");
  if (tbody.rows.length > 1) {
    button.closest("tr").remove();
  } else {
    alert("Please maintain at least one educational entry.");
  }
}

// Dynamic work experience row management
function addExpRow() {
  const tbody = document.querySelector("#exp-history-table tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="text" required placeholder="Company Name" style="width:100%;"></td>
    <td><input type="text" required placeholder="Site Location" style="width:100%;"></td>
    <td><input type="text" required placeholder="Designation" style="width:100%;"></td>
    <td><input type="number" required placeholder="Monthly Wage" style="width:100%;"></td>
    <td><button type="button" class="btn btn-danger btn-sm" onclick="removeExpRow(this)"><i class="fa-solid fa-trash"></i></button></td>
  `;
  tbody.appendChild(tr);
}

function removeExpRow(button) {
  const tbody = document.querySelector("#exp-history-table tbody");
  if (tbody.rows.length > 1) {
    button.closest("tr").remove();
  } else {
    alert("Please maintain at least one work experience entry.");
  }
}

// Age calculator from DOB
function calculateAgeFromDOB() {
  const dobInput = document.getElementById("workman-dob").value;
  if (!dobInput) return 0;
  const dob = new Date(dobInput);
  const diffMs = Date.now() - dob.getTime();
  const ageDate = new Date(diffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// --------------------------------------------------------------------------
// 3. PAGE 1: WORKMEN RECORD REGISTRATION WIZARD LOGIC
// --------------------------------------------------------------------------
function initWizardTimeline() {
  document.querySelectorAll(".wizard-step-node").forEach(node => {
    node.addEventListener("click", () => {
      const step = parseInt(node.getAttribute("data-step"));
      // Allow backwards navigation always, or forwards navigation if current step validates
      if (step < AppState.activeStage) {
        setWizardStage(step);
      } else if (step > AppState.activeStage) {
        // Run verification checks sequentially for all steps in between
        let valid = true;
        for (let i = AppState.activeStage; i < step; i++) {
          if (!validateWizardStage(i)) {
            valid = false;
            break;
          }
        }
        if (valid) setWizardStage(step);
      }
    });
  });
}

function setWizardStage(step) {
  AppState.activeStage = step;
  
  // Update timeline visualization classes
  document.querySelectorAll(".wizard-step-node").forEach(node => {
    const s = parseInt(node.getAttribute("data-step"));
    node.classList.remove("active", "completed");
    if (s === step) {
      node.classList.add("active");
    } else if (s < step) {
      node.classList.add("completed");
    }
  });

  // Toggle active form panel
  document.querySelectorAll(".wizard-panel").forEach(p => p.classList.remove("active"));
  document.getElementById(`wizard-stage-${step}`).classList.add("active");

  // Enable/Disable buttons
  document.getElementById("btn-wizard-prev").disabled = (step === 1);
  if (step === 5) {
    document.getElementById("btn-wizard-next").style.display = "none";
    prepareCertificate();
  } else {
    document.getElementById("btn-wizard-next").style.display = "inline-flex";
    document.getElementById("btn-wizard-next").innerHTML = `Next Stage <i class="fa-solid fa-arrow-right"></i>`;
  }
}

function navigateWizard(direction) {
  const targetStep = AppState.activeStage + direction;
  if (targetStep >= 1 && targetStep <= 5) {
    if (direction === 1 && !validateWizardStage(AppState.activeStage)) {
      return; // Stop navigation if step validation fails
    }
    setWizardStage(targetStep);
  }
}

// Stage Validation Rules
function validateWizardStage(stage) {
  let isValid = true;
  let errorMsg = "";

  if (stage === 1) {
    const name = document.getElementById("workman-name").value.trim();
    const father = document.getElementById("workman-father").value.trim();
    const role = document.getElementById("workman-role").value;
    const phone = document.getElementById("workman-phone").value.trim();
    const email = document.getElementById("workman-email").value.trim();
    const doj = document.getElementById("workman-doj").value;
    const dob = document.getElementById("workman-dob").value;
    const gender = document.getElementById("workman-gender").value;
    const marital = document.getElementById("workman-marital").value;
    const children = document.getElementById("workman-children").value;
    const nationality = document.getElementById("workman-nationality").value.trim();

    // Permanent address inputs
    const permLine = document.getElementById("workman-perm-line").value.trim();
    const permDistrict = document.getElementById("workman-perm-district").value.trim();
    const permState = document.getElementById("workman-perm-state").value.trim();
    const permPin = document.getElementById("workman-perm-pin").value.trim();

    // Present address inputs
    const copyChecked = document.getElementById("workman-address-copy").checked;
    const presLine = document.getElementById("workman-pres-line").value.trim();
    const presDistrict = document.getElementById("workman-pres-district").value.trim();
    const presState = document.getElementById("workman-pres-state").value.trim();
    const presPin = document.getElementById("workman-pres-pin").value.trim();

    // Skills checkboxes
    const skillCheckboxes = document.querySelectorAll(".workman-skills-cb:checked");

    if (!name || !father || !role || !phone || !doj || !dob || !gender || !marital || children === "" || !nationality) {
      isValid = false;
      errorMsg = "Please complete all Profile Master demographic fields.";
    } else if (calculateAgeFromDOB() < 18) {
      isValid = false;
      errorMsg = "Workman must be at least 18 years of age based on Date of Birth.";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      isValid = false;
      errorMsg = "Phone number must be a valid 10-digit number.";
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      errorMsg = "Please provide a valid email format.";
    } else if (skillCheckboxes.length === 0) {
      isValid = false;
      errorMsg = "Please select at least one skill from the Operator Skills check-panel.";
    } else if (!permLine || !permDistrict || !permState || !permPin) {
      isValid = false;
      errorMsg = "Please fill all Permanent Address fields.";
    } else if (!/^[0-9]{6}$/.test(permPin)) {
      isValid = false;
      errorMsg = "Permanent PIN Code must be exactly 6 digits.";
    } else if (!copyChecked && (!presLine || !presDistrict || !presState || !presPin)) {
      isValid = false;
      errorMsg = "Please fill all Present Address fields or check 'Present Address same as Permanent Address'.";
    } else if (!copyChecked && !/^[0-9]{6}$/.test(presPin)) {
      isValid = false;
      errorMsg = "Present PIN Code must be exactly 6 digits.";
    } else {
      // Validate Education history
      const eduRows = document.querySelectorAll("#edu-history-table tbody tr");
      for (let r of eduRows) {
        const inputs = r.querySelectorAll("input");
        let allFilled = true;
        inputs.forEach(inp => { if (!inp.value.trim()) allFilled = false; });
        if (!allFilled) {
          isValid = false;
          errorMsg = "Please fill out or delete all rows in the Education History table.";
          break;
        }
      }
      if (isValid) {
        // Validate Experience history
        const expRows = document.querySelectorAll("#exp-history-table tbody tr");
        for (let r of expRows) {
          const inputs = r.querySelectorAll("input");
          let allFilled = true;
          inputs.forEach(inp => { if (!inp.value.trim()) allFilled = false; });
          if (!allFilled) {
            isValid = false;
            errorMsg = "Please fill out or delete all rows in the Work Experience table.";
            break;
          }
        }
      }
    }
  } 
  
  else if (stage === 2) {
    const pan = document.getElementById("workman-pan").value.toUpperCase().trim();
    const aadhaar = document.getElementById("workman-aadhaar").value.trim();
    const uan = document.getElementById("workman-uan").value.trim();
    const esic = document.getElementById("workman-esic").value.trim();
    const bankAc = document.getElementById("workman-bank-ac").value.trim();
    const bankName = document.getElementById("workman-bank-name").value.trim();
    const branch = document.getElementById("workman-bank-branch").value.trim();
    const ifsc = document.getElementById("workman-bank-ifsc").value.toUpperCase().trim();
    const mobile = document.getElementById("workman-mobile").value.trim();

    // Check file uploads
    const panFront = document.getElementById("workman-pan-front").files.length;
    const panBack = document.getElementById("workman-pan-back").files.length;
    const aadhaarFront = document.getElementById("workman-aadhaar-front").files.length;
    const aadhaarBack = document.getElementById("workman-aadhaar-back").files.length;

    if (!pan || !aadhaar || !uan || !esic || !bankAc || !bankName || !branch || !ifsc || !mobile) {
      isValid = false;
      errorMsg = "Please fill all mandatory statutory KYC & Bank details.";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
      isValid = false;
      errorMsg = "Invalid PAN Number format (Expected format: ABCDE1234F).";
    } else if (panFront === 0 || panBack === 0) {
      isValid = false;
      errorMsg = "Please upload both PAN Front and PAN Back documents.";
    } else if (!/^[0-9]{12}$/.test(aadhaar)) {
      isValid = false;
      errorMsg = "Aadhaar Number must be a valid 12-digit number.";
    } else if (aadhaarFront === 0 || aadhaarBack === 0) {
      isValid = false;
      errorMsg = "Please upload both Aadhaar Front and Aadhaar Back documents.";
    } else if (!/^[0-9]{12}$/.test(uan)) {
      isValid = false;
      errorMsg = "Universal Account Number (UAN) must be exactly 12 digits.";
    } else if (!/^[0-9]{17}$/.test(esic)) {
      isValid = false;
      errorMsg = "ESIC Registration Number must be exactly 17 digits.";
    } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc)) {
      isValid = false;
      errorMsg = "Invalid bank IFSC Code format (e.g. SBIN0001234).";
    } else if (!/^[0-9]{10}$/.test(mobile)) {
      isValid = false;
      errorMsg = "Bank Registered Mobile Number must be exactly 10 digits.";
    }
  } 
  
  else if (stage === 3) {
    const height = parseFloat(document.getElementById("med-height").value);
    const weight = parseFloat(document.getElementById("med-weight").value);
    const bp = document.getElementById("med-bp").value.trim();
    const pulse = parseInt(document.getElementById("med-pulse").value);
    const blood = document.getElementById("med-blood").value;

    if (isNaN(height) || isNaN(weight) || !bp || isNaN(pulse) || !blood) {
      isValid = false;
      errorMsg = "Please fill all vital clinical measurements and select a blood group.";
    } else if (pulse < 40 || pulse > 140) {
      isValid = false;
      errorMsg = "Audit Warning: Pulse reading is outside normal physiological limits.";
    }
  } 
  
  else if (stage === 4) {
    // Validate EPF Nomination Share sum is exactly 100
    const shareInputs = document.querySelectorAll("#pf-nominee-table .nominee-share-input");
    let totalShare = 0;
    shareInputs.forEach(input => {
      totalShare += parseInt(input.value) || 0;
    });

    const isSigned = document.getElementById("employer-cert-sign").checked;
    const execDate = document.getElementById("workman-exec-date").value;
    const execPlace = document.getElementById("workman-exec-place").value.trim();

    if (shareInputs.length === 0) {
      isValid = false;
      errorMsg = "EPF Nomination Matrix requires at least one nominee entry.";
    } else if (totalShare !== 100) {
      isValid = false;
      errorMsg = `EPF Part-A Share Allocation total must be exactly 100%. Current sum: ${totalShare}%.`;
    } else if (!execDate || !execPlace) {
      isValid = false;
      errorMsg = "Please complete the Onboarding Verification Details (Execution Date and Place).";
    } else if (!isSigned) {
      isValid = false;
      errorMsg = "You must sign the statutory Employer Certification declaration to proceed.";
    }
  }

  if (!isValid) {
    alert(`[Stage ${stage} Validation Error]\n${errorMsg}`);
    // Highlight step timeline node as error
    const activeTimelineNode = document.querySelector(`.wizard-step-node[data-step="${stage}"]`);
    activeTimelineNode.classList.add("error-node");
    setTimeout(() => activeTimelineNode.classList.remove("error-node"), 1000);
  }
  return isValid;
}

// Dynamic Nomination Rows Management
function addNomineeRow() {
  const tbody = document.querySelector("#pf-nominee-table tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="text" required placeholder="Nominee Name" style="width:100%;"></td>
    <td><input type="text" required placeholder="Nominee Address" style="width:100%;"></td>
    <td><input type="text" required placeholder="Relationship" style="width:100%;"></td>
    <td><input type="date" required style="width:100%;"></td>
    <td><input type="number" required min="1" max="100" class="nominee-share-input" value="0" style="width:100%;"></td>
    <td><input type="text" placeholder="Guardian if under 18" style="width:100%;"></td>
    <td><button type="button" class="btn btn-danger btn-sm" onclick="removeNomineeRow(this)"><i class="fa-solid fa-trash"></i></button></td>
  `;
  tbody.appendChild(tr);
}

function removeNomineeRow(button) {
  const tbody = document.querySelector("#pf-nominee-table tbody");
  if (tbody.rows.length > 1) {
    button.closest("tr").remove();
  } else {
    alert("EPF Nomination rules require at least one primary nominee entry.");
  }
}

function addPensionRow() {
  const tbody = document.querySelector("#pension-family-table tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="text" placeholder="Name" style="width:100%;"></td>
    <td><input type="text" placeholder="Address" style="width:100%;"></td>
    <td><input type="number" placeholder="Age" style="width:100%;"></td>
    <td><input type="text" placeholder="Relationship" style="width:100%;"></td>
    <td><button type="button" class="btn btn-danger btn-sm" onclick="removePensionRow(this)"><i class="fa-solid fa-trash"></i></button></td>
  `;
  tbody.appendChild(tr);
}

function removePensionRow(button) {
  button.closest("tr").remove();
}

// Camera Simulation Handler
function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const previewBox = document.getElementById("photo-preview-box");
      previewBox.innerHTML = `<img src="${e.target.result}" alt="Workman Face Profile">`;
    };
    reader.readAsDataURL(file);
  }
}

// Certificate Generator Preparation
function prepareCertificate() {
  const name = document.getElementById("workman-name").value;
  const father = document.getElementById("workman-father").value;
  const role = document.getElementById("workman-role").value;
  const phone = document.getElementById("workman-phone").value.trim();
  const email = document.getElementById("workman-email").value.trim() || "N/A";
  const dojVal = document.getElementById("workman-doj").value;
  const dobVal = document.getElementById("workman-dob").value;
  const marital = document.getElementById("workman-marital").value;

  // Permanent address
  const permLine = document.getElementById("workman-perm-line").value.trim();
  const permDistrict = document.getElementById("workman-perm-district").value.trim();
  const permState = document.getElementById("workman-perm-state").value.trim();
  const permPin = document.getElementById("workman-perm-pin").value.trim();
  
  // Present address
  const copyChecked = document.getElementById("workman-address-copy").checked;
  const presLine = copyChecked ? permLine : document.getElementById("workman-pres-line").value.trim();
  const presDistrict = copyChecked ? permDistrict : document.getElementById("workman-pres-district").value.trim();
  const presState = copyChecked ? permState : document.getElementById("workman-pres-state").value.trim();
  const presPin = copyChecked ? permPin : document.getElementById("workman-pres-pin").value.trim();

  // Skills
  const skillsList = Array.from(document.querySelectorAll(".workman-skills-cb:checked")).map(cb => cb.value).join(", ");

  // Statutory
  const pan = document.getElementById("workman-pan").value.toUpperCase();
  const aadhaar = document.getElementById("workman-aadhaar").value;
  const uan = document.getElementById("workman-uan").value;
  const esic = document.getElementById("workman-esic").value;
  const bankAc = document.getElementById("workman-bank-ac").value;
  const bankName = document.getElementById("workman-bank-name").value;
  const branch = document.getElementById("workman-bank-branch").value;
  const ifsc = document.getElementById("workman-bank-ifsc").value.toUpperCase();
  const mobile = document.getElementById("workman-mobile").value;

  // Medical
  const height = document.getElementById("med-height").value;
  const weight = document.getElementById("med-weight").value;
  const bp = document.getElementById("med-bp").value;
  const pulse = document.getElementById("med-pulse").value;
  const blood = document.getElementById("med-blood").value;
  const varicose = document.getElementById("med-varicose").value;
  const diabetes = document.getElementById("med-diabetes").value;
  const breathing = document.getElementById("med-breathing").value;

  // Onboarding Status
  const execDateVal = document.getElementById("workman-exec-date").value;
  const execPlace = document.getElementById("workman-exec-place").value.trim();
  const formattedExecDate = execDateVal ? new Date(execDateVal).toLocaleDateString('en-GB') : "-";

  // Formatted DOJ
  const formattedDOJ = dojVal ? new Date(dojVal).toLocaleDateString('en-GB') : "-";
  const age = calculateAgeFromDOB();

  // Populate DOM certificate elements
  document.getElementById("cert-name").innerText = name.toUpperCase();
  document.getElementById("cert-father").innerText = father.toUpperCase();
  document.getElementById("cert-designation").innerText = role.toUpperCase();
  document.getElementById("cert-skills").innerText = skillsList.toUpperCase();
  document.getElementById("cert-contact").innerText = `${phone} / ${email}`;
  document.getElementById("cert-doj").innerText = formattedDOJ;
  document.getElementById("cert-demographics").innerText = `DOB: ${new Date(dobVal).toLocaleDateString('en-GB')} (${age} yrs) | ${marital}`;
  document.getElementById("cert-address").innerHTML = `Perm: ${permLine}, ${permDistrict}, ${permState} - ${permPin}<br>Pres: ${presLine}, ${presDistrict}, ${presState} - ${presPin}`;
  
  document.getElementById("cert-pan-aadhaar").innerText = `PAN: ${pan} | AADHAAR: ${aadhaar}`;
  document.getElementById("cert-uan-esic").innerText = `UAN: ${uan} | ESIC: ${esic}`;
  document.getElementById("cert-bank-details").innerText = `${bankName} A/C: ${bankAc} | IFSC: ${ifsc} | Reg Mobile: ${mobile}`;
  
  document.getElementById("cert-medical-measures").innerText = `Height: ${height} cm | Weight: ${weight} kg | Blood Group: ${blood}`;
  document.getElementById("cert-medical-status").innerHTML = `BP: ${bp} mmHg | Pulse: ${pulse} bpm | Varicose: ${varicose} | Diabetes: ${diabetes} | Abnormal Breathing: ${breathing}`;
  document.getElementById("cert-onboarding").innerHTML = `Execution Date: ${formattedExecDate}<br>Execution Place: ${execPlace.toUpperCase()}`;
}

// Final Save Workman Profile Action
function enrollWorkman() {
  const name = document.getElementById("workman-name").value;
  const role = document.getElementById("workman-role").value;
  const doj = document.getElementById("workman-doj").value;
  const skillsList = Array.from(document.querySelectorAll(".workman-skills-cb:checked")).map(cb => cb.value);

  // Parse wage based on designation or skills
  let wage = 600;
  if (role.includes("Supervisor") || role.includes("Anchoring")) wage = 1200;
  else if (role.includes("Core") || role.includes("Drilling")) wage = 950;

  const newId = 100 + AppState.workers.length + 1;
  const newWorker = {
    id: newId,
    name: name,
    role: role,
    wage: wage,
    site: "Powai Metro Complex Front",
    status: "Present",
    skills: skillsList
  };

  AppState.workers.push(newWorker);
  
  // Rebuild the spreadsheet grid to accommodate the new operator
  buildSpreadsheetGrid();
  renderReportView();

  alert(`Enrollment Complete!\nWorkman: ${name} has been officially recorded under Payroll ID RE-W${newId}.\nShift tracking spreadsheet rebuilt.`);
  
  // Reset Wizard Form and set back to step 1
  document.getElementById("workman-wizard-form").reset();
  document.getElementById("photo-preview-box").innerHTML = `<i class="fa-solid fa-user-tie photo-preview-placeholder"></i>`;
  
  // Reset file status labels
  document.getElementById("pan-front-status").innerText = "No file";
  document.getElementById("pan-back-status").innerText = "No file";
  document.getElementById("aadhaar-front-status").innerText = "No file";
  document.getElementById("aadhaar-back-status").innerText = "No file";

  setWizardStage(1);
}

// --------------------------------------------------------------------------
// 3B. ENTRY LOG ENGINE (Bills, Cash, Cheque, New Work)
// --------------------------------------------------------------------------
let entryLogData = {
  bills: [],
  cash: [],
  cheque: [],
  newwork: []
};

const entryLogFields = {
  bills: ["bill-date", "bill-party", "bill-invoice-no", "bill-amount", "bill-site", "bill-category", "bill-remarks"],
  cash: ["cash-date", "cash-from", "cash-amount", "cash-site", "cash-towards", "cash-ref", "cash-remarks"],
  cheque: ["cheque-date", "cheque-from", "cheque-amount", "cheque-no", "cheque-bank", "cheque-cheque-date", "cheque-site", "cheque-status", "cheque-remarks"],
  newwork: ["newwork-date", "newwork-client", "newwork-site", "newwork-type", "newwork-contact", "newwork-phone", "newwork-est-value", "newwork-priority", "newwork-scope"]
};

const entryLogRequired = {
  bills: ["bill-date", "bill-party", "bill-invoice-no", "bill-amount", "bill-site"],
  cash: ["cash-date", "cash-from", "cash-amount"],
  cheque: ["cheque-date", "cheque-from", "cheque-amount", "cheque-no", "cheque-bank", "cheque-cheque-date"],
  newwork: ["newwork-date", "newwork-client", "newwork-site", "newwork-type"]
};

function addEntryLog(type) {
  const required = entryLogRequired[type];
  for (const id of required) {
    const el = document.getElementById(id);
    if (!el || !el.value.trim()) {
      alert("Please fill all required (*) fields before adding.");
      if (el) el.focus();
      return;
    }
  }
  const fields = entryLogFields[type];
  const entry = {};
  fields.forEach(id => {
    const el = document.getElementById(id);
    entry[id] = el ? el.value.trim() : "";
  });
  entryLogData[type].push(entry);
  clearEntryForm(type);
  renderEntryLogTable(type);
}

function clearEntryForm(type) {
  const fields = entryLogFields[type];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "SELECT") {
        el.selectedIndex = 0;
      } else {
        el.value = "";
      }
    }
  });
}

function removeEntryLog(type, idx) {
  entryLogData[type].splice(idx, 1);
  renderEntryLogTable(type);
}

function renderEntryLogTable(type) {
  const tbody = document.getElementById(`entry-${type}-tbody`);
  if (!tbody) return;
  const data = entryLogData[type];
  if (data.length === 0) {
    const cols = entryLogFields[type].length + 2; // +2 for # and Action
    tbody.innerHTML = `<tr><td colspan="${cols}" style="text-align:center; color: var(--text-muted); padding: 30px;">No entries yet.</td></tr>`;
    return;
  }
  const fields = entryLogFields[type];
  tbody.innerHTML = "";
  data.forEach((entry, i) => {
    const tr = document.createElement("tr");
    let cells = `<td>${i + 1}</td>`;
    fields.forEach(id => {
      let val = entry[id] || "—";
      // Format amounts with ₹ symbol
      if (id.includes("amount") || id.includes("est-value")) {
        const num = parseFloat(val);
        if (!isNaN(num)) val = "₹ " + num.toLocaleString("en-IN");
      }
      cells += `<td>${val}</td>`;
    });
    cells += `<td><button type="button" class="btn btn-danger btn-sm" onclick="removeEntryLog('${type}', ${i})" title="Delete"><i class="fa-solid fa-trash"></i></button></td>`;
    tr.innerHTML = cells;
    tbody.appendChild(tr);
  });
}

// --------------------------------------------------------------------------
// 4. PAGE 2: CHEMICAL ANCHOR 3-MODULE DASHBOARD ENGINE
// --------------------------------------------------------------------------

// --- Module 1: Chemical Product Data Grid State ---
let chemProducts = [
  { brand: "Hilti RE 500 V3", desc: "Injection Mortar 500ml Foil", ml: 500, price: 1750 }
];

// --- Module 2: Estimation Worksheet Baseline Rows ---
const estimationBaselines = [
  { steelDia: 8,  holeDia: 10, depth: 80  },
  { steelDia: 10, holeDia: 12, depth: 100 },
  { steelDia: 12, holeDia: 16, depth: 120 },
  { steelDia: 16, holeDia: 20, depth: 160 },
  { steelDia: 20, holeDia: 25, depth: 200 },
  { steelDia: 25, holeDia: 32, depth: 250 },
  { steelDia: 32, holeDia: 40, depth: 320 }
];

let estimationRows = estimationBaselines.map(b => ({
  steelDia: b.steelDia,
  holeDia: b.holeDia,
  depth: b.depth,
  productIdx: 0,
  wastage: 1.25
}));

// --- Module 3: Proposal State (Nos & Rate per row) ---
let proposalState = estimationBaselines.map(() => ({
  ratePerInch: 0,
  nosQty: 0
}));

// --- Bootstrap the Chemical Dashboard ---
function initChemicalAnchorCalculator() {
  renderChemProductTable();
  renderEstimationTable();
  renderProposalTable();
  recalcAllChemModules();
}

// =========================================================================
// MODULE 1: PRODUCT DATA GRID — Render, Add, Remove, Recalculate
// =========================================================================
function renderChemProductTable() {
  const tbody = document.getElementById("chem-product-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  chemProducts.forEach((p, i) => {
    const costPerMl = (p.ml > 0) ? (p.price / p.ml) : 0;
    const tr = document.createElement("tr");
    tr.setAttribute("data-product-idx", i);
    tr.innerHTML = `
      <td class="product-row-num">${i + 1}</td>
      <td><input type="text" class="prod-brand" value="${escHtml(p.brand)}" style="width:100%;" oninput="updateChemProduct(${i}, 'brand', this.value)"></td>
      <td><input type="text" class="prod-desc" value="${escHtml(p.desc)}" style="width:100%;" oninput="updateChemProduct(${i}, 'desc', this.value)"></td>
      <td><input type="number" class="prod-ml" value="${p.ml}" min="1" style="width:100%;" oninput="updateChemProduct(${i}, 'ml', this.value)"></td>
      <td><input type="number" class="prod-price" value="${p.price}" min="0" step="0.01" style="width:100%;" oninput="updateChemProduct(${i}, 'price', this.value)"></td>
      <td class="prod-costperml" style="font-weight:700; color: var(--bg-accent-indigo);">${costPerMl.toFixed(2)}</td>
      <td><button type="button" class="btn btn-danger btn-sm" onclick="removeChemProduct(this)" title="Delete row"><i class="fa-solid fa-trash"></i></button></td>
    `;
    tbody.appendChild(tr);
  });
}

function escHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function updateChemProduct(idx, field, val) {
  if (field === "ml" || field === "price") {
    chemProducts[idx][field] = parseFloat(val) || 0;
  } else {
    chemProducts[idx][field] = val;
  }
  // Update cost per ML display for this row
  const row = document.querySelector(`#chem-product-tbody tr[data-product-idx="${idx}"]`);
  if (row) {
    const ml = chemProducts[idx].ml || 1;
    const price = chemProducts[idx].price || 0;
    row.querySelector(".prod-costperml").innerText = (price / ml).toFixed(2);
  }
  // Cascade recalculations downstream
  recalcAllChemModules();
}

function addChemProduct() {
  chemProducts.push({ brand: "", desc: "", ml: 500, price: 0 });
  renderChemProductTable();
  recalcAllChemModules();
}

function removeChemProduct(btn) {
  if (chemProducts.length <= 1) {
    alert("Safety Limit: You must maintain at least 1 product row.");
    return;
  }
  const row = btn.closest("tr");
  const idx = parseInt(row.getAttribute("data-product-idx"));
  chemProducts.splice(idx, 1);
  // Adjust any estimation row referencing a deleted or shifted product index
  estimationRows.forEach(er => {
    if (er.productIdx >= chemProducts.length) {
      er.productIdx = 0;
    }
  });
  renderChemProductTable();
  renderEstimationTable();
  renderProposalTable();
  recalcAllChemModules();
}

// =========================================================================
// MODULE 2: ESTIMATION WORKSHEET — Render & Recalculate
// =========================================================================
function buildProductDropdownOptions(selectedIdx) {
  let opts = "";
  chemProducts.forEach((p, i) => {
    const label = p.brand ? `${p.brand} (${p.ml}ml)` : `Product ${i + 1} (${p.ml}ml)`;
    opts += `<option value="${i}" ${i === selectedIdx ? "selected" : ""}>${label}</option>`;
  });
  return opts;
}

function renderEstimationTable() {
  const tbody = document.getElementById("chem-estimation-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  estimationRows.forEach((er, i) => {
    const tr = document.createElement("tr");
    tr.setAttribute("data-est-idx", i);
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><input type="number" value="${er.steelDia}" min="1" max="100" style="width:80px;" onchange="updateEstRow(${i}, 'steelDia', this.value)"></td>
      <td><input type="number" value="${er.holeDia}" min="1" max="120" style="width:80px;" onchange="updateEstRow(${i}, 'holeDia', this.value)"></td>
      <td><input type="number" value="${er.depth}" min="10" max="2000" style="width:90px;" onchange="updateEstRow(${i}, 'depth', this.value)"></td>
      <td><select style="width:100%;" onchange="updateEstRow(${i}, 'productIdx', this.value)">${buildProductDropdownOptions(er.productIdx)}</select></td>
      <td><input type="number" value="${er.wastage}" min="1" max="5" step="0.01" style="width:80px;" onchange="updateEstRow(${i}, 'wastage', this.value)"></td>
      <td class="est-netVol" style="font-weight:600;">—</td>
      <td class="est-practVol" style="font-weight:600;">—</td>
      <td class="est-holesBottle" style="font-weight:600;">—</td>
      <td class="est-costHole" style="font-weight:600; color: var(--color-crimson);">—</td>
      <td class="est-costInch" style="font-weight:600; color: var(--bg-accent-indigo);">—</td>
    `;
    tbody.appendChild(tr);
  });
}

function updateEstRow(idx, field, val) {
  if (field === "productIdx") {
    estimationRows[idx][field] = parseInt(val) || 0;
  } else {
    estimationRows[idx][field] = parseFloat(val) || 0;
  }
  recalcAllChemModules();
}

// =========================================================================
// MODULE 3: PROPOSAL PRICING MATRIX — Render & Recalculate
// =========================================================================
function renderProposalTable() {
  const tbody = document.getElementById("chem-proposal-tbody");
  if (!tbody) return;
  // Sync proposal rows count with estimation rows
  while (proposalState.length < estimationRows.length) {
    proposalState.push({ ratePerInch: 0, nosQty: 0 });
  }
  while (proposalState.length > estimationRows.length) {
    proposalState.pop();
  }
  tbody.innerHTML = "";
  estimationRows.forEach((er, i) => {
    const ps = proposalState[i];
    const tr = document.createElement("tr");
    tr.setAttribute("data-prop-idx", i);
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td class="prop-steelDia">${er.steelDia}</td>
      <td class="prop-holeDia">${er.holeDia}</td>
      <td class="prop-depth">${er.depth}</td>
      <td class="prop-costInch" style="font-weight:600; color: var(--bg-accent-indigo);">—</td>
      <td><input type="number" class="prop-rate" value="${ps.ratePerInch}" min="0" step="0.01" style="width:100px;" onchange="updateProposalRow(${i}, 'ratePerInch', this.value)"></td>
      <td><input type="number" class="prop-nos" value="${ps.nosQty}" min="0" style="width:90px;" onchange="updateProposalRow(${i}, 'nosQty', this.value)"></td>
      <td class="prop-costHole" style="font-weight:600;">—</td>
      <td class="prop-totalAmt" style="font-weight:700; color: var(--color-emerald);">—</td>
      <td class="prop-variance" style="font-weight:700;">—</td>
    `;
    tbody.appendChild(tr);
  });
}

function updateProposalRow(idx, field, val) {
  proposalState[idx][field] = parseFloat(val) || 0;
  recalcAllChemModules();
}

// =========================================================================
// UNIFIED RECALCULATION ENGINE — Cascades Module 1 → 2 → 3
// =========================================================================
function recalcAllChemModules() {
  // --- Recalc Module 1: Cost Per ML cells ---
  chemProducts.forEach((p, i) => {
    const row = document.querySelector(`#chem-product-tbody tr[data-product-idx="${i}"]`);
    if (row) {
      const ml = p.ml || 1;
      row.querySelector(".prod-costperml").innerText = (p.price / ml).toFixed(2);
    }
  });

  // --- Recalc Module 2: Estimation Worksheet ---
  const estCalcResults = [];
  estimationRows.forEach((er, i) => {
    const product = chemProducts[er.productIdx] || chemProducts[0] || { ml: 1, price: 0 };
    const costPerMl = (product.ml > 0) ? (product.price / product.ml) : 0;

    // Core formula: Net Volume = (π / 2.25) * (HoleDia² - SteelDia²) * (Depth / 1000)
    let netVol = 0;
    if (er.holeDia > er.steelDia && er.depth > 0) {
      netVol = (Math.PI / 2.25) * (Math.pow(er.holeDia, 2) - Math.pow(er.steelDia, 2)) * (er.depth / 1000);
    }

    const practVol = netVol * er.wastage;
    const holesPerBottle = (practVol > 0) ? (product.ml / practVol) : 0;
    const costPerHole = practVol * costPerMl;
    const depthInches = er.depth / 25.4;
    const costPerInch = (depthInches > 0) ? (costPerHole / depthInches) : 0;

    estCalcResults.push({ netVol, practVol, holesPerBottle, costPerHole, costPerInch });

    // Update estimation table cells
    const row = document.querySelector(`#chem-estimation-tbody tr[data-est-idx="${i}"]`);
    if (row) {
      row.querySelector(".est-netVol").innerText = Math.round(netVol);
      row.querySelector(".est-practVol").innerText = Math.round(practVol);
      row.querySelector(".est-holesBottle").innerText = Math.round(holesPerBottle);
      row.querySelector(".est-costHole").innerText = Math.round(costPerHole);
      row.querySelector(".est-costInch").innerText = Math.round(costPerInch);
    }
  });

  // --- Recalc Module 3: Proposal Pricing Matrix ---
  let grandTotalAmt = 0;
  let grandTotalVariance = 0;
  let grandTotalCostHole = 0;

  estimationRows.forEach((er, i) => {
    const calc = estCalcResults[i] || { costPerInch: 0, costPerHole: 0 };
    const ps = proposalState[i] || { ratePerInch: 0, nosQty: 0 };
    
    const variancePerInch = ps.ratePerInch - calc.costPerInch;
    const totalAmount = ps.nosQty * calc.costPerHole;
    
    grandTotalAmt += totalAmount;
    grandTotalVariance += variancePerInch * ps.nosQty;
    grandTotalCostHole += calc.costPerHole * ps.nosQty;

    const row = document.querySelector(`#chem-proposal-tbody tr[data-prop-idx="${i}"]`);
    if (row) {
      // Inherit from Module 2
      row.querySelector(".prop-steelDia").innerText = er.steelDia;
      row.querySelector(".prop-holeDia").innerText = er.holeDia;
      row.querySelector(".prop-depth").innerText = er.depth;
      row.querySelector(".prop-costInch").innerText = Math.round(calc.costPerInch);
      row.querySelector(".prop-costHole").innerText = Math.round(calc.costPerHole);
      
      // Total Amount = Nos Qty × Cost Per Hole
      row.querySelector(".prop-totalAmt").innerText = Math.round(totalAmount).toLocaleString("en-IN");
      
      // Variance styling
      const varianceCell = row.querySelector(".prop-variance");
      varianceCell.innerText = Math.round(variancePerInch);
      if (variancePerInch > 0) {
        varianceCell.style.color = "var(--color-emerald)";
      } else if (variancePerInch < 0) {
        varianceCell.style.color = "var(--color-crimson)";
      } else {
        varianceCell.style.color = "var(--text-muted)";
      }
    }
  });

  // Update footer totals
  const totalCostHoleEl = document.getElementById("proposal-total-costhole");
  const grandTotalEl = document.getElementById("proposal-grand-total");
  const totalVarianceEl = document.getElementById("proposal-total-variance");
  
  if (totalCostHoleEl) totalCostHoleEl.innerText = "₹ " + Math.round(grandTotalCostHole).toLocaleString("en-IN");
  if (grandTotalEl) grandTotalEl.innerText = "₹ " + Math.round(grandTotalAmt).toLocaleString("en-IN");
  if (totalVarianceEl) {
    totalVarianceEl.innerText = "₹ " + Math.round(grandTotalVariance).toLocaleString("en-IN");
    if (grandTotalVariance > 0) {
      totalVarianceEl.style.color = "var(--color-emerald)";
    } else if (grandTotalVariance < 0) {
      totalVarianceEl.style.color = "var(--color-crimson)";
    } else {
      totalVarianceEl.style.color = "var(--text-muted)";
    }
  }
}

// --------------------------------------------------------------------------
// 5. PAGE 3: CORE CUTTING QUOTATION & SUFFIX ASSIGNMENT LOGIC
// --------------------------------------------------------------------------
function initQuotationAutocomplete() {
  const searchInput = document.getElementById("quote-client-search");
  
  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    // Match against mock existing database
    const matchedClient = AppState.clients.find(c => c.name.toLowerCase() === val.toLowerCase());
    
    const gstinInput = document.getElementById("quote-gstin");
    const addressInput = document.getElementById("quote-client-address");
    const idInput = document.getElementById("quote-client-id");
    
    if (matchedClient) {
      // Locking existing customer details to shield profile values
      gstinInput.value = matchedClient.gstin;
      addressInput.value = matchedClient.address;
      gstinInput.disabled = true;
      addressInput.disabled = true;
      
      // Suffix Engine: Scan prior site designations and increment alphabetically
      const lastSuffix = matchedClient.suffixes[matchedClient.suffixes.length - 1];
      const nextChar = String.fromCharCode(lastSuffix.charCodeAt(0) + 1);
      idInput.value = `${matchedClient.id}-${nextChar}`;
    } else {
      // New Client Mode: Open inputs, assign next sequential numerical ID with default A suffix
      gstinInput.disabled = false;
      addressInput.disabled = false;
      
      if (val.length > 2) {
        const nextNum = AppState.clients.length + 1;
        const paddedNum = String(nextNum).padStart(3, '0');
        idInput.value = `RE-${paddedNum}-A`;
      } else {
        idInput.value = "";
      }
    }
    
    // Auto-update print preview elements
    document.getElementById("inv-client-name").innerText = val || "[Client Name]";
    document.getElementById("inv-client-address").innerText = addressInput.value || "[HO Address]";
    document.getElementById("inv-client-gstin").innerText = gstinInput.value || "[GSTIN]";
    document.getElementById("inv-meta-client-id").innerText = idInput.value || "RE-XXX-X";
  });

  // Event maps to capture site details live onto invoice
  document.getElementById("quote-site-name").addEventListener("input", e => {
    document.getElementById("inv-site-name").innerText = e.target.value || "[Site Name]";
  });
  document.getElementById("quote-site-address").addEventListener("input", e => {
    document.getElementById("inv-site-address").innerText = e.target.value || "[Site Address]";
  });
}

function updateQuoteItemRate(selectElement) {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const rate = selectedOption.getAttribute("data-rate");
  const tr = selectElement.closest("tr");
  tr.querySelector(".quote-item-rate").value = rate;
  calculateQuoteTotals();
}

function addQuoteItemRow() {
  const tbody = document.querySelector("#quote-invoice-items-table tbody");
  const rowCount = tbody.rows.length + 1;
  const tr = document.createElement("tr");
  
  tr.innerHTML = `
    <td>${rowCount}</td>
    <td>
      <select class="quote-item-dia-select" onchange="updateQuoteItemRate(this)" style="width:100%;">
        <option value="50MM" data-rate="40">50MM (2") - Rs 40</option>
        <option value="75MM" data-rate="45">75MM (3") - Rs 45</option>
        <option value="100MM" data-rate="50" selected>100MM (4") - Rs 50</option>
        <option value="125MM" data-rate="75">125MM (5") - Rs 75</option>
        <option value="150MM" data-rate="80">150MM (6") - Rs 80</option>
        <option value="200MM" data-rate="110">200MM (8") - Rs 110</option>
        <option value="250MM" data-rate="150">250MM (10") - Rs 150</option>
        <option value="300MM" data-rate="200">300MM (12") - Rs 200</option>
      </select>
    </td>
    <td><input type="number" class="quote-item-depth" value="12" min="1" onchange="calculateQuoteTotals()" style="width:100%;"></td>
    <td><input type="number" class="quote-item-rate" value="50" readonly style="width:100%; font-family:monospace;"></td>
    <td><input type="number" class="quote-item-qty" value="1" min="1" onchange="calculateQuoteTotals()" style="width:100%;"></td>
    <td class="quote-item-total" style="text-align:right; font-family:monospace; font-weight:600;">Rs. 600.00</td>
    <td class="no-print"><button type="button" class="btn btn-danger btn-sm sheet-delete-tag" onclick="deleteQuoteItemRow(this)"><i class="fa-solid fa-trash"></i></button></td>
  `;
  
  tbody.appendChild(tr);
  calculateQuoteTotals();
}

function deleteQuoteItemRow(button) {
  const tbody = document.querySelector("#quote-invoice-items-table tbody");
  if (tbody.rows.length > 1) {
    button.closest("tr").remove();
    // Re-index Sr. No
    Array.from(tbody.rows).forEach((row, idx) => {
      row.cells[0].innerText = idx + 1;
    });
    calculateQuoteTotals();
  } else {
    alert("Quotation must hold at least one concrete core cutting dimension line.");
  }
}

function calculateQuoteTotals() {
  const rows = document.querySelectorAll("#quote-invoice-items-table tbody tr");
  let subtotal = 0;
  
  rows.forEach(row => {
    const depth = parseFloat(row.querySelector(".quote-item-depth").value) || 0;
    const rate = parseFloat(row.querySelector(".quote-item-rate").value) || 0;
    const qty = parseInt(row.querySelector(".quote-item-qty").value) || 0;
    
    const rowTotal = depth * rate * qty;
    row.querySelector(".quote-item-total").innerText = `Rs. ${rowTotal.toFixed(2)}`;
    subtotal += rowTotal;
  });

  // Calculate Breaker Surcharges (Rs 1,500/shift * Number of shifts)
  const isBreakerActive = document.getElementById("breaker-surcharge-toggle").checked;
  const shifts = parseInt(document.getElementById("breaker-shifts").value) || 0;
  const breakerTotal = isBreakerActive ? (shifts * 1500) : 0;
  
  // Taxation: 9% CGST + 9% SGST
  const aggregateAmt = subtotal + breakerTotal;
  const cgst = aggregateAmt * 0.09;
  const sgst = aggregateAmt * 0.09;
  const grandTotal = aggregateAmt + cgst + sgst;

  // Bind outputs to billing sheet UI
  document.getElementById("inv-total-subtotal").innerText = `Rs. ${subtotal.toFixed(2)}`;
  document.getElementById("inv-total-breaker").innerText = `Rs. ${breakerTotal.toFixed(2)}`;
  document.getElementById("inv-total-cgst").innerText = `Rs. ${cgst.toFixed(2)}`;
  document.getElementById("inv-total-sgst").innerText = `Rs. ${sgst.toFixed(2)}`;
  document.getElementById("inv-total-grand").innerText = `Rs. ${grandTotal.toFixed(2)}`;
}

function resetQuoteForm() {
  document.getElementById("quote-client-search").value = "";
  document.getElementById("quote-gstin").value = "";
  document.getElementById("quote-client-address").value = "";
  document.getElementById("quote-site-name").value = "";
  document.getElementById("quote-site-address").value = "";
  document.getElementById("quote-client-id").value = "";
  document.getElementById("breaker-surcharge-toggle").checked = false;
  document.getElementById("breaker-shifts").value = "1";
  
  document.getElementById("quote-gstin").disabled = false;
  document.getElementById("quote-client-address").disabled = false;

  const tbody = document.querySelector("#quote-invoice-items-table tbody");
  tbody.innerHTML = `
    <tr>
      <td>1</td>
      <td>
        <select class="quote-item-dia-select" onchange="updateQuoteItemRate(this)" style="width:100%;">
          <option value="50MM" data-rate="40">50MM (2") - Rs 40</option>
          <option value="75MM" data-rate="45">75MM (3") - Rs 45</option>
          <option value="100MM" data-rate="50" selected>100MM (4") - Rs 50</option>
          <option value="125MM" data-rate="75">125MM (5") - Rs 75</option>
          <option value="150MM" data-rate="80">150MM (6") - Rs 80</option>
          <option value="200MM" data-rate="110">200MM (8") - Rs 110</option>
          <option value="250MM" data-rate="150">250MM (10") - Rs 150</option>
          <option value="300MM" data-rate="200">300MM (12") - Rs 200</option>
        </select>
      </td>
      <td><input type="number" class="quote-item-depth" value="12" min="1" onchange="calculateQuoteTotals()" style="width:100%;"></td>
      <td><input type="number" class="quote-item-rate" value="50" readonly style="width:100%; font-family:monospace;"></td>
      <td><input type="number" class="quote-item-qty" value="1" min="1" onchange="calculateQuoteTotals()" style="width:100%;"></td>
      <td class="quote-item-total" style="text-align:right; font-family:monospace; font-weight:600;">Rs. 600.00</td>
      <td class="no-print"><button type="button" class="btn btn-danger btn-sm sheet-delete-tag" onclick="deleteQuoteItemRow(this)"><i class="fa-solid fa-trash"></i></button></td>
    </tr>
  `;
  
  // Re-sync labels
  document.getElementById("inv-client-name").innerText = "[Client Name]";
  document.getElementById("inv-client-address").innerText = "[HO Address]";
  document.getElementById("inv-client-gstin").innerText = "[GSTIN]";
  document.getElementById("inv-site-name").innerText = "[Site Name]";
  document.getElementById("inv-site-address").innerText = "[Site Address]";
  document.getElementById("inv-meta-client-id").innerText = "RE-XXX-X";
  
  calculateQuoteTotals();
}

// --------------------------------------------------------------------------
// 6. PAGE 4: 40-OPERATOR MASS SPREADSHEET ENGINE LOGIC
// --------------------------------------------------------------------------
function buildSpreadsheetGrid() {
  const tbody = document.getElementById("attendance-tbody");
  tbody.innerHTML = ""; // clear previous rows
  
  AppState.workers.forEach((worker, index) => {
    const tr = document.createElement("tr");
    tr.id = `spread-row-${worker.id}`;
    tr.className = "spreadsheet-row";
    
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td class="col-worker">${worker.name}</td>
      <td>
        <select class="spread-att-status" onchange="handleAbsentLockout(${worker.id}, this.value)">
          <option value="Present" ${worker.status === "Present" ? "selected" : ""}>Present</option>
          <option value="Half Day">Half Day</option>
          <option value="Absent" ${worker.status === "Absent" ? "selected" : ""}>Absent</option>
        </select>
      </td>
      <td>
        <select class="spread-night-tier" onchange="calculateRowWorkingDays(${worker.id})">
          <option value="0">None (Single Day)</option>
          <option value="1">1x Night Shift</option>
          <option value="2">2x Night Shift</option>
          <option value="3">3x Night Shift</option>
          <option value="4">4x Night Shift</option>
        </select>
      </td>
      <td>
        <input type="number" class="spread-work-days" value="1.0" readonly style="width:70px; background-color:rgba(0,0,0,0.1); font-family:monospace; text-align:center;">
      </td>
      <td><input type="number" class="spread-travel" value="100" style="width:80px;" onchange="calculateRowWorkingDays(${worker.id})"></td>
      <td><input type="number" class="spread-ot" value="0" style="width:70px;" onchange="calculateRowWorkingDays(${worker.id})"></td>
      <td><input type="number" class="spread-kharchi" value="200" style="width:80px;" onchange="calculateRowWorkingDays(${worker.id})"></td>
      <td><input type="number" class="spread-repair" value="0" style="width:80px;" onchange="calculateRowWorkingDays(${worker.id})"></td>
      <td><input type="text" class="spread-jmr" value="CH-${2000 + index}" style="width:110px;"></td>
      
      <!-- Core Cutting inventory scope columns -->
      <td class="tool-col-group tool-cell tool-core"><input type="number" value="1" min="0" class="tool-val pump" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-core"><input type="number" value="1" min="0" class="tool-val rig" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-core"><input type="number" value="1" min="0" class="tool-val mc" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-core"><input type="number" value="2" min="0" class="tool-val handle" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-core"><input type="number" value="1" min="0" class="tool-val reel" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-core"><input type="number" value="10" min="0" class="tool-val anchors" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-core"><input type="number" value="1" min="0" class="tool-val sledge" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-core"><input type="number" value="2" min="0" class="tool-val trirod" style="width:60px;"></td>

      <!-- Drilling & Grouting inventory scope columns -->
      <td class="tool-col-group tool-cell tool-drill" style="display:none;"><input type="number" value="0" min="0" class="tool-val foil" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-drill" style="display:none;"><input type="number" value="0" min="0" class="tool-val cass" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-drill" style="display:none;"><input type="number" value="0" min="0" class="tool-val gun" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-drill" style="display:none;"><input type="number" value="0" min="0" class="tool-val blower" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-drill" style="display:none;"><input type="number" value="0" min="0" class="tool-val sds26" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-drill" style="display:none;"><input type="number" value="0" min="0" class="tool-val sds30" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-drill" style="display:none;"><input type="number" value="0" min="0" class="tool-val sds40" style="width:60px;"></td>
      <td class="tool-col-group tool-cell tool-drill" style="display:none;"><input type="number" value="0" min="0" class="tool-val sds50" style="width:60px;"></td>

      <td>
        <select class="spread-project-status" onchange="checkLossAuditTrigger(${worker.id}, this.value)">
          <option value="Active">Active</option>
          <option value="Work Done">Work Done</option>
        </select>
      </td>
      <td><input type="text" class="spread-remarks" placeholder="Add remarks..." style="width:180px;" onchange="checkLossAuditTrigger(${worker.id}, this.value)"></td>
      <td class="no-print" style="text-align: center;">
        <button type="button" class="btn btn-success" onclick="saveIndividualRow(${worker.id})" style="padding: 4px 10px; font-size: 11px;">
          <i class="fa-solid fa-floppy-disk"></i> Save
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  // Set default tool layout view
  toggleGridWorkScope(document.getElementById("grid-work-scope").value);
}

// Bi-directional dynamic tool switching matrix
function toggleGridWorkScope(scope) {
  const coreHeaders = document.querySelectorAll(".tool-core");
  const drillHeaders = document.querySelectorAll(".tool-drill");
  
  if (scope === "core") {
    coreHeaders.forEach(el => el.style.display = "");
    drillHeaders.forEach(el => el.style.display = "none");
  } else {
    coreHeaders.forEach(el => el.style.display = "none");
    drillHeaders.forEach(el => el.style.display = "");
  }
}

// Absent Lockout Override Logic
function handleAbsentLockout(workerId, status) {
  const row = document.getElementById(`spread-row-${workerId}`);
  const inputsToLock = row.querySelectorAll("input:not(.spread-work-days), select:not(.spread-att-status)");

  if (status === "Absent") {
    row.classList.add("row-absent-state");
    inputsToLock.forEach(input => {
      input.disabled = true;
      if (input.type === "number") {
        input.value = 0;
      }
    });
    row.querySelector(".spread-work-days").value = "0.0";
  } else {
    row.classList.remove("row-absent-state");
    inputsToLock.forEach(input => {
      input.disabled = false;
      // Reseed defaults if unlocked
      if (input.classList.contains("spread-travel")) input.value = 100;
      if (input.classList.contains("spread-kharchi")) input.value = 200;
      if (input.classList.contains("tool-val")) {
        // default items
        if (input.classList.contains("anchors")) input.value = 10;
        else if (input.classList.contains("handle") || input.classList.contains("trirod")) input.value = 2;
        else if (input.classList.contains("foil") || input.classList.contains("cass") || input.classList.contains("gun") || input.classList.contains("blower") || input.classList.contains("sds26") || input.classList.contains("sds30") || input.classList.contains("sds40") || input.classList.contains("sds50")) {
          input.value = 0;
        } else {
          input.value = 1;
        }
      }
    });
    calculateRowWorkingDays(workerId);
  }
}

function calculateRowWorkingDays(workerId) {
  const row = document.getElementById(`spread-row-${workerId}`);
  const attStatus = row.querySelector(".spread-att-status").value;
  const nightMultiplier = parseFloat(row.querySelector(".spread-night-tier").value) || 0;
  
  if (attStatus === "Absent") {
    row.querySelector(".spread-work-days").value = "0.0";
    return;
  }
  
  let attendanceVal = (attStatus === "Present") ? 1.0 : 0.5;
  
  // Working days = attendance value (1.0 or 0.5) + Night shift multipliers
  const totalDays = attendanceVal + nightMultiplier;
  row.querySelector(".spread-work-days").value = totalDays.toFixed(1);
}

// Individual Row Save Commit
function saveIndividualRow(workerId) {
  const row = document.getElementById(`spread-row-${workerId}`);
  if (!row) return;

  const attStatus = row.querySelector(".spread-att-status").value;
  const remarks = row.querySelector(".spread-remarks").value.trim();

  // Find worker in state and update status
  const worker = AppState.workers.find(w => w.id == workerId);
  if (worker) {
    worker.status = attStatus;
  }

  // Trigger JMR loss audit checks
  checkLossAuditTrigger(workerId, remarks);

  // Re-render active report
  renderReportView();

  // Flash the row green to indicate committed success
  row.style.transition = "background-color 0.2s ease";
  row.style.backgroundColor = "rgba(16, 185, 129, 0.15)";
  setTimeout(() => {
    row.style.backgroundColor = "";
  }, 1000);
}

// Batch Save All Rows
function saveShiftAttendance() {
  AppState.workers.forEach(w => {
    const row = document.getElementById(`spread-row-${w.id}`);
    if (row) {
      const attStatus = row.querySelector(".spread-att-status").value;
      w.status = attStatus;
      const remarks = row.querySelector(".spread-remarks").value.trim();
      checkLossAuditTrigger(w.id, remarks);
    }
  });

  renderReportView();
  alert("Shift Attendance Ledger committed. All 40 operator records updated.");
}

// --------------------------------------------------------------------------
// 7. PAGE 5: INVENTORY & MATERIAL STOCK BALANCING LEDGER
// --------------------------------------------------------------------------
function updateInventoryDashboard() {
  let purchased = 0;
  let sent = 0;
  let returned = 0;

  AppState.inventory.forEach(item => {
    if (item.direction === "Inward") purchased += item.qty;
    else if (item.direction === "Outward") sent += item.qty;
    else if (item.direction === "Returned") returned += item.qty;
  });

  // Equation: Live Stock = Purchases - Sent + Returned
  const liveStock = purchased - sent + returned;

  document.getElementById("inv-stat-purchased").innerText = `${purchased} Nos`;
  document.getElementById("inv-stat-sent").innerText = `${sent} Nos`;
  document.getElementById("inv-stat-returned").innerText = `${returned} Nos`;
  document.getElementById("inv-stat-live").innerText = `${liveStock} Nos`;
}

function renderInventoryTable() {
  const tbody = document.getElementById("inventory-ledger-tbody");
  tbody.innerHTML = "";
  
  AppState.inventory.forEach(item => {
    const tr = document.createElement("tr");
    
    // Check for audit discrepancy trigger
    const isDiscrepancy = item.remarks.toLowerCase().includes("lost") || 
                          item.remarks.toLowerCase().includes("missing") || 
                          item.remarks.toLowerCase().includes("stolen");
    
    let directionColor = "var(--color-emerald)";
    if (item.direction === "Outward") directionColor = "var(--color-amber)";
    if (isDiscrepancy) directionColor = "var(--color-crimson)";

    tr.innerHTML = `
      <td style="font-family:monospace;">${item.id}</td>
      <td><strong>${item.brand}</strong></td>
      <td><span style="color:${directionColor}; font-weight:600;">${item.direction}</span></td>
      <td>${item.qty}</td>
      <td>${item.uom}</td>
      <td>${item.operator}</td>
      <td>${item.remarks}</td>
      <td><span class="badge">${item.status}</span></td>
      <td>${isDiscrepancy ? '<span class="discrepancy-badge">Asset Discrepancy Alert</span>' : '-'}</td>
    `;
    tbody.appendChild(tr);
  });
}

function addInventoryMovement() {
  const brand = document.getElementById("inv-brand").value.trim();
  const direction = document.getElementById("inv-direction").value;
  const qty = parseInt(document.getElementById("inv-qty").value) || 0;
  const uom = document.getElementById("inv-uom").value;
  const target = document.getElementById("inv-operator").value.trim() || "Main Warehouse";
  let remarks = document.getElementById("inv-remarks").value.trim() || "-";

  const nextId = 1000 + AppState.inventory.length + 1;
  const transactionId = `TRN-${nextId}`;

  // Sweep operations remarks field for loss/theft strings (loss, theft, missing, stolen)
  const isLossRegex = /(lost|theft|missing|broken|stolen)/i;
  let processedQty = qty;
  let directionMode = direction;

  if (isLossRegex.test(remarks)) {
    // Audit override: Force return inputs to 0, mark transaction as permanent loss
    directionMode = "Lost / Stolen";
    processedQty = 0;
    remarks = `[AUDIT RECOVERY BLOCK] ${remarks} (Quantity adjusted to 0)`;
  }

  const newEntry = {
    id: transactionId,
    brand: brand,
    direction: directionMode,
    qty: processedQty,
    uom: uom,
    operator: target,
    remarks: remarks,
    status: "Active"
  };

  AppState.inventory.push(newEntry);
  document.getElementById("inventory-move-form").reset();
  
  updateInventoryDashboard();
  renderInventoryTable();
  renderReportView();
}

// Loss Auditing Sweeper for Spreadsheet rows
function checkLossAuditTrigger(workerId, text) {
  const row = document.getElementById(`spread-row-${workerId}`);
  const status = row.querySelector(".spread-project-status").value;
  const remarks = row.querySelector(".spread-remarks").value.toLowerCase();
  
  if (status === "Work Done") {
    const isLoss = remarks.includes("lost") || remarks.includes("missing") || remarks.includes("stolen") || remarks.includes("broken");
    if (isLoss) {
      alert(`[ASSET AUDIT TRIGGERED — ID RE-W${workerId}]\nOperator remarks indicate equipment loss/theft. Standard return logs have been suspended. Red Discrepancy flags posted.`);
      // Override tooling inputs in row to 0
      const toolInputs = row.querySelectorAll(".tool-val");
      toolInputs.forEach(i => {
        i.value = 0;
        i.disabled = true;
      });
      
      // Auto-inject a ledger movement entry recording the loss
      const nextId = 1000 + AppState.inventory.length + 1;
      AppState.inventory.push({
        id: `TRN-${nextId}`,
        brand: "Diamond Core Bit / Rig Assets",
        direction: "Lost / Stolen",
        qty: 0,
        uom: "Nos",
        operator: row.querySelector(".col-worker").innerText + " / Powai",
        remarks: `[AUTO-LOSS REMARKS INGESTION] ${row.querySelector(".spread-remarks").value}`,
        status: "Work Done"
      });

      updateInventoryDashboard();
      renderInventoryTable();
      renderReportView();
    }
  }
}

// --------------------------------------------------------------------------
// 8. PAGE 6: FINANCIAL RECONCILIATION & REPORTS LOGIC
// --------------------------------------------------------------------------

function renderReconMatcher() {
  const salesContainer = document.getElementById("recon-sales-list");
  const bankContainer = document.getElementById("recon-bank-list");
  
  salesContainer.innerHTML = "";
  bankContainer.innerHTML = "";

  // Unreconciled Sales Invoices
  const openInvoices = AppState.salesInvoices.filter(i => !i.reconciled);
  if (openInvoices.length === 0) {
    salesContainer.innerHTML = `<div style="padding:20px; font-size:12px; color:var(--text-muted);">All invoices reconciled.</div>`;
  } else {
    openInvoices.forEach(inv => {
      const div = document.createElement("div");
      div.className = "recon-item";
      div.id = `recon-sale-${inv.ref}`;
      div.innerHTML = `
        <div>
          <strong>${inv.clientName}</strong>
          <div style="font-size:10px; color:var(--text-secondary);">${inv.ref} | ${inv.site}</div>
        </div>
        <div style="font-family:monospace; font-weight:700;">Rs. ${inv.amount}</div>
      `;
      div.onclick = () => selectReconItem('sale', inv.ref);
      salesContainer.appendChild(div);
    });
  }

  // Unreconciled Bank statement deposits
  const openDeposits = AppState.bankStatements.filter(d => !d.reconciled);
  if (openDeposits.length === 0) {
    bankContainer.innerHTML = `<div style="padding:20px; font-size:12px; color:var(--text-muted);">All bank statements reconciled.</div>`;
  } else {
    openDeposits.forEach(dep => {
      const div = document.createElement("div");
      div.className = "recon-item";
      div.id = `recon-bank-${dep.id}`;
      div.innerHTML = `
        <div>
          <strong>${dep.description}</strong>
          <div style="font-size:10px; color:var(--text-secondary);">${dep.id}</div>
        </div>
        <div style="font-family:monospace; font-weight:700; color:var(--color-emerald);">Rs. ${dep.amount}</div>
      `;
      div.onclick = () => selectReconItem('bank', dep.id);
      bankContainer.appendChild(div);
    });
  }
}

let selectedSaleRef = null;
let selectedBankId = null;

function selectReconItem(type, key) {
  if (type === 'sale') {
    selectedSaleRef = (selectedSaleRef === key) ? null : key;
  } else {
    selectedBankId = (selectedBankId === key) ? null : key;
  }

  // Visual classes toggled
  document.querySelectorAll("#recon-sales-list .recon-item").forEach(item => item.classList.remove("selected"));
  document.querySelectorAll("#recon-bank-list .recon-item").forEach(item => item.classList.remove("selected"));
  
  if (selectedSaleRef) {
    document.getElementById(`recon-sale-${selectedSaleRef}`).classList.add("selected");
  }
  if (selectedBankId) {
    document.getElementById(`recon-bank-${selectedBankId}`).classList.add("selected");
  }

  // Reconcile matcher check
  const btn = document.getElementById("btn-reconcile-match");
  const feedback = document.getElementById("recon-status-feedback");
  
  if (selectedSaleRef && selectedBankId) {
    const sale = AppState.salesInvoices.find(i => i.ref === selectedSaleRef);
    const bank = AppState.bankStatements.find(d => d.id === selectedBankId);

    if (sale.amount === bank.amount) {
      btn.disabled = false;
      feedback.innerHTML = `<span style="color:var(--color-emerald);"><i class="fa-solid fa-circle-check"></i> Mathematical Match Found! Amount: Rs. ${sale.amount}</span>`;
    } else {
      btn.disabled = true;
      feedback.innerHTML = `<span style="color:var(--color-crimson);"><i class="fa-solid fa-triangle-exclamation"></i> Amount Mismatch (Invoice: Rs ${sale.amount} vs Statement: Rs ${bank.amount})</span>`;
    }
  } else {
    btn.disabled = true;
    feedback.innerText = "Select an outstanding invoice and the matching bank ledger statement deposit.";
  }
}

function performReconciliation() {
  if (selectedSaleRef && selectedBankId) {
    const sale = AppState.salesInvoices.find(i => i.ref === selectedSaleRef);
    const bank = AppState.bankStatements.find(d => d.id === selectedBankId);

    sale.reconciled = true;
    bank.reconciled = true;
    
    selectedSaleRef = null;
    selectedBankId = null;

    renderReconMatcher();
    renderReportView(); // Refresh report metrics
    alert("Reconciliation Ledger updated. Matching items removed from open buckets.");
  }
}

// Overhead logging handler
// --------------------------------------------------------------------------
// 6. PAGE 4: DAILY OPERATIONS CONTROL HUB LOGIC
// --------------------------------------------------------------------------

// Populates drop downs with saved clients
function initHubDropdowns() {
  const bulkClient = document.getElementById("bulk-client-select");
  if (!bulkClient) return;
  bulkClient.innerHTML = '<option value="">-- Choose Client --</option>';
  AppState.clients.forEach(c => {
    bulkClient.innerHTML += `<option value="${c.name}">${c.name}</option>`;
  });
}

// Load logs for selected Date
function loadDateShiftLogs(dateStr) {
  if (!dateStr) return;
  
  // If logs exist for date, load them. Else seed defaults.
  if (!DailyShiftLogs[dateStr]) {
    DailyShiftLogs[dateStr] = AppState.workers.map((worker, index) => {
      // Find worker's last recorded client/site from history if copy is needed, but here we set defaults
      return {
        workerId: worker.id,
        name: worker.name,
        baseWage: worker.wage,
        status: "Present",
        dayMetric: "1.0",
        nightShift: "0",
        travel: 50,
        kharchi: 100,
        client: AppState.clients[0] ? AppState.clients[0].name : "",
        site: "",
        workType: "Core Cutting",
        repair: 0,
        opStatus: "Work Started",
        remarks: "",
        tools: {}, 
        challan: null
      };
    });
  }
  
  buildSpreadsheetGrid(dateStr);
  calculateLiveTotals();
}

// Build Hub main input grid
function buildSpreadsheetGrid(dateStr) {
  const tbody = document.getElementById("attendance-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  
  const logs = DailyShiftLogs[dateStr] || [];
  
  logs.forEach((log, index) => {
    const tr = document.createElement("tr");
    tr.id = `spread-row-${log.workerId}`;
    tr.className = `spreadsheet-row ${log.status === "Absent" ? "row-absent-state" : ""}`;
    
    // Build Client Options
    let clientOptions = `<option value="">-- Select Client --</option>`;
    AppState.clients.forEach(c => {
      clientOptions += `<option value="${c.name}" ${log.client === c.name ? "selected" : ""}>${c.name}</option>`;
    });

    // Build Work Type Options
    const workTypes = ["Core Cutting", "Drilling & Grouting", "Pile Breaking", "Breaker with Operator", "RCC Cutting"];
    let workTypeOptions = "";
    workTypes.forEach(wt => {
      workTypeOptions += `<option value="${wt}" ${log.workType === wt ? "selected" : ""}>${wt}</option>`;
    });

    // Build Op Status Options
    const opStatuses = ["Work Started", "On Progress", "Work Done", "Hold (unavailability of operator)", "Hold (site not accessible)"];
    let opStatusOptions = "";
    opStatuses.forEach(os => {
      opStatusOptions += `<option value="${os}" ${log.opStatus === os ? "selected" : ""}>${os}</option>`;
    });

    tr.innerHTML = `
      <td style="text-align: center;"><input type="checkbox" class="row-select-check" value="${log.workerId}" ${log.status === "Absent" ? "disabled" : ""}></td>
      <td>${index + 1}</td>
      <td><strong>${log.name}</strong> <span style="font-size:11px; opacity:0.7;">(₹${log.baseWage})</span></td>
      <td>
        <select class="spread-att-status" style="width:100%;" onchange="handleAbsentLockout(${log.workerId}, this.value)">
          <option value="Present" ${log.status === "Present" ? "selected" : ""}>Present</option>
          <option value="Absent" ${log.status === "Absent" ? "selected" : ""}>Absent</option>
        </select>
      </td>
      <td>
        <select class="spread-day-metric" style="width:100%;" onchange="calculateRowNetPayable(${log.workerId})" ${log.status === "Absent" ? "disabled" : ""}>
          <option value="1.0" ${log.dayMetric === "1.0" ? "selected" : ""}>Full Day</option>
          <option value="0.5" ${log.dayMetric === "0.5" ? "selected" : ""}>Half Day</option>
        </select>
      </td>
      <td>
        <select class="spread-night-shift" style="width:100%;" onchange="calculateRowNetPayable(${log.workerId})" ${log.status === "Absent" ? "disabled" : ""}>
          <option value="0" ${log.nightShift === "0" ? "selected" : ""}>None(0)</option>
          <option value="1" ${log.nightShift === "1" ? "selected" : ""}>Single(1)</option>
          <option value="2" ${log.nightShift === "2" ? "selected" : ""}>Double(2)</option>
          <option value="3" ${log.nightShift === "3" ? "selected" : ""}>Triple(3)</option>
          <option value="4" ${log.nightShift === "4" ? "selected" : ""}>Fourth(4)</option>
        </select>
      </td>
      <td><input type="number" class="spread-travel" value="${log.travel}" style="width:70px;" oninput="calculateRowNetPayable(${log.workerId})" ${log.status === "Absent" ? "disabled" : ""}></td>
      <td><input type="number" class="spread-kharchi" value="${log.kharchi}" style="width:70px;" oninput="calculateRowNetPayable(${log.workerId})" ${log.status === "Absent" ? "disabled" : ""}></td>
      <td>
        <select class="spread-client" style="width:100%;" ${log.status === "Absent" ? "disabled" : ""}>
          ${clientOptions}
        </select>
      </td>
      <td><input type="text" class="spread-site" value="${log.site}" style="width:100%;" placeholder="Project, Area" ${log.status === "Absent" ? "disabled" : ""}></td>
      <td>
        <select class="spread-work-type" style="width:100%;" onchange="updateToolPresetConfig(${log.workerId}, this.value)" ${log.status === "Absent" ? "disabled" : ""}>
          ${workTypeOptions}
        </select>
      </td>
      <td><input type="number" class="spread-repair" value="${log.repair}" style="width:70px;" oninput="calculateLiveTotals()" ${log.status === "Absent" ? "disabled" : ""}></td>
      <td>
        <select class="spread-op-status" style="width:100%;" onchange="toggleChallanState(${log.workerId}, this.value)" ${log.status === "Absent" ? "disabled" : ""}>
          ${opStatusOptions}
        </select>
      </td>
      <td style="text-align: center;">
        <button type="button" class="btn btn-secondary btn-sm" onclick="openAssetModal(${log.workerId})" ${log.status === "Absent" ? "disabled" : ""} style="padding: 4px 8px;"><i class="fa-solid fa-toolbox"></i> Assets</button>
      </td>
      <td style="text-align: center;">
        <button type="button" class="btn btn-secondary btn-sm" id="btn-jmr-${log.workerId}" onclick="openJmrModal(${log.workerId})" ${log.status === "Absent" || log.opStatus !== "Work Done" ? "disabled" : ""} style="padding: 4px 8px;"><i class="fa-solid fa-file-signature"></i> JMR</button>
      </td>
      <td><input type="text" class="spread-remarks" value="${log.remarks}" style="width:140px;" placeholder="Add remarks..." ${log.status === "Absent" ? "disabled" : ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

// Lock row input states when Absent is toggled
function handleAbsentLockout(workerId, attStatus) {
  const row = document.getElementById(`spread-row-${workerId}`);
  if (!row) return;
  const dateStr = document.getElementById("op-date-picker").value;
  const logs = DailyShiftLogs[dateStr] || [];
  const log = logs.find(l => l.workerId == workerId);
  if (!log) return;

  log.status = attStatus;
  
  if (attStatus === "Absent") {
    row.classList.add("row-absent-state");
    row.querySelectorAll("input, select:not(.spread-att-status), button").forEach(el => el.disabled = true);
    row.querySelector(".row-select-check").checked = false;
    row.querySelector(".row-select-check").disabled = true;
    
    // Zero out numeric attributes
    row.querySelector(".spread-travel").value = 0;
    row.querySelector(".spread-kharchi").value = 0;
    row.querySelector(".spread-repair").value = 0;
  } else {
    row.classList.remove("row-absent-state");
    row.querySelectorAll("input, select, button").forEach(el => el.disabled = false);
    row.querySelector(".row-select-check").disabled = false;
    
    // Reseed operational defaults
    row.querySelector(".spread-travel").value = 50;
    row.querySelector(".spread-kharchi").value = 100;
    row.querySelector(".spread-repair").value = 0;
  }

  calculateRowNetPayable(workerId);
}

// Wage formula: workingDaysEquivalent = dayMetric + (nightShiftLevel * 0.5)
// netWage = workingDaysEquivalent * baseWage + travel - kharchi
function calculateRowNetPayable(workerId) {
  const row = document.getElementById(`spread-row-${workerId}`);
  if (!row) return;

  const attStatus = row.querySelector(".spread-att-status").value;
  if (attStatus === "Absent") {
    calculateLiveTotals();
    return;
  }

  const dayMetric = parseFloat(row.querySelector(".spread-day-metric").value) || 0;
  const nightLevel = parseFloat(row.querySelector(".spread-night-shift").value) || 0;
  const travel = parseFloat(row.querySelector(".spread-travel").value) || 0;
  const kharchi = parseFloat(row.querySelector(".spread-kharchi").value) || 0;
  
  const worker = AppState.workers.find(w => w.id == workerId);
  const baseWage = worker ? worker.wage : 0;

  const workingDaysEquivalent = dayMetric + (nightLevel * 0.5);
  const netWage = (workingDaysEquivalent * baseWage) + travel - kharchi;
  
  calculateLiveTotals();
}

// Dynamic real-time sticky totals aggregator
function calculateLiveTotals() {
  const picker = document.getElementById("op-date-picker");
  if (!picker) return;
  const dateStr = picker.value;
  const logs = DailyShiftLogs[dateStr] || [];
  
  let presentCount = 0;
  let totalWages = 0;
  let totalTravel = 0;
  let totalKharchi = 0;

  logs.forEach(log => {
    const row = document.getElementById(`spread-row-${log.workerId}`);
    if (!row) return;
    
    const attStatus = row.querySelector(".spread-att-status").value;
    if (attStatus === "Present") {
      presentCount++;
      const dayMetric = parseFloat(row.querySelector(".spread-day-metric").value) || 0;
      const nightLevel = parseFloat(row.querySelector(".spread-night-shift").value) || 0;
      const travel = parseFloat(row.querySelector(".spread-travel").value) || 0;
      const kharchi = parseFloat(row.querySelector(".spread-kharchi").value) || 0;
      const baseWage = log.baseWage;

      const workingDaysEquivalent = dayMetric + (nightLevel * 0.5);
      const netWage = (workingDaysEquivalent * baseWage) + travel - kharchi;

      totalWages += netWage;
      totalTravel += travel;
      totalKharchi += kharchi;
    }
  });

  document.getElementById("live-stat-present").innerText = `${presentCount} / 40`;
  document.getElementById("live-stat-wages").innerText = `₹${totalWages.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("live-stat-travel").innerText = `₹${totalTravel.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("live-stat-kharchi").innerText = `₹${totalKharchi.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Toggle Challan button validation dependency status = Work Done
function toggleChallanState(workerId, opStatus) {
  const jmrBtn = document.getElementById(`btn-jmr-${workerId}`);
  if (jmrBtn) {
    jmrBtn.disabled = (opStatus !== "Work Done");
  }
}

// Asset Logistics Modal handlers
function openAssetModal(workerId) {
  const picker = document.getElementById("op-date-picker");
  const dateStr = picker.value;
  const logs = DailyShiftLogs[dateStr] || [];
  const log = logs.find(l => l.workerId == workerId);
  if (!log) return;

  document.getElementById("asset-modal-worker-id").value = workerId;
  document.getElementById("asset-modal-title").innerText = `Asset Logistics for ${log.name}`;
  
  // Set defaults
  document.getElementById("asset-flow-direction").value = "Sent to Site";
  
  // Render Dynamic Tool checkboxes with numbers
  const box = document.getElementById("asset-tools-checklist-box");
  box.innerHTML = "";
  
  const activeWorkType = log.workType || "Core Cutting";
  const toolList = TOOL_PRESETS[activeWorkType] || TOOL_PRESETS["Core Cutting"];
  
  // Current logged tools
  const savedTools = log.tools || {};
  
  toolList.forEach(tool => {
    const qty = savedTools[tool] || 0;
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.innerHTML = `
      <span style="font-size: 13px;">${tool}</span>
      <input type="number" class="modal-tool-qty" data-tool="${tool}" value="${qty}" min="0" style="width: 70px; padding: 4px;">
    `;
    box.appendChild(div);
  });

  document.getElementById("asset-modal").style.display = "flex";
}

function toggleAssetRestockMessage(dir) {
  // Can add dynamic info banner helper if needed
}

function closeAssetModal() {
  document.getElementById("asset-modal").style.display = "none";
}

function commitAssetLogistics() {
  const workerId = document.getElementById("asset-modal-worker-id").value;
  const picker = document.getElementById("op-date-picker");
  const dateStr = picker.value;
  
  const logs = DailyShiftLogs[dateStr] || [];
  const log = logs.find(l => l.workerId == workerId);
  if (!log) return;

  const direction = document.getElementById("asset-flow-direction").value;
  
  // Gather quantities
  const tools = {};
  const toolInputs = document.querySelectorAll(".modal-tool-qty");
  toolInputs.forEach(input => {
    const toolName = input.getAttribute("data-tool");
    const qty = parseInt(input.value) || 0;
    tools[toolName] = qty;
    
    // Save to global logistics flow history for reports
    if (qty > 0) {
      LogisticsHistory.push({
        date: dateStr,
        tool: toolName,
        site: log.site || "General Site",
        operator: log.name,
        direction: direction,
        qty: qty,
        remarks: log.remarks
      });
    }
  });

  log.tools = tools;
  localStorage.setItem("chanarma_logistics_history", JSON.stringify(LogisticsHistory));
  closeAssetModal();
  alert("Asset movement logs committed.");
  renderReportView();
}

// Challan JMR Modal handlers
function openJmrModal(workerId) {
  const picker = document.getElementById("op-date-picker");
  const dateStr = picker.value;
  const logs = DailyShiftLogs[dateStr] || [];
  const log = logs.find(l => l.workerId == workerId);
  if (!log) return;

  document.getElementById("jmr-modal-worker-id").value = workerId;
  document.getElementById("jmr-modal-title").innerText = `Signed Measurement JMR: ${log.name}`;
  
  // Pre-seed inputs
  document.getElementById("jmr-serial-no").value = log.challan ? log.challan.serialNo : `JMR-${workerId}-${dateStr.replace(/-/g, "")}`;
  document.getElementById("jmr-challan-date").value = log.challan ? log.challan.challanDate : dateStr;
  document.getElementById("jmr-engineer-name").value = log.challan ? log.challan.engineer : "";
  document.getElementById("jmr-operator-tag").value = log.challan ? log.challan.operatorTag : "Chanarma Enterprises Rep";

  // Label switching by type of work
  const diaLabel = document.getElementById("jmr-col-label-dia");
  const depthLabel = document.getElementById("jmr-col-label-depth");
  
  if (log.workType === "Drilling & Grouting") {
    diaLabel.innerText = "Steel Dia (mm)";
    depthLabel.innerText = "Depth (Inches)";
  } else {
    diaLabel.innerText = "Core Dia (Inch)";
    depthLabel.innerText = "Depth (Inch)";
  }

  const tbody = document.getElementById("jmr-measurements-tbody");
  tbody.innerHTML = "";

  const savedMeasurements = log.challan ? log.challan.measurements : [{ spec: "", depth: "", qty: 1 }];
  savedMeasurements.forEach(m => {
    addJmrMeasurementRow(m.spec, m.depth, m.qty);
  });

  document.getElementById("jmr-modal").style.display = "flex";
}

function closeJmrModal() {
  document.getElementById("jmr-modal").style.display = "none";
}

function addJmrMeasurementRow(spec = "", depth = "", qty = 1) {
  const tbody = document.getElementById("jmr-measurements-tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="text" class="jmr-row-spec" value="${spec}" placeholder="e.g. 100mm / 16mm" style="width: 100%; padding: 4px;"></td>
    <td><input type="text" class="jmr-row-depth" value="${depth}" placeholder="e.g. 12 Inches" style="width: 100%; padding: 4px;"></td>
    <td><input type="number" class="jmr-row-qty" value="${qty}" min="1" style="width: 100%; padding: 4px;"></td>
    <td style="text-align: center;"><button type="button" class="btn btn-danger btn-sm" onclick="deleteJmrMeasurementRow(this)" style="padding: 2px 6px;"><i class="fa-solid fa-trash"></i></button></td>
  `;
  tbody.appendChild(tr);
}

function deleteJmrMeasurementRow(btn) {
  const tbody = document.getElementById("jmr-measurements-tbody");
  if (tbody.rows.length > 1) {
    btn.closest("tr").remove();
  } else {
    alert("Must log at least one measurement detail.");
  }
}

function commitJmrChallan() {
  const workerId = document.getElementById("jmr-modal-worker-id").value;
  const picker = document.getElementById("op-date-picker");
  const dateStr = picker.value;
  
  const logs = DailyShiftLogs[dateStr] || [];
  const log = logs.find(l => l.workerId == workerId);
  if (!log) return;

  const serialNo = document.getElementById("jmr-serial-no").value.trim();
  const challanDate = document.getElementById("jmr-challan-date").value;
  const engineer = document.getElementById("jmr-engineer-name").value.trim();
  const operatorTag = document.getElementById("jmr-operator-tag").value.trim();

  if (!serialNo || !challanDate || !engineer) {
    alert("Please fill all mandatory JMR parameters marked with *");
    return;
  }

  // Compile measurements rows
  const measurements = [];
  const rows = document.querySelectorAll("#jmr-measurements-tbody tr");
  rows.forEach(row => {
    const spec = row.querySelector(".jmr-row-spec").value.trim();
    const depth = row.querySelector(".jmr-row-depth").value.trim();
    const qty = parseInt(row.querySelector(".jmr-row-qty").value) || 0;
    if (spec && qty > 0) {
      measurements.push({ spec, depth, qty });
    }
  });

  const challanObj = { serialNo, challanDate, engineer, operatorTag, measurements };
  log.challan = challanObj;

  // Save to reports database list
  const existingIdx = ChallansHistory.findIndex(c => c.serialNo === serialNo);
  const challanReportRow = {
    date: dateStr,
    serialNo,
    challanDate,
    siteClient: `${log.site} / ${log.client}`,
    supervisor: engineer,
    operatorTag,
    workType: log.workType,
    measurements
  };

  if (existingIdx >= 0) {
    ChallansHistory[existingIdx] = challanReportRow;
  } else {
    ChallansHistory.push(challanReportRow);
  }

  localStorage.setItem("chanarma_challans_history", JSON.stringify(ChallansHistory));
  closeJmrModal();
  alert("Measurement Challan registered successfully.");
  renderReportView();
}

// Bulk Actions Handler
function applyBulkChanges() {
  const clientVal = document.getElementById("bulk-client-select").value;
  const statusVal = document.getElementById("bulk-status-select").value;
  const picker = document.getElementById("op-date-picker");
  const dateStr = picker.value;
  
  const checkedBoxes = document.querySelectorAll(".row-select-check:checked");
  if (checkedBoxes.length === 0) {
    alert("Please check the operator rows you want to apply bulk changes to.");
    return;
  }

  let count = 0;
  checkedBoxes.forEach(box => {
    const workerId = box.value;
    const row = document.getElementById(`spread-row-${workerId}`);
    if (row) {
      if (clientVal) {
        row.querySelector(".spread-client").value = clientVal;
      }
      if (statusVal) {
        row.querySelector(".spread-op-status").value = statusVal;
        toggleChallanState(workerId, statusVal);
      }
      count++;
    }
  });

  alert(`Bulk updates applied to ${count} checked operators.`);
}

function toggleSelectAllRows(isChecked) {
  const checkboxes = document.querySelectorAll(".row-select-check");
  checkboxes.forEach(box => {
    if (!box.disabled) {
      box.checked = isChecked;
    }
  });
}

// Copy Yesterday's Base Fronts
function copyYesterdayBaseFronts() {
  const picker = document.getElementById("op-date-picker");
  const todayStr = picker.value;
  
  // Find yesterday or prior dates in local storage
  const sortedDates = Object.keys(DailyShiftLogs).sort((a,b) => new Date(b) - new Date(a));
  const priorDates = sortedDates.filter(d => new Date(d) < new Date(todayStr));
  
  if (priorDates.length === 0) {
    alert("No prior days record history found to duplicate fronts from.");
    return;
  }

  const yesterdayStr = priorDates[0];
  const priorLogs = DailyShiftLogs[yesterdayStr];
  const todayLogs = DailyShiftLogs[todayStr] || [];

  priorLogs.forEach(priorLog => {
    const todayLog = todayLogs.find(tl => tl.workerId === priorLog.workerId);
    if (todayLog) {
      todayLog.client = priorLog.client;
      todayLog.site = priorLog.site;
      todayLog.workType = priorLog.workType;
      todayLog.opStatus = priorLog.opStatus;
    }
  });

  buildSpreadsheetGrid(todayStr);
  alert(`Duplicated project sites and clients from prior date: ${yesterdayStr}`);
}

// Save Shift log updates to Local Storage
function saveShiftAttendance() {
  const picker = document.getElementById("op-date-picker");
  const dateStr = picker.value;
  const logs = DailyShiftLogs[dateStr] || [];

  logs.forEach(log => {
    const row = document.getElementById(`spread-row-${log.workerId}`);
    if (row) {
      log.status = row.querySelector(".spread-att-status").value;
      if (log.status !== "Absent") {
        log.dayMetric = row.querySelector(".spread-day-metric").value;
        log.nightShift = row.querySelector(".spread-night-shift").value;
        log.travel = parseFloat(row.querySelector(".spread-travel").value) || 0;
        log.kharchi = parseFloat(row.querySelector(".spread-kharchi").value) || 0;
        log.client = row.querySelector(".spread-client").value;
        log.site = row.querySelector(".spread-site").value.trim();
        log.workType = row.querySelector(".spread-work-type").value;
        log.repair = parseFloat(row.querySelector(".spread-repair").value) || 0;
        log.opStatus = row.querySelector(".spread-op-status").value;
        log.remarks = row.querySelector(".spread-remarks").value.trim();
      } else {
        // Zero attributes out
        log.dayMetric = "0.0";
        log.nightShift = "0";
        log.travel = 0;
        log.kharchi = 0;
        log.repair = 0;
        log.client = "";
        log.site = "";
        log.remarks = "";
      }
    }
  });

  DailyShiftLogs[dateStr] = logs;
  localStorage.setItem("chanarma_daily_shift_logs", JSON.stringify(DailyShiftLogs));
  
  calculateLiveTotals();
  renderReportView();
  alert(`All logs saved successfully for ${dateStr}. Data persisted permanently in LocalStorage.`);
}

// Update tool list dropdown option presets
function updateToolPresetConfig(workerId, wt) {
  // Optionally reset the tool array defaults dynamically
}

// Reports Selector Switcher
function switchReportView(reportId) {
  AppState.currentReport = reportId;
  
  // Sync page select element
  const selector = document.getElementById("report-selector");
  if (selector) selector.value = reportId;
  
  // Sync sidebar active styling
  document.querySelectorAll(".nav-sub-item").forEach(item => {
    if (item.getAttribute("data-report") === reportId) {
      item.classList.add("active");
    } else {
      if (item.getAttribute("data-target") === "page-finance" && !item.getAttribute("data-report")) {
        // Skip general page link
      } else {
        item.classList.remove("active");
      }
    }
  });

  renderReportView();
}

// --------------------------------------------------------------------------
// 8. FOUR LIVE SEARCHABLE REPORT TABS Below Main Grid
// --------------------------------------------------------------------------
function renderReportView() {
  const thead = document.getElementById("report-table-thead");
  const tbody = document.getElementById("report-table-tbody");
  const title = document.getElementById("report-title-text");
  const desc = document.getElementById("report-desc-text");
  
  if (!thead || !tbody) return;
  
  thead.innerHTML = "";
  tbody.innerHTML = "";
  
  // Clear search field value when changing report tabs
  const searchVal = document.getElementById("report-table-search").value.toLowerCase();

  if (AppState.currentReport === "report-site-ledger") {
    // 1. SITE EXPENDITURES LEDGER
    title.innerText = "1. Site Expenditures Ledger";
    desc.innerText = "Consolidated site run costs, total equivalent days, and project access status flags.";
    thead.innerHTML = `
      <tr>
        <th>Date</th>
        <th>Site / Area</th>
        <th>Total Working Days</th>
        <th>Client Account</th>
        <th>Work Scope</th>
        <th>Site Expenses (Travel+Repair)</th>
        <th>Tooling Summary</th>
        <th>Status Badge</th>
      </tr>
    `;

    // Process dates
    Object.keys(DailyShiftLogs).forEach(date => {
      const logs = DailyShiftLogs[date];
      logs.forEach(log => {
        if (log.status === "Absent" || !log.site) return;
        
        // Math formulas
        const dayM = parseFloat(log.dayMetric) || 0;
        const nightL = parseFloat(log.nightShift) || 0;
        const workDaysEq = dayM + (nightL * 0.5);
        const expenses = (log.travel || 0) + (log.repair || 0);
        
        // Tool list summary
        let toolSummaries = [];
        if (log.tools) {
          Object.keys(log.tools).forEach(t => {
            if (log.tools[t] > 0) toolSummaries.push(`${t}:${log.tools[t]}`);
          });
        }
        const toolStr = toolSummaries.length > 0 ? toolSummaries.join(", ") : "None";

        // Filter search matches
        const rowText = `${date} ${log.site} ${log.client} ${log.workType} ${log.opStatus}`.toLowerCase();
        if (searchVal && !rowText.includes(searchVal)) return;

        // Badge color mapping
        let badgeColor = "blue";
        if (log.opStatus === "Work Done") badgeColor = "green";
        else if (log.opStatus === "Work Started") badgeColor = "purple";
        else if (log.opStatus.includes("Hold")) badgeColor = log.opStatus.includes("operator") ? "red" : "orange";

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${date}</td>
          <td><strong>${log.site}</strong></td>
          <td>${workDaysEq.toFixed(1)} Days</td>
          <td>${log.client}</td>
          <td><span style="color: var(--bg-accent-indigo); font-weight:600;">${log.workType}</span></td>
          <td style="font-family: monospace; font-weight:700;">₹${expenses.toFixed(2)}</td>
          <td style="font-size:11px; opacity:0.8;">${toolStr}</td>
          <td><span class="badge" style="background-color: var(--color-${badgeColor}); color: white; padding: 4px 8px; border-radius: 4px; font-size:10.5px;">${log.opStatus}</span></td>
        `;
        tbody.appendChild(tr);
      });
    });
  } 
  
  else if (AppState.currentReport === "report-payroll") {
    // 2. LABOR PAYROLL SHEET
    title.innerText = "2. Labor Payroll Sheet";
    desc.innerText = "Working days, base wage parameters, travel layouts, and payroll net settlements.";
    thead.innerHTML = `
      <tr>
        <th>Date</th>
        <th>Operator</th>
        <th>Mapped Site</th>
        <th>Working Days</th>
        <th>Base Wage</th>
        <th>Travel (₹)</th>
        <th>Kharchi (₹)</th>
        <th>Net Settlement (₹)</th>
      </tr>
    `;

    Object.keys(DailyShiftLogs).forEach(date => {
      const logs = DailyShiftLogs[date];
      logs.forEach(log => {
        // Math calculations
        const dayM = parseFloat(log.dayMetric) || 0;
        const nightL = parseFloat(log.nightShift) || 0;
        const workDaysEq = dayM + (nightL * 0.5);
        const baseWage = log.baseWage;
        const netSettlement = (workDaysEq * baseWage) + (log.travel || 0) - (log.kharchi || 0);

        const rowText = `${date} ${log.name} ${log.site}`.toLowerCase();
        if (searchVal && !rowText.includes(searchVal)) return;

        const tr = document.createElement("tr");
        if (log.status === "Absent") {
          tr.style.opacity = "0.5";
          tr.style.backgroundColor = "var(--bg-tertiary)";
        }

        tr.innerHTML = `
          <td>${date}</td>
          <td><strong>${log.name}</strong></td>
          <td>${log.status === "Absent" ? '<span style="color:var(--color-red);">Absent</span>' : log.site}</td>
          <td>${workDaysEq.toFixed(1)} Days</td>
          <td style="font-family: monospace;">₹${baseWage}</td>
          <td style="font-family: monospace;">₹${log.travel}</td>
          <td style="font-family: monospace; color: #be123c;">₹${log.kharchi}</td>
          <td style="font-family: monospace; font-weight: 700; color: var(--color-emerald);">₹${netSettlement.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
      });
    });
  } 
  
  else if (AppState.currentReport === "report-logistics") {
    // 3. ASSET LOGISTICS FLOW MAP
    title.innerText = "3. Asset Logistics Flow Map";
    desc.innerText = "Tool dispatches and returns across project sites. Red flags indicate lost/missing audit trails.";
    thead.innerHTML = `
      <tr>
        <th>Date</th>
        <th>Tool / Machinery</th>
        <th>Site (Area)</th>
        <th>Operator Incharge</th>
        <th>Movement Direction</th>
        <th>Quantity</th>
        <th>Audit Flag Warnings</th>
      </tr>
    `;

    const filteredLogistics = LogisticsHistory.filter(item => {
      const rowText = `${item.date} ${item.tool} ${item.site} ${item.operator} ${item.direction} ${item.remarks}`.toLowerCase();
      return !searchVal || rowText.includes(searchVal);
    });

    if (filteredLogistics.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color: var(--text-muted); padding: 30px;">No asset movement logs matched.</td></tr>`;
    } else {
      filteredLogistics.forEach(item => {
        const isDiscrepancy = item.remarks && (item.remarks.toLowerCase().includes("lost") || item.remarks.toLowerCase().includes("missing"));
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${item.date}</td>
          <td><strong>${item.tool}</strong></td>
          <td>${item.site}</td>
          <td>${item.operator}</td>
          <td><span style="color: ${item.direction.includes("Sent") ? "var(--color-amber)" : "var(--color-emerald)"}; font-weight:700;">${item.direction}</span></td>
          <td>${item.qty} Nos</td>
          <td>${isDiscrepancy ? '<span style="background-color: var(--color-red); color: white; padding: 2px 6px; border-radius: 4px; font-size:10px; font-weight:700;">Discrepancy Flag</span>' : '-'}</td>
        `;
        tbody.appendChild(tr);
      });
    }
  } 
  
  else if (AppState.currentReport === "report-challans") {
    // 4. CHALLAN/JMR SUMMARY REPORT
    title.innerText = "4. Challan / JMR Summary Report";
    desc.innerText = "Registered measurement bills countersigned by project site engineers.";
    thead.innerHTML = `
      <tr>
        <th>Date</th>
        <th>Challan No</th>
        <th>Challan Date</th>
        <th>Site / Client</th>
        <th>Supervisor</th>
        <th>Company Tag</th>
        <th>Work Type</th>
        <th>Measurement Data Matrix</th>
      </tr>
    `;

    const filteredChallans = ChallansHistory.filter(item => {
      const rowText = `${item.date} ${item.serialNo} ${item.siteClient} ${item.supervisor} ${item.workType}`.toLowerCase();
      return !searchVal || rowText.includes(searchVal);
    });

    if (filteredChallans.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color: var(--text-muted); padding: 30px;">No signed JMR measurement challans matching search criteria.</td></tr>`;
    } else {
      filteredChallans.forEach(item => {
        let nestedRows = "";
        if (item.measurements) {
          item.measurements.forEach(m => {
            nestedRows += `<div>Spec: <strong>${m.spec}</strong> | Depth: <strong>${m.depth}</strong> | Nos: <strong>${m.qty}</strong></div>`;
          });
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${item.date}</td>
          <td style="font-family: monospace; font-weight: 700; color: var(--bg-accent-indigo);">${item.serialNo}</td>
          <td>${item.challanDate}</td>
          <td>${item.siteClient}</td>
          <td>${item.supervisor}</td>
          <td>${item.operatorTag}</td>
          <td><span class="badge" style="background-color: var(--bg-accent-indigo-hover); color: white; padding: 2px 6px; border-radius: 4px; font-size:10.5px;">${item.workType}</span></td>
          <td style="font-size: 11px; line-height: 1.5; color: var(--text-main);">${nestedRows || "—"}</td>
        `;
        tbody.appendChild(tr);
      });
    }
  }
}

// Export Filtered CSV respects current search filter
function exportReportToCSV() {
  const table = document.getElementById("finance-report-table");
  if (!table) return;
  const headers = table.querySelectorAll("thead th");
  const rows = table.querySelectorAll("tbody tr");
  
  let csvContent = [];
  
  // Extract headers
  let headerRow = [];
  headers.forEach(h => headerRow.push(`"${h.innerText.replace(/"/g, '""')}"`));
  csvContent.push(headerRow.join(","));

  // Extract visible filtered rows
  rows.forEach(row => {
    if (row.style.display !== "none" && row.innerText.trim() !== "") {
      let rowData = [];
      const cells = row.querySelectorAll("td");
      cells.forEach(c => {
        let text = c.innerText.replace(/₹/, "").trim(); // clean currency symbols
        rowData.push(`"${text.replace(/"/g, '""')}"`);
      });
      csvContent.push(rowData.join(","));
    }
  });

  const csvString = csvContent.join("\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `Chanarma_Enterprises_${AppState.currentReport}_Export.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ==========================================================================
// HOME PAGE RENDERING ENGINE & LOGIC
// ==========================================================================

// Pre-seeded Admin Tasks
let adminTasks = [
  { id: 1, title: "Follow up with Super AV Infrastructure on invoice RE-2026-QT088 payment status.", priority: "Urgent" },
  { id: 2, title: "Review Hilti RE 500 chemical anchoring product inventory levels.", priority: "Normal" },
  { id: 3, title: "Submit operator attendance sheet for L&T Powai Site to billing coordinator.", priority: "Low" }
];

// Initialize Home Page rendering
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
});

// Main orchestrator to render all 4 cards on the Home Page
function renderHomePage() {
  renderHomeActiveSites();
  renderHomeSiteExpenses();
  renderHomeRemainingWork();
  renderHomeTodoTasks();
}

// A. Render Card A: Active Sites for Today
function renderHomeActiveSites() {
  const tbody = document.getElementById("home-active-sites-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  // Filter Present / Half Day operators from AppState.workers
  const activeWorkers = AppState.workers.filter(w => w.status === "Present" || w.status === "Half Day");

  if (activeWorkers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: var(--text-muted); padding: 20px;">No operators active today.</td></tr>`;
    return;
  }

  let rowsCount = 0;
  activeWorkers.forEach(w => {
    // Support multiple sites per operator by splitting by commas/semicolons
    const sites = (w.site || "General Site").split(/[,;]|\band\b/).map(s => s.trim()).filter(Boolean);
    const siteContact = "Mr. Rajesh Kumar";
    const siteMobile = "+91 98200 45678";
    const workerMobile = "+91 97690 " + (10000 + w.id).toString().substring(1);

    sites.forEach(siteName => {
      rowsCount++;
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="font-weight: 600; color: var(--bg-accent-indigo);">${siteName}</td>
        <td>${w.name}</td>
        <td><span class="badge badge-success" style="font-size: 11px; padding: 4px 8px;">${w.role || "Operator"}</span></td>
        <td>${siteContact}</td>
        <td>${siteMobile}</td>
        <td>${workerMobile}</td>
      `;
      tbody.appendChild(tr);
    });
  });

  if (rowsCount === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: var(--text-muted); padding: 20px;">No operators active today.</td></tr>`;
  }
}

// B. Render Card B: Site-wise Expense Tracker
function renderHomeSiteExpenses() {
  const tbody = document.getElementById("home-site-expenses-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const siteExpenses = {};

  // 1. Calculate payroll expense per site from present operators
  AppState.workers.forEach(w => {
    if (w.status === "Present" || w.status === "Half Day") {
      const dailyWage = w.wage || 0;
      const travelAllowance = 100; // default travel
      const foodAllowance = 200; // default food (kharchi)
      const cost = dailyWage + travelAllowance + foodAllowance;
      
      // Support multiple sites per operator by splitting and distributing cost
      const sites = (w.site || "General Site").split(/[,;]|\band\b/).map(s => s.trim()).filter(Boolean);
      if (sites.length > 0) {
        const distributedCost = cost / sites.length;
        sites.forEach(siteName => {
          siteExpenses[siteName] = (siteExpenses[siteName] || 0) + distributedCost;
        });
      }
    }
  });

  // 2. Add site-wise overhead expenses
  if (AppState.overheads) {
    AppState.overheads.forEach(oh => {
      if (oh.site && oh.site !== "Main Office") {
        siteExpenses[oh.site] = (siteExpenses[oh.site] || 0) + (oh.amount || 0);
      }
    });
  }

  // Convert to sorted array (highest to lowest)
  const sortedExpenses = Object.entries(siteExpenses).map(([name, val]) => ({
    name,
    val
  })).sort((a, b) => b.val - a.val);

  if (sortedExpenses.length === 0) {
    tbody.innerHTML = `<tr><td colspan="2" style="text-align:center; color: var(--text-muted); padding: 20px;">No expenses recorded.</td></tr>`;
    return;
  }

  sortedExpenses.forEach(site => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="font-weight: 600;">${site.name}</td>
      <td style="color: var(--color-emerald); font-weight: 700;">₹ ${site.val.toLocaleString("en-IN")}</td>
    `;
    tbody.appendChild(tr);
  });
}

// C. Render Card C: Remaining Work
function renderHomeRemainingWork() {
  const tbody = document.getElementById("home-remaining-work-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  // Get New Work entries from entryLogData.newwork
  const newWorkItems = entryLogData.newwork || [];
  // Filter pending / to-do items
  const pendingItems = newWorkItems.filter(item => {
    const status = item["newwork-status"] || "Pending";
    return status === "Pending" || status === "Pending (To-Do)";
  });

  if (pendingItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--text-muted); padding: 20px;">No remaining pending work. All caught up!</td></tr>`;
    return;
  }

  pendingItems.forEach(item => {
    const tr = document.createElement("tr");
    let val = parseFloat(item["newwork-est-value"]);
    let formattedVal = isNaN(val) ? "—" : "₹ " + val.toLocaleString("en-IN");
    tr.innerHTML = `
      <td>${item["newwork-date"] || "—"}</td>
      <td style="font-weight: 600;">${item["newwork-client"] || "—"}</td>
      <td>${item["newwork-site"] || "—"}</td>
      <td>${item["newwork-type"] || "—"}</td>
      <td style="font-weight: 700; color: var(--bg-accent-indigo);">${formattedVal}</td>
    `;
    tbody.appendChild(tr);
  });
}

// D. Render Card D: Admin Task/Query List
function renderHomeTodoTasks() {
  const tbody = document.getElementById("home-todo-list-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (adminTasks.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color: var(--text-muted); padding: 20px;">No active tasks. Good job!</td></tr>`;
    return;
  }

  adminTasks.forEach((t, i) => {
    const priorityColor = t.priority === "Urgent" ? "red" : (t.priority === "Normal" ? "orange" : "gray");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td style="font-size: 12.5px; line-height: 1.5; color: var(--text-main);">${t.title}</td>
      <td><span style="display:inline-block; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 700; text-transform: uppercase; background-color: rgba(0,0,0,0.05); color: ${priorityColor};">${t.priority}</span></td>
      <td>
        <button type="button" class="btn btn-success btn-sm" onclick="removeAdminTask(${t.id})" title="Complete Task" style="padding: 2px 6px;"><i class="fa-solid fa-check"></i> Done</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Add Admin Task from Home Page quick input
function addAdminTaskFromHome() {
  const titleEl = document.getElementById("home-task-title");
  const priorityEl = document.getElementById("home-task-priority");
  if (!titleEl || !titleEl.value.trim()) {
    alert("Please enter a task description.");
    return;
  }
  const newTask = {
    id: Date.now(),
    title: titleEl.value.trim(),
    priority: priorityEl.value
  };
  adminTasks.push(newTask);
  titleEl.value = "";
  renderHomeTodoTasks();
}

// Add Admin Task from Entry Log view
function addAdminTaskFromLog() {
  const titleEl = document.getElementById("log-task-title");
  const priorityEl = document.getElementById("log-task-priority");
  if (!titleEl || !titleEl.value.trim()) {
    alert("Please enter a task description.");
    return;
  }
  const newTask = {
    id: Date.now(),
    title: titleEl.value.trim(),
    priority: priorityEl.value
  };
  adminTasks.push(newTask);
  titleEl.value = "";
  alert("Task logged successfully and sent to Home Page!");
  renderHomeTodoTasks();
}

// Complete/Delete task handler
function removeAdminTask(id) {
  adminTasks = adminTasks.filter(t => t.id !== id);
  renderHomeTodoTasks();
}

// Wrap original addEntryLog call to also update Home Page cards
const originalAddEntryLog = addEntryLog;
addEntryLog = function(type) {
  originalAddEntryLog(type);
  if (type === "newwork") {
    renderHomeRemainingWork();
  }
};

// Reset search input queries when rebuilding the home page
const originalRenderHomePage = renderHomePage;
renderHomePage = function() {
  const sSearch = document.getElementById("home-sites-search");
  const eSearch = document.getElementById("home-expenses-search");
  if (sSearch) sSearch.value = "";
  if (eSearch) eSearch.value = "";
  originalRenderHomePage();
};

// Active Sites table search filter
function filterHomeActiveSites() {
  const query = document.getElementById("home-sites-search").value.toLowerCase();
  const rows = document.querySelectorAll("#home-active-sites-table tbody tr");
  
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(query) ? "" : "none";
  });
}

// Expenses table search filter
function filterHomeExpenses() {
  const query = document.getElementById("home-expenses-search").value.toLowerCase();
  const rows = document.querySelectorAll("#home-site-expenses-table tbody tr");
  
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(query) ? "" : "none";
  });
}

// --------------------------------------------------------------------------
// CLIENT REGISTRATION ENGINE
// --------------------------------------------------------------------------

// Pre-fill existing client database records with mapped schema for multi-site
function initClientRegistrySchema() {
  const preseededSites = {
    "CL-001": [
      {
        siteId: "CL-001-A",
        siteName: "Bandra Highway Bypass",
        siteZone: "Bandra",
        siteAddress: "Plot No. 12, Highway Bypass Road, Bandra East",
        stakeholders: {
          incharge: "Nitin Patil", inchargeMobile: "9820011223",
          pm: "Amit Shinde", pmMobile: "9769011224",
          qaqc: "Karan Johar", qaqcMobile: "9930011225",
          safety: "Dinesh Sharma", safetyMobile: "9167011226",
          billing: "Sunil Yadav", billingMobile: "9892011227"
        }
      }
    ],
    "CL-002": [
      {
        siteId: "CL-002-A",
        siteName: "L&T Powai Site",
        siteZone: "Powai",
        siteAddress: "Gate 1, Saki Vihar Road, Powai, Mumbai",
        stakeholders: {
          incharge: "Suresh Kumar", inchargeMobile: "9820022334",
          pm: "Anil Patil", pmMobile: "9769022335",
          qaqc: "Vikram Rathore", qaqcMobile: "9930022336",
          safety: "Amit Mishra", safetyMobile: "9167022337",
          billing: "Pooja Hegde", billingMobile: "9892022338"
        }
      }
    ],
    "CL-003": [
      {
        siteId: "CL-003-A",
        siteName: "Tata Projects Powai Site",
        siteZone: "Powai",
        siteAddress: "Tata Hangar Site, Powai, Mumbai",
        stakeholders: {
          incharge: "Vijay Patel", inchargeMobile: "9820033445",
          pm: "Mahesh Shinde", pmMobile: "9769033446",
          qaqc: "Sanjay Dutta", qaqcMobile: "9930033447",
          safety: "Ramesh Gowda", safetyMobile: "9167033448",
          billing: "Sachin More", billingMobile: "9892033449"
        }
      },
      {
        siteId: "CL-003-B",
        siteName: "Tata Hangar Site B",
        siteZone: "Powai",
        siteAddress: "Plot B, Tata Hangar Site, Powai, Mumbai",
        stakeholders: {
          incharge: "Vijay Patel", inchargeMobile: "9820033445",
          pm: "Mahesh Shinde", pmMobile: "9769033446",
          qaqc: "Sanjay Dutta", qaqcMobile: "9930033447",
          safety: "Ramesh Gowda", safetyMobile: "9167033448",
          billing: "Sachin More", billingMobile: "9892033449"
        }
      }
    ]
  };

  AppState.clients.forEach(c => {
    if (!c.sites) {
      c.sites = preseededSites[c.id] || [];
    }
  });

  renderClientsRegistryTable();
  resetClientRegistrationForm();
}

// Render the client list table
function renderClientsRegistryTable() {
  const tbody = document.getElementById("clients-registry-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  AppState.clients.forEach(client => {
    if (!client.sites || client.sites.length === 0) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="font-family: monospace; font-weight: 700; color: var(--text-muted);">${client.id}</td>
        <td><strong>${client.name}</strong></td>
        <td>${client.gstin}</td>
        <td colspan="5" style="text-align: center; color: var(--text-muted);">No active project sites mapped.</td>
      `;
      tbody.appendChild(tr);
    } else {
      client.sites.forEach(site => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td style="font-family: monospace; font-weight: 700; color: var(--text-muted);">${client.id}</td>
          <td><strong>${client.name}</strong></td>
          <td>${client.gstin}</td>
          <td style="font-family: monospace; font-weight: 700; color: var(--bg-accent-indigo);">${site.siteId}</td>
          <td><strong>${site.siteName}</strong></td>
          <td>${site.siteZone}</td>
          <td>${site.siteAddress}</td>
          <td style="font-size: 11px; line-height: 1.5;">
            <div>Incharge: <strong>${site.stakeholders.incharge}</strong> (${site.stakeholders.inchargeMobile})</div>
            <div>PM: <strong>${site.stakeholders.pm}</strong> (${site.stakeholders.pmMobile})</div>
            <div>Billing: <strong>${site.stakeholders.billing}</strong> (${site.stakeholders.billingMobile})</div>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }
  });
}

// Auto-suggest lookup input change handler
function handleClientNameSearchInput() {
  const nameInput = document.getElementById("reg-client-name");
  const banner = document.getElementById("client-match-banner");
  const gstinInput = document.getElementById("reg-client-gstin");
  const addressInput = document.getElementById("reg-client-address");
  const clientIdInput = document.getElementById("reg-client-id");
  const siteIdInput = document.getElementById("reg-site-id");

  if (!nameInput) return;

  const query = nameInput.value.trim().toLowerCase();
  const matchedClient = AppState.clients.find(c => c.name.toLowerCase() === query);

  if (matchedClient) {
    // Entity match detected
    banner.style.display = "flex";
    clientIdInput.value = matchedClient.id;
    gstinInput.value = matchedClient.gstin;
    gstinInput.readOnly = true;
    addressInput.value = matchedClient.address;
    addressInput.readOnly = true;

    // Calculate next alphabetical suffix
    const existingSitesCount = matchedClient.sites ? matchedClient.sites.length : 0;
    const nextChar = String.fromCharCode(65 + existingSitesCount); // 65 is 'A'
    siteIdInput.value = `${matchedClient.id}-${nextChar}`;
  } else {
    // New entity
    banner.style.display = "none";
    gstinInput.readOnly = false;
    addressInput.readOnly = false;

    // Calculate next sequential client ID
    const clientIds = AppState.clients.map(c => parseInt(c.id.split("-")[1]) || 0);
    const nextNum = clientIds.length > 0 ? Math.max(...clientIds) + 1 : 1;
    const nextClientId = `CL-${String(nextNum).padStart(3, "0")}`;
    
    clientIdInput.value = nextClientId;
    rowText = `${nextClientId}-A`;
    siteIdInput.value = rowText;
  }
}

// Reset Client Registration form state
function resetClientRegistrationForm() {
  const form = document.getElementById("client-registration-form");
  if (form) form.reset();

  const banner = document.getElementById("client-match-banner");
  if (banner) banner.style.display = "none";

  const gstinInput = document.getElementById("reg-client-gstin");
  const addressInput = document.getElementById("reg-client-address");
  if (gstinInput) gstinInput.readOnly = false;
  if (addressInput) addressInput.readOnly = false;

  handleClientNameSearchInput();
}

// Form commit handler
function handleClientRegisterSubmit() {
  const nameInput = document.getElementById("reg-client-name");
  const clientIdInput = document.getElementById("reg-client-id");
  const gstinInput = document.getElementById("reg-client-gstin");
  const addressInput = document.getElementById("reg-client-address");

  const siteIdInput = document.getElementById("reg-site-id");
  const siteNameInput = document.getElementById("reg-site-name");
  const siteZoneInput = document.getElementById("reg-site-zone");
  const siteAddressInput = document.getElementById("reg-site-address");

  const shInchargeName = document.getElementById("sh-incharge-name").value;
  const shInchargeMobile = document.getElementById("sh-incharge-mobile").value;
  const shPmName = document.getElementById("sh-pm-name").value;
  const shPmMobile = document.getElementById("sh-pm-mobile").value;
  const shQaName = document.getElementById("sh-qa-name").value;
  const shQaMobile = document.getElementById("sh-qa-mobile").value;
  const shSafetyName = document.getElementById("sh-safety-name").value;
  const shSafetyMobile = document.getElementById("sh-safety-mobile").value;
  const shBillingName = document.getElementById("sh-billing-name").value;
  const shBillingMobile = document.getElementById("sh-billing-mobile").value;

  const clientId = clientIdInput.value;
  const clientName = nameInput.value.trim();
  const siteId = siteIdInput.value;

  let clientObj = AppState.clients.find(c => c.id === clientId);

  if (!clientObj) {
    // Create new client object
    clientObj = {
      id: clientId,
      name: clientName,
      gstin: gstinInput.value.trim(),
      address: addressInput.value.trim(),
      suffixes: [],
      sites: []
    };
    AppState.clients.push(clientObj);
  }

  // Push site mapping
  const suffix = siteId.split("-")[2];
  if (!clientObj.suffixes.includes(suffix)) {
    clientObj.suffixes.push(suffix);
  }

  clientObj.sites.push({
    siteId: siteId,
    siteName: siteNameInput.value.trim(),
    siteZone: siteZoneInput.value.trim(),
    siteAddress: siteAddressInput.value.trim(),
    stakeholders: {
      incharge: shInchargeName, inchargeMobile: shInchargeMobile,
      pm: shPmName, pmMobile: shPmMobile,
      qaqc: shQaName, qaqcMobile: shQaMobile,
      safety: shSafetyName, safetyMobile: shSafetyMobile,
      billing: shBillingName, billingMobile: shBillingMobile
    }
  });

  alert(`Client & Site Registration committed successfully!\nClient: ${clientName} (${clientId})\nSite Suffix: ${suffix}`);
  
  renderClientsRegistryTable();
  resetClientRegistrationForm();
}

// Run bootstrap client schemas
document.addEventListener("DOMContentLoaded", () => {
  initClientRegistrySchema();
  
  // Custom navigation listener check for Client tab
  document.querySelectorAll(".nav-sub-item").forEach(item => {
    item.addEventListener("click", () => {
      if (item.getAttribute("data-target") === "page-reg-client") {
        renderClientsRegistryTable();
      }
    });
  });
});

// ==========================================================================
// NATIVE BOQ CIVIL BILLING SYSTEM ENGINE
// ==========================================================================

// Global state for BOQ sheets
let boqState = {
  drill: [
    {
      sr: 1, jmr: "JMR/083/01", date: "2026-04-10", desc: "Slab Grouting Work - Zone A",
      rows: [
        { id: 1, dia: 12, nos: 15, depth: 150, unit: "Nos" },
        { id: 2, dia: 16, nos: 10, depth: 200, unit: "Inch" }
      ]
    }
  ],
  core: [
    {
      sr: 1, jmr: "JMR/083/02", date: "2026-04-12", desc: "Core Cutting - Shear Wall",
      rows: [
        { id: 1, dia: 4, nos: 5, depth: 300, unit: "Inch" }
      ]
    }
  ],
  breaker: [
    { sr: 1, eqId: "BRK-L01", date: "2026-04-14", jmr: "JMR/083/03", unit: "Shift", opName: "Dinesh Sharma", hours: 8, qty: 1, light: 1, heavy: 0, remarks: "Light slab chipping" }
  ]
};

// Rates definition
const BOQ_RATES = {
  drill: { 8: 88, 10: 122, 12: 172, 16: 283, 20: 354, 25: 450, 32: 600 },
  core: { 2: 180, 3: 250, 4: 380, 5: 520, 6: 680, 8: 980, 10: 1400 },
  breaker: { light: 3200, heavy: 4800 }
};

// Bootstrap BOQ layout
document.addEventListener("DOMContentLoaded", () => {
  renderBOQDrillTable();
  renderBOQCoreTable();
  renderBOQBreakerTable();
  calculateBOQMetrics();
});

// Tab Switcher
function switchBOQTab(tabId) {
  document.querySelectorAll(".boq-tab-view").forEach(view => view.style.display = "none");
  const activeView = document.getElementById(tabId);
  if (activeView) activeView.style.display = "block";

  const headers = document.querySelectorAll("#boq-tab-headers button");
  headers.forEach(h => {
    h.classList.remove("btn-primary");
    h.classList.add("btn-secondary");
  });

  const activeBtn = {
    "boq-tab-drill": "btn-boq-drill",
    "boq-tab-core": "btn-boq-core",
    "boq-tab-breaker": "btn-boq-breaker",
    "boq-tab-abstract": "btn-boq-abstract",
    "boq-tab-invoice": "btn-boq-invoice"
  }[tabId];
  
  const btn = document.getElementById(activeBtn);
  if (btn) {
    btn.classList.remove("btn-secondary");
    btn.classList.add("btn-primary");
  }
}

// Add JMR Block
function addJMRBlock(type) {
  const blocks = boqState[type];
  const nextSr = blocks.length + 1;
  const newBlock = {
    sr: nextSr,
    jmr: `JMR/083/${String(nextSr).padStart(2, "0")}`,
    date: new Date().toISOString().split("T")[0],
    desc: `${type === "drill" ? "Drilling" : "Core Cutting"} work`,
    rows: [{ id: Date.now(), dia: type === "drill" ? 12 : 4, nos: 10, depth: 150, unit: type === "drill" ? "Nos" : "Inch" }]
  };
  blocks.push(newBlock);
  
  if (type === "drill") renderBOQDrillTable();
  else renderBOQCoreTable();
  calculateBOQMetrics();
}

// Add Row inside JMR block
function addRowToJMR(type, blockIndex) {
  const block = boqState[type][blockIndex];
  block.rows.push({
    id: Date.now(),
    dia: type === "drill" ? 12 : 4,
    nos: 10,
    depth: 150,
    unit: type === "drill" ? "Nos" : "Inch"
  });

  if (type === "drill") renderBOQDrillTable();
  else renderBOQCoreTable();
  calculateBOQMetrics();
}

// Delete Row inside JMR block
function deleteRowFromJMR(type, blockIndex, rowIndex) {
  const block = boqState[type][blockIndex];
  if (block.rows.length <= 1) {
    // Delete block entirely if it was the last row
    boqState[type].splice(blockIndex, 1);
    // Reindex remaining blocks
    boqState[type].forEach((b, i) => b.sr = i + 1);
  } else {
    block.rows.splice(rowIndex, 1);
  }

  if (type === "drill") renderBOQDrillTable();
  else renderBOQCoreTable();
  calculateBOQMetrics();
}

// Update row values
function updateBOQRowValue(type, blockIndex, rowIndex, field, value) {
  const block = boqState[type][blockIndex];
  const row = block.rows[rowIndex];
  if (field === "dia" || field === "nos" || field === "depth") {
    row[field] = parseFloat(value) || 0;
  } else {
    row[field] = value;
  }
  
  // Recalculate and update row inline values
  if (type === "drill") renderBOQDrillTable();
  else renderBOQCoreTable();
  calculateBOQMetrics();
}

// Update JMR header details
function updateJMRHeader(type, blockIndex, field, value) {
  const block = boqState[type][blockIndex];
  block[field] = value;
}

// RENDER: Drilling Sheet
function renderBOQDrillTable() {
  const tbody = document.getElementById("boq-drill-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  boqState.drill.forEach((block, blockIdx) => {
    block.rows.forEach((row, rowIdx) => {
      const tr = document.createElement("tr");
      
      // Calculate Length in Inch = depth / 25.4
      const lengthInInch = row.depth / 25.4;
      
      // Routing Columns
      const routedVals = { 8: "-", 10: "-", 12: "-", 16: "-", 20: "-", 25: "-", 32: "-" };
      const activeDia = row.dia;
      if (routedVals.hasOwnProperty(activeDia)) {
        if (row.unit === "Nos") {
          routedVals[activeDia] = row.nos;
        } else {
          routedVals[activeDia] = (row.nos * lengthInInch).toFixed(2);
        }
      }

      // Grouped JMR block fields span row count
      const isFirstRow = (rowIdx === 0);
      const rowSpan = block.rows.length;

      tr.innerHTML = `
        ${isFirstRow ? `<td rowspan="${rowSpan}" style="vertical-align: middle; text-align: center; font-weight:700;">${block.sr}</td>` : ""}
        ${isFirstRow ? `<td rowspan="${rowSpan}" style="vertical-align: middle;"><input type="text" value="${block.jmr}" onchange="updateJMRHeader('drill', ${blockIdx}, 'jmr', this.value)" style="width:100%;"></td>` : ""}
        ${isFirstRow ? `<td rowspan="${rowSpan}" style="vertical-align: middle;"><input type="date" value="${block.date}" onchange="updateJMRHeader('drill', ${blockIdx}, 'date', this.value)" style="width:100%;"></td>` : ""}
        ${isFirstRow ? `<td rowspan="${rowSpan}" style="vertical-align: middle;"><input type="text" value="${block.desc}" onchange="updateJMRHeader('drill', ${blockIdx}, 'desc', this.value)" style="width:100%;"></td>` : ""}
        
        <td>
          <select onchange="updateBOQRowValue('drill', ${blockIdx}, ${rowIdx}, 'dia', this.value)" style="width:100%;">
            <option value="8" ${row.dia == 8 ? "selected" : ""}>8mm</option>
            <option value="10" ${row.dia == 10 ? "selected" : ""}>10mm</option>
            <option value="12" ${row.dia == 12 ? "selected" : ""}>12mm</option>
            <option value="16" ${row.dia == 16 ? "selected" : ""}>16mm</option>
            <option value="20" ${row.dia == 20 ? "selected" : ""}>20mm</option>
            <option value="25" ${row.dia == 25 ? "selected" : ""}>25mm</option>
            <option value="32" ${row.dia == 32 ? "selected" : ""}>32mm</option>
          </select>
        </td>
        <td><input type="number" value="${row.nos}" min="1" oninput="updateBOQRowValue('drill', ${blockIdx}, ${rowIdx}, 'nos', this.value)" style="width:100%; text-align:center;"></td>
        <td><input type="number" value="${row.depth}" min="1" oninput="updateBOQRowValue('drill', ${blockIdx}, ${rowIdx}, 'depth', this.value)" style="width:100%; text-align:center;"></td>
        <td>
          <select onchange="updateBOQRowValue('drill', ${blockIdx}, ${rowIdx}, 'unit', this.value)" style="width:100%;">
            <option value="Nos" ${row.unit === "Nos" ? "selected" : ""}>Nos</option>
            <option value="Inch" ${row.unit === "Inch" ? "selected" : ""}>Inch</option>
          </select>
        </td>
        <td style="font-family: monospace;">${lengthInInch.toFixed(2)}</td>
        
        <td style="font-family: monospace;">${routedVals[8]}</td>
        <td style="font-family: monospace;">${routedVals[10]}</td>
        <td style="font-family: monospace;">${routedVals[12]}</td>
        <td style="font-family: monospace;">${routedVals[16]}</td>
        <td style="font-family: monospace;">${routedVals[20]}</td>
        <td style="font-family: monospace;">${routedVals[25]}</td>
        <td style="font-family: monospace;">${routedVals[32]}</td>
        
        <td class="no-print" style="text-align:center; vertical-align: middle;">
          <div style="display:flex; gap:4px; justify-content:center;">
            ${isFirstRow ? `<button type="button" class="btn btn-primary btn-sm" onclick="addRowToJMR('drill', ${blockIdx})" title="Add Row"><i class="fa-solid fa-plus"></i></button>` : ""}
            <button type="button" class="btn btn-danger btn-sm" onclick="deleteRowFromJMR('drill', ${blockIdx}, ${rowIdx})" title="Delete Row"><i class="fa-solid fa-trash"></i></button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  });
}

// RENDER: Core Cutting Sheet
function renderBOQCoreTable() {
  const tbody = document.getElementById("boq-core-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  boqState.core.forEach((block, blockIdx) => {
    block.rows.forEach((row, rowIdx) => {
      const tr = document.createElement("tr");
      
      // Calculate Length in Inch = depth / 25
      const lengthInInch = row.depth / 25;
      
      // Routing Columns
      const routedVals = { 2: "-", 3: "-", 4: "-", 5: "-", 6: "-", 8: "-", 10: "-" };
      const activeDia = row.dia;
      if (routedVals.hasOwnProperty(activeDia)) {
        routedVals[activeDia] = (row.nos * lengthInInch).toFixed(2);
      }

      // Grouped JMR block fields span row count
      const isFirstRow = (rowIdx === 0);
      const rowSpan = block.rows.length;

      tr.innerHTML = `
        ${isFirstRow ? `<td rowspan="${rowSpan}" style="vertical-align: middle; text-align: center; font-weight:700;">${block.sr}</td>` : ""}
        ${isFirstRow ? `<td rowspan="${rowSpan}" style="vertical-align: middle;"><input type="text" value="${block.jmr}" onchange="updateJMRHeader('core', ${blockIdx}, 'jmr', this.value)" style="width:100%;"></td>` : ""}
        ${isFirstRow ? `<td rowspan="${rowSpan}" style="vertical-align: middle;"><input type="date" value="${block.date}" onchange="updateJMRHeader('core', ${blockIdx}, 'date', this.value)" style="width:100%;"></td>` : ""}
        ${isFirstRow ? `<td rowspan="${rowSpan}" style="vertical-align: middle;"><input type="text" value="${block.desc}" onchange="updateJMRHeader('core', ${blockIdx}, 'desc', this.value)" style="width:100%;"></td>` : ""}
        
        <td>
          <select onchange="updateBOQRowValue('core', ${blockIdx}, ${rowIdx}, 'dia', this.value)" style="width:100%;">
            <option value="2" ${row.dia == 2 ? "selected" : ""}>2"</option>
            <option value="3" ${row.dia == 3 ? "selected" : ""}>3"</option>
            <option value="4" ${row.dia == 4 ? "selected" : ""}>4"</option>
            <option value="5" ${row.dia == 5 ? "selected" : ""}>5"</option>
            <option value="6" ${row.dia == 6 ? "selected" : ""}>6"</option>
            <option value="8" ${row.dia == 8 ? "selected" : ""}>8"</option>
            <option value="10" ${row.dia == 10 ? "selected" : ""}>10"</option>
          </select>
        </td>
        <td><input type="number" value="${row.nos}" min="1" oninput="updateBOQRowValue('core', ${blockIdx}, ${rowIdx}, 'nos', this.value)" style="width:100%; text-align:center;"></td>
        <td><input type="number" value="${row.depth}" min="1" oninput="updateBOQRowValue('core', ${blockIdx}, ${rowIdx}, 'depth', this.value)" style="width:100%; text-align:center;"></td>
        <td><input type="text" value="Inch" readonly style="width:100%; text-align:center; background-color: var(--bg-tertiary);"></td>
        <td style="font-family: monospace;">${lengthInInch.toFixed(2)}</td>
        
        <td style="font-family: monospace;">${routedVals[2]}</td>
        <td style="font-family: monospace;">${routedVals[3]}</td>
        <td style="font-family: monospace;">${routedVals[4]}</td>
        <td style="font-family: monospace;">${routedVals[5]}</td>
        <td style="font-family: monospace;">${routedVals[6]}</td>
        <td style="font-family: monospace;">${routedVals[8]}</td>
        <td style="font-family: monospace;">${routedVals[10]}</td>
        
        <td class="no-print" style="text-align:center; vertical-align: middle;">
          <div style="display:flex; gap:4px; justify-content:center;">
            ${isFirstRow ? `<button type="button" class="btn btn-primary btn-sm" onclick="addRowToJMR('core', ${blockIdx})" title="Add Row"><i class="fa-solid fa-plus"></i></button>` : ""}
            <button type="button" class="btn btn-danger btn-sm" onclick="deleteRowFromJMR('core', ${blockIdx}, ${rowIdx})" title="Delete Row"><i class="fa-solid fa-trash"></i></button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  });
}

// Add Breaker Row
function addBreakerRow() {
  const nextSr = boqState.breaker.length + 1;
  boqState.breaker.push({
    sr: nextSr,
    eqId: "BRK-L01",
    date: new Date().toISOString().split("T")[0],
    jmr: `JMR/083/${String(nextSr).padStart(2, "0")}`,
    unit: "Shift",
    opName: "Dinesh Sharma",
    hours: 8,
    qty: 1,
    light: 1,
    heavy: 0,
    remarks: ""
  });
  renderBOQBreakerTable();
  calculateBOQMetrics();
}

// Update breaker row
function updateBreakerRow(idx, field, value) {
  const row = boqState.breaker[idx];
  if (field === "hours" || field === "qty" || field === "light" || field === "heavy") {
    row[field] = parseFloat(value) || 0;
  } else {
    row[field] = value;
  }
  calculateBOQMetrics();
}

// Delete breaker row
function deleteBreakerRow(idx) {
  boqState.breaker.splice(idx, 1);
  boqState.breaker.forEach((b, i) => b.sr = i + 1);
  renderBOQBreakerTable();
  calculateBOQMetrics();
}

// RENDER: Breaker log
function renderBOQBreakerTable() {
  const tbody = document.getElementById("boq-breaker-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  boqState.breaker.forEach((row, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="text-align:center; font-weight:700;">${row.sr}</td>
      <td><input type="text" value="${row.eqId}" onchange="updateBreakerRow(${idx}, 'eqId', this.value)" style="width:100%;"></td>
      <td><input type="date" value="${row.date}" onchange="updateBreakerRow(${idx}, 'date', this.value)" style="width:100%;"></td>
      <td><input type="text" value="${row.jmr}" onchange="updateBreakerRow(${idx}, 'jmr', this.value)" style="width:100%;"></td>
      <td><input type="text" value="${row.unit}" readonly style="width:100%; text-align:center; background-color: var(--bg-tertiary);"></td>
      <td><input type="text" value="${row.opName}" onchange="updateBreakerRow(${idx}, 'opName', this.value)" style="width:100%;"></td>
      <td><input type="number" value="${row.hours}" min="1" oninput="updateBreakerRow(${idx}, 'hours', this.value)" style="width:100%; text-align:center;"></td>
      <td><input type="number" value="${row.qty}" min="1" oninput="updateBreakerRow(${idx}, 'qty', this.value)" style="width:100%; text-align:center;"></td>
      <td><input type="number" value="${row.light}" min="0" oninput="updateBreakerRow(${idx}, 'light', this.value)" style="width:100%; text-align:center; font-weight:700;"></td>
      <td><input type="number" value="${row.heavy}" min="0" oninput="updateBreakerRow(${idx}, 'heavy', this.value)" style="width:100%; text-align:center; font-weight:700;"></td>
      <td><input type="text" value="${row.remarks}" onchange="updateBreakerRow(${idx}, 'remarks', this.value)" style="width:100%;"></td>
      <td class="no-print" style="text-align:center;">
        <button type="button" class="btn btn-danger btn-sm" onclick="deleteBreakerRow(${idx})" title="Delete"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Core Math Calculations engine
let currentAbstractData = [];
function calculateBOQMetrics() {
  // 1. DRILLING SHEET TOTALS
  const drillC = { 8: 0, 10: 0, 12: 0, 16: 0, 20: 0, 25: 0, 32: 0 };
  boqState.drill.forEach(b => {
    b.rows.forEach(r => {
      if (drillC.hasOwnProperty(r.dia)) {
        const lengthInInch = r.depth / 25.4;
        const val = (r.unit === "Nos") ? r.nos : (r.nos * lengthInInch);
        drillC[r.dia] += val;
      }
    });
  });

  // Render drill cumulative footers
  for (const dia in drillC) {
    const el = document.querySelector(`.drill-c-${dia}`);
    if (el) el.innerText = drillC[dia].toFixed(2);
    
    // Previous value
    const prevEl = document.querySelector(`.drill-p-${dia}`);
    const prevVal = prevEl ? parseFloat(prevEl.value) || 0 : 0;
    
    // Difference (Current Bill Qty)
    const diff = Math.max(0, drillC[dia] - prevVal);
    const diffEl = document.querySelector(`.drill-d-${dia}`);
    if (diffEl) diffEl.innerText = diff.toFixed(2);
  }

  // 2. CORE CUTTING SHEET TOTALS
  const coreC = { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 8: 0, 10: 0 };
  boqState.core.forEach(b => {
    b.rows.forEach(r => {
      if (coreC.hasOwnProperty(r.dia)) {
        const lengthInInch = r.depth / 25;
        const val = r.nos * lengthInInch;
        coreC[r.dia] += val;
      }
    });
  });

  // Render core cumulative footers
  for (const dia in coreC) {
    const el = document.querySelector(`.core-c-${dia}`);
    if (el) el.innerText = coreC[dia].toFixed(2);
    
    // Previous value
    const prevEl = document.querySelector(`.core-p-${dia}`);
    const prevVal = prevEl ? parseFloat(prevEl.value) || 0 : 0;
    
    // Difference (Current Bill Qty)
    const diff = Math.max(0, coreC[dia] - prevVal);
    const diffEl = document.querySelector(`.core-d-${dia}`);
    if (diffEl) diffEl.innerText = diff.toFixed(2);
  }

  // 3. BREAKER SHIFTS TOTALS
  let breakerCLight = 0;
  let breakerCHeavy = 0;
  boqState.breaker.forEach(r => {
    breakerCLight += r.light || 0;
    breakerCHeavy += r.heavy || 0;
  });

  // Render breaker cumulative footers
  const brkLel = document.querySelector(".breaker-c-1");
  const brkHel = document.querySelector(".breaker-c-2");
  if (brkLel) brkLel.innerText = breakerCLight;
  if (brkHel) brkHel.innerText = breakerCHeavy;

  // Previous
  const brkLpEl = document.querySelector(".breaker-p-1");
  const brkHpEl = document.querySelector(".breaker-p-2");
  const brkLpVal = brkLpEl ? parseFloat(brkLpEl.value) || 0 : 0;
  const brkHpVal = brkHpEl ? parseFloat(brkHpEl.value) || 0 : 0;

  // Current
  const brkLd = Math.max(0, breakerCLight - brkLpVal);
  const brkHd = Math.max(0, breakerCHeavy - brkHpVal);
  
  const brkLdEl = document.querySelector(".breaker-d-1");
  const brkHdEl = document.querySelector(".breaker-d-2");
  if (brkLdEl) brkLdEl.innerText = brkLd;
  if (brkHdEl) brkHdEl.innerText = brkHd;

  // 4. RENDER ABSTRACT SHEET
  buildAbstractProgressSheet(drillC, coreC, breakerCLight, breakerCHeavy);
}

// Build abstract items table
function buildAbstractProgressSheet(drillC, coreC, breakerCLight, breakerCHeavy) {
  const tbody = document.getElementById("boq-abstract-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  currentAbstractData = [];

  // Helper push row
  function addAbstractRow(desc, unit, rate, cum, prev) {
    const diff = Math.max(0, cum - prev);
    const amount = diff * rate;
    
    if (diff > 0 || cum > 0) {
      currentAbstractData.push({ desc, unit, rate, cum, prev, diff, amount });
    }
  }

  // Drilling items
  for (const dia in BOQ_RATES.drill) {
    const prevEl = document.querySelector(`.drill-p-${dia}`);
    const prevVal = prevEl ? parseFloat(prevEl.value) || 0 : 0;
    addAbstractRow(`Drilling & Grouting in Concrete - Dia ${dia}mm`, "Nos / Inch", BOQ_RATES.drill[dia], drillC[dia], prevVal);
  }

  // Core Cutting items
  for (const dia in BOQ_RATES.core) {
    const prevEl = document.querySelector(`.core-p-${dia}`);
    const prevVal = prevEl ? parseFloat(prevEl.value) || 0 : 0;
    addAbstractRow(`Core Cutting in Concrete - Dia ${dia}"`, "Inch", BOQ_RATES.core[dia], coreC[dia], prevVal);
  }

  // Breaker items
  const brkLpEl = document.querySelector(".breaker-p-1");
  const brkHpEl = document.querySelector(".breaker-p-2");
  const brkLpVal = brkLpEl ? parseFloat(brkLpEl.value) || 0 : 0;
  const brkHpVal = brkHpEl ? parseFloat(brkHpEl.value) || 0 : 0;

  addAbstractRow("Concrete Demolition Service - Light Breaker Tool", "Shift", BOQ_RATES.breaker.light, breakerCLight, brkLpVal);
  addAbstractRow("Concrete Demolition Service - Heavy Breaker Tool", "Shift", BOQ_RATES.breaker.heavy, breakerCHeavy, brkHpVal);

  // Render Table
  let taxableTotal = 0;
  currentAbstractData.forEach(row => {
    taxableTotal += row.amount;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${row.desc}</strong></td>
      <td style="text-align: center;">${row.unit}</td>
      <td style="text-align: right; font-family: monospace;">₹${row.rate.toFixed(2)}</td>
      <td style="text-align: right; font-family: monospace;">${row.cum.toFixed(2)}</td>
      <td style="text-align: right; font-family: monospace;">${row.prev.toFixed(2)}</td>
      <td style="text-align: right; font-family: monospace; font-weight: 700; color: var(--bg-accent-indigo);">${row.diff.toFixed(2)}</td>
      <td style="text-align: right; font-family: monospace; font-weight: 700; color: var(--color-emerald);">₹${row.amount.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });

  if (currentAbstractData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color: var(--text-muted); padding: 30px;">No measurements or differences posted yet. Enter quantities to generate abstract.</td></tr>`;
  } else {
    // Grand Total Row
    const tr = document.createElement("tr");
    tr.style.backgroundColor = "var(--bg-tertiary)";
    tr.style.fontWeight = "700";
    tr.innerHTML = `
      <td colspan="6" style="text-align: right;">TAXABLE SUB-TOTAL</td>
      <td style="text-align: right; color: var(--color-emerald); font-family: monospace;">₹${taxableTotal.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  }

  // 5. UPDATE INVOICE DETAILS
  buildTaxInvoiceDetails(taxableTotal);
}

// Generate Tax Invoice Details
function buildTaxInvoiceDetails(taxableTotal) {
  const tbody = document.getElementById("inv-details-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  document.getElementById("inv-date-text").innerText = new Date().toLocaleDateString("en-GB");

  currentAbstractData.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="border: 1px solid #000; padding: 6px 10px;"><strong>${row.desc}</strong></td>
      <td style="border: 1px solid #000; padding: 6px 10px; text-align: center;">${row.unit}</td>
      <td style="border: 1px solid #000; padding: 6px 10px; text-align: right; font-family: monospace;">₹${row.rate.toFixed(2)}</td>
      <td style="border: 1px solid #000; padding: 6px 10px; text-align: right; font-family: monospace;">${row.diff.toFixed(2)}</td>
      <td style="border: 1px solid #000; padding: 6px 10px; text-align: right; font-family: monospace;">₹${row.amount.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });

  if (currentAbstractData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px;">No item descriptions loaded. Update measurement sheets.</td></tr>`;
  }

  // Grand totals mapping
  const cgstVal = taxableTotal * 0.09;
  const sgstVal = taxableTotal * 0.09;
  const grandTotal = taxableTotal + cgstVal + sgstVal;

  const retentionPercent = parseFloat(document.getElementById("inv-retention").value) || 0;
  const retentionVal = grandTotal * (retentionPercent / 100);
  const mobilisationVal = parseFloat(document.getElementById("inv-mobilisation").value) || 0;
  const netPayable = grandTotal - retentionVal - mobilisationVal;

  document.getElementById("inv-val-taxable").innerText = `₹${taxableTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("inv-val-cgst").innerText = `₹${cgstVal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("inv-val-sgst").innerText = `₹${sgstVal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("inv-val-grand").innerText = `₹${grandTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("inv-val-retention").innerText = `₹${retentionVal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("inv-val-mobilisation").innerText = `₹${mobilisationVal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("inv-val-payable").innerText = `₹${netPayable.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Dynamic Excel Exporter (SheetJS)
function exportBOQToExcel() {
  if (typeof XLSX === "undefined") {
    alert("SheetJS library is not loaded. Check internet connection.");
    return;
  }

  const wb = XLSX.utils.book_new();

  // Tab 1: Drilling & Grouting Sheet Array
  const drillRows = [
    ["Sr.No", "JMR No", "Date", "Description", "Diameter", "Nos", "Depth (mm)", "Unit", "Length (Inch)", "8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm"]
  ];
  boqState.drill.forEach(b => {
    b.rows.forEach(r => {
      const len = r.depth / 25.4;
      const rout = { 8: "", 10: "", 12: "", 16: "", 20: "", 25: "", 32: "" };
      if (rout.hasOwnProperty(r.dia)) {
        rout[r.dia] = (r.unit === "Nos") ? r.nos : r.nos * len;
      }
      drillRows.push([
        b.sr, b.jmr, b.date, b.desc, `${r.dia}mm`, r.nos, r.depth, r.unit, len,
        rout[8], rout[10], rout[12], rout[16], rout[20], rout[25], rout[32]
      ]);
    });
  });
  const wsDrill = XLSX.utils.aoa_to_sheet(drillRows);
  XLSX.utils.book_append_sheet(wb, wsDrill, "Drilling & Grouting");

  // Tab 2: Core Cutting Sheet Array
  const coreRows = [
    ["Sr.No", "JMR No", "Date", "Description", "Diameter", "Nos", "Depth (mm)", "Unit", "Length (Inch)", '2"', '3"', '4"', '5"', '6"', '8"', '10"']
  ];
  boqState.core.forEach(b => {
    b.rows.forEach(r => {
      const len = r.depth / 25;
      const rout = { 2: "", 3: "", 4: "", 5: "", 6: "", 8: "", 10: "" };
      if (rout.hasOwnProperty(r.dia)) {
        rout[r.dia] = r.nos * len;
      }
      coreRows.push([
        b.sr, b.jmr, b.date, b.desc, `${r.dia}"`, r.nos, r.depth, r.unit, len,
        rout[2], rout[3], rout[4], rout[5], rout[6], rout[8], rout[10]
      ]);
    });
  });
  const wsCore = XLSX.utils.aoa_to_sheet(coreRows);
  XLSX.utils.book_append_sheet(wb, wsCore, "Core Cutting");

  // Tab 3: Breaker Log Array
  const breakerRows = [
    ["Sr.No", "Equipment ID", "Date", "JMR Log No", "Unit", "Operator Name", "Hours", "Quantity", "Breaker Light", "Breaker Heavy", "Remarks"]
  ];
  boqState.breaker.forEach(r => {
    breakerRows.push([r.sr, r.eqId, r.date, r.jmr, r.unit, r.opName, r.hours, r.qty, r.light, r.heavy, r.remarks]);
  });
  const wsBreaker = XLSX.utils.aoa_to_sheet(breakerRows);
  XLSX.utils.book_append_sheet(wb, wsBreaker, "Breaker Service Log");

  // Tab 4: Abstract Summary
  const abstractRows = [
    ["Item Description", "Unit", "WO Rate (INR)", "Cumulative Qty", "Previous Qty", "This Bill Qty", "This Bill Amount (INR)"]
  ];
  currentAbstractData.forEach(r => {
    abstractRows.push([r.desc, r.unit, r.rate, r.cum, r.prev, r.diff, r.amount]);
  });
  const wsAbstract = XLSX.utils.aoa_to_sheet(abstractRows);
  XLSX.utils.book_append_sheet(wb, wsAbstract, "Bill Abstract Progress");

  // Save workbook
  XLSX.writeFile(wb, "Ravi_Enterprises_BOQ_Contract_Billing.xlsx");
}


