# Product Requirements Document (PRD)

## Project title
Stone Crushing Company Website

## Purpose
Build a responsive company website for a stone crushing and aggregate supply business that works well on mobile, tablet, and desktop, establishes trust, showcases products and infrastructure, and generates inbound enquiries through phone, WhatsApp, and contact forms. The first phase of the project will be built locally for stakeholder review and approval before any hosting or domain decisions are finalized.[cite:48][cite:47]

## Product overview
The website is a brochure-style business site for a stone crushing company. Its main job is to help potential buyers, contractors, builders, and infrastructure clients quickly understand what the company supplies, where it operates, why it is reliable, and how to contact it. Construction and industrial websites are most effective when they clearly communicate services, support responsive usage across devices, and make enquiry actions easy.[cite:2][cite:48]

## Current project approach
The immediate goal is to design and build the website locally, share it with the business owner, gather feedback, and finalize approval on design, structure, and content before moving to deployment. Hosting, domain setup, and production launch are explicitly out of scope for the current phase and will be decided only after approval.

## Goals
- Generate qualified enquiries from contractors, builders, and procurement teams.[cite:2]
- Build business credibility through operational details, plant photos, compliance information, and product clarity.[cite:4]
- Ensure the website works smoothly across mobile, tablet, and desktop screens with responsive layouts and clear calls to action.[cite:47][cite:48]
- Keep the first build simple, reviewable locally, and easy to iterate before launch.

## Non-goals
- No customer login, admin dashboard, or inventory management in version 1.
- No ERP, dispatch tracking, or quotation workflow in version 1.
- No complex backend application in version 1 unless the business later needs lead storage, admin tools, or custom workflows.[cite:31][cite:43]
- No hosting, DNS, or domain setup during the current approval phase.

## Target users
### Primary users
- Civil contractors
- Builders and developers
- Road and infrastructure project teams
- Procurement or site engineers
- Local buyers looking for aggregate supply

### Secondary users
- Partners and transport vendors
- Government or compliance reviewers
- Job seekers or general visitors

## User problems
- Buyers may not know what material sizes and products are available.
- Buyers need confidence that the business has real plant infrastructure and delivery capability.
- Visitors need quick access to contact details, location, and WhatsApp communication on both phone and desktop browsing contexts.[cite:2][cite:27][cite:48]
- Some businesses in this category may also need to publish compliance or environmental documents on their websites.[cite:4]

## Success metrics
### Approval phase metrics
- Stakeholder approval on visual design
- Stakeholder approval on content structure
- Stakeholder approval on page list and messaging
- Positive feedback on usability across mobile and desktop screens

### Post-launch metrics
- Number of phone calls from the website
- Number of WhatsApp enquiries
- Number of contact form submissions
- Time spent on product and infrastructure pages
- Mobile and desktop usability quality

## Scope for version 1
### Core deliverables
- Responsive marketing website
- Local build for review
- Home page
- About page
- Products or Materials page
- Infrastructure or Plant page
- Compliance or Quality page
- Contact page
- WhatsApp CTA and click-to-call CTA
- Enquiry form
- Google Maps embed
- Download links for PDF documents if provided

### Optional v1 additions
- Project gallery
- Client industries section
- Testimonials section
- Service areas section

## Functional requirements
### 1. Home page
The home page must clearly explain what the company does in the first screen. It should include a strong headline, short value proposition, primary contact actions, trust markers, product highlights, and plant imagery. Websites in construction and industrial categories perform better when the offer and CTA are immediately visible.[cite:2]

Required sections:
- Hero section with headline, subheadline, and CTA buttons
- Product summary cards
- Why choose us / trust indicators
- Plant or machinery preview
- Compliance or quality preview
- Service areas or industries served
- Contact CTA section

### 2. About page
The About page must describe the company background, years in operation, operating philosophy, team strength, and service regions. It should help build trust and give business context.

### 3. Products page
The Products page must list the materials supplied, such as aggregate sizes, M-sand, crusher dust, or other items the company sells. Each product should have a short description, possible use case, and enquiry CTA. Aggregate and crushing businesses commonly structure sites around product and application clarity.[cite:1][cite:2]

Suggested data points per product:
- Product name
- Size or specification
- Typical use
- Availability note
- Contact / quote CTA

### 4. Infrastructure page
The Infrastructure page must show plant capability with real images and operational details. It should include crusher machinery, conveyor systems, stockyard, loading areas, plant setup, weighbridge if available, and production capability. Similar businesses highlight plant and equipment heavily to prove operational strength.[cite:1][cite:2]

### 5. Compliance / Quality page
This page must host compliance documents, permits, testing practices, and quality notes where applicable. Some quarry and stone crushing businesses publish environmental clearance or compliance documents on their websites, making this page important for credibility and regulatory visibility.[cite:4]

Possible content:
- Environmental or pollution control approvals
- Material testing process
- Safety notes
- Downloadable PDF reports

### 6. Contact page
The Contact page must contain phone numbers, WhatsApp contact, email, address, business hours, and map. It must also include an enquiry form and clear instructions on how quickly the company responds.

### 7. Enquiry form
The form should capture only essential fields to avoid drop-off. A local prototype can first use a non-functional or demo form for approval, and a real form backend can be added later when the project moves toward deployment.[cite:36][cite:45][cite:31]

Required form fields:
- Name
- Company name
- Phone number
- Material required
- Quantity
- Project / delivery location
- Message

### 8. Responsive behavior
The website must be fully responsive and optimized for mobile, tablet, and desktop/web. It should use flexible layouts, responsive typography, scalable images, and breakpoints so navigation, forms, CTAs, and content remain clear and usable on all major screen sizes.[cite:47][cite:48][cite:50]

Responsive requirements:
- Mobile layout: single-column sections, sticky contact CTA, thumb-friendly buttons.[cite:52][cite:56]
- Tablet layout: balanced spacing and optional two-column content blocks.[cite:47][cite:50]
- Desktop layout: full navigation, wider section containers, multi-column grids, stronger visual hierarchy.[cite:47][cite:48]
- Shared behavior: fast-loading media, readable text, consistent branding, and clear CTAs on all devices.[cite:48]

### 9. Local build and review workflow
The website must be buildable and reviewable locally on the developer machine before deployment. The project should support a simple local preview workflow so the stakeholder can review screens, request edits, and approve the structure before hosting is considered.

### 10. Hosting and domain
Hosting and domain configuration are intentionally postponed for now. After the local build is approved, deployment options such as Vercel and custom domain setup can be evaluated separately.[cite:16][cite:18]

### 11. Theme and visual style
The design should feel industrial, reliable, and modern. Avoid generic startup gradients or flashy SaaS styling. The visual system should use strong typography, neutral industrial tones, real plant photography, and concise business language.

Suggested style direction:
- Colors: charcoal, stone gray, sand, muted earth accent
- Visual tone: industrial, trustworthy, operational
- Imagery: actual plant, trucks, stockyard, machinery, material close-ups
- CTAs: Call Now, WhatsApp Us, Get Quote

## User stories
- As a contractor, I want to quickly see what materials are available so I can decide whether to contact the company.
- As a visitor on mobile, I want one-tap call and WhatsApp actions so I can enquire instantly.[cite:27][cite:56]
- As a desktop visitor, I want clear navigation, larger content sections, and easy access to company details without the layout feeling cramped.[cite:47][cite:48]
- As a procurement user, I want to view infrastructure and compliance details so I can trust the supplier.
- As the business owner, I want to review the website locally before any deployment decision is made.

## Information architecture
Recommended sitemap:
- `/` Home
- `/about`
- `/products`
- `/infrastructure`
- `/compliance`
- `/contact`

Alternative MVP: a single-page website with anchor sections and a separate contact page.

## Content requirements
The business owner should provide:
- Company name and tagline
- Logo, if available
- Product list and specifications
- Service locations
- Phone numbers and WhatsApp number
- Office and plant address
- Email address
- Real site and plant photos
- Compliance or approval PDFs
- Client sectors served
- Any testimonial or trust proof

## Technical requirements
### Frontend
- Static website or Next.js site
- Responsive UI for mobile, tablet, and desktop
- SEO-friendly markup
- Fast-loading optimized images
- Clean navigation and simple forms
- Easy local development and preview

### Backend
A traditional backend is not mandatory for version 1. Static content plus a later form integration or lightweight serverless handling is sufficient for the initial release.[cite:43][cite:44][cite:36][cite:31]

### Suggested stack
- Framework: Next.js or static HTML with Tailwind CSS
- Local development first
- Forms: mock form for review now, real integration later
- Hosting: to be decided after stakeholder approval

## SEO requirements
- Unique page title and meta description for each page
- Local business keywords and location keywords
- Product-specific content
- Contact details visible on every page footer
- Schema markup for local business if implemented later
- Alt text for all images

## Accessibility requirements
- Responsive layout for mobile, tablet, and desktop
- Good color contrast
- Semantic headings
- Keyboard accessible links and buttons
- Tap-friendly interactions on mobile
- Descriptive labels for forms and buttons

## Performance requirements
- Image compression and lazy loading where appropriate
- Lightweight frontend bundle
- Fast first paint on both mobile and desktop
- Minimize heavy animations
- Keep local preview performance close to production expectations.[cite:24][cite:48]

## Integrations
Current phase may include placeholders or basic integration planning for:
- WhatsApp chat link
- Google Maps embed
- Future form service integration
- Future analytics setup

## Risks and assumptions
### Risks
- Weak or generic content will make the site look less trustworthy.
- Lack of real photos may reduce credibility.
- Missing compliance documents may weaken trust for larger buyers.
- Overbuilding version 1 with unnecessary backend or hosting decisions can slow approval.

### Assumptions
- The company mainly needs lead generation and trust-building in version 1.
- The current phase is for local build and review only.
- The company can provide real business content and imagery.

## Release plan
### Phase 1: Discovery
- Gather content, photos, product list, and compliance material
- Finalize pages and brand direction
- Approve sitemap and homepage messaging

### Phase 2: Design
- Create wireframe
- Finalize responsive UI direction for mobile, tablet, and desktop
- Review content hierarchy and CTA placement

### Phase 3: Development
- Build responsive frontend locally
- Add demo or temporary form behavior
- Add WhatsApp and call buttons
- Optimize images and metadata
- Share local preview with stakeholder

### Phase 4: Approval
- Collect stakeholder feedback
- Apply revisions
- Freeze approved design and content

### Phase 5: Deployment planning
- Decide hosting platform
- Decide domain strategy
- Connect forms and analytics
- Launch after final sign-off

## Acceptance criteria
- Website is fully responsive across mobile, tablet, and desktop screens.[cite:47][cite:48]
- Local build is available for stakeholder review before deployment.
- Users can see core business information across Home, About, Products, Infrastructure, Compliance, and Contact pages.
- Contact actions are clearly visible and easy to use across devices.[cite:27][cite:56]
- No traditional backend is required for the approval-phase build unless custom business logic is later requested.[cite:43][cite:44][cite:31]
- Hosting decisions remain deferred until stakeholder approval.

## Build notes for Anti Gravity
This PRD is suitable for use in an AI website builder or planning tool. The build should prioritize responsive behavior across mobile and desktop, industrial visual direction, clear CTA placement, static-site simplicity, and a local-first review workflow. The first phase should avoid unnecessary backend, deployment, or domain configuration work until the stakeholder approves the website.
