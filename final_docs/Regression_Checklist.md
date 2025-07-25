# Regression Checklist – CleanCity Waste Scheduler

## Purpose:
Verify that critical flows and bugfixes remain stable after major changes or releases.

---

## Core Modules to Retest

| Feature                   | Regression Covered? | Notes |
|---------------------------|---------------------|-------|
| User Registration         | Cypress, Jest       | Edge cases retested |
| Login / Logout            | Cypress             | Failed previously |
| Schedule Pickup Form      | Manual + Cypress  | Previously blocked |
| Feedback Submission       | Cypress           | Bug: input ID missing |
| Dashboard Filtering       | (Bug)             | Blocked due to selector |
| Profile Access Guards     | Cypress           | Route guard |
| Awareness + Blog Access   | All Passed        | Article loads |
| Admin Request Management  | All Passed        | Fully covered |
| Navigation Routes         | All Passed        | Fully covered |
| Community Feed            | Manual            | Persistent |
| Settings/Profile Edit     | Manual            | Data saved |

---

## Associated Files

- `bug-reports/Bug_C-201.md`
- `Test_Execution_Report.md`
- `Defect_Report.md`

---

## Next Steps

- Re-run failed tests after bug fixes
- Schedule full regression before next release
- Add automated regression suite in CI/CD
