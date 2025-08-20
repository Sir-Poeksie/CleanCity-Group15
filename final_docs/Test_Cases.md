# Test Cases - CleanCity Waste Pickup Scheduler

> This document lists manual and automated test cases designed for functional and non-functional testing across the CleanCity platform.

---

## Table of Contents

- [Test Cases - CleanCity Waste Pickup Scheduler](#test-cases---cleancity-waste-pickup-scheduler)
  - [Table of Contents](#table-of-contents)
  - [1. Authentication Module](#1-authentication-module)
  - [2. Pickup Scheduling Module](#2-pickup-scheduling-module)
  - [3. Dashboard \& Filters](#3-dashboard--filters)
  - [4. Feedback Form](#4-feedback-form)
  - [5. Awareness \& Blog](#5-awareness--blog)
  - [6. Admin Panel](#6-admin-panel)
  - [7. Community Feed](#7-community-feed)
  - [8. UI/UX, Accessibility \& Responsiveness](#8-uiux-accessibility--responsiveness)
  - [9. Performance](#9-performance)

---

## 1. Authentication Module

| Test ID | Description | Priority | Type | Automation | Expected Result |
|--------|-------------|----------|------|------------|------------------|
| TC-001 | Register new user with valid details | High | Functional | Manual | User successfully registered |
| TC-002 | Login with correct credentials | High | Functional | Automated (Jest) | Redirect to Dashboard |
| TC-003 | Login with wrong credentials | High | Negative | Automated | Show error |
| TC-004 | Logout as logged-in user | Medium | Functional | Automated | Session cleared |
| TC-005 | Access protected route when not logged in | High | Security | Automated | Redirect to login |

---

## 2. Pickup Scheduling Module

| Test ID | Description | Priority | Type | Automation | Expected Result |
|--------|-------------|----------|------|------------|------------------|
| TC-006 | Schedule valid pickup | High | Functional | Manual | Request appears in history |
| TC-007 | Submit without selecting waste type | High | Validation | Automated | Show validation error |
| TC-008 | Try booking on past date | Medium | Validation | Manual | Error shown |
| TC-009 | Duplicate pickup same day | Medium | Negative | Manual | Prevent second booking |
| TC-010 | Pickup form field limits (200 char instruction) | Medium | Boundary | Automated | Enforce limits |

---

## 3. Dashboard & Filters

| Test ID | Description | Priority | Type | Automation | Expected Result |
|--------|-------------|----------|------|------------|------------------|
| TC-011 | View dashboard with existing pickups | High | Functional | Manual | Table populates with requests |
| TC-012 | Filter by "Scheduled" status | Medium | Functional | Automated | Only Scheduled shown |
| TC-013 | Filter by "Eldoret" (bug expected) | High | Functional | Manual | Bug: Returns Nairobi |
| TC-014 | Sort by pickup date | Medium | Functional | Manual | Date sort reflects correctly |
| TC-015 | View stats (pending, completed, etc.) | Medium | Functional | Automated | Stats match actual records |

---

## 4. Feedback Form

| Test ID | Description | Priority | Type | Automation | Expected Result |
|--------|-------------|----------|------|------------|------------------|
| TC-016 | Submit valid feedback | High | Functional | Manual | Success message shown |
| TC-017 | Submit without Request ID | High | Validation | Automated | Error message appears |
| TC-018 | Long feedback text | Medium | Boundary | Manual | Accepted |
| TC-019 | Use invalid Request ID | Medium | Negative | Manual | Error: Request not found |

---

## 5. Awareness & Blog

| Test ID | Description | Priority | Type | Automation | Expected Result |
|--------|-------------|----------|------|------------|------------------|
| TC-020 | View awareness cards | Low | UI | Manual | Loads correctly |
| TC-021 | Images missing alt text | Medium | Accessibility | Manual | Fails accessibility |
| TC-022 | Blog renders article | Medium | Functional | Automated | Article content loads |
| TC-023 | Blog admin creates article | High | Functional | Manual | Article appears in BlogHome |

---

## 6. Admin Panel

| Test ID | Description | Priority | Type | Automation | Expected Result |
|--------|-------------|----------|------|------------|------------------|
| TC-024 | Admin login successful | High | Security | Automated | Redirects to Admin Panel |
| TC-025 | Update pickup status | High | Functional | Manual | Status reflects on dashboard |
| TC-026 | Edit request flow (button & form) | High | Functional | Manual | Editable |
| TC-027 | View stats overview cards | Medium | UI | Automated | Stats match backend |
| TC-028 | Admin filters (status/location) | Medium | Functional | Manual | Filtering behaves as expected |

---

## 7. Community Feed

| Test ID | Description | Priority | Type | Automation | Expected Result |
|--------|-------------|----------|------|------------|------------------|
| TC-029 | Post new community message | Medium | Functional | Manual | Appears in feed |
| TC-030 | Comment on post | Low | Functional | Manual | Comment appears |
| TC-031 | Like post | Low | Functional | Automated | Like count increments |
| TC-032 | Sort posts chronologically | Medium | Functional | Manual | Sorted by timestamp |

---

## 8. UI/UX, Accessibility & Responsiveness

| Test ID | Description | Priority | Type | Automation | Expected Result |
|--------|-------------|----------|------|------------|------------------|
| TC-033 | View layout on mobile (320px) | High | Responsiveness | Manual | Layout adapts cleanly |
| TC-034 | Navigate using keyboard | High | Accessibility | Manual | All links accessible |
| TC-035 | Lighthouse audit score | Medium | Performance | Automated | Accessibility score >90 |
| TC-036 | Missing labels on form fields | Medium | Accessibility | Manual | All forms have labels |

---

## 9. Performance

| Test ID | Description | Priority | Type | Automation | Expected Result |
|--------|-------------|----------|------|------------|------------------|
| TC-037 | Load homepage <3s | High | Performance | Automated (JMeter) | Meets SLA |
| TC-038 | Simulate 50 users scheduling pickups | High | Performance | Automated | No crash |
| TC-039 | Test localStorage limit | Medium | Non-Functional | Automated | Warns user or handles error |
| TC-040 | Data persistence after reload | High | Functional | Manual | Data remains after refresh |
