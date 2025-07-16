# CleanCity Waste Pickup Scheduler – QA Documentation

## Overview

This repository contains all QA documentation and reports for the CleanCity Waste Pickup Scheduler, including test planning, execution, traceability, defects, and regression coverage.

---

## File Structure

final_docs/<br>
 ├── README.md<br>
 ├── Test_Plan.md<br>
 ├── Test_Strategy.md<br>
 ├── Risk_Analysis.md<br>
 ├── Test_Cases.md<br>
 ├── Test_Execution_Report.md<br>
 ├── Test_Report_Summary.md<br>
 ├── Defect_Report.md<br>
 ├── Traceability_Matrix.md<br>
 ├── Regression_Checklist.md<br>
 └── bug-reports/<br>
  └── Bug_<ID>.md (e.g. Bug_C-201.md)

---

## QA Documentation Index

| Document | Description                                         |
|----------|-----------------------------------------------------|
| `Test_Plan.md` | Overall approach, objectives, deliverables, tools, test levels |
| `Test_Strategy.md` | Detailed tactics per test type: functional, performance, UI, regression |
| `Test_Cases.md` | Manual and automated test cases grouped by module |
| `Test_Execution_Report.md` | Execution results from Jest, Cypress, with stats, outcomes, screenshots |
| `Test_Report_Summary.md` | Summary of coverage, pass/fail rates, and high-level recommendations |
| `Defect_Report.md` | Bugs identified with severity, status, test file references |
| `Traceability_Matrix.md` | Mapping between Requirements <-> Test Cases <-> Risks <-> Status |
| `Risk_Analysis.md` | Identified risks with mitigation strategy |
| `Regression_Checklist.md`| Sanity and smoke check items post-fix |
| `bug-reports/` | Individual Markdown files for each GitHub issue |
|`Presentation Video Drive Folder` | Google Drive folder containing QA Presentation and PDF Deliverables |

---

## Tools Used

- **Jest** – Unit testing
- **Cypress** – E2E automation
- **Mochawesome** – Test reporting
- **JMeter** – Performance testing (optional)
- **aXe / Lighthouse** – Accessibility and UX audits

---

## Continuous Testing Flow

1. **Manual & Automated Testing** executing test suites using `npm run test` or `npm run cypress:run`
2. Review results in `Test_Execution_Report.md`
3. Open defects found in `Defect_Report.md`
4. Verify regressions using `Regression_Checklist.md`
5. Validate requirement coverage via `Traceability_Matrix.md`
6. **Reports Generated** and shared to stakeholders

---

## Key Links

- [Final Test Execution Report](./Test_Execution_Report.md)
- [Detailed Test Cases](./Test_Cases.md)
- [Defect Report](./Defect_Report.md)
- [Traceability Matrix](./Traceability_Matrix.md)
- [Risk Analysis](./Risk_Analysis.md)
- [Test Report Summary](./Test_Report_Summary.md)
- [Regression Checklist](./Regression_Checklist.md)
- [Report Presentation Video](https://drive.google.com/drive/folders/1uIJ24PO3M5Nt8WJ6OV7TLTl-QGXz85xi?usp=sharing)

---

Prepared by:  
**Mpumelelo Theophilas Nxazonke**  
QA Lead | 2025-07-15
