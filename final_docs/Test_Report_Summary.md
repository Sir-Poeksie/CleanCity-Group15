# Test Report Summary – CleanCity Waste Scheduler

This summary consolidates the results of both **unit/component testing** (Jest) and **User Interface & End-to-End testing** (Cypress) for the CleanCity Waste Scheduler. It outlines the testing objective, techniques used, tools applied, and a breakdown of outcomes by module.

> Related Reports:
> - [Full Comprehensive QA Report]()
> - [Test Execution Report](../final_docs/Test_Execution_Report.md)
> - [Defect Report](../final_docs/Defect_Report.md)
> - [Traceability Matrix](../final_docs/Traceability_Matrix.md)

---

## Objective

- Verify key user functionalities: registration, login, scheduling, admin management, feedback
- Validate business logic using unit testing
- Confirm user journey and flow stability via Cypress E2E tests
- Detect regressions and UI/UX gaps in form inputs, navigation, and storage

---

## Scope

- Functional Testing (Unit + E2E)
- Validation & Error Handling
- Security (Access Guards)
- UI/UX & Accessibility (Manual + Lighthouse)
- LocalStorage-based persistence

## Tools & Frameworks

| Tool       | Purpose             |
|------------|---------------------|
| Jest       | Unit testing        |
| Cypress    | End-to-end testing  |
| Mochawesome| Reporting (Cypress) |
| React Testing Library | Component testing |

---

## Test Execution Overview

| Type     | Total | Passed | Failed | Pass Rate |
|----------|-------|--------|--------|-----------|
| Unit (Jest) | 23 | 16     | 7      | 69.6%     |
| E2E (Cypress) | 23 | 11   | 12     | 47.8%     |
| **Total** | 46   | 27     | 19     | **58.7%** |

## Test Coverage

| Metric     | Coverage |
|------------|----------|
| Statements | 42.97%   |
| Branches   | 27.12%   |
| Functions  | 35.93%   |
| Lines      | 45.69%   |

## Summary by Module

### Admin Request Management

- Passed all actions: load, mark complete/missed, delete request

### Navigation

- Links rendered conditionally per role
- Admin/user paths verified

### Login & Register

- Login failed alert rendering in Jest and Cypress
- Register passed both unit and E2E flows

### Forms (Pickup, Feedback, Schedule)

- Multiple selectors failed in Cypress
- Required fields not found or validated

## Observations

- **Admin, Navigation, Registration, Dashboard, Blog components** tested successfully
- Failures stem from:
  - Missing selectors (`#fullName`, `#requestId`, `#statusFilter`)
  - Unavailable elements (alerts, awareness content)
  - Broken paths in Jest test files
- **React warnings** (deprecated `act`, invalid nested forms) in multiple tests

---

## Issues Summary

- 19 total failures
  - 7 in Jest
  - 12 in Cypress
- Major bugs documented in [Defect_Report.md](../final_docs/Defect_Report.md)
- Most failures are caused by:
  - Broken imports or misnamed files
  - Missing DOM elements or selectors
  - Deprecated API usage

---

## Recommendations

- Fix broken selectors and ensure consistent `id`/`name` attributes
- Add `role="alert"` for validation feedback
- Update form rendering logic to be testable
- Stabilize Cypress tests with `cy.wait()` and proper `data-testid` usage
- Address deprecated React APIs and DOM nesting issues
- Increase Jest coverage to >60% by adding tests for profile, pickup, and badge logic

## Linked QA Docs

- [Test Execution Report](../final_docs/Test_Execution_Report.md)
- [Defect Report](../final_docs/Defect_Report.md)
- [Traceability Matrix](../final_docs/Traceability_Matrix.md)
- [GitHub Bug Issues](./Bugs_To_Raise.md)
