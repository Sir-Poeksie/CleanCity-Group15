# Risk Analysis – CleanCity Waste Pickup Scheduler

## Document Information

| Key             | Value                                   |
|-----------------|------------------------------------------|
| **Version**     | 1.0                                      |
| **Date**        | 2025-07-08                               |
| **Prepared By** | Mpumelelo Theophilas Nxazonke, QA Lead |
| **Application** | CleanCity Waste Pickup Scheduler         |

---

## 1. Purpose

This document outlines potential **risks** associated with the CleanCity Waste Pickup Scheduler system, categorized by both **likelihood** and **impact**, and provides a **risk mitigation strategy** for each. The purpose is to proactively address issues that may compromise functionality, user experience, or testing effectiveness.

---

## 2. Risk Matrix

| ID | Feature / Module | Risk Description                           | Likelihood | Impact  | Priority | Mitigation Strategy |
|----|------------------|--------------------------------------------|------------|---------|----------|----------------------|
| R1 | Waste Pickup Form | User can schedule multiple pickups on same day | High | High | Critical | Add date validation; disable same-day duplicate |
| R2   | Form Validation        | Missing validation on date/time fields | Medium | High | High | Enforce required inputs and field constraints |
| R3   | Admin Request Control  | Admins can assign past dates or invalid times | Medium | Medium  | High | Restrict time inputs to future only |
| R4   | Dashboard              | Environmental metrics calculated inaccurately | Medium | High | High | Write unit tests for calculations |
| R5   | Notification System    | Notification bell doesn’t reflect new alerts   | High | Medium  | Medium  | Test `localStorage` consistency and unread logic |
| R6   | Community Posts        | Inappropriate content can be posted (no moderation) | Medium | High | High | Add content filters, flag system |
| R7   | Accessibility          | Missing `alt` tags or label associations | High | Medium | Medium | Add Lighthouse/aXe audits |
| R8   | Performance            | Awareness page slows down due to image loading | Medium     | Medium  | Medium  | Lazy load and compress images |
| R9   | Role-based Access      | Regular users can access `/admin` routes | Low | High | High | Add route guards and UI hiding |
| R10  | `localStorage`         | Data corruption if malformed JSON is written | Low | Medium  | Low | Validate before save; use try/catch |
| R11  | User Management        | Admins can delete themselves | Low        | High | High | Prevent self-delete with rule check |
| R12  | Gamification Logic     | Points and badges not syncing correctly | Medium | Low  | Low | Add logging for point calculations |
| R13  | Compatibility          | Layout breaks on smaller Android screens | Medium | Medium | Medium | Add responsive testing coverage |
| R14  | Community Feed         | Posts are not saved across sessions | Medium | Medium | Medium  | Audit `localStorage` persistence logic |
| R15  | Security               | XSS vulnerability on community comments | High | High | Critical | Escape all user inputs |
| R16  | Feedback Form          | Allows invalid REQ IDs and sends empty feedback | Medium | High | High | Add ID format check and required input validation |
| R17  | Analytics              | Monthly trends graph shows incorrect totals | Medium | Medium | Medium | Validate aggregation logic in dashboard |
| R18  | Blog Content           | No pagination or filtering; long load time | Low | Medium | Low | Add pagination and content grouping |
| R19  | Testing Coverage       | No regression testing done before deployment | High | High | Critical | Automate critical flows; define checklist |
| R20  | Reporting Features     | Export to CSV breaks with special characters | Medium | Medium | Medium | Encode fields, test CSV handling |
| R21  | Touch Devices          | Buttons overlapping on mobile browsers | Medium | Low | Low | Use media queries, run responsive audit |
| R22  | Navigation | Breadcrumbs don't update correctly when back button used | Low | Low | Low | Use React Router history logic check |
| R23  | Feedback Submission    | User can submit multiple feedbacks for same request | Low | Medium | Low | Add flag per request ID in `localStorage` |
| R24  | Profile Image Upload   | Accepts non-image files | Medium | Medium | Medium | Validate MIME types on upload |

---

## 3. Risk Prioritization Guide

| Priority | Description                 | Color Code |
|----------|-----------------------------|------------|
| Critical | Must be addressed immediately | High Risk  |
| High     | High impact or likely to occur | Medium Risk |
| Medium   | Manageable, but impacts UX    | Moderate Risk |
| Low      | Unlikely or minor issue       | Low Risk   |

---

## 4. Risk Mitigation Strategy Summary

- Enforce **form validation** across all modules (Forms, Feedback, Registration)
- Implement **route protection** and role-based UI rendering
- Perform **manual and automated security audits**
- Use **Lighthouse and Axe-core** for accessibility validation
- Assign a tester to each **high/critical risk feature**
- Integrate **regression testing** before final submission

---

## 5. Conclusion

This Risk Analysis forms the foundation of our **Test Strategy** by helping us focus on areas that have the highest probability of failure or user impact. All identified risks will be tracked via GitHub Issues with labels such as `high-priority`, `blocked`, or `review-needed`.
