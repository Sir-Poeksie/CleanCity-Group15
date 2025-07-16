# Comprehensive QA Report

**Project:** CleanCity Waste Pickup Scheduler<br>
**Version:** 1.0<br>
**Date:** 2025-07-16<br>
**Prepared By:** Mpumelelo Theophilas Nxazonke (QA Automation Engineer)

---

## Table of Contents

1. Executive Summary
2. Test Plan & Strategy
3. Test Cases & Scenarios
4. Defect Summary
5. Test Execution Summary
6. Environments & Tools
7. Risk Assessment
8. Compliance & Standards
9. Recommendations & Next Steps
10. Appendices

---

## 1. Executive Summary

This QA report presents the full scope of testing conducted for the **CleanCity Waste Pickup Scheduler**, a web-based waste management app designed for public and administrative use.

### Objectives

* Ensure feature functionality (Registration, Pickup Scheduling, Feedback, Admin Panel)
* Validate UI/UX design, accessibility, and responsiveness
* Assess automation coverage and regression stability

### Summary of Results

| Metric                 | Value       |
| ---------------------- | ----------- |
| Total Test Cases       | 78          |
| Passed                 | 50          |
| Failed                 | 28          |
| Unit Coverage (Jest)   | 54.63%      |
| E2E Coverage (Cypress) | 61.3% Specs |
| Critical Defects       | 6           |
| Total Defects Logged   | 13          |

### Key Findings

* Missing validation messages across forms
* Unreachable test files/components due to import errors
* Route guard misconfigurations
* Several areas lack Jest branch coverage

---

## 2. Test Plan & Strategy

### Test Objectives

* Functional correctness
* UI responsiveness and accessibility
* Security and input validation

### Scope of Testing

**In-Scope:**

* Registration and Authentication
* Pickup Scheduling
* Feedback Module
* Admin Request Management
* Community Posts
* Blog Articles

**Out-of-Scope:**

* Email/SMS integration
* Real-time tracking logic (FR-020)
* Payment gateways

### Test Types

| Type          | Tools Used      |
| ------------- | --------------- |
| Unit Testing  | Jest            |
| E2E Testing   | Cypress         |
| Validation    | Cypress, Jest   |
| Performance   | Manual Timing   |
| Accessibility | Lighthouse, aXe |

### Tools & Frameworks

* **Jest** (unit testing)
* **Cypress v13** (end-to-end tests)
* **Mochawesome** (reporting)
* **GitHub Issues** (defect tracking)
* **Chrome DevTools** (performance, Lighthouse audits)

### Entry/Exit Criteria

**Entry:**

* Feature-ready code
* Local deployment functional

**Exit:**

* All critical paths tested
* Major bugs identified and logged
* Reports submitted

---

## 3. Test Cases & Scenarios

| Test Case ID | Description                | Status  | Tool    | Req ID |
| ------------ | -------------------------- | ------- | ------- | ------ |
| TC-001       | Register new user          | Pass  | Manual  | FR-001 |
| TC-004       | Login with credentials     | Fail | Cypress | FR-004 |
| TC-006       | Schedule pickup            | Fail  | Cypress | FR-012 |
| TC-017       | Submit feedback without ID | Fail  | Cypress | FR-087 |
| TC-020       | View awareness cards       | Fail  | Cypress | FR-087 |
| TC-023       | Blog admin creates article | Pass  | Manual  | FR-023 |
| TC-053       | Admin views all pickups    | Pass  | Cypress | FR-053 |

> Full case mapping available in `Test_Cases.md` and `Traceability_Matrix.md`.

---

## 4. Defect Summary

### Defects by Severity

| Severity | Count |
| -------- | ----- |
| Critical | 6     |
| High     | 4     |
| Medium   | 2     |
| Low      | 1     |

### Status Summary

| Status   | Count |
| -------- | ----- |
| Open     | 13    |
| Closed   | 0     |
| Retested | 0     |

### Highlights

* **J-102**: App module import fails in `index.test.js`
* **C-203**: Feedback form missing `#requestId` and validation
* **C-204**: Schedule form fields not rendering
* **W-001**: Nested `<form>` inside `BlogAdmin` – HTML violation
* **D-001**: Deprecated `ReactDOMTestUtils.act()` used

> Full list in `Defect_Report.md` and `Bugs_to_Raise.md`.

---

## 5. Test Execution Summary

### Tool-Based Metrics

| Tool        | Tests Run | Passed | Failed | Duration |
| ----------- | --------- | ------ | ------ | -------- |
| **Jest**    | 47        | 31     | 16     | 14.4 s   |
| **Cypress** | 31        | 19     | 12     | 2m 15s   |

### Coverage Stats

| Metric     | % Coverage |
| ---------- | ---------- |
| Statements | 54.63%     |
| Branches   | 35.94%     |
| Functions  | 47.61%     |
| Lines      | 56.45%     |

> Source: `/coverage/lcov-report/index.html`

---

## 6. Environment & Tools

### Software Stack

* **React.js** (Frontend)
* **localStorage** (Data Layer)
* **Node.js v18**
* **Browser:** Chrome (Electron)

### Tools Summary

| Tool        | Purpose              |
| ----------- | -------------------- |
| Cypress     | E2E Testing          |
| Jest        | Unit Testing         |
| Mochawesome | HTML Reports         |
| GitHub      | Versioning & Issues  |
| Lighthouse  | Accessibility Checks |

---

## 7. Risk Assessment

| Risk ID | Module            | Risk                              | Priority |
| ------- | ----------------- | --------------------------------- | -------- |
| R-001   | Pickup Scheduling | Duplicate scheduling logic        | Critical |
| R-004   | Dashboard         | Inaccurate environmental metrics  | High     |
| R-015   | Security          | XSS risk in comment box           | Critical |
| R-019   | Regression        | No regression tests before deploy | Critical |

Full mitigation table in [Risk_Analysis.md](../final_docs/Risk_Analysis.md)

---

## 8. Compliance & Standards

| Category             | Status                |
| -------------------- | --------------------- |
| WCAG 2.1 (a11y)      | Partial            |
| React Best Practices | Follows             |
| CI/CD Integration    | Not yet implemented |
| Security Practices   | XSS tests missing  |

* Some forms lack `role="alert"`
* Use of deprecated API (`ReactDOMTestUtils.act`)

---

## 9. Recommendations & Next Steps

### Immediate Fixes

* Repair import paths (J-102, J-103)
* Add missing DOM elements for Pickup, Feedback forms
* Enforce form validation (`#name-error`, `#requestId`, etc.)

### Long-Term Improvements

* Increase Jest branch/test coverage to 75%
* Add mocks for real-time tracking
* Refactor route guards for `/profile`, `/admin`

### Next Test Cycle

* Execute full regression after fixing critical issues
* Re-test blocked specs
* Integrate GitHub Actions for CI testing

---

## 10. Appendices

### Included Files

* `Test_Strategy.md`
* `Test_Plan.md`
* `Test_Cases.md`
* `Traceability_Matrix.md`
* `Risk_Analysis.md`
* `Test_Execution_Report.md`
* `Defect_Report.md`
* `Bugs_to_Raise.md`
* `/cypress/screenshots/`
* `/cypress/videos/`
* `/coverage/index.html`

> All test assets are packaged for audit, compliance, and team review.

---

### Report Sign-Off

**Prepared by:**<br>
Mpumelelo Theophilas Nxazonke<br>
QA Automation Engineer<br>
Date: 2025-07-16<br>
Contact: [Sir Poeksie](mailto:mtnxazonke@gmail.com)
