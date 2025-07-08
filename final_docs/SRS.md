# CleanCity Waste Pickup Scheduler – Software Requirements Specification (SRS)

## Document Information

| Key             | Value                                  |
| --------------- | -------------------------------------- |
| **Version**     | 1.0                                    |
| **Prepared By** | Mpumelelo Theophilas Nxazonke, QA Lead |
| **Application** | CleanCity Waste Pickup Scheduler       |
| **Date**        | 2025-07-08                             |

---

## 1. Introduction

### 1.1 Purpose

This document outlines the **Software Requirements Specification (SRS)** for the CleanCity Waste Pickup Scheduler. The application is a React-based web platform enabling communities to request, manage, and track waste pickups, while promoting eco-awareness through educational and gamified features.

### 1.2 Scope

The system will allow users to register, log in, schedule pickups, receive notifications, and view analytics. Admins can manage requests, users, and content. The application supports responsive design, role-based access, and client-side persistence via `localStorage`.

### 1.3 Intended Audience

* QA Engineers
* Software Developers
* Project Managers
* Stakeholders
* Students & Instructors (for evaluation)

### 1.4 Definitions

* **FR** – Functional Requirement
* **NFR** – Non-Functional Requirement
* **User** – Registered resident
* **Admin** – Platform manager with elevated permissions

---

## 2. User Types & Roles

| Role         | Permissions                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| **Resident** | Schedule pickups, track requests, access dashboard, participate in community |
| **Admin**    | Manage requests, approve/reject entries, moderate content, view reports      |
| **Guest**    | Browse awareness material, register account                                  |

---

## 3. System Features and Functional Requirements

### 3.1 Authentication (FR-001 to FR-011)

* **FR-001:** Register with email, password, full name, phone (optional)
* **FR-002:** Input validation on registration form
* **FR-003:** Default role = "User" after registration
* **FR-004:** Login with email and password
* **FR-005:** Show error for invalid login
* **FR-006:** Maintain session in `localStorage`
* **FR-007:** Redirect to previous page after login
* **FR-008:** Logout functionality
* **FR-009:** Clear session on logout
* **FR-010:** Support "User" and "Admin" roles
* **FR-011:** Restrict admin routes to admins only

### 3.2 Waste Pickup Scheduling (FR-012 to FR-022)

* **FR-012:** Allow scheduling with waste type, date, instructions, address
* **FR-013:** Date validation (min 24 hours ahead)
* **FR-014:** Show available pickup slots
* **FR-015:** Prevent duplicate requests for same date
* **FR-016:** View pickup history
* **FR-017:** Cancel pending pickups
* **FR-018:** Modify pickups >24 hours before schedule
* **FR-019:** Show pickup status (Pending/Confirmed/Completed)
* **FR-020:** Real-time updates
* **FR-021:** Notifications for status updates
* **FR-022:** Submit post-pickup feedback

### 3.3 Dashboard & Analytics (FR-023 to FR-030)

* **FR-023:** Personalized dashboard: stats, pickups, badges
* **FR-024:** Calculate waste diversion, CO2 saved, trees saved
* **FR-025:** Display charts (daily/monthly/yearly)
* **FR-026:** Leaderboard by impact points
* **FR-027:** Show trends (waste type, region)
* **FR-028:** Export data as CSV
* **FR-029:** Badges for milestones (e.g., 10 pickups)
* **FR-030:** Level system based on points

### 3.4 Community Features (FR-041 to FR-052)

* **FR-041:** Create public posts
* **FR-042:** Like/comment on posts
* **FR-043:** Chronological display
* **FR-044:** Share experiences/tips
* **FR-045:** View/edit user profile
* **FR-046:** Activity history & achievements
* **FR-047:** Upload profile pictures
* **FR-048:** Environmental stats per user
* **FR-049:** Follow other users
* **FR-050:** Community news feed
* **FR-051:** Share milestones
* **FR-052:** Join challenges/events

### 3.5 Admin Panel (FR-053 to FR-064)

* **FR-053:** View all requests
* **FR-054:** Approve/reject/modify requests
* **FR-055:** Assign time slots
* **FR-056:** Filter/search pickup logs
* **FR-057:** View all users
* **FR-058:** Change user roles
* **FR-059:** Suspend/delete users
* **FR-060:** View reports
* **FR-061:** Moderate posts/comments
* **FR-062:** Delete flagged content
* **FR-063:** Content flag/report features
* **FR-064:** Post platform-wide announcements

### 3.6 Notifications (FR-065 to FR-068)

* **FR-065:** Show bell icon with unread count
* **FR-066:** Notify for pickups, posts, badges
* **FR-067:** Mark notifications as read
* **FR-068:** View notification history

### 3.7 Awareness & Education (FR-036 to FR-040)

* **FR-036:** Show rotating tips every 5s
* **FR-037:** Interactive quizzes
* **FR-038:** Score tracking for quizzes
* **FR-039:** Environmental infographics
* **FR-040:** Action links/buttons (e.g., schedule pickup)

---

## 4. Non-Functional Requirements (NFRs)

### 4.1 Performance

* **NFR-001:** App must load under 3 seconds on 4G
* **NFR-002:** Interactions must respond under 1s
* **NFR-003:** Charts load without freezing browser

### 4.2 Usability

* **NFR-004:** Simple, clean interface with tooltips
* **NFR-005:** 2-click access to major features
* **NFR-006:** Real-time form validation on inputs

### 4.3 Accessibility

* **NFR-007:** WCAG 2.1 AA compliant
* **NFR-008:** Full keyboard navigation support
* **NFR-009:** Screen reader compatibility
* **NFR-010:** Alt text on all images

### 4.4 Responsiveness

* **NFR-011:** Full compatibility for:

  * Mobile (320px)
  * Tablet (768px)
  * Desktop (1024px+)
* **NFR-012:** Flexbox/Grid layout used for adaptability

### 4.5 Security

* **NFR-013:** Input sanitization to prevent XSS
* **NFR-014:** No passwords in localStorage
* **NFR-015:** No sensitive data exposed via DevTools
* **NFR-016:** Role validation on frontend + routing

### 4.6 Maintainability

* **NFR-017:** Modular components
* **NFR-018:** Organized folder structure by feature
* **NFR-019:** Clean inline comments and naming conventions

### 4.7 Scalability

* **NFR-020:** Easy to add more waste types and cities
* **NFR-021:** Blog/category system expandable

### 4.8 Browser Compatibility

* **NFR-022:** Chrome, Firefox, Safari, Edge (latest 2 versions)
* **NFR-023:** Graceful fallback if JS disabled

### 4.9 Data Storage

* **NFR-024:** Store requests/users in localStorage
* **NFR-025:** Session must persist across refresh
* **NFR-026:** Handle localStorage size limits gracefully

---

## 5. Business Rules

| Rule Code | Rule Description                                   |
| --------- | -------------------------------------------------- |
| BR-001    | Pickup scheduling only allowed 24 hours in advance |
| BR-002    | Max 3 pickups per user per week                    |
| BR-003    | Hazardous waste requires admin review              |
| BR-004    | Email addresses must be unique                     |
| BR-005    | Passwords must be min 8 characters                 |
| BR-006    | Inactive users archived after 6 months             |
| BR-007    | Admin accounts cannot be deleted                   |
| BR-008    | Blog posts must be moderated before publishing     |
| BR-009    | Content flagged more than 3 times is auto-hidden   |

---

## 6. Support Requirements

* **FR-093:** Contextual tooltips for forms
* **FR-094:** FAQ page accessible in nav
* **FR-095:** Help link and contact info
* **FR-096:** Error logging via DevTools console
* **FR-097:** `localStorage` log of critical errors for debugging

---

## 7. Future Enhancements (Optional)

* Support for offline caching via service workers
* Integration with external pickup APIs or SMS alerts
* Backend system for persistence and analytics
