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


| Tool     | Total Test Suites | Tests Run | Passed | Failed | Pass Rate | Duration |
|----------|-------------------|-----------|--------|--------|-----------|----------|
| **Jest (Unit Tests)** | 17 | 47 | 31 | 16 | 65.9% | 14.4s |
| **Cypress (E2E)** | 12 | 31 | 19 | 12 | 61.3% | 2m 15s |
|          |                   |           |        |        |           |          |
| **Total**| 29  | 78        | 50     | 28     | **64.1%** | 2m 30s   |

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

| **Metric** | **% Coverage** |
|--------------|------------|
| Statements | 54.63% |
| Branches | 35.94% |
| Functions | 47.61% |
| Lines | 56.45% |

> **Note**: Branch and statements coverage is low. Testing priority should focus on business logic (e.g., dataService.js, PickupForm, Dashboard).
> [HTML Report](../jest-report/report.html)

---

## Detailed Cypress Results

### Passed Test Modules

- `admin/requestManagement.cy.js` (4/4 passed)
- `auth/register.cy.js`
- `navigation/navLinks.cy.js`
- `feedbackForm.cy.js`
- `register.cy.js`

---

## Failed Modules

| File                                | Tests | Passed | Failed | Duration |
|-------------------------------------|--------|--------|--------|----------|
| `auth/login.cy.js`                  | 6      | 4      | 2      | 00:16s   |
| `awareness/awarenessPage.cy.js`     | 6      | 5      | 1      | 00:43s   |
| `dashboard/dashboardFilters.cy.js`  | 2      | 0      | 2      | 00:10s   |
| `feedback/submitFeedback.cy.js`     | 2      | 0      | 2      | 00:09s   |
| `home/scheduleRequest.cy.js`        | 2      | 0      | 2      | 00:10s   |
| `pickup/schedulePickup.cy.js`       | 2      | 0      | 2      | 00:09s   |
| `profile/profileAuth.cy.js`         | 2      | 1      | 1      | 00:08s   |

## Evidence Captured

- **Screenshots:** `./cypress/screenshots/`
- **Videos:** `./cypress/videos/`
- **Full HTML Report:**
  - Cypress: `./mochawesome-report/mochawesome.html`
  - Jest: `./jest-report/report.html`
- **Coverage Report:** `/coverage/lcov-report/index.html`
  
---

## Conclusion

- Despite multiple passing tests in authentication, admin, and navigation, several critical flows in pickup scheduling, feedback submission, and profile access **failed due to missing elements or improper validations**.
- Most modules passed automated testing. Bugs found in filters, feedback, pickup,  and profile routing. Coverage acceptable. Regression required post-fixes.
- **Critical Flows Tested:** Registration, Login, Admin Management, Feedback, Navigation
- **Core Issues Detected:** Broken form renders, incorrect DOM selectors, missing accessibility roles
- **Overall QA Status:** *Partially Passed* – functional issues remain in multiple user journeys
- **Recommendation:** Prioritize defect fixes before release. Increase coverage and stabilize DOM render timing for Cypress.

> Prepared by: **Mpumelelo Theophilas Nxazonke**  
> QA Automation Engineer (Team Lead) 
> Date: 2025-07-15  
> Version: `v1.0`
