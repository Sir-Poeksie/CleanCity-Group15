# CleanCity - Test Plan

**Document Version:** 1.0  
**Date:** 2025-07-08  
**Author:** Mpumelelo Theophilas Nxazonke (@Sir-Poeksie)  
**Project:** CleanCity - Waste Pickup Scheduler  
**Phase:** Test Planning (STLC Phase 2)  

---

## 1. Introduction

### 1.1 Purpose

This document outlines the test planning activities, scope, strategy, schedule, resources, and entry/exit criteria for testing the CleanCity Waste Pickup Scheduler application. The purpose is to ensure structured and traceable QA processes aligned with the STLC model.

### 1.2 Objective

The objective is to validate that the CleanCity application meets its specified functional and non-functional requirements, is user-friendly, and performs reliably across supported platforms and browsers.

---

## 2. Scope

### 2.1 In Scope

| Feature / Module                    | Included Testing Areas                            |
|-------------------------------------|---------------------------------------------------|
| Pickup Request Form                 | Field validation, scheduling logic, error states  |
| Dashboard Filtering                 | Filter accuracy, status labels, sorting bugs      |
| Feedback Page                       | Form validation, request ID checks                |
| Admin Panel                         | Request status updates, data display              |
| Notifications                       | Unread count, alert types                         |
| Accessibility                       | Alt-text, tab order, contrast                     |
| Responsive Design                   | Layout integrity across screen sizes              |

### 2.2 Out of Scope

| Area                                | Rationale                                          |
|-------------------------------------|----------------------------------------------------|
| Backend/API testing                 | No backend (localStorage only)                     |
| Real-time updates                   | Not supported in current architecture              |
| Performance under high load         | Client-side only; no server stress testing possible|

---

## 3. Test Approach

### 3.1 Testing Methods

| Type             | Details                                                             |
|------------------|---------------------------------------------------------------------|
| Manual Testing   | UI/UX testing, form validation, edge cases, exploratory testing     |
| Automated Testing| Core logic using Jest; UI flow via Cypress where feasible           |

### 3.2 Testing Techniques

- **Black-box Testing**: Functional validation (UI behavior, field validation)
- **White-box Testing**: Coverage of pure logic functions (e.g. localStorage interaction)
- **Boundary Value Analysis**: Input length, date boundaries
- **Equivalence Partitioning**: Valid/Invalid inputs for scheduling and login
- **Decision Table Testing**: Request approval logic (Admin module)

---

## 4. Tools & Environment

| Tool              | Purpose                           |
|-------------------|------------------------------------|
| Jest              | Unit testing of logic functions    |
| Cypress           | Automated E2E flows (UI testing)   |
| Lighthouse        | Accessibility, performance audits  |
| Chrome DevTools   | Manual UI/console testing          |
| GitHub Projects   | Task management and issue tracking |
| VS Code           | Development & test script writing  |

---

## 5. Test Schedule

| Phase                    | Dates               | Notes                              |
|--------------------------|---------------------|-------------------------------------|
| Requirement Analysis     | 26–28 June 2025     | Completed                          |
| Risk Assessment          | 28–29 June 2025     | Completed                          |
| Test Planning            | 29–30 June 2025     | Completed by QA Lead               |
| Test Case Design         | 30 June – 01 July   | In progress                        |
| Test Execution           | 02–03 July 2025     | Includes manual + automation       |
| Final Reporting          | 03–04 July 2025     | Compilation + GitHub Issue closure |

---

## 6. Entry & Exit Criteria

### 6.1 Entry Criteria

- Functional & non-functional requirements gathered
- Risk Analysis completed
- Test Plan approved
- App is installable and functioning on localhost
- GitHub Issues enabled for bug tracking

### 6.2 Exit Criteria

- All high and medium severity test cases executed
- All critical bugs resolved or logged
- Test Report Summary completed and submitted
- Traceability Matrix confirms requirement coverage

---

## 7. Resources & Roles

| Role             | Name                          | Responsibility                     |
|------------------|-------------------------------|------------------------------------|
| QA Team Lead     | Mpumelelo Nxazonke (@Sir-Poeksie) | All phases of STLC execution      |
| Testers          | *Team Assigned, Unresponsive* | *N/A – Work performed solo*       |

---

## 8. Risks & Mitigation

| Risk                             | Likelihood | Impact | Mitigation                                      |
|----------------------------------|------------|--------|-------------------------------------------------|
| Limited team participation       | High       | High   | Proceed solo; document clearly                  |
| Limited testing time            | High       | Medium | Focus on core modules + automation              |
| UI coverage gaps                | Medium     | Medium | Prioritize risk-based testing                   |
| Incomplete test environment setup | Medium     | Low    | Focus on Chrome + localStorage flow             |

---

## 9. Test Deliverables

| Document / Artifact   | Description                              |
|---------------------- |------------------------------------------|
| `App_Requirements.md` | Functional & Non-Functional requirements |
| `Risk_Analysis.md` | Matrix + categorization |
| `Test_Strategy.md` | Strategy, tools, testing types |
| `Test_Cases.md` | All manual and automated cases |
| `Traceability_Matrix.md` | Functional Requirements -> Test Case Mapping |
| `Defect_Report.md` | Logged issues and resolution status |
| `Test_Report_Summary.md` | Final metrics, reflections, overview |

---

## Review & Execution Context

> *Note:* Due to repeated non-participation and lack of communication from assigned team members, this Test Plan has been drafted and finalized by the QA Team Lead.

All outlined tasks, coverage, and schedules reflect the solo execution of this QA cycle under academic and professional obligations.

**Test Plan Author:**  
Mpumelelo Theophilas Nxazonke (@Sir-Poeksie)  
**Date Finalized:** 2025-07-08

---
