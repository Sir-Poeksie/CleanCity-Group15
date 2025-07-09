# Traceability Matrix – 

*Version:* 1.0  
*Date:* 2025-06-24  
*Prepared by:* Mpumelelo Theophilas Nxazonke

This matrix ensures all functional and non-functional requirements are covered by at least one test case, helping track coverage and verify completeness of the testing process.

| Req ID | Requirement Description | Test Case ID | Test Case Description | Test Type | Risk ID | Status |
|--------|-------------------------|--------------|-----------------------|-----------|---------|--------|
| FR-001 | Register user with email, password, name | TC-001 | Functional | R-001 | Draft |
| FR-004 | Login with email and password | TC-004 | Functional | R-002| Draft |
| FR-012 | Schedule pickup (future date) | TC-012 | Functional | R-003 | Draft |
| FR-020 | Real-time pickup tracking | TC-020 | Functional | R-004 | Draft |
| FR-023 | Personalized user dashboard | TC-023 | UI | R-005 | Draft |
| FR-029 | Award badges for milestones | TC-029 | Gamification | R-006 | Draft |
| FR-045 | View/edit user profiles | TC-045 | Functional | R-007 | Draft |
| FR-053 | Admin view all pickups | TC-053 | Admin Functional | R-008 | Draft |
| FR-065 | Notification bell unread count | TC-065 | UI/UX | R-009 | Draft |
| FR-069 | Responsive design for all viewports | TC-069 | Non-Functional | R-010 | Draft |
| FR-087 | Clear actionable error messages | TC-087 | UX/Validation | R-011 | Draft | 

Risk Analysis Matrix

| Risk ID | Risk Description | Impact | Likelihood | Priority | Mitigation Strategy |
|---------|------------------|--------|------------|----------|---------------------|
| R-001 | Users unable to register due to field validation bugs | High | Medium | High | Validate front-end regex + error messages |
| R-002 | Login session fails to persist | High | Medium | High | Test localStorage functionality + fallback |
| R-003 | Pickup scheduling conflicts (duplicate dates) | High | High | Critical | Enforce unique scheduling per date per user |
| R-004 | Real-time updates missing due to localStorage-only design | Medium |High | Medium | Display clear refresh indicators |
| R-005 | Dashboard stats display incorrect data | Medium | Medium | Medium | Unit test calculations and rendering logic |
| R-006 | Badges not awarding despite meeting conditions | Low | Medium | Low | Check logic + badge assignment events |
| R-007 | Profile updates not persisting | Medium | Medium | Medium | Validate profile object structure in storage |
| R-008 | Admins mismanage requests due to missing controls | High | Low | Medium | Simulate all admin workflows in tests |
| R-009 | Notifications not updating read state | Low | Medium | Low | Track state flags per user session |
| R-010 | App unusable on mobile devices | High | Low | Medium | Manual device testing + media query validation |
| R-011 | Error messages not guiding users | Medium | Medium | Medium | Heuristic testing for UX validation |

---

# Notes:

- Use checkboxes to mark test execution status during or after your testing session.

## Cross-References

- Test Design: [Test_Cases.md](./Test_Cases.md)  
- Risk Areas: [Risk_Analysis.md](./Risk_Analysis.md)  
- Execution Logs: [Test_Execution_Report.md](./Test_Execution_Report.md)
