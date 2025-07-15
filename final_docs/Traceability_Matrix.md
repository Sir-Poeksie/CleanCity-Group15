# Traceability Matrix – CleanCity Waste Scheduler

**Version:** 1.0  
**Date:** 2025-07-15  
**Prepared by:** Mpumelelo Theophilas Nxazonke  

This matrix ensures all functional and non-functional requirements are covered by at least one test case, helping track coverage and verify completeness of the testing process.

---

## Product Requirements to Traceability Mapping

| PRD Section | Feature             | Traceability ID                |
| ----------- | ------------------- | ------------------------------ |
| PRD-1.1     | User Registration   | FR-001 → TC-001                |
| PRD-1.2     | Login               | FR-004 → TC-004                |
| PRD-2.0     | Pickup Scheduler    | FR-012 → TC-012                |
| PRD-3.0     | Dashboard + Stats   | FR-020, FR-023 → TC-011–TC-015 |
| PRD-4.0     | Admin Management    | FR-053 → TC-025–TC-028         |
| PRD-5.0     | Feedback + Alerts   | FR-065, FR-087 → TC-016–TC-019 |
| PRD-6.0     | Community, Blog, UX | FR-029, FR-069 → TC-029–TC-036 |

## Requirements-to-Test Mapping

| Req ID | Requirement Description | Test Case ID | Test Type | Risk ID | Status |
|--------|--------------------------|--------------|-----------|---------|--------|
| FR-001 | Register user with email, password, name | TC-001 | Functional | R-001 | Passed |
| FR-004 | Login with email and password | TC-004 | Functional | R-002 | Partial |
| FR-012 | Schedule pickup (future date) | TC-012 | Functional | R-003 | Blocked |
| FR-020 | Real-time pickup tracking | TC-020 | Functional | R-004 | Pass |
| FR-023 | Personalized user dashboard | TC-023 | UI | R-005 | Pass |
| FR-029 | Award badges for milestones | TC-029 | Gamification | R-006 | Untested |
| FR-045 | View/edit user profiles | TC-045 | Functional | R-007 | Pass |
| FR-053 | Admin view all pickups | TC-053 | Admin Functional | R-008 | Pass |
| FR-065 | Notification bell unread count | TC-065 | UI/UX | R-009 | Untested |
| FR-069 | Responsive design for all viewports | TC-069 | Non-Functional | R-010 | Pass |
| FR-087 | Clear actionable error messages | TC-087 | UX/Validation | R-011 | Failed |

## Risk Status Summary

| Risk ID | Description | Impact | Likelihood | Priority | Status |
|---------|-------------|--------|------------|----------|--------|
| R-001 | Registration fails | High | Medium | High | Mitigated |
| R-002 | Session loss on login | High | Medium | High | Needs Validation |
| R-003 | Duplicate pickups | High | High | Critical | Confirmed |
| R-004 | Missing real-time data | Medium | High | Medium | Blocked |
| R-005 | Dashboard errors | Medium | Medium | Medium | Covered |
| R-006 | Badges not issued | Low | Medium | Low | Untested |
| R-007 | Profile not updating | Medium | Medium | Medium | Present |
| R-008 | Admin mismanagement | High | Low | Medium | Tested |
| R-009 | Notifications stale | Low | Medium | Low | Untested |
| R-010 | Breaks on mobile | High | Low | Medium | Untested |
| R-011 | Poor error messages | Medium | Medium | Medium | Confirmed |

---

## Linked QA Docs:

- Test Design: [Test_Cases.md](../final_docs/Test_Cases.md)  
- Risk Areas: [Risk_Analysis.md](../final_docs/Risk_Analysis.md)  
- Execution Logs: [Test_Execution_Report.md](../final_docs/Test_Execution_Report.md)
- Test Report: [Test Report Summary](../final_docs/Test_Report_Summary.md)
- Bug/Defect Report [Defect Report](../final_docs/Defect_Report.md)