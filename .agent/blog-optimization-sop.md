# Blog Post Optimization SOP
**Standard Operating Procedure for LedgerLogic Blog Posts**  
**Elite Canadian SEO + Conversion Optimization Workflow**

## Overview
This SOP outlines the complete process for transforming blog posts into high-ranking, conversion-optimized assets. Each optimized post should rank in Google Canada for relevant tax/accounting keywords AND convert readers into consultation bookings and email subscribers.

**Target Audience:** Canadian business owners/founders (SaaS/tech, ecom, agencies, contractors) searching for CRA/tax/accounting guidance  
**Primary Conversion:** Book a consultation  
**Secondary Conversion:** Email opt-in via topic-specific lead magnet  
**Estimated Time:** 4-6 hours per blog post

---

## Pre-Optimization: Post Selection & Audit

### Step 0.1: Choose Target Post
- [ ] Select post with business intent (how-to, comparison, guide)
- [ ] Review existing traffic/rankings in Google Search Console
- [ ] Assess current conversion elements
- [ ] Verify it's not duplicate content

### Step 0.2: Competitor & Cannibalization Audit
- [ ] Search site for posts targeting same/similar keywords
- [ ] Identify potential keyword cannibalization issues
- [ ] Decide: reposition, merge, or keep distinct
- [ ] Note opportunities for internal linking

---

## Phase 1: Keyword Research & Intent Mapping (Canada-Specific)

### 1.1 Primary Keyword Selection
Identify the BEST primary keyword based on:
- Search volume in Canada (use Google Trends Canada filter)
- Business intent (commercial/transactional, not just informational)
- Current ranking opportunity
- Realistic ranking potential

**Tools:**
- Google Search Console (current rankings)
- Google Trends (Canada filter)
- Answer the Public (Canada)
- "People also ask" boxes
- Competitor analysis

**Keyword Format:**
```
Primary: [keyword] + Canada/CRA/Canadian qualifier
Examples: 
- "xero accounting software canada"
- "is xero easy to use canadian business"
- "quickbooks vs xero canada 2026"
```

### 1.2 Secondary Keywords & Long-Tail Questions
Identify 5-10 supporting keywords:
- [ ] Semantic variations of primary
- [ ] Related questions ("how to...", "what is...", "when should...")
- [ ] Comparison keywords ("X vs Y canada")
- [ ] Problem-based queries ("why is my...", "how to fix...")

**Document:**
| Keyword | Search Intent | Volume | Difficulty | Target Section |
|---------|--------------|--------|------------|----------------|
| is xero easy to use canada | Commercial | Med | Med | H1, Title |
| xero interface review | Informational | Low | Low | H2 section |
| xero canadian payroll | Informational | Med | Med | H2 section |

### 1.3 Cannibalization Check & Resolution

**Search your site for:**
```
site:ledgerlogic.ca [primary keyword]
site:ledgerlogic.ca [secondary keywords]
```

**If cannibalization detected, choose:**

**Option A: Reposition**
- Change this post to target different keyword
- Update title, H1, headings, meta
- Example: Post A → "xero review canada", Post B → "xero vs quickbooks canada"

**Option B: Merge**
- Combine posts into comprehensive guide
- 301 redirect weaker → stronger
- Preserve best content from both
- Update internal links

**Option C: Differentiate**
- Clarify search intent differences
- Update meta to show distinction
- Interlink with clear context
- Example: One targets "beginners", other targets "businesses switching from QB"

**Document:**
```
✅ Cannibalization Check Complete
- No conflicts found for "is xero easy to use canada"
- Found related post "switching to xero from quickbooks" - will add internal link
- Found hub page "accounting software reviews" - will link both ways
```

---

## Phase 2: On-Page Content Optimization

### 2.1 Title & Heading Structure

**H1 Format:**
```
[Primary Keyword]: [Benefit/Qualifier] | LedgerLogic
Example: "Is Xero Easy to Use? A Canadian Business Owner's Guide (2026)"
```

**H2 Structure** (include secondary keywords naturally):
```
✅ Good H2s:
- "The Interface: Why Design Matters"
- "Xero vs. QuickBooks Online for Canadian Businesses"
- "Canadian Payroll: The #1 Gotcha"
- "Pricing: What Canadian Businesses Actually Pay"

❌ Avoid:
- "Features" (too generic)
- "Pros and Cons" (overdone)
- Non-descriptive headings
```

**H3 Subsections:**
- Use for specific points, examples, edge cases
- Can be more conversational
- Examples: "What About PST?", "Does it Work with RBC?", "T2 Reporting Capabilities"

### 2.2 SEO Metadata

**SEO Title (<60 chars):**
```
[Primary Keyword] [Qualifier] [Year]
Example: "Is Xero Easy to Use? Canadian Guide 2026"
Character count: 39 ✅
```

**Meta Description (150-155 chars):**
```
Template:
[Answer/benefit]. [Key detail for Canada]. [CTA]. [Authority signal].

Example:
"Xero is user-friendly for Canadian businesses, but watch out for payroll limitations. Our CPA-backed guide covers setup, CRA compliance, and costs. Book a consult."
Character count: 154 ✅
```

**URL Slug:**
```
✅ Good: /blog/is-xero-easy-to-use-canada
✅ Good: /blog/xero-review-canadian-businesses-2026
❌ Avoid: /blog/post-12345
❌ Avoid: /blog/xero-software-accounting-review-guide-canada-2026 (too long)
```

### 2.3 Content Structure & Required Sections

**1. Opening Hook (150-300 words)**
Components:
- State the problem/question directly
- Preview the answer (don't make them scroll)
- Establish credibility
- Include primary keyword in first 100 words

Example:
```
"As a Canadian business owner, you didn't start your company to become 
a part-time bookkeeper. Yet finding the right accounting software is one 
of the first critical decisions you'll make.

The question we get most often at LedgerLogic: "Is Xero actually easy 
to use?"

The short answer: Yes—but with a few specifically Canadian caveats you 
need to know about..."
```

**2. At a Glance Component** (immediately after intro)
```typescript
"atAGlance": {
    "title": "At a Glance: The Verdict",
    "items": [
        {
            "label": "Yes, user-friendly:",
            "text": "Xero's interface is cleaner than most competitors, ideal for non-accountants"
        },
        {
            "label": "Best For:",
            "text": "Canadian service businesses, agencies, e-commerce (great multi-currency support)"
        },
        {
            "label": "Watch Out For:",
            "text": "Canadian Payroll - Xero does NOT do full payroll natively (you'll need Wagepoint integration)"
        }
    ]
}
```

**3. Table of Contents** (auto-generated)
```typescript
"toc": [
    { "id": "the-interface-why-design-matters", "title": "The Interface" },
    { "id": "bank-reconciliation", "title": "Bank Reconciliation" },
    { "id": "receipts-hubdoc", "title": "Receipt Capture (Hubdoc)" },
    { "id": "canadian-payroll-gotcha", "title": "Canadian Payroll Gotcha" },
    { "id": "xero-vs-quickbooks-canada", "title": "Xero vs QuickBooks" },
    { "id": "faq", "title": "FAQ" }
]
```

**4. Main Content Sections**

Required elements:
- Use H2 for major topics
- Include **Canadian examples**:
  - Banks: RBC, TD, Scotiabank, CIBC, BMO
  - Tax: CRA, GST/HST, PST, QST
  - Business: CCPC, T2, payroll remittances
  - Tools: Wagepoint, Dext, Hubdoc
  
- Add **"Common Mistakes / Watch-Outs"** section:
```html
<h3 id="common-mistakes">Common Mistakes Canadian Businesses Make</h3>
<ul>
  <li><strong>Not setting a "Lock Date":</strong> Always lock your books after filing GST/HST or T2 returns...</li>
  <li><strong>Forgetting PST tracking:</strong> If you sell to BC customers, you need separate PST tracking...</li>
  <li><strong>Ignoring multi-currency:</strong> Set this up from day one if you have US clients...</li>
</ul>
```

- Include **comparison tables** where relevant:
```html
<div class="overflow-x-auto my-10 border border-slate-200 rounded-lg shadow-sm">
  <table class="w-full text-left text-sm text-slate-600">
    <thead class="bg-slate-50 text-slate-900 font-bold uppercase text-xs">
      <tr>
        <th class="px-6 py-4 border-b">Feature</th>
        <th class="px-6 py-4 border-b w-1/3">Xero</th>
        <th class="px-6 py-4 border-b w-1/3">QuickBooks</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b hover:bg-slate-50">
        <td class="px-6 py-4 font-medium text-slate-900">Canadian Payroll</td>
        <td class="px-6 py-4">Requires integration (Wagepoint)</td>
        <td class="px-6 py-4">Built-in (additional cost)</td>
      </tr>
    </tbody>
  </table>
</div>
```

**5. FAQ Section** (6-10 questions minimum)
```html
<h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name" class="text-lg font-bold mt-6 mb-2">Does Xero work with Canadian banks?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">Yes, Xero has direct bank feeds for all major Canadian banks including RBC, TD, BMO, Scotiabank, and CIBC. It pulls transactions automatically every day.</p>
    </div>
  </div>
  <!-- 5-9 more FAQs -->
</div>
```

Target long-tail keywords in FAQ:
- "does xero work with [canadian bank]"
- "can xero handle gst hst"  
- "xero canadian payroll"
- "xero vs quickbooks canada"
- "how much does xero cost canada"

**6. Disclaimer** (end of post)
```html
<p class="text-xs text-slate-500 mt-8 italic">
Disclaimer: This article provides general information and does not constitute 
professional tax or legal advice. Always consult with a CPA for your specific 
business situation.
</p>
```

---

## Phase 3: Internal Linking Strategy

### 3.1 Links FROM This Post (Outbound Internal)

Add 5-8 contextual internal links to:

**Service Pages:**
```html
<!-- Example placement -->
<p>If you're overwhelmed by monthly reconciliation, our 
<a href="/#services">bookkeeping services</a> handle this automatically for Canadian businesses.</p>
```

**Related Blog Posts:**
- Find 2-5 supporting posts
- Use descriptive anchor text (not "click here")
- Make links contextual, not forced

Example:
```html
✅ Good:
"If you're considering <a href="/blog/switching-to-xero-from-quickbooks">switching from QuickBooks to Xero</a>, here's what..."

❌ Bad:
"Click <a href="/blog/switching-to-xero-from-quickbooks">here</a> to learn about switching."
```

**Hub/Pillar Pages:**
- Link to main accounting software comparison page
- Link to CRA compliance guide
- Link to small business tax guide

### 3.2 Links TO This Post (Inbound Internal)

Edit 3-8 existing posts to add links TO this new optimized post:

**Find opportunities:**
```bash
# Search for mentions that should link here
grep -r "Xero" src/data/blogData.ts
grep -r "accounting software" src/data/blogData.ts
```

**Add contextual links from:**
- "Best Accounting Software for Canadian Startups" → link to this Xero post
- "QuickBooks Review Canada" → link in comparison section
- "How to Choose Accounting Software" → link as example
- Hub page: "Accounting Software Reviews" → link in Xero section

**Document changes:**
```
Internal Links ADDED TO this post:
✅ FROM: "Receipts Made Easy" section → TO: /#services (bookkeeping service)
✅ FROM: "Payroll" section → TO: /blog/canadian-payroll-guide
✅ FROM: "Comparison" section → TO: /blog/quickbooks-review-canada

Internal Links ADDED FROM other posts TO this post:
✅ FROM: /blog/best-accounting-software-canada → section "Cloud Solutions"
✅ FROM: /blog/quickbooks-vs-xero → intro paragraph  
✅ FROM: /blog/small-business-accounting-tips → "Tools" section
```

### 3.3 Hub Page Strategy

**If hub page exists:**
- Add this post to hub's "Related Guides" section
- Link from hub intro to this post

**If no hub exists, consider creating:**
- "Complete Guide to Accounting Software for Canadian Businesses"
- Links to all software review posts
- Comparison matrices
- CRA compliance considerations

---

## Phase 4: Conversion System (Embedded CTAs)

### 4.1 Mid-Post Consultation CTA (High Intent)

**Placement:** After 40-60% of content, after delivering value

**Using shortcode in content:**
```
[[CTA_CONSULT]]
```

**Component Structure** (`src/components/BlogCTAs.tsx`):
```tsx
export const ConsultationCTA = ({ onOpenModal }: { onOpenModal?: () => void }) => {
    return (
        <div className="my-16 relative overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-100">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <div className="p-8 md:p-10 md:flex md:items-center md:gap-8">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">
                        Stop Wrestling with Xero
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6 md:mb-0">
                        You didn't start a business to become a part-time bookkeeper.
                        Let our team handle your monthly bookkeeping so you can get back to growth.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <button
                        onClick={onOpenModal}
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-teal-600 rounded-lg hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Book a Free Consult
                    </button>
                </div>
            </div>
        </div>
    );
};
```

**Customize headline based on post topic:**
- Xero post: "Stop Wrestling with Xero"
- Tax post: "Overwhelmed by CRA Deadlines?"
- Payroll post: "Payroll Eating Your Time?"

### 4.2 End-of-Post Lead Magnet CTA

**Placement:** Before FAQ section

**Using shortcode:**
```
[[CTA_LEAD_MAGNET]]
```

**Topic-Specific Lead Magnets** (create unique for each major post):

Examples:
- **For Xero post:** "Ultimate Canadian Xero Setup Checklist"
- **For Tax post:** "Year-End Tax Deadline Calendar (Canada)"
- **For Payroll post:** "Canadian Payroll Compliance Checklist"

**Lead Magnet Creation Process:**

1. **Name the Asset:**
   ```
   "The Ultimate Canadian Xero Setup Checklist"
   Sub: "Ensure you're CRA-compliant and audit-proof in 15 minutes a week"
   ```

2. **Content Outline:**
   - Checklist items (10-15 items)
   - CRA compliance notes
   - Common mistakes to avoid
   - Quick wins
   
3. **Create Deliverable:**
   - PDF checklist (Canva template)
   - Google Sheet template
   - Notion template
   - Email course (3-5 emails)

4. **Build Opt-in Form** (in BlogCTAs.tsx):
```tsx
export const LeadMagnetCTA = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Send to email service (ConvertKit, Mailchimp, etc.)
        console.log("Submitting:", email);
        router.push('/thank-you');
    };

    return (
        <div className="my-16 p-8 md:p-12 bg-slate-50 rounded-2xl border border-slate-200 text-center">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold uppercase rounded-full mb-5">
                Free Resource
            </span>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                Master Xero in a Weekend
            </h3>
            <p className="text-slate-600 text-lg mb-8">
                Download our <strong>Ultimate Canadian Xero Setup Checklist</strong>.
                Ensure you're CRA-compliant and audit-proof your books.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3 rounded-lg border"
                />
                <button type="submit" className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg">
                    Send Me the Checklist
                </button>
            </form>
            <p className="text-slate-400 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </div>
    );
};
```

### 4.3 Email Nurture Sequence

**3-Email Welcome Series** (send via ConvertKit/Mailchimp):

**Email 1: Deliver the Lead Magnet (Immediate)**
```
Subject: Here's your Canadian Xero Setup Checklist ✅

Hey [NAME],

Thanks for downloading the Ultimate Canadian Xero Setup Checklist!

[DOWNLOAD BUTTON]

This checklist will help you:
✅ Set up Xero correctly for CRA compliance
✅ Integrate with Canadian banks (RBC, TD, Scotiabank)
✅ Configure GST/HST properly
✅ Avoid the #1 Canadian payroll mistake

Questions? Hit reply - I read every email.

- Sebastien
LedgerLogic CPA
```

**Email 2: Value Add (Day 3)**
```
Subject: The #1 Xero mistake Canadian businesses make

[NAME],

Quick question - did you get a chance to check out the Xero checklist?

I wanted to share the #1 mistake I see Canadian businesses make with Xero:

**Not setting a "Lock Date" after filing GST/HST returns.**

Here's why this matters...

[2-3 paragraphs of value]

P.S. If you're still wrestling with monthly bookkeeping, let's chat. 
[BOOK CONSULTATION LINK]
```

**Email 3: Soft CTA (Day 7)**
```
Subject: Are you in the right accounting software?

[NAME],

Over the past week, you've learned about Xero's strengths for Canadian businesses.

But here's the truth: Xero isn't right for everyone.

If you're:
- A contractor needing built-in Canadian payroll → QuickBooks might be better
- A multi-currency e-commerce brand → Xero is likely perfect
- A service agency with complex project tracking → Let's discuss your options

Want a second opinion on your accounting stack?

[BOOK 15-MIN CONSULTATION - NO PITCH, JUST HONEST ADVICE]

- Sebastien
```

---

## Phase 5: Technical SEO & Schema Implementation

### 5.1 Article Schema (BlogPosting)

Already implemented in `src/views/BlogPost.tsx`:
```tsx
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
        __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": [`https://ledgerlogic.ca${post.image}`],
            "datePublished": isoDate,
            "dateModified": isoDate,
            "author": [{
                "@type": "Person",
                "name": post.author,
                "url": "https://ledgerlogic.ca/about"
            }],
            "description": post.excerpt,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://ledgerlogic.ca/blog/${post.slug}`
            }
        })
    }}
/>
```

**Enhancement:** Add publisher organization:
```json
"publisher": {
    "@type": "Organization",
    "name": "LedgerLogic",
    "logo": {
        "@type": "ImageObject",
        "url": "https://ledgerlogic.ca/logo.png"
    }
}
```

### 5.2 FAQ Schema

Implemented within FAQ section:
```html
<div itemscope itemtype="https://schema.org/FAQPage">
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Question here?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Answer here.</p>
        </div>
    </div>
</div>
```

### 5.3 Breadcrumb Schema

Already implemented:
```tsx
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
        __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://ledgerlogic.ca"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Insights",
                    "item": "https://ledgerlogic.ca/blog"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": post.title
                }
            ]
        })
    }}
/>
```

### 5.4 Author Box (E-E-A-T)

Component: `src/components/AuthorBox.tsx`

**Enhance with:**
- CPA credentials
- Years of experience
- Canadian business focus
- Link to services

```tsx
<div className="author-box">
    <img src="/images/sebastien-cpa.jpg" alt="Sebastien Pouliot, CPA" />
    <div>
        <h4>Written by Sebastien Pouliot, CPA</h4>
        <p>Sebastien has helped 200+ Canadian tech startups and e-commerce businesses 
        navigate CRA compliance, payroll, and cloud accounting. As a licensed CPA with 
        10+ years serving founders, he specializes in Xero, QuickBooks, and tax strategy 
        for high-growth companies.</p>
        <a href="/#services">Work with Sebastien →</a>
    </div>
</div>
```

### 5.5 Image Optimization

**For each blog post:**

1. **Hero Image:**
   - Size: 1200x675px (16:9)
   - Format: WebP (with JPG fallback)
   - Alt text: Descriptive, keyword-rich
   - Example: `alt="Xero accounting software dashboard showing Canadian GST/HST reconciliation for small business"`

2. **Screenshots/Examples:**
   - Compress images (TinyPNG)
   - Add descriptive alt text
   - Include Canadian examples in images where possible

3. **Comparison Tables:**
   - Consider creating image versions for Pinterest
   - Alt text describes the comparison

### 5.6 Open Graph & Twitter Cards

Add to blog post metadata:
```typescript
{
    "ogTitle": "Is Xero Easy to Use? Canadian Business Owner's Guide",
    "ogDescription": "Xero is user-friendly for Canadian businesses, but watch out for payroll. CPA-backed guide.",
    "ogImage": "/images/blog/xero-easy-to-use-og.jpg",
    "twitterCard": "summary_large_image"
}
```

Implement in page:
```tsx
<meta property="og:title" content={post.ogTitle || post.title} />
<meta property="og:description" content={post.ogDescription || post.excerpt} />
<meta property="og:image" content={post.ogImage || post.image} />
<meta name="twitter:card" content="summary_large_image" />
```

---

## Phase 6: Featured Snippet Optimization

### 6.1 Target Snippet Types

**Definition Snippets:**
Format answer in first paragraph:
```html
<p><strong>Xero is a cloud-based accounting software</strong> designed for small 
to medium-sized businesses. It enables Canadian business owners to handle invoicing, 
bank reconciliation, expense tracking, and GST/HST reporting entirely online.</p>
```

**List Snippets:**
Use ordered/unordered lists for "how-to" queries:
```html
<h2>How to Set Up Xero for Canadian Businesses</h2>
<ol>
    <li><strong>Create your account:</strong> Sign up at xero.com/ca</li>
    <li><strong>Connect your Canadian bank:</strong> Link RBC, TD, Scotiabank, etc.</li>
    <li><strong>Configure GST/HST:</strong> Set your tax rates for your province</li>
    <li><strong>Import contacts:</strong> Add customers and suppliers</li>
    <li><strong>Set Chart of Accounts:</strong> Use Canadian standard or customize</li>
</ol>
```

**Table Snippets:**
Use comparison tables (already implemented)

**Accordion/FAQ Snippets:**
Use proper FAQ schema (already implemented)

### 6.2 Passage Ranking Optimization

For each H2 section, ensure:
- [ ] First paragraph directly answers the section question
- [ ] Include primary or secondary keyword
- [ ] 40-60 words

Example:
```
H2: Does Xero work with Canadian banks?

First paragraph (50 words):
"Yes, Xero integrates with all major Canadian banks including RBC, TD, 
Scotiabank, BMO, and CIBC. The software automatically imports transactions 
daily through secure bank feeds, eliminating manual data entry and reducing 
reconciliation time to minutes instead of hours."
```

---

## Phase 7: Quality Assurance Checklist

### 7.1 Content Quality
- [ ] Primary keyword in title, H1, first 100 words, conclusion
- [ ] Secondary keywords in H2s naturally
- [ ] Canadian terminology (CRA not IRS, GST/HST not sales tax)
- [ ] Canadian examples (banks, businesses, provinces)
- [ ] No typos or grammatical errors
- [ ] Canadian spelling (e.g., "licence" not "license")
- [ ] Readability score 60+ (Hemingway)
- [ ] Paragraphs < 4 lines
- [ ] Sentences < 25 words avg

### 7.2 Technical SEO
- [ ] SEO title < 60 characters
- [ ] Meta description 150-155 characters
- [ ] URL slug clean and keyword-rich
- [ ] All images have descriptive alt text
- [ ] All headings in proper hierarchy (H1 → H2 → H3)
- [ ] Table of Contents IDs match heading IDs exactly
- [ ] All internal links work
- [ ] All external links open in new tab
- [ ] Schema markup validates (Google Rich Results Test)
- [ ] Mobile responsive
- [ ] Page speed < 3 seconds

### 7.3 Conversion Elements
- [ ] At a Glance component present
- [ ] Mid-post Consultation CTA embedded
- [ ] End-of-post Lead Magnet CTA embedded
- [ ] CTAs open OnboardingModal (not navigate)
- [ ] Author bio present with credentials
- [ ] Newsletter signup has honest copy
- [ ] Clear next steps throughout

### 7.4 Internal Linking
- [ ] 5-8 outbound internal links added to this post
- [ ] Links to service pages
- [ ] Links to related blog posts
- [ ] Links to hub/pillar pages
- [ ] Descriptive anchor text (not "click here")
- [ ] 3-8 inbound links added FROM other posts
- [ ] Hub page updated to include this post

### 7.5 User Experience
- [ ] Desktop view tested (1920x1080)
- [ ] Tablet view tested (768px)
- [ ] Mobile view tested (375px)
- [ ] All hover effects working
- [ ] TOC scrolls smoothly
- [ ] Modal opens without issues
- [ ] Forms work correctly
- [ ] No layout shifts (CLS)
- [ ] Images load properly (lazy loading)

---

## Phase 8: Documentation & Reporting

### 8.1 Optimization Report Template

Create file: `src/data/posts/finalized/[post-slug]-COMPLETE.md`

```markdown
# [Post Title] - Optimization Complete ✅

**Date Completed:** [Date]
**Optimized By:** [Name]
**Post Slug:** `[slug]`

---

## SEO Strategy

### Primary Keyword
- **Keyword:** "[primary keyword]"
- **Search Intent:** Commercial/Informational/Transactional
- **Monthly Volume (Canada):** [estimate]
- **Current Ranking:** Position [X] or "Not ranking"
- **Target Position:** Top 10 within 90 days

### Secondary Keywords (5-10)
1. [keyword 1] - [intent] - [target section]
2. [keyword 2] - [intent] - [target section]
...

### Cannibalization Check
✅ No conflicts found
OR
⚠️ Conflict with [post name] - Resolved by [action taken]

---

## Content Changes

### What Was Changed
- [X] Rewrote intro to include primary keyword
- [X] Added "At a Glance" component
- [X] Restructured H2s to target secondary keywords
- [X] Added "Common Mistakes" section
- [X] Created FAQ section with 8 questions
- [X] Added comparison table
- [X] Improved conclusion with clear CTA

### Word Count
- Before: [X] words
- After: [Y] words
- Target: 1,800-2,500 words ✅

### Readability
- Flesch Reading Ease: [score]/100
- Grade Level: [level]

---

## Conversion System

### CTAs Added
1. **Mid-Post Consultation CTA**
   - Placement: After [section name], ~50% through post
   - Headline: "[custom headline]"
   - Action: Opens OnboardingModal

2. **End-of-Post Lead Magnet CTA**
   - Placement: Before FAQ
   - Lead Magnet: "[name of checklist/guide]"
   - Action: Email opt-in → Thank you page

### Lead Magnet Created
- **Name:** "[Lead Magnet Title]"
- **Format:** PDF Checklist / Google Sheet / Email Course
- **Deliverable:** [link to asset]
- **Nurture Sequence:** 3 emails (copy in docs)

---

## Internal Linking

### Links ADDED TO This Post
1. ✅ "[anchor text]" → [/url] ([page name])
2. ✅ "[anchor text]" → [/url] ([page name])
...

### Links ADDED FROM Other Posts TO This Post
1. ✅ [Post Name] → Section "[section]" → "[anchor text]"
2. ✅ [Post Name] → Intro paragraph → "[anchor text]"
...

### Hub Page Updates
- [ ] Added to "[Hub Page Name]" in section "[section]"
- [ ] OR: No hub page exists - recommend creating one

---

## Technical SEO

### Metadata
- **SEO Title:** "[title]" ([X] chars)
- **Meta Description:** "[description]" ([X] chars)
- **URL Slug:** `/blog/[slug]`
- **Featured Image:** `[path]` (1200x675px, WebP)

### Schema Markup
- [X] BlogPosting schema
- [X] FAQ schema (8 questions)
- [X] Breadcrumb schema
- [X] Author schema (E-E-A-T)

### Images
- [X] Hero image optimized (WebP, < 200KB)
- [X] All images have descriptive alt text
- [X] Screenshots include Canadian examples

---

## Quality Assurance

### Testing Completed
- [X] Desktop view (Chrome, Safari)
- [X] Tablet view (iPad)
- [X] Mobile view (iPhone, Android)
- [X] All TOC links work
- [X] All internal links work
- [X] CTAs open modals correctly
- [X] Forms submit properly
- [X] Schema validates (Google Rich Results Test)
- [X] Page speed < 3 seconds (GTmetrix)

### Issues Found & Resolved
- [Issue 1]: [Resolution]
- [Issue 2]: [Resolution]

---

## Performance Metrics

### Baseline (Before)
- Organic Impressions (30 days): [X]
- Organic Clicks (30 days): [X]
- Avg Position: [X]
- Conversion Rate: [X]%

### Targets (90 days post-optimization)
- Organic Impressions: +[X]%
- Organic Clicks: +[X]%
- Avg Position: Top 10
- Conversion Rate: [X]%

---

## Next Steps

1. Monitor rankings weekly (Google Search Console)
2. Track conversions (consultation bookings + email signups)
3. Update content quarterly (refresh stats, examples)
4. Build more internal links as new posts are created
5. Consider creating hub page if traffic grows

---

**Status:** ✅ READY FOR PRODUCTION
**Monitoring Dashboard:** [Google Search Console] [Google Analytics]
```

### 8.2 SEO Tracking Spreadsheet

Create: `docs/seo-tracking.xlsx`

Columns:
- Post Title
- URL Slug
- Primary Keyword
- Target Position
- Current Position
- Impressions (30d)
- Clicks (30d)
- CTR
- Conversions (Consult)
- Conversions (Email)
- Last Updated
- Status

---

## Quick Reference: Optimization Workflow

```
Step 1: SELECT POST
↓
Step 2: KEYWORD RESEARCH (1 hour)
    → Primary keyword
    → 5-10 secondary keywords
    → Cannibalization check
↓
Step 3: CONTENT OPTIMIZATION (2-3 hours)
    → Rewrite/restructure
    → Add At a Glance
    → Build TOC
    → Add FAQ (6-10 Qs)
    → Add "Common Mistakes"
    → Add comparison table (if relevant)
↓
Step 4: CONVERSION SYSTEM (1 hour)
    → Embed Consultation CTA
    → Embed Lead Magnet CTA
    → Create topic-specific lead magnet
    → Write 3-email nurture sequence
↓
Step 5: INTERNAL LINKING (30 min)
    → Add 5-8 outbound links
    → Add 3-8 inbound links (edit other posts)
    → Update hub page
↓
Step 6: TECHNICAL SEO (30 min)
    → Optimize metadata
    → Verify schema
    → Optimize images
    → Test responsiveness
↓
Step 7: QA TESTING (30 min)
    → Content review
    → Link testing
    → Mobile testing
    → Speed testing
↓
Step 8: DOCUMENTATION (15 min)
    → Complete optimization report
    → Update tracking spreadsheet
    → Move to finalized folder
↓
Step 9: PUBLISH & MONITOR
    → Google Search Console
    → Google Analytics
    → Conversion tracking
```

**Total Time:** 4-6 hours per post

---

## File Structure Reference

```
ledger-logic-web/
├── .agent/
│   └── blog-optimization-sop.md          ← This document
├── src/
│   ├── components/
│   │   ├── AuthorBox.tsx                 ← Author bio (E-E-A-T)
│   │   ├── BlogCTAs.tsx                  ← Consultation & Lead Magnet CTAs
│   │   ├── OnboardingModal.tsx           ← Consultation booking modal
│   │   └── Navbar.tsx                    ← Navigation
│   ├── data/
│   │   ├── blogData.ts                   ← Primary content source
│   │   └── posts/
│   │       ├── finalized/                ← Completed optimization docs
│   │       │   └── [slug]-COMPLETE.md
│   │       └── [legacy-json-files]       ← Delete after migration
│   └── views/
│       ├── BlogPost.tsx                  ← Main blog template
│       └── BlogPost.css                  ← Styles (premium-prose)
├── app/
│   └── blog/
│       └── [slug]/
│           └── page.tsx                  ← Next.js dynamic route
└── docs/
    └── seo-tracking.xlsx                 ← Performance tracking
```

---

## Success Metrics

A fully optimized post should achieve:

### SEO
- ✅ Top 10 ranking for primary keyword (within 90 days)
- ✅ Featured snippet capture for 1+ queries
- ✅ 200+ organic impressions per month
- ✅ 3%+ CTR from search
- ✅ Rich results showing in SERP (FAQ, breadcrumbs)

### Engagement
- ✅ 60+ second avg time on page
- ✅ < 60% bounce rate
- ✅ 30%+ scroll depth to FAQ section

### Conversions
- ✅ 2-5% consultation booking rate
- ✅ 5-10% email opt-in rate
- ✅ 10+ internal link clicks per session

---

## Common Issues & Solutions

### Issue: Not Ranking Despite Optimization
**Diagnosis:**
- Check for technical SEO issues (indexing, speed)
- Verify no keyword cannibalization
- Check backlink profile

**Solution:**
- Build topic cluster with 3-5 supporting posts
- Add internal links from high-authority pages
- Consider creating hub/pillar page
- Promote on social media / newsletter

### Issue: High Traffic But Low Conversions
**Diagnosis:**
- Wrong search intent (informational vs commercial)
- CTAs not prominent enough
- Lead magnet not compelling

**Solution:**
- Reposition post for commercial intent
- A/B test CTA placement and copy
- Create more specific lead magnet
- Add urgency/scarcity to offers

### Issue: Keyword Cannibalization
**Diagnosis:**
- Multiple posts ranking for same query
- Posts competing in SERPs

**Solution:**
- Choose canonical post (keep strongest)
- 301 redirect weaker posts
- OR: Differentiate clearly (beginner vs advanced)
- Update internal linking to point to canonical

---

## Version History
- v2.0 - 2026-01-02 - Added comprehensive SEO optimization, conversion system, internal linking strategy
- v1.0 - 2026-01-02 - Initial SOP based on "Is Xero Easy to Use?" optimization

---

**Questions? Issues? Improvements?**  
Document in `.agent/sop-feedback.md` for continuous improvement.
