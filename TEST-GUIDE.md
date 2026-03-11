# Website Testing Guide
## Luxe Nest Decor - HTML/CSS/JS Version

### How to Test the Website

1. **Open the Website**
   - Navigate to the `/public` folder
   - Open `index.html` in your web browser
   - Or set up a local server (recommended for best experience)

2. **Test All Pages**
   - Navigate to all pages and verify they load correctly
   - Check for any console errors (F12 → Console tab)

---

## Test Checklist

### 🏠 Home Page (index.html)

#### Visual Elements
- [ ] Hero section displays correctly
- [ ] All images load properly
- [ ] Services cards display in grid layout
- [ ] Testimonials show properly
- [ ] Pricing tables are aligned correctly
- [ ] Footer displays all links

#### Interactive Elements
- [ ] "Get Free Consultation" button opens lead form modal
- [ ] "View Our Services" anchor link scrolls to services section
- [ ] All "Choose Plan" buttons open lead form modal
- [ ] "Get Started Today" button opens lead form modal
- [ ] Mobile menu button toggles navigation menu
- [ ] Cookie consent banner appears (if not previously accepted)

---

### 📋 About Page (about.html)

#### Visual Elements
- [ ] Hero section displays correctly
- [ ] Company information renders properly
- [ ] Core values section displays
- [ ] Process steps show correctly
- [ ] Images load properly

#### Interactive Elements
- [ ] "Contact Us" link navigates to contact.html
- [ ] Mobile menu works
- [ ] All navigation links work

---

### 🛠️ Services Page (services.html)

#### Visual Elements
- [ ] All 6 service sections display
- [ ] Alternating image/text layout works
- [ ] Service images load correctly
- [ ] Service descriptions are readable

#### Interactive Elements
- [ ] All service CTA buttons open lead form modal
- [ ] "Get Free Consultation" button opens lead form modal
- [ ] Mobile menu works
- [ ] Navigation works correctly

---

### 📧 Contact Page (contact.html)

#### Visual Elements
- [ ] Contact information cards display
- [ ] Contact form displays correctly
- [ ] Google Maps iframe loads
- [ ] Business hours show correctly

#### Interactive Elements
- [ ] Contact form accepts input
- [ ] Form validation works (required fields)
- [ ] Privacy policy checkbox functions
- [ ] Submit button submits form
- [ ] Form shows success alert
- [ ] Form resets after submission
- [ ] Google Maps is interactive

---

### ⚖️ Legal Pages

Test all 4 legal pages:
- [ ] privacy-policy.html
- [ ] cookie-policy.html
- [ ] terms-conditions.html
- [ ] disclaimer.html

For each legal page:
- [ ] Page loads without errors
- [ ] Content displays correctly
- [ ] All internal links work
- [ ] All external links open in new tab
- [ ] Mobile menu works
- [ ] Cookie consent banner works

---

## 🎯 Feature Testing

### Lead Form Modal

#### Opening the Modal
- [ ] Opens when clicking "Get Free Consultation"
- [ ] Opens when clicking "Choose Plan" buttons
- [ ] Opens when clicking any service CTA button
- [ ] Modal overlay appears with dark background
- [ ] Modal content is centered on screen

#### Modal Functionality
- [ ] All form fields are editable
- [ ] Required fields show validation
- [ ] Service dropdown shows all 6 services
- [ ] Privacy policy link works
- [ ] Terms & Conditions link works
- [ ] Consent checkbox is clickable

#### Closing the Modal
- [ ] X button closes the modal
- [ ] Clicking outside modal (on overlay) closes it
- [ ] ESC key closes the modal (if implemented)
- [ ] Modal closes after successful submission

#### Form Submission
- [ ] Cannot submit without required fields
- [ ] Cannot submit without consent checkbox
- [ ] Shows alert when consent not checked
- [ ] Shows success alert after submission
- [ ] Form data is logged to console
- [ ] Form resets after submission

---

### Mobile Navigation

#### Desktop View (Width > 768px)
- [ ] Desktop navigation menu is visible
- [ ] Mobile menu button is hidden
- [ ] All navigation links work
- [ ] Active page is highlighted

#### Mobile View (Width ≤ 768px)
- [ ] Desktop navigation is hidden
- [ ] Mobile menu button is visible
- [ ] Hamburger icon displays correctly (3 lines)
- [ ] Clicking hamburger opens mobile menu
- [ ] Mobile menu slides down/appears
- [ ] All mobile menu links are clickable
- [ ] Clicking a link closes mobile menu
- [ ] Clicking outside closes mobile menu
- [ ] Active page is highlighted

---

### Cookie Consent Banner

#### First Visit
- [ ] Banner appears at bottom of page
- [ ] Banner text is readable
- [ ] "Learn more" link works
- [ ] "Accept Cookies" button is visible
- [ ] "Reject" button is visible

#### Functionality
- [ ] Clicking "Accept Cookies" hides banner
- [ ] Clicking "Reject" hides banner
- [ ] Choice is saved in localStorage
- [ ] Banner doesn't reappear after accepting
- [ ] Banner doesn't reappear after rejecting
- [ ] Clearing localStorage shows banner again

---

### Contact Form

#### Form Fields
- [ ] Name field accepts text
- [ ] Email field validates email format
- [ ] Phone field accepts phone numbers
- [ ] Service dropdown shows all 6 services
- [ ] Message textarea is expandable
- [ ] Consent checkbox works

#### Validation
- [ ] Cannot submit with empty required fields
- [ ] Cannot submit without consent checkbox
- [ ] Shows error alert if consent not checked
- [ ] Email validation works

#### Submission
- [ ] Shows success alert after submission
- [ ] Form data is logged to console
- [ ] Form resets after submission
- [ ] Page doesn't reload on submission

---

### Navigation & Links

#### Internal Links
- [ ] Home link goes to index.html
- [ ] About link goes to about.html
- [ ] Services link goes to services.html
- [ ] Contact link goes to contact.html
- [ ] Privacy Policy link works
- [ ] Terms & Conditions link works
- [ ] Disclaimer link works
- [ ] Cookie Policy link works

#### Active States
- [ ] Current page is highlighted in navigation
- [ ] Hover states work on all links
- [ ] Visited links maintain style

#### Anchor Links
- [ ] #services link scrolls smoothly
- [ ] Smooth scroll behavior works
- [ ] Anchor positioning is correct

---

### Responsive Design

#### Desktop (1920px)
- [ ] Content is centered and readable
- [ ] Images are appropriate size
- [ ] Navigation is horizontal
- [ ] Footer columns display side by side

#### Laptop (1366px)
- [ ] Layout adjusts appropriately
- [ ] All content is visible
- [ ] No horizontal scrolling

#### Tablet (768px)
- [ ] Mobile menu appears
- [ ] Content stacks vertically where appropriate
- [ ] Images resize correctly
- [ ] Forms are easy to use

#### Mobile (375px)
- [ ] All content is readable
- [ ] Buttons are easy to tap
- [ ] Forms work correctly
- [ ] No text overflow
- [ ] Images scale properly
- [ ] Mobile menu works perfectly

---

## 🔍 Browser Testing

Test in multiple browsers:

### Chrome
- [ ] All features work
- [ ] No console errors
- [ ] Styles render correctly
- [ ] Forms submit properly

### Firefox
- [ ] All features work
- [ ] No console errors
- [ ] Styles render correctly
- [ ] Forms submit properly

### Safari
- [ ] All features work
- [ ] No console errors
- [ ] Styles render correctly
- [ ] Forms submit properly

### Edge
- [ ] All features work
- [ ] No console errors
- [ ] Styles render correctly
- [ ] Forms submit properly

### Mobile Safari (iOS)
- [ ] Mobile menu works
- [ ] Forms work correctly
- [ ] Touch events work
- [ ] Viewport is correct

### Chrome Mobile (Android)
- [ ] Mobile menu works
- [ ] Forms work correctly
- [ ] Touch events work
- [ ] Viewport is correct

---

## 🐛 Common Issues to Check

### JavaScript Errors
- [ ] Open browser console (F12)
- [ ] Check for red error messages
- [ ] Verify all functions load correctly
- [ ] Test all interactive elements

### CSS Issues
- [ ] Check for layout breaks
- [ ] Verify fonts load correctly
- [ ] Check color contrast
- [ ] Test hover states
- [ ] Verify animations work

### Broken Links
- [ ] All internal links work
- [ ] All external links open in new tab
- [ ] No 404 errors
- [ ] Images load correctly

### Form Issues
- [ ] All form fields work
- [ ] Validation messages appear
- [ ] Success/error alerts work
- [ ] Form data is captured

---

## ✅ Performance Checks

### Load Time
- [ ] Page loads in under 3 seconds
- [ ] Images are optimized
- [ ] CSS loads quickly
- [ ] JavaScript doesn't block rendering

### Accessibility
- [ ] All buttons have labels
- [ ] Images have alt text
- [ ] Forms have proper labels
- [ ] Keyboard navigation works
- [ ] Focus states are visible

### SEO
- [ ] All pages have title tags
- [ ] All pages have meta descriptions
- [ ] Headings are properly structured (H1, H2, H3)
- [ ] Links have descriptive text

---

## 📊 Console Testing

Open browser console and check:

### Lead Form Submission
1. Open lead form modal
2. Fill in all fields
3. Check consent checkbox
4. Click submit
5. Verify console logs form data object

**Expected Output:**
```
Form submitted: {
  name: "John Doe",
  email: "john@example.com",
  phone: "555-1234",
  service: "interior-styling",
  message: "Test message"
}
```

### Contact Form Submission
1. Navigate to contact page
2. Fill in all fields
3. Check consent checkbox
4. Click submit
5. Verify console logs form data object

**Expected Output:**
```
Contact form submitted: {
  name: "Jane Smith",
  email: "jane@example.com",
  phone: "555-5678",
  service: "living-room",
  message: "Test contact message"
}
```

---

## 🎨 Visual Regression Testing

Compare each page to ensure:
- [ ] Colors match the design (beige, cream, gold)
- [ ] Fonts are consistent
- [ ] Spacing is uniform
- [ ] Alignment is correct
- [ ] Images are high quality
- [ ] Icons display correctly

---

## 📱 Touch Testing (Mobile Devices)

### Touch Targets
- [ ] All buttons are at least 44×44px
- [ ] Links are easy to tap
- [ ] Form fields are easy to select
- [ ] No accidental taps

### Gestures
- [ ] Scroll works smoothly
- [ ] Pinch to zoom works (if enabled)
- [ ] Tap to select text works
- [ ] Double-tap works where expected

---

## 🔒 Security Checks

- [ ] No sensitive data in console logs
- [ ] External links have rel="noopener noreferrer"
- [ ] No mixed content warnings (HTTP/HTTPS)
- [ ] Form data is not exposed in URLs

---

## ✅ Final Checklist

Before deploying to production:

- [ ] All pages load without errors
- [ ] All forms work correctly
- [ ] Mobile menu works on all pages
- [ ] Lead form modal works from all CTA buttons
- [ ] Cookie consent banner works
- [ ] All links are correct
- [ ] Images load properly
- [ ] Responsive design works on all devices
- [ ] No JavaScript console errors
- [ ] No broken links
- [ ] Legal pages are complete
- [ ] Contact information is correct
- [ ] Google Maps shows correct location

---

## 📝 Test Results

Record your test results:

**Date Tested:** _______________

**Browser:** _______________

**Device:** _______________

**Issues Found:**
- 
- 
- 

**Status:** ☐ Pass ☐ Fail ☐ Needs Review

---

## 🆘 Troubleshooting

### Issue: Modal doesn't open
**Solution:** Check if `script.js` is loaded, verify button has `data-open-lead-form` attribute

### Issue: Mobile menu doesn't work
**Solution:** Check console for errors, verify `mobile-menu-btn` ID exists

### Issue: Cookie banner always shows
**Solution:** Clear localStorage and check if banner appears on first visit only

### Issue: Forms don't submit
**Solution:** Check console for errors, verify all required fields and consent checkbox

### Issue: Smooth scroll doesn't work
**Solution:** Check if anchor link format is correct (#section-id)

---

**Testing Status:** ☐ Not Started ☐ In Progress ☐ Complete

**Tested By:** _______________

**Date:** March 11, 2026
