# Defect Report

**Report Version:** 1.0
**Date:** 2025-07-15  
**Prepared by:** Mpumelelo Theophilas Nxazonke  
**Role:** QA Automation Engineer (Team Lead)

## Introduction

This document outlines all **known defects** discovered during the automated testing cycle (Jest Unit Tests + Cypress E2E) for the **CleanCity Waste Scheduler** application, executed from **2025-07-13 to 2025-07-14**.

Each defect is categorized by severity, impacted module, and testing tool. This report supports triage, regression planning, and QA communication with the development team.

> Related QA Documents:
> - [Final Test Report Summary](../final_docs/Test_Report_Summary.md)
> - [Test Execution Report](../final_docs/Test_Execution_Report.md)
> - [Traceability Matrix](../final_docs/Traceability_Matrix.md) _(pending update)_

---

## Test Environment

| Property       | Value                  |
|----------------|------------------------|
| Platform       | Windows 11 (Localhost) |
| Browsers       | Chrome (Cypress Runner) |
| Node Version   | v18                    |
| Cypress        | v13                    |
| Jest           | v29                    |
| Reporter       | Mochawesome / Jest HTML |
| Test Dates     | 2025-07-13 to 2025-07-14 |

---

## Defect Table

| Bug ID | Description | Component | Severity | Status | GitHub |
|--------|-------------|-----------|----------|--------|--------|
| BUG-001 | Login form error alert not rendered | Login | High | Open | [#BUG-001](#) |
| BUG-002 | `PickupForm` component not found | PickupForm | High | Open | [#BUG-002](#) |
| BUG-003 | Missing requestId input & validation | Feedback Form | High | Open | [#BUG-003](#) |
| BUG-004 | Dashboard filters not found | Dashboard | Medium | Open | [#BUG-004](#) |
| BUG-005 | Awareness cards and images missing | Awareness | Medium | Open | [#BUG-005](#) |
| BUG-006 | Profile doesn’t redirect unauthenticated user | Auth/Profile | High | Open | [#BUG-006](#) |
| BUG-007 | Schedule pickup inputs missing | PickupForm | High | Open | [#BUG-007](#) |
| BUG-008 | Module not found: `index.test.js` | App | High | Open | [#BUG-008](#) |
| BUG-009 | Nested `<form>` warning in BlogAdmin | BlogEditor | Low | Open | [#BUG-009](#) |

### Classification Criteria

| Severity | Meaning |
|----------|---------|
| **High** | Breaks major user functionality or prevents test automation |
| **Medium** | Causes functional error but has a workaround |
| **Low** | Minor display/UI bug, deprecated warning, or logging issue |
| **Warning** | Not a functional failure, but requires tech debt attention |

---

## Recommendations

- Resolve all **High severity** issues before production release.
- Prioritize **DOM selector alignment** between frontend and Cypress tests.
- Fix **testability attributes** (e.g., `role="alert"`, proper IDs).
- Refactor components to support test injection and accessibility.
- Review deprecated APIs and adjust to latest framework practices.
