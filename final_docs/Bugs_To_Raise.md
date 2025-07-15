# 🐛 Bug List to Raise – CleanCity Waste Scheduler

**Version:** 1.0  
**Date:** 2025-07-15  

**Linked QA Docs:**  

- [Defect Report](./Defect_Report.md)  
- [Test Execution Report](./Test_Execution_Report.md)  
- [Traceability Matrix](./Traceability_Matrix.md)

---

### FR001 (J-102): Incorrect Module Path – `index.test.js`

- **Title:** `index.test.js` fails with "Module not found"
- **Description:** The Jest test fails due to an incorrect import path for the `App` component.
- **Steps to Reproduce:**
  1. Run `npm test`
  2. Observe failure in `index.test.js`
- **Expected Result:** App module should be imported and rendered successfully
- **Actual Result:** `Cannot find module '../src/App'`
- **Severity:** High
- **Labels:** `bug`, `jest`, `import`, `high`
- **Path:** `src/_tests_/index.test.js`

---

### FR012 (J-103): Component Missing – `PickupForm.test.js`

- **Title:** PickupForm component not found during Jest execution
- **Description:** Import error due to missing or incorrect file reference for `PickupForm`.
- **Steps to Reproduce:**
  1. Run `npm test`
  2. Observe failure in `PickupForm.test.js`
- **Expected:** Component should render and accept test inputs
- **Actual:** Import fails with "Module not found"
- **Severity:** High
- **Labels:** `bug`, `jest`, `component`, `high`
- **Path:** `src/_tests_/PickupForm.test.js`

---

### FR023 (C-201): Missing DOM Selectors – `dashboardFilters.cy.js`

- **Title:** `#statusFilter` and `#locationFilter` not found
- **Description:** Cypress tests failed due to missing filter dropdowns in the dashboard.
- **Steps:**
  1. Open Dashboard
  2. Test runs query for `#statusFilter` and `#locationFilter`
- **Expected:** Filter elements should exist and be queryable
- **Actual:** Timeout error — elements never found
- **Severity:** High
- **Labels:** `bug`, `cypress`, `dashboard`, `UI`
- **Screenshot:** `cypress/screenshots/dashboard/dashboardFilters.cy.js`

---

### FR087 (C-202): Awareness Page Content Missing

- **Title:** `.awareness-card` and `img` not rendered on Awareness Page
- **Steps:**
  1. Navigate to `/awareness`
  2. Run Cypress spec
- **Expected:** Tip cards and images should load
- **Actual:** No such elements found
- **Severity:** Medium
- **Labels:** `bug`, `cypress`, `UI`, `content`
- **Screenshot:** `cypress/screenshots/awareness/awarenessPage.cy.js`

---

### FR087 (C-203): Feedback Form Fields Not Rendering

- **Title:** Feedback form missing `#requestId` and error messages
- **Steps:**
  1. Submit empty feedback
- **Expected:** Field error: "Request ID is required"
- **Actual:** No validation or input found
- **Severity:** High
- **Labels:** `bug`, `cypress`, `feedback`, `form`
- **Screenshot:** `cypress/screenshots/feedback/submitFeedback.cy.js`

---

### FR012 (C-204): Schedule Request Form Broken

- **Title:** Fields like `#fullName` not found
- **Steps:**
  1. Navigate to `/schedule`
  2. Observe missing form inputs
- **Expected:** Form should be visible with named inputs
- **Actual:** Cypress times out
- **Severity:** High
- **Labels:** `bug`, `cypress`, `form`, `blocker`
- **Screenshot:** `cypress/screenshots/home/scheduleRequest.cy.js`

---

### FR012 (C-205): Waste Pickup Form Invalid Submission Handling

- **Title:** Missing `input[name="fullName"]` and `#name-error`
- **Steps:**
  1. Visit Waste Pickup page
  2. Submit without name
- **Expected:** Error shown
- **Actual:** No validation triggered
- **Severity:** High
- **Labels:** `bug`, `cypress`, `form-validation`
- **Screenshot:** `cypress/screenshots/pickup/schedulePickup.cy.js`

---

### FR045 (C-206): Route Guard Broken – Profile Access

- **Title:** Profile page doesn’t redirect unauthenticated user
- **Steps:**
  1. Clear session
  2. Visit `/profile`
- **Expected:** Redirect to `/login`
- **Actual:** Lands on profile page
- **Severity:** Medium
- **Labels:** `bug`, `auth`, `cypress`
- **Screenshot:** `cypress/screenshots/profile/profileAuth.cy.js`

---

### FR004 (C-207): Login Alert Not Triggered

- **Title:** Login validation alert not shown on bad input
- **Steps:**
  1. Submit form with invalid email
- **Expected:** Alert shows validation error
- **Actual:** Nothing triggered
- **Severity:** Medium
- **Labels:** `bug`, `cypress`, `auth`, `validation`
- **Screenshot:** `cypress/screenshots/auth/login.cy.js`

---

### FR087 (W-001): Nested `<form>` Element – `BlogAdmin.js`

- **Title:** Invalid HTML nesting of `<form>` in `BlogAdmin`
- **Description:** Jest warning logs indicate nested forms
- **Impact:** May cause rendering errors or test flakiness
- **Severity:** Low
- **Labels:** `warning`, `html`, `accessibility`, `jest`

---

### NFR-Dev-002 (D-001): Deprecated API Use – `ReactDOMTestUtils.act()`

- **Title:** Replace `ReactDOMTestUtils.act()` with `React.act()`
- **Description:** Several test files using deprecated API
- **Files Affected:** `App.test.js`, `BlogAdmin.test.js`, `BlogArticle.test.js`, etc.
- **Severity:** Medium
- **Labels:** `tech-debt`, `jest`, `deprecation`

---

### NFR-Dev-003 (D-002): React Router v7 Deprecation Warnings

- **Title:** Splat route and startTransition warnings
- **Description:** Warnings shown in multiple Cypress specs
- **Fix:** Add `future` flag in Router config or upgrade to Router v7 fully
- **Severity:** Medium
- **Labels:** `router`, `cypress`, `tech-debt`, `deprecation`

---

### Blocked or Untested Requirements (From Traceability)

| Req ID | Description | Bug ID | Reason |
|--------|-------------|--------|--------|
| FR-012 | Schedule pickup | C-204 | Form fields not rendering |
| FR-020 | Real-time pickup tracking | TBD | Feature not testable — no network simulation/stubs |
| FR-029 | Award badges for milestones | TBD | Logic not implemented or UI not exposed |
| FR-065 | Notification bell unread count | TBD | No test coverage, selector unknown |
| FR-069 | Responsive design for all viewports | TBD | Requires viewport/UX testing not done yet |

---

> Raise each as a GitHub Issue and link it back to the corresponding Bug ID in `Defect_Report.md`  
> Screenshots and videos for each test failure are stored in `/cypress/screenshots/` and `/cypress/videos/`