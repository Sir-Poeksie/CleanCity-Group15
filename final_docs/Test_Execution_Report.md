# Final Test Execution Report – CleanCity Waste Scheduler

**Version:** 1.0
**Execution Period:** 2025-07-13 to 2025-07-15  
**Prepared by:** Mpumelelo Theophilas Nxazonke  

## Introduction

This document summarizes the **Preliminary Test Execution** of the CleanCity Waste Scheduler project. It includes results from both **unit tests (Jest)** and **end-to-end tests using Cypress** executed between **2025-07-13 and 2025-07-15**. The goal was to validate core functionality, form validations, navigation, user flows, and UI rendering.

> Related QA Artifacts:
> - [Defect Report](../final_docs/Defect_Report.md)
> - [Test Report Summary](../final_docs/Test_Report_Summary.md)
> - [Traceability Matrix](../final_docs/Traceability_Matrix.md)

---

## Test Environment

| Property         | Value                          |
|------------------|-------------------------------|
| OS               | Windows 11 (Localhost)         |
| Browser          | Chrome (Electron via Cypress)  |
| Node.js Version  | v18                            |
| Cypress Version  | v13                            |
| Jest Version     | v29                            |
| Reporter         | Mochawesome + Jest HTML        |
| Execution Dates  | 2025-07-13 → 2025-07-15        |
| QA Engineer      | Theophilas                     |

---

## Overall Execution Summary

| Test Type | Total Tests | Passed | Failed | Pass Rate | Duration |
|-----------|------------|--------|--------|-----------|----------|
| **Jest (Unit Tests)**  | 23     | 16     | 7      | 69.6%     | 12.73s   |
| **Cypress (E2E)**      | 23     | 11     | 12     | 47.8%     | ~1m 35s  |
| **TOTAL**              | **46** | **27** | **19** | **58.7%** | ~1m 48s  |

---

## Detailed Jest Results

| Test Suite         | Status | Notes |
|--------------------|--------|-------|
| Login.test.js      | Failed | Missing `role="alert"` element |
| Dashboard.test.js  | Pass | Renders dashboard metrics |
| PickupForm.test.js | Fail | Component not found (import fails) |
| BlogAdmin.test.js  | Pass | Nested form warning |
| CommunityFeed.js   | Pass | DOM renders cleanly |
| Awareness.test.js  | Pass | UI components render |
| BlogArticle.test.js| Pass | Uses `BrowserRouter` context |
| App.test.js        | Pass | Passed render smoke test |
| index.test.js      | Failed | Import path broken |
| Admin.test.js      | Pass | Admin summary renders |

### Code Coverage (Jest)

| Metric     | Coverage |
|------------|----------|
| Statements | 42.97%   |
| Branches   | 27.12%   |
| Functions  | 35.93%   |
| Lines      | 45.69%   |

[HTML Report](../jest-report/report.html)

---

## Detailed Cypress Results

| Spec File                         | Total Tests | Passed | Failed | Notes |
|----------------------------------|-------------|--------|--------|-------|
| `auth/login.cy.js`               | 2           | 1      | 1      | Alert not triggered |
| `auth/register.cy.js`            | 2           | 2      | 0      | NA |
| `admin/requestManagement.cy.js`  | 4           | 4      | 0      | NA |
| `dashboard/dashboardFilters.cy.js` | 2         | 0      | 2      | `#statusFilter`, `#locationFilter` missing |
| `awareness/awarenessPage.cy.js`  | 2           | 0      | 2      | `.awareness-card`, `<img>` not found |
| `feedback/submitFeedback.cy.js`  | 2           | 0      | 2      | Validation message and input not rendered |
| `home/scheduleRequest.cy.js`     | 2           | 0      | 2      | `#fullName` and form field missing |
| `pickup/schedulePickup.cy.js`    | 2           | 0      | 2      | `input[name="fullName"]`, `#name-error` missing |
| `profile/profileAuth.cy.js`      | 2           | 1      | 1      | Redirect assertion failed |
| `navigation/navLinks.cy.js`      | 3           | 3      | 0      | NA |

---

## Passed Test Modules

| Module                  | Tests Passed |
|------------------------|--------------|
| Admin Request Management | 4/4 |
| Login                   | 3/3 |
| Registration            | 3/3 |
| Dashboard Analytics     | 1/1 |
| Blog Components         | 4/4 |
| Awareness Page Load     | 1/1 |
| Navigation              | 3/3 |

---

## Failed Modules

| Module               | Test Cases Failed | Reason |
|----------------------|-------------------|--------|
| PickupForm (Jest)    | 1/1 | Import error |
| index.test.js (Jest) | 1/1 | Incorrect module path |
| Feedback Form (Cypress) | 2/2 | `#requestId` not found |
| Dashboard Filters    | 2/2 | `#statusFilter` not found |
| Schedule Pickup      | 2/2 | `#fullName` input not rendered |
| Awareness Page       | 2/2 | `.awareness-card`, `<img>` not found |
| Profile Auth Guard   | 1/2 | Incorrect redirect assertion |

## Evidence Captured

- **Screenshots:** `./cypress/screenshots/`
- **Videos:** `./cypress/videos/`
- **HTML Reports:**
  - Cypress: `./mochawesome-report/mochawesome.html`
  - Jest: `./jest-report/report.html`

---

## Conclusion

- Most modules passed automated testing. Bugs found in filters, feedback, pickup,  and profile routing. Coverage acceptable. Regression required post-fixes.
- **Critical Flows Tested:** Registration, Login, Admin Management, Feedback, Navigation
- **Core Issues Detected:** Broken form renders, incorrect DOM selectors, missing accessibility roles
- **Overall QA Status:** *Partially Passed* – functional issues remain in multiple user journeys
- **Recommendation:** Prioritize defect fixes before release. Increase coverage and stabilize DOM render timing for Cypress.

> Prepared by: **Mpumelelo Theophilas Nxazonke**  
> QA Automation Engineer (Team Lead) 
> Date: 2025-07-15  
> Version: `v1.0`
