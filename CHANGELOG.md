# Changelog

All notable changes to the Sentinel AI Marketing Site will be documented in this file.

## [1.0.0] - 2025-12-15

### Added
- **Waitlist Modal**: Added name input field to collect user names for waitlist signups
- **Google Sheets Integration**: Company name now stored in separate column (E) for better data organization
- **Interactive Demo**: Added "COMING SOON" overlay on Scan button to indicate feature is not yet available

### Changed
- **Waitlist Form Fields**:
  - Name field is now required
  - Email field is required
  - Company name field is optional
  - Source field tracks submission origin
- **Google Sheets Column Order**: Updated to Email (A), Name (B), Source (C), Company Name (D), Timestamp (E)
- **Categories Section (Homepage)**: Simplified to show only icons and category names in a compact 5-column grid with "Learn more" CTA button
- **Pricing Page**:
  - Changed pricing from specific dollar amounts to "Coming Soon" labels
  - Updated CTAs from "Start Free Trial" to "Join Waitlist"
  - Removed monthly/annual billing toggle
- **Security Page**:
  - Updated certifications to be more accurate (SOC 2 Planned 2026, GDPR Ready, CCPA Ready, EEOC Aligned)
  - Replaced fake email addresses with contact page links

### Fixed
- **Waitlist Modal API Integration**: Fixed mismatch between form fields and API requirements - modal now correctly sends `name`, `email`, `source`, and `companyName` fields
- **About Page**: Updated LinkedIn profile URLs for all three co-founders:
  - Parth Gosar: https://www.linkedin.com/in/parth-gosar-04042b1b1/
  - Purav Sanghavi: https://www.linkedin.com/in/purav-sanghavi-81a6a5208/
  - Ved Chadderwala: https://www.linkedin.com/in/ved-chadderwala-196529223/

### Technical
- Installed `googleapis` package for Google Sheets integration
- Updated API route `/api/waitlist` to accept `companyName` parameter
- Updated `addToWaitlist` function signature to include `companyName` parameter
- Removed unused imports (`useEffect`, `Card` component where not needed)

### Pages Verified Working
- Homepage (/)
- About (/about)
- Contact (/contact)
- Pricing (/pricing)
- Security (/security)
- Product (/product)
- Privacy (/privacy)
- Terms (/terms)
- Docs (/docs)
