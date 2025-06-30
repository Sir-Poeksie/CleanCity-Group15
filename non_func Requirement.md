## Non-Functional Requirements (NFR) – CleanCity Waste Pickup Scheduler

### 1. Usability
- Interface must be intuitive and simple to navigate
- Forms must clearly indicate required fields and errors

### 2. Accessibility
- App should support screen readers and keyboard navigation
- Images must include `alt` attributes (currently missing on Awareness page)

### 3. Performance
- Pages must load in under 2 seconds on average broadband
- Filters and sorting actions must execute with minimal lag

### 4. Reliability
- Form submissions should succeed unless input is invalid
- Admin updates must persist reliably in localStorage

### 5. Portability
- The app must function consistently across modern browsers (Chrome, Firefox, Edge)
- Mobile view must preserve core functionality and layout

### 6. Security (Within Local Context)
- Prevent cross-site scripting (XSS) through escaped inputs
- User data (though stored client-side) should not be easily manipulated via browser console

### 7. Maintainability
- Codebase should follow clear component structure for easier testing and updates
- Use React Testing Library for unit tests
