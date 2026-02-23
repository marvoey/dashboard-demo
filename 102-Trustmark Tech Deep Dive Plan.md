# Trustmark Benefits — Optimizely as the Content & Experience Layer
## Technical Deep Dive — Demo Plan

---

## 1. Overall Goal

To demonstrate how Optimizely serves as the essential content and experience layer for Trustmark's digital portals, enabling business teams to manage editorial content and personalization independently, while seamlessly coexisting with transactional data fetched directly from backend systems (CRM, SQL Server, Data Lake) by headless frontend components.

---

## 2. Target Audience & Personas

Attendees will span both technical and business stakeholders. The demo should speak to both audiences simultaneously — technical teams will evaluate the architecture and integration patterns, while business leaders will assess the value of reducing developer dependency for ongoing content operations.

### Key Portal Personas in Scope

**Employer Portal**
- Brand new, greenfield digital portal experience.
- No legacy constraints — ideal for demonstrating the ideal future-state architecture.

**Broker Portal**
- Transformation and modernization of existing fragmented portals.
- Current state: myvb.trustmarkbenefits.com (policy portal), trustmarkbenefits.com/claims (claims filing), trustmarkonlinesolutions.com (commissions/billing), V3locity/Vitech platform.
- Goal: consolidate into a single, modern, data-driven portal experience.

**Member Portal**
- Modernization of existing member-facing policy and claims experience.
- Focused on self-service access to policy details, claims status, and benefit education.

---

## 3. Key Message

Optimizely empowers Trustmark to build highly manageable, scalable, and personalized digital portals by providing a robust content and experience layer that business teams control, complementing direct integrations with existing backend systems for transactional data. This approach accelerates time-to-market, reduces developer dependency, and enhances user engagement across all key personas.

**A critical distinction to establish early in the meeting:**

The API integrations with Salesforce, MS Dynamics, SQL Server, and the Data Lake are standard React data-fetching patterns — they exist independently of any CMS platform. What Optimizely provides is the content and experience layer that sits alongside that transactional data: the governed authoring environment, structured content model, and personalization engine that business teams control without developer involvement.

---

## 4. Proposed Agenda

**Suggested Duration:** 2.5 hours including Q&A

| Time | Topic |
|:-----|:-------|
| 9:00 AM | **Welcome & Introductions** |
| | - Brief overview of agenda and objectives. |
| | - Confirm attendees and their roles (technical vs. business stakeholders). |
| | - Set expectations: this is an 'art of the possible' session, not a production build. |
| 9:15 AM | **Discovery: Understanding Trustmark's Vision** |
| | - Who manages content updates to portals today — developers or business teams? |
| | - What does the current content update workflow look like for each portal? |
| | - Are there existing API layers in front of SQL Server, or is data accessed directly? |
| | - What is the integration status of V3locity/Vitech — does it expose REST APIs? |
| | - Is this an exploratory evaluation or is there a platform selection timeline? |
| 9:45 AM | **Framing: What Headless Really Means in This Context** |
| | - Clarify 'headless components': React components fetching live data directly from APIs. |
| | - Clarify Optimizely's role: the content and experience layer, not the data integration layer. |
| | - Introduce the architecture: React + API (transactional data) + Optimizely (editorial content) coexisting on the same portal page. |
| 10:00 AM | **Demo 1 — Broker Portal (Centerpiece)** |
| | - Broker dashboard pulling live data from mock Salesforce API (book of business, assigned accounts, relationship manager). |
| | - Commission summary rendered from mock MS Dynamics / SQL Server API. |
| | - Case/policy status from mock V3locity API response. |
| | - Optimizely-managed content zones: announcement banner, 'What's New in Q1 Products' section, training resource links. |
| | - Live authoring moment: Sales team editor updates the announcement banner in Optimizely — change reflects immediately in the portal without a code deployment. |
| | - Personalization: broker in the Midwest sees a different product spotlight than a broker in the Northeast, driven by Optimizely targeting rules. |
| 10:40 AM | **Demo 2 — Member Portal** |
| | - Member dashboard showing policy details and coverage summary from mock SQL Server API. |
| | - Claims status feed rendered from mock claims API. |
| | - Optimizely-managed content zones: open enrollment messaging, benefit education articles, wellness content from HealthFitness. |
| | - Structured content reuse: same compliance notice content type shared across Broker, Member, and Employer portals — updated once, reflected everywhere. |
| 11:05 AM | **Demo 3 — Employer Portal (Greenfield Vision)** |
| | - Enrolled employee summary and billing overview from mock SQL Server API. |
| | - Renewal date and account rep details from mock Salesforce API. |
| | - Data Lake visualization: utilization trend chart rendered as a React component consuming a mock analytics API. |
| | - Optimizely-managed onboarding content: new employer vs. renewal employer sees different guided content, driven by Optimizely personalization. |
| 11:30 AM | **Architecture Overview** |
| | - Diagram: Optimizely Content Graph at center, with spokes to Salesforce REST API, MS Dynamics API, SQL Server (via middle-tier REST/GraphQL service), and Data Lake connector. |
| | - Explain the composable model: CMS-managed content zones and API-driven data components coexist on the same page, each owned by the right team. |
| | - Address V3locity/Vitech: achievable via REST adapter — no custom middleware required if Vitech exposes standard endpoints. |
| | - Multi-channel readiness: same components and content graph can serve a mobile app or native broker app in future phases. |
| 11:50 AM | **Q&A and Next Steps** |
| | - Open discussion and questions. |
| | - Confirm alignment on scope and priorities. |
| | - Agree on next steps: proof of concept, technical discovery workshop, or platform evaluation process. |

---

## 5. Optimizely Value Propositions to Reinforce

### 5.1 Content Zones Business Teams Control Without Developers

On a broker dashboard, the policy data comes from SQL Server — no CMS is needed for that. But the announcement banner at the top, the 'What's New in Q1 Products' section, and training resource links are a different story. Today, every time Sales or Marketing wants to update any of that, it either goes through a developer or it's hardcoded somewhere. Optimizely gives non-technical teams a governed authoring environment to manage those zones independently, while the data components remain developer-owned.

### 5.2 Structured Content Modeling Across Three Portals

With three distinct portals in scope — Employer, Broker, and Member — many content types are shared across all three: product descriptions, FAQ content, compliance notices, and benefit education. Without a CMS, this content would either be duplicated across three separate codebases or require building a custom content service from scratch. Optimizely is essentially a managed content API that React components can query the same way they query Salesforce.

### 5.3 Personalization and Targeting

Showing a broker a different product spotlight based on their region or book of business size, or surfacing different onboarding content to a new employer vs. a renewal client — this logic is built into Optimizely rather than hand-coded in the React application. This capability is available to business teams to configure and iterate on without engineering involvement, dramatically accelerating experimentation and engagement optimization.

### 5.4 Reduced Developer Dependency and Faster Time-to-Market

The most direct operational benefit: content changes, new announcement campaigns, personalization rule updates, and editorial refreshes across all three portals can be managed by Sales and Marketing teams in Optimizely's authoring interface. Developer time is preserved for building new data integrations and portal features, not for routine content updates.

---

## 6. Backend Integration Architecture

The following backend systems are in scope for the demo. All integrations are handled at the React/Next.js layer — Optimizely does not broker these connections. The CMS and the data integrations are composable and independent.

### Salesforce (CRM)
- Broker profiles, assigned accounts, and pipeline data.
- Employer account details and relationship manager contact information.
- Service ticket history for Member portal.
- Integration pattern: Salesforce REST API via authenticated fetch in React server components or API route.

### Microsoft Dynamics (CRM)
- Commission pipeline and payment history for Broker portal.
- Employer billing and renewal data.
- Integration pattern: Dynamics Web API via OAuth 2.0 client credentials flow.

### SQL Server (Transactional Data)
- Policy details, coverage summaries, and deductible status for Member portal.
- Claims submission history and status.
- Enrolled employee data for Employer portal.
- Integration pattern: middle-tier REST or GraphQL service exposing SQL Server data (not direct DB connection from the front end).

### V3locity / Vitech Platform
- Active cases, policy status, and pending submissions for Broker portal.
- Integration pattern: V3locity REST API via adapter layer if needed.
- Note: Vitech is a modern platform with documented API capabilities — no custom middleware required for standard endpoints.

### Data Lake (Analytics & Reporting)
- Utilization trends and claims cost summaries for Employer portal.
- Read-only reporting data surfaced as React chart components.
- Integration pattern: REST endpoint or GraphQL query layer over the Data Lake (Azure Data Lake / Databricks or equivalent).

---

## 7. Demo Setup Requirements

All backend integrations in the demo will use mock API responses to simulate live data. This is intentional — it keeps the demo focused on the architecture and rendering pattern rather than live credential management.

- Mock Salesforce API: returns broker profile, book of business, and account rep data.
- Mock MS Dynamics API: returns commission summary and payment history.
- Mock SQL Server API: returns policy details, claims status, and enrolled employee data.
- Mock V3locity API: returns active cases and policy submission status.
- Mock Data Lake API: returns utilization trend data for chart rendering.
- Optimizely sandbox environment: live CMS authoring to demonstrate real-time content updates without code deployment.
- React / Next.js portal shell: one portal UI composing both API-driven and CMS-managed components on the same page.

---

## 8. Key Discovery Questions for the Meeting

These questions should be asked early — ideally during the 9:15 AM discovery slot — to calibrate the demo and validate assumptions before going deep.

- Who manages content updates to the portals today — developers or a business/marketing team?
- What does the current workflow look like when Sales or Marketing needs to update portal content?
- Is there an existing API or middleware layer in front of SQL Server, or is data accessed directly from applications?
- Does V3locity/Vitech expose standard REST APIs for the broker case and policy data?
- Is this an exploratory conversation or is there an active platform evaluation underway with a decision timeline?
- Who are the primary decision-makers for this initiative — IT/Engineering, Digital Product, or Marketing?

---

## 9. Definition of a Successful Demo

At the end of this session, Trustmark stakeholders should be able to clearly articulate:

- Why Optimizely is the content and experience layer, not the data integration layer, and why that distinction matters for their portal architecture.
- How a React portal page can simultaneously render live transactional data from Salesforce, SQL Server, and Dynamics alongside CMS-managed editorial content managed by business teams.
- How Optimizely eliminates the developer bottleneck for routine content operations across all three portals.
- What a proof-of-concept or next phase would look like to move from 'art of the possible' to a buildable project plan.

---

*This document is intended for internal preparation purposes only and should be reviewed before sharing with Trustmark stakeholders.*
