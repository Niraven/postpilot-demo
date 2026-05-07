# PokeeClaw Demo Scripts — Production Ready

## Overview
- **Demos 1-3:** Rewritten originals (better prompts, more impressive outputs)
- **Demos 4-10:** Brand new concepts showcasing different capabilities
- Each demo: 5-6 min of narration (8-12 min total video with sped-up build sections)

---
---

## Demo 1: "Idea to Live Website" (Rewritten)

### The Prompt (copy-paste ready)

```
I have a startup idea called "PostPilot" — an AI-powered content repurposing engine that takes one long-form blog post and automatically generates platform-native content for Twitter/X (threads + single tweets), LinkedIn (carousel + text post), Instagram (reels script + caption + carousel slides), and TikTok (hook + script + caption with hashtags).

Here's what I need you to do:

1. MARKET RESEARCH: Research the content repurposing market. Find direct competitors (Repurpose.io, Castmagic, ContentStudio, Lately.ai, Opus Clip). For each: pricing, main features, weaknesses based on real user complaints. Identify the positioning gap PostPilot should fill.

2. BRAND IDENTITY: Generate a modern logo mark (abstract "P" with a gradient from electric blue #4F46E5 to violet #7C3AED). The brand personality is: confident, minimal, slightly playful.

3. LANDING PAGE: Build a complete, production-quality landing page with:
   - Navigation: Logo, Features, Pricing, "Join Waitlist" CTA button
   - Hero section: Bold headline referencing the core value prop (one post → 12+ pieces of content). Animated gradient background. Mockup showing the transformation from blog → multi-platform output.
   - Social proof bar: "Trusted by 500+ content creators" with placeholder avatars
   - How it works: 3-step visual (Paste URL → AI Analyzes → Get Platform-Native Content)
   - Features grid (6 cards): Platform intelligence, tone matching, hashtag research, scheduling integration, analytics, team collaboration
   - Pricing: Free (5 posts/mo), Pro $29/mo (unlimited), Agency $99/mo (white-label + API)
   - Testimonials section: 3 realistic-sounding testimonials from content creators
   - FAQ accordion: 6 questions covering "what formats," "which platforms," "how accurate," "can I edit," "API access," "refund policy"
   - Footer: Links, social icons, newsletter signup

4. DESIGN REQUIREMENTS:
   - Dark mode by default with a toggle for light mode
   - Font: Inter for body, Clash Display or similar bold font for headings
   - Micro-interactions: Smooth scroll, hover effects on cards, animated number counters
   - Fully responsive (mobile-first)
   - Performance: Lighthouse score 90+ (lazy load images, minimal JS)

5. WAITLIST INTEGRATION: Add a waitlist form that captures: email, name (optional), "How did you hear about us?" dropdown (Twitter, LinkedIn, Friend, ProductHunt, Other). On submit: save to a Google Sheet called "PostPilot Waitlist" with timestamp, send a confirmation email via Gmail saying "You're on the list! You're #[row number] in line."

6. DEPLOYMENT: Deploy to Cloudflare Pages with a clean subdomain. Set up proper meta tags, Open Graph image, and favicon.

Make this look like a real YC-backed startup's landing page, not a template.
```

### What PokeeClaw Will Do

1. **Deep market research** — Searches for each competitor, finds pricing pages, reads user reviews on G2/Reddit/Twitter, identifies positioning gaps
2. **Logo generation** — Creates brand mark with specified color palette
3. **Copywriting** — Writes all landing page copy informed by competitive research (references actual weaknesses of competitors as PostPilot strengths)
4. **Full-stack build** — HTML/CSS/JS (or React) with all sections, animations, responsive design, dark/light mode toggle
5. **Google Sheets integration** — Creates spreadsheet, connects form submission
6. **Gmail integration** — Sets up confirmation email with dynamic waitlist position
7. **Cloudflare deployment** — Deploys, configures domain, sets meta tags
8. **Quality check** — Tests form submission end-to-end, verifies mobile responsiveness

### Video Script

**[0:00 - 0:25] INTRO**

"Hey guys, it's Nino from Pokee AI. I would love to show you all today how you can take a startup idea — just an idea in your head — and turn it into a fully deployed, production-quality website with a working waitlist, email confirmations, the whole thing. One prompt. Let's get into it."

---

**[0:25 - 0:55] NAVIGATING IN**

"So you'll head to pokee.ai, and at the top you'll see PokeeClaw. Click Launch PokeeClaw and you're in your workspace. No IDE, no design tools, no hosting dashboards. Just this one interface.

What's really great is you can just tell Pokee what you'd like to do and it'll work with you to achieve that. Let me show you what I mean."

---

**[0:55 - 2:00] THE PROMPT**

"So here's the scenario — I have this idea for a tool called PostPilot. Takes one blog post, turns it into content for every platform. I want Pokee to research if this is viable, build the entire landing page, connect a waitlist to Google Sheets, send confirmation emails, and deploy it live. All production quality."

*[Type the prompt — show it being pasted/typed]*

"This is pretty detailed — I'm specifying the design system, the pricing tiers, the integrations, everything. Because the more context you give Pokee, the better the output. Let's let it run."

---

**[2:00 - 3:45] POKEE WORKING (narrate over sped-up sections)**

"So you can see it's starting with the research. It's pulling up Repurpose.io, Castmagic, Lately — comparing their pricing, finding user complaints. This is the stuff that normally takes you an afternoon of tab-hopping.

Now it's generating the logo with the color palette I specified. And writing the copy — look at the headline, it's referencing the actual value prop gap it found in the research.

It just asked me a quick question — 'Should the testimonials reference specific platforms or keep it general?' I said specific. It's good that it checks in like that at decision points.

Now it's building out the components. Dark mode, the animations, responsive layouts. Connecting the waitlist form to a new Google Sheet... setting up the confirmation email through Gmail... and deploying to Cloudflare."

---

**[3:45 - 5:15] THE REVEAL**

"And there it is. Let me click this URL."

*[Show live website in browser — scroll through all sections]*

"This is live on the internet right now. Look at this hero section — the gradient animation, the mockup. Features grid, pricing table with the tiers I specified. FAQ accordion works..."

*[Click dark/light mode toggle]*

"Dark mode toggle, fully responsive..."

*[Show mobile view]*

"Let me test the waitlist."

*[Enter email, show Google Sheet updating, show confirmation email arriving]*

"Form submitted. There it is in Google Sheets — email, name, source, timestamp. And... there's the confirmation email. 'You're #1 in line.' Working end to end.

So with Pokee we have hundreds of integrations — Cloudflare, Sheets, Gmail, and way more. You could expand on this — add Stripe payments, connect analytics, set up a Slack notification when someone joins. The sky's the limit."

---

**[5:15 - 5:50] WRAP UP**

"So that's a startup idea to a fully deployed website with working integrations in about 15 minutes. Feel free to ask it whatever you'd like — different industries, different features, whatever you need. Really appreciate you all watching. Be sure to check out pokee.ai. Thank you everyone!"

---
---

## Demo 2: "Client Proposal in Minutes" (Rewritten)

### The Prompt (copy-paste ready)

```
I just got a discovery call request from the founder of "Bloom & Grow Botanicals" — an organic skincare DTC brand doing ~$2.2M/year on Shopify Plus, team of 8, based in Austin TX. They want help automating their content production pipeline and customer lifecycle communications. The founder's name is Priya Sharma.

Here's what I need:

1. DEEP RESEARCH:
   - Research Bloom & Grow Botanicals thoroughly: products, pricing, brand voice, social media presence, email marketing (subscribe to see their welcome flow if possible), content output frequency, tech stack clues
   - Research 3-4 direct competitors (Cocokind, Herbivore Botanicals, Youth to the People, Osea) — specifically their content cadence and automation sophistication
   - Find any reviews, press mentions, or social sentiment about Bloom & Grow
   - Identify specific gaps: Are they posting consistently? Do they have email flows? Is their content repurposed across platforms?

2. WRITE A CONSULTING PROPOSAL (professional, not salesy):
   - Cover page: My name (Nino Amor), title (AI Automation Consultant), their company name, date, "Proposal: Content & Communication Automation"
   - Executive summary (1 paragraph, personalized — reference specific things about THEIR brand)
   - Current state assessment: What I observed about their operations (be specific — posting frequency, email gaps, manual processes I can infer)
   - Opportunity analysis: What they're leaving on the table (quantify where possible — "competitors post 5x/week vs your 2x")
   - Proposed solution — 3 phases:
     * Phase 1 (Weeks 1-3): Audit & Foundation — map current workflows, identify automation candidates, set up tools
     * Phase 2 (Weeks 4-8): Implementation — build content repurposing pipeline, email flow automation (welcome, abandoned cart, post-purchase, win-back), social scheduling
     * Phase 3 (Weeks 9-12): Optimization — A/B testing, analytics dashboard, team training, handoff documentation
   - Specific automations I'll build (list 8-10 concrete workflows, e.g., "New blog post → auto-generate Instagram carousel + Twitter thread + email newsletter snippet")
   - Tools & integrations: List the specific platforms I'll connect (Shopify, Klaviyo/Mailchimp, Later/Buffer, Canva API, ChatGPT API, Zapier/n8n, Google Analytics)
   - Timeline: Visual 12-week Gantt-style breakdown
   - Investment: $4,500/month for 3 months ($13,500 total), includes everything, payment terms net-15
   - Expected ROI: Project 30% increase in content output, 25% improvement in email revenue, 10+ hours/week saved for team
   - About me: Brief bio, relevant experience, past results
   - Next steps: "Reply to schedule a 30-min deep dive" with my Calendly link placeholder

3. FORMAT AS PDF:
   - Clean, modern design — navy (#1a237e) and white with gold (#d4af37) accents
   - Professional typography, proper spacing
   - Include subtle branded header/footer on each page
   - 6-8 pages total

4. DRAFT THE EMAIL:
   - To: priya@bloomandgrow.com (placeholder)
   - Subject line: Something warm and specific, not generic
   - Body: 4-5 sentences max. Reference something specific from our "call." Attach the proposal. Suggest next steps. Sign off with my name and title.
   - Tone: Confident but not pushy. Like a peer, not a vendor.

5. Also save the research data (competitor analysis, observations) to a Google Sheet called "Bloom & Grow - Research Notes" so I can reference it on the call.
```

### What PokeeClaw Will Do

1. **Company research** — Deep dive on Bloom & Grow's website, social media, email signup, product range, pricing, brand voice analysis
2. **Competitor research** — Analyze 4 competitors' content strategies, posting frequency, email sophistication, automation maturity
3. **Gap identification** — Compare client vs. competitors, quantify differences (posting frequency, email flows, content variety)
4. **Proposal writing** — Full multi-page proposal with personalized insights, specific workflow descriptions, timeline, pricing
5. **PDF formatting** — Professional design with navy/white/gold color scheme, proper typography and layout
6. **Email drafting** — Short, warm outreach email with the right tone
7. **Google Sheets export** — Raw research data organized for reference

### Video Script

**[0:00 - 0:25] INTRO**

"Hey guys, it's Nino from Pokee AI. I would love to show you all today how you can take a lead that just came in — someone who wants to work with you — and send them a fully researched, personalized proposal in about 15 minutes. Not a template. Actually personalized to their business. Let's jump in."

---

**[0:25 - 0:55] NAVIGATING IN**

"So head to pokee.ai, click Launch PokeeClaw. You're in your workspace.

What's really great about Pokee for proposal writing specifically is it doesn't just format a document — it actually researches the company first, finds real gaps, and writes something that's specific to them. That's what closes deals. Let me show you."

---

**[0:55 - 2:00] THE PROMPT**

"So here's the scenario — I just got off a discovery call with the founder of an organic skincare brand called Bloom & Grow. She wants help with content automation. I'm going to have Pokee research her company, her competitors, write the full proposal, format it as a PDF, draft the email, and save the research to Google Sheets so I can prep for the follow-up call."

*[Type/paste the prompt]*

"Pretty detailed ask. But that's the point — the more you tell Pokee about what you want, the better it delivers. Let's watch."

---

**[2:00 - 3:30] POKEE WORKING**

"So it's researching the company first. Found their Shopify store, pulling products, pricing. Now it's looking at their Instagram — posting twice a week. Their competitors are posting five times a week. That's exactly the kind of gap that makes a proposal compelling.

Now it's checking if they have email automation... looks like a basic welcome email but no abandoned cart flow, no post-purchase sequence. That's money on the table.

It's writing the proposal now. Look at the executive summary — it's referencing their specific products, their posting gaps, the revenue opportunity. This isn't something you could do with a template.

Formatting the PDF... drafting the email... exporting research to Sheets..."

---

**[3:30 - 5:00] THE REVEAL**

*[Open PDF, scroll through pages]*

"Here's the proposal. Cover page, executive summary — see how it mentions their specific bestseller and the content gap? Current state assessment with real numbers. The three-phase plan with concrete workflows... here are the specific automations I'd build — ten of them, each tied to their actual tools.

Timeline, pricing, ROI projections. Clean, professional."

*[Show email draft]*

"And here's the email — short, warm, references the call. Ready to send through Gmail.

*[Show Google Sheet]*

"And the research is all saved here for when I prep for the deep dive call.

A lead comes in at 2 PM, personalized proposal in their inbox by 2:15. Most consultants take three to five days. You can expand on this more if you wanted — connect it to your CRM, add a Calendly link, set up an auto-follow-up sequence."

---

**[5:00 - 5:40] WRAP UP**

"So that's a fully researched, personalized consulting proposal from scratch. With Pokee we have hundreds of integrations, so however you want to extend your workflow, it's all there. Really appreciate you all watching. Be sure to try pokee.ai. Thank you everyone!"

---
---

## Demo 3: "Competitor Intelligence Dashboard" (Rewritten)

### The Prompt (copy-paste ready)

```
I need a competitive intelligence system for my AI agent startup. Research these 5 competitors in depth:

1. Manus AI
2. Relevance AI
3. Zapier (specifically their AI/agent features — Central, Chatbots, AI Actions)
4. n8n (specifically their AI agent capabilities and @n8n/nodes-langchain)
5. Lindy AI

For EACH competitor, I need:
- Company overview (founded, funding, team size, HQ)
- Full pricing breakdown (every tier, what's included, usage limits, enterprise pricing if available)
- Complete feature inventory (list every major feature/capability)
- Target market and ideal customer profile
- Tech stack and architecture approach (cloud vs self-hosted, LLM providers supported)
- Integrations count and notable integrations
- Recent developments (last 60 days) — product launches, funding rounds, partnerships, blog posts
- User sentiment: Search Reddit (r/automation, r/n8n, r/artificial, r/SaaS), Twitter/X, G2 reviews, ProductHunt comments. Pull actual quotes — both praise and complaints
- Strengths (be specific — not just "easy to use" but "visual workflow builder reduces setup time for non-technical users")
- Weaknesses (be specific — actual user pain points with quotes/sources)
- Their positioning statement vs. how users actually describe them

Then BUILD an interactive web dashboard with:
- Overview page: Sortable/filterable comparison table (all 5 competitors, key metrics at a glance)
- Individual profile pages: Click any competitor for full deep-dive (all the research above, nicely formatted)
- Feature matrix: Interactive grid showing has/doesn't have/partial for 30+ features, grouped by category (AI capabilities, integrations, deployment, pricing model, support, security). Color coded with tooltips for details.
- Pricing comparison: Visual chart showing price-per-tier across all competitors, with a "value score" calculation (features per dollar)
- Sentiment tracker: Aggregated positive/negative/neutral scores with actual quotes and sources
- "Recent moves" timeline: Chronological feed of all competitor activity from the last 60 days
- SWOT analysis page: For each competitor, visual SWOT quadrant
- Market positioning map: 2D scatter plot (x: ease of use, y: power/flexibility) with each competitor plotted

Design requirements:
- Dark mode, modern SaaS dashboard aesthetic
- Sidebar navigation with competitor logos
- Search/filter functionality on all tables
- Responsive (works on mobile for quick checks)
- Fast — no heavy frameworks, vanilla JS or lightweight library only

Deploy to Cloudflare Pages.
Export ALL raw research data to a Google Sheet called "AI Agent Competitive Intel — [today's date]" with separate tabs for: Overview, Pricing, Features, Sentiment, Recent Moves.

This should look like something a strategy team at a Series B startup would actually use.
```

### What PokeeClaw Will Do

1. **Individual competitor research (x5)** — Deep dive on each company's website, docs, pricing page, blog, changelog
2. **Social sentiment mining** — Searches Reddit, Twitter, G2, ProductHunt for real user opinions with quotes
3. **Feature comparison mapping** — Catalogs 30+ features across all 5 competitors
4. **Dashboard development** — Builds full interactive web app with 8 distinct pages/views
5. **Data visualization** — Charts, scatter plots, SWOT quadrants, timelines
6. **Cloudflare deployment** — Deploys live with clean URL
7. **Google Sheets export** — Multi-tab spreadsheet with all raw data organized

### Video Script

**[0:00 - 0:25] INTRO**

"Hey guys, it's Nino from Pokee AI. Today I want to show you all something really cool — building a full competitive intelligence dashboard. Pokee is going to research five AI agent competitors in depth, including actual user sentiment from Reddit and Twitter, and then build an interactive dashboard I can use every day. Deployed live. Let's do it."

---

**[0:25 - 0:55] NAVIGATING IN**

"So pokee.ai, Launch PokeeClaw, and you're in your workspace.

What makes this powerful is Pokee can do the deep research AND build the visualization in one shot. Usually you'd spend a day researching, then another day building a spreadsheet or deck. Pokee does both."

---

**[0:55 - 2:15] THE PROMPT**

"So I'm tracking competitors in the AI agent space — Manus, Relevance AI, Zapier's AI features, n8n, and Lindy. I want everything — pricing, features, user sentiment with actual quotes, recent moves. And I want it all in an interactive dashboard deployed to a real URL. Plus the raw data in Google Sheets."

*[Type/paste prompt]*

"This is a big ask. Research, data visualization, web development, deployment, spreadsheet export — all in one prompt. Let's see what happens."

---

**[2:15 - 3:45] POKEE WORKING**

"It's going through each competitor now. Found Manus AI's pricing tiers, their feature list. Now Relevance AI — pulling their integrations page, their G2 reviews.

What's really cool is it's not just reading marketing pages. It found a Reddit thread where someone's comparing n8n's AI nodes to Zapier's new Central feature. Real user opinions — 'n8n is powerful but the learning curve is brutal' — that's the kind of insight you can't get from a features page.

Now it's structuring everything, building the dashboard components. The feature matrix, pricing charts, the market positioning scatter plot... deploying to Cloudflare... exporting to Sheets..."

---

**[3:45 - 5:30] THE REVEAL**

*[Show live dashboard]*

"Here it is. Let me walk through this.

Overview page — all five competitors at a glance. I can sort by pricing, feature count, sentiment score."

*[Click into a competitor profile]*

"Here's the full deep dive on Manus. Overview, complete pricing breakdown, all features listed, strengths and weaknesses with actual user quotes. See this — 'great for non-technical users but falls apart with complex multi-step workflows.' That's from Reddit."

*[Show feature matrix]*

"Feature matrix — 30-plus features grouped by category. Green, red, yellow. I can filter by 'AI capabilities' only..."

*[Show positioning map]*

"Market positioning map. Scatter plot with each competitor plotted on ease-of-use versus power. You can immediately see the gaps in the market.

*[Show Google Sheet]*

"And here's all the raw data in Sheets — separate tabs for overview, pricing, features, sentiment, recent moves. Ready for a board deck or strategy meeting.

This is deployed live. I can share the URL with my team, bookmark it, reference it before any strategy call. With Pokee we have hundreds of integrations, so you could extend this — set up a weekly schedule where Pokee re-runs the research and updates everything. You could get a Slack notification when a competitor launches something new."

---

**[5:30 - 6:00] WRAP UP**

"So that's deep competitive intelligence — researched, visualized, deployed, and exported — from one prompt. Feel free to ask it whatever you'd like — different competitors, different markets, whatever you need. The sky's the limit. Really appreciate you all watching. Be sure to check out pokee.ai. Thank you everyone!"

---
---

## Demo 4: "Automated Email Outreach System" (NEW — Gmail/Email Focus)

### The Prompt (copy-paste ready)

```
I'm a freelance brand strategist and I want to reach out to 10 DTC ecommerce brands that look like they need help with their email marketing. Here's what I need:

1. PROSPECT RESEARCH:
   Find 10 real DTC/ecommerce brands (Shopify-based preferred) in the health & wellness or beauty space doing estimated $500K-$5M/year. For each, I need:
   - Brand name and website
   - Founder/marketing lead name (find on LinkedIn or About page)
   - What they sell, price range, brand positioning
   - Their current email marketing assessment: Sign up for their email list and analyze what happens. Do they have a welcome flow? How many emails in the first week? Are they doing abandoned cart? Post-purchase? What's the quality like?
   - One specific, actionable observation about what they're doing wrong or missing

2. OUTREACH EMAILS:
   For each of the 10 brands, write a personalized cold email:
   - Subject line: Specific to their brand (not generic "let's chat")
   - Opening: Reference something specific I noticed about their email marketing (the gap I identified). Make it clear I actually looked at their stuff.
   - Value: One sentence on what I'd fix and the likely impact
   - CTA: Low-friction — "Want me to send over a quick 2-minute video walkthrough of what I'd change?" (not asking for a call)
   - Tone: Peer-to-peer, helpful, zero sleaze. Like a friend who happens to be an expert pointing something out.
   - Length: 4-6 sentences max. Nobody reads long cold emails.
   - Sign off: "— Nino" (keep it casual)

3. ORGANIZE EVERYTHING:
   - Save all prospect research to a Google Sheet called "DTC Outreach — [today's date]" with columns: Brand, Website, Contact Name, Contact Email (placeholder), Revenue Estimate, Email Marketing Score (1-10), Key Gap Identified, Personalized Subject Line, Email Status (draft/sent/replied)
   - Create a second tab called "Email Drafts" with all 10 personalized emails ready to copy

4. SEND THE FIRST ONE:
   Draft the #1 best prospect's email in Gmail (don't send, just create the draft) so I can review it and hit send myself. Show me what it looks like.

Make the research thorough but the emails concise. The whole point is these don't feel like mass outreach — each one should feel like I personally spent 20 minutes looking at their brand.
```

### What PokeeClaw Will Do

1. **Prospect identification** — Searches for DTC brands matching criteria (health/wellness/beauty, Shopify, revenue range)
2. **Deep brand research (x10)** — Visits each website, signs up for emails, analyzes their email marketing maturity
3. **Gap analysis** — Identifies specific, actionable weaknesses in each brand's email strategy
4. **Personalized email writing (x10)** — Crafts unique cold emails referencing specific observations
5. **Google Sheets organization** — Creates structured prospect tracker with all data
6. **Gmail draft creation** — Creates the top prospect's email as a draft in Gmail

### Video Script

**[0:00 - 0:25] INTRO**

"Hey guys, it's Nino from Pokee AI. I would love to show you all today how you can build a fully personalized outreach system — research prospects, find real gaps in their business, write emails that actually feel personal, and organize it all. From one prompt. Let's jump in."

---

**[0:25 - 0:55] NAVIGATING IN**

"So pokee.ai, Launch PokeeClaw. You're in your workspace.

What's really great about this for anyone doing outreach — freelancers, agency owners, consultants — is Pokee actually researches each prospect before writing the email. So every email references something specific to that brand. That's what gets replies."

---

**[0:55 - 1:45] THE PROMPT**

"Here's the scenario — I'm a brand strategist and I want to find 10 DTC brands that need help with their email marketing. I want Pokee to research each one, find a real gap in their email strategy, write a personalized cold email for each, organize everything in Google Sheets, and create a draft in Gmail for my top pick."

*[Type/paste prompt]*

"Let's see what Pokee finds."

---

**[1:45 - 3:15] POKEE WORKING**

"It's searching for DTC brands now. Found a few — looks like a clean beauty brand, a supplement company, a wellness tea brand. Good range.

Now it's going deep on each one. It's literally visiting their site, looking at their products, checking their email signup flow. For this one it noticed they have no welcome email at all — just silence after signup. That's a huge gap.

Now it's writing the emails. Look at this one — 'I signed up for your email list three days ago and haven't heard from you. Meanwhile, your product page has a 4.8 rating — you're sitting on testimonials that should be in a welcome sequence.' That's specific. That gets a reply.

Organizing everything in Sheets... creating the Gmail draft..."

---

**[3:15 - 4:45] THE REVEAL**

*[Show Google Sheet]*

"Here's the prospect tracker — 10 brands, all researched. Revenue estimates, email marketing scores, the specific gap I identified for each one."

*[Show Email Drafts tab]*

"And here are all 10 emails. Each one is different. Each one references something real about that brand. This would normally take half a day of research — Pokee did it in about 12 minutes."

*[Show Gmail draft]*

"And here's the top pick drafted in Gmail. Ready to review and send. 

The cool thing is with Pokee we have hundreds of integrations, so you could take this further — set up a schedule where Pokee finds 10 new prospects every Monday, or auto-send follow-ups three days later. You can expand on this however you want."

---

**[4:45 - 5:20] WRAP UP**

"So that's personalized outreach — researched, written, organized, and ready to send. Each email feels like you spent 20 minutes on it because Pokee actually did the research. Feel free to ask it whatever you'd like — different niches, different angles. The sky's the limit. Really appreciate you all watching. Be sure to try pokee.ai. Thank you everyone!"

---
---

## Demo 5: "Twitter/LinkedIn Thought Leadership Engine" (NEW — Social Media Focus)

### The Prompt (copy-paste ready)

```
I want to build a week's worth of thought leadership content for my personal brand. I'm Nino Amor, founder of Pokee AI — I talk about AI agents, automation, and the future of work. My audience is founders, solopreneurs, and tech-forward marketers.

Here's what I need:

1. RESEARCH TRENDING TOPICS:
   - Search Twitter/X for what's trending in AI agents, automation, no-code/low-code this week
   - Search Reddit (r/artificial, r/SaaS, r/Entrepreneur) for hot discussions about AI tools
   - Check Hacker News for relevant AI/automation posts getting traction
   - Google News for any major AI announcements this week
   - Identify 7 topics/angles I can create content around (one per day)

2. WRITE 7 TWITTER/X THREADS (one per day, Monday-Sunday):
   - Each thread: 5-8 tweets
   - Hook tweet must be scroll-stopping (pattern interrupt, bold claim, or curiosity gap)
   - Mix of formats: 1 listicle ("7 AI tools that..."), 1 hot take/contrarian opinion, 1 story/lesson, 1 how-to/tactical, 1 trend analysis, 1 prediction, 1 engagement bait (question/poll)
   - Include suggested posting times (optimize for tech/founder audience)
   - No hashtags (they look spammy for thought leadership)
   - Tone: Confident, slightly provocative, backed by specifics. Not generic motivational nonsense.

3. WRITE 5 LINKEDIN POSTS (Monday-Friday):
   - Each: 150-200 words
   - LinkedIn formatting (short paragraphs, line breaks for readability)
   - Mix: 1 "I built X and here's what I learned", 1 industry observation, 1 tactical tip, 1 contrarian take, 1 personal story with business lesson
   - Opening line must work in the LinkedIn preview (before "see more")
   - End each with a question to drive comments

4. CREATE A CONTENT CALENDAR:
   - Save everything to a Google Sheet called "Content Calendar — Week of [this Monday's date]"
   - Columns: Day, Platform, Content Type, Hook/Opening Line, Full Text, Suggested Time, Status
   - Separate tabs for Twitter and LinkedIn
   - Add a third tab "Ideas Backlog" with 10 additional content ideas I can develop later

5. POST THE FIRST ONE:
   Post Monday's Twitter thread to my Twitter/X account right now. If I need to adjust the timing, just post it immediately.

The content should feel like it comes from someone who's actually building in the AI space — not someone who just reads about it. Reference real tools, real numbers, real experiences where possible.
```

### What PokeeClaw Will Do

1. **Trend research** — Scans Twitter, Reddit, Hacker News, Google News for relevant AI/automation topics
2. **Topic identification** — Selects 7 angles with high engagement potential
3. **Twitter thread writing (x7)** — Crafts scroll-stopping threads with varied formats
4. **LinkedIn post writing (x5)** — Platform-native content optimized for the LinkedIn algorithm
5. **Content calendar creation** — Organized Google Sheet with everything structured for execution
6. **Twitter posting** — Actually posts the first thread to the connected Twitter account

### Video Script

**[0:00 - 0:25] INTRO**

"Hey guys, it's Nino from Pokee AI. I would love to show you all today how you can build a full week of thought leadership content — researched around what's actually trending right now, written for both Twitter and LinkedIn, organized in a content calendar, and even posted automatically. One prompt. Let's do it."

---

**[0:25 - 0:55] NAVIGATING IN**

"pokee.ai, Launch PokeeClaw, and you're in your workspace.

What's really cool about this is Pokee doesn't just write generic content — it actually researches what's trending in your space right now, this week, and writes content around that. So everything feels timely and relevant."

---

**[0:55 - 1:45] THE PROMPT**

"So I want a full week of content for my personal brand. Twitter threads and LinkedIn posts. But I want them based on what's actually trending in AI this week — not recycled takes. I want Pokee to research the trends, write everything, organize it in a content calendar in Google Sheets, and post the first thread for me."

*[Type/paste prompt]*

"Let's see what it comes up with."

---

**[1:45 - 3:15] POKEE WORKING**

"It's scanning Twitter for trending AI conversations. Found a thread about AI agents replacing junior developers that got 2,000 retweets. Checking Reddit — there's a hot post in r/SaaS about no-code automation hitting its limits. Hacker News has a big discussion about agent reliability.

Now it's selecting the 7 angles for the week. Smart — it's mixing tactical content with hot takes to balance reach and engagement.

Writing the threads now. Look at this hook — 'I replaced my $4,000/month marketing stack with one AI agent. Here's exactly what broke and what didn't.' That's going to stop scrolling.

LinkedIn posts, content calendar to Sheets... and it's posting the first thread to my Twitter..."

---

**[3:15 - 4:45] THE REVEAL**

*[Show Google Sheet content calendar]*

"Here's the content calendar. Seven days of Twitter threads, five LinkedIn posts. Each one has the hook, full text, suggested posting time."

*[Show a Twitter thread in detail]*

"Look at this thread — starts with a bold hook, gives specific examples, ends with a clear takeaway. This isn't generic AI slop — it's referencing real tools and real trends from this week."

*[Show LinkedIn post]*

"LinkedIn posts formatted properly — short paragraphs, strong opening line, ends with a question for engagement."

*[Show the posted tweet/thread]*

"And Monday's thread is already live on my Twitter. Posted automatically.

With Pokee we have hundreds of integrations — you could set this up on a weekly schedule. Every Sunday evening, Pokee researches the week's trends and queues up your content. You'd never run out of ideas."

---

**[4:45 - 5:20] WRAP UP**

"So that's a full week of researched, platform-native thought leadership content — written, organized, and posted. If you all would prefer step-by-step tutorials on the scheduling part, we can absolutely do that. Really appreciate you all watching. Be sure to check out pokee.ai. Thank you everyone!"

---
---

## Demo 6: "Spreadsheet Analytics & Automated Report" (NEW — Data/Sheets Focus)

### The Prompt (copy-paste ready)

```
I have a Google Sheet called "Q1 2026 Sales Data" with our company's sales data for January through March. It has columns: Date, Product, Category, Revenue, Units Sold, Customer Type (new/returning), Region (US/EU/APAC), Sales Rep, and Channel (website/Amazon/retail).

I need you to:

1. ANALYZE THE DATA:
   - Total revenue and units sold (overall and by month)
   - Revenue breakdown by: product, category, region, channel, customer type
   - Month-over-month growth rates
   - Top 10 products by revenue and by units
   - Best and worst performing regions
   - New vs. returning customer revenue split and trend
   - Average order value by channel
   - Sales rep leaderboard (revenue + units + conversion)
   - Identify any anomalies or concerning trends (declining products, regional drops, channel shifts)

2. BUILD AN EXECUTIVE DASHBOARD:
   Create a new Google Sheet called "Q1 2026 — Executive Dashboard" with:
   - Tab 1 "Summary": Key metrics in a clean executive summary format (YoY comparison if data allows, otherwise MoM)
   - Tab 2 "Revenue Analysis": Pivot-style breakdowns with conditional formatting (green for growth, red for decline)
   - Tab 3 "Product Performance": Top/bottom products, category breakdown, trend arrows
   - Tab 4 "Regional": Region-by-region breakdown with growth indicators
   - Tab 5 "Sales Team": Rep leaderboard, quota attainment if applicable
   - Tab 6 "Insights & Actions": Written analysis — 5-7 bullet points of key takeaways and recommended actions

3. GENERATE A PDF REPORT:
   Create a 4-page executive report PDF:
   - Page 1: Title + Key Metrics (revenue, growth, top product, top region — at a glance)
   - Page 2: Revenue trends visualization description + analysis
   - Page 3: Product and regional deep dive
   - Page 4: Recommendations (3-5 specific, actionable items based on the data)
   - Design: Clean, modern, with our brand colors (dark navy #0f172a, accent blue #3b82f6, white)

4. EMAIL THE REPORT:
   Draft an email to "leadership@company.com" (placeholder) with:
   - Subject: "Q1 2026 Sales Report — Key Findings"
   - Body: 3-4 sentence executive summary of the most important findings
   - Attach the PDF
   - Tone: Professional, data-driven, concise

This is for a Monday morning leadership meeting. Make the insights actionable — not just "revenue went up" but "revenue grew 18% MoM driven primarily by APAC expansion in the wellness category; recommend doubling ad spend in that segment."
```

### What PokeeClaw Will Do

1. **Data ingestion** — Reads the Google Sheet, understands structure and data types
2. **Statistical analysis** — Calculates all metrics, breakdowns, growth rates, identifies anomalies
3. **Dashboard creation** — Builds multi-tab executive dashboard in Google Sheets with formatting
4. **Insight generation** — Writes actionable analysis based on data patterns
5. **PDF report** — Creates professional 4-page executive summary
6. **Email drafting** — Composes leadership email with key findings and attachment

### Video Script

**[0:00 - 0:25] INTRO**

"Hey guys, it's Nino from Pokee AI. I would love to show you all today how you can take raw sales data in a Google Sheet and turn it into an executive dashboard, a PDF report, and an email to your team — all in one prompt. No pivot tables, no playing with formatting for an hour. Let's see it."

---

**[0:25 - 0:55] NAVIGATING IN**

"pokee.ai, Launch PokeeClaw. You're in.

So what's really great about this is — most people spend their Sunday nights formatting spreadsheets for Monday morning meetings. Pokee does the analysis, the formatting, the report, AND the email. You just review and send."

---

**[0:55 - 1:45] THE PROMPT**

"I have a Google Sheet with our Q1 sales data — revenue, products, regions, channels, sales reps. I want Pokee to analyze everything, build an executive dashboard in a new Sheet, create a PDF report, and draft the email to send to leadership. Full end-to-end."

*[Type/paste prompt]*

"Let's run it."

---

**[1:45 - 3:15] POKEE WORKING**

"It's reading the spreadsheet now. Processing about 3 months of data — pulling revenue totals, calculating growth rates, doing the breakdowns by region, channel, product.

Now it's building the dashboard. Look — it's creating the summary tab with key metrics, conditional formatting on the revenue analysis. Green for growth, red for decline. The sales rep leaderboard...

And now the PDF report. Title page, key metrics, the analysis. And it's writing actual insights — not just 'revenue went up' but specific, actionable recommendations based on what the data shows.

Drafting the email to leadership..."

---

**[3:15 - 4:45] THE REVEAL**

*[Show executive dashboard Google Sheet]*

"Here's the dashboard. Summary tab — total revenue, growth rate, top product, top region, all at a glance. Revenue analysis with conditional formatting..."

*[Click through tabs]*

"Product performance, regional breakdown, sales leaderboard. And this Insights tab — seven bullet points of actionable takeaways. 'APAC wellness category grew 43% MoM — recommend increasing paid spend in this segment.' That's useful for a leadership meeting."

*[Show PDF]*

"Four-page executive report. Clean, branded, data-driven. Ready to present or share."

*[Show email draft]*

"And the email is drafted — concise summary, PDF attached. Review it, hit send.

With Pokee we have hundreds of integrations — you could schedule this to run every Monday morning at 7 AM. Fresh report in leadership's inbox before the meeting even starts."

---

**[4:45 - 5:20] WRAP UP**

"So that's raw data to executive report — analyzed, visualized, formatted, and ready to send. Feel free to ask it whatever you'd like — different data sources, different report formats. The sky's the limit. Really appreciate you all watching. Be sure to try pokee.ai. Thank you everyone!"

---
---

## Demo 7: "Open Source README & DevOps Setup" (NEW — GitHub/Code Focus)

### The Prompt (copy-paste ready)

```
I have a GitHub repo at github.com/ninoamor/pokee-sdk-python (it's a Python SDK for our API). The code is functional but the repo looks unprofessional — no README, no CI/CD, no contribution guidelines, no issue templates. I want to make it look like a legit open source project that developers would trust and star.

Here's what I need:

1. ANALYZE THE REPO:
   - Read the codebase structure, understand what the SDK does
   - Identify the main modules, classes, and methods
   - Check existing tests (if any)
   - Look at the package setup (pyproject.toml or setup.py)

2. WRITE A PRODUCTION-QUALITY README:
   - Badge row: PyPI version, Python versions supported, CI status, license, downloads
   - One-line description + longer pitch paragraph
   - Installation (pip, poetry, from source)
   - Quick start example (3-4 lines of code showing the most common use case)
   - Full API reference (every public class/method with brief description, organized by module)
   - Authentication section
   - Error handling section
   - Advanced usage examples (3-4 real-world scenarios with code snippets)
   - Configuration options table
   - Contributing section (link to CONTRIBUTING.md)
   - License
   - Format: Clean, professional, similar to stripe-python or openai-python READMEs

3. CREATE SUPPORTING FILES:
   - CONTRIBUTING.md: How to set up dev environment, run tests, submit PRs, code style
   - CHANGELOG.md: Starting template with current version
   - .github/ISSUE_TEMPLATE/bug_report.md: Structured bug report template
   - .github/ISSUE_TEMPLATE/feature_request.md: Feature request template
   - .github/PULL_REQUEST_TEMPLATE.md: PR checklist template
   - CODE_OF_CONDUCT.md: Standard Contributor Covenant
   - LICENSE: MIT

4. SET UP CI/CD:
   - .github/workflows/test.yml: Run pytest on push/PR (Python 3.9, 3.10, 3.11, 3.12), lint with ruff, type check with mypy
   - .github/workflows/publish.yml: Auto-publish to PyPI on GitHub release creation
   - .github/workflows/docs.yml: Auto-generate and deploy API docs to GitHub Pages

5. PUSH EVERYTHING:
   Commit all files with clear commit messages and push to the repo. Don't squash — I want separate commits for README, CI/CD, and templates so the git history is clean.

The goal: someone lands on this repo and immediately thinks "this is well-maintained, I can trust this SDK."
```

### What PokeeClaw Will Do

1. **Repo analysis** — Clones and reads the codebase, understands architecture, finds public API surface
2. **README generation** — Writes comprehensive, stripe-quality README with real code examples
3. **Supporting docs** — Creates all contribution, changelog, and template files
4. **CI/CD pipeline** — Writes GitHub Actions workflows for testing, publishing, and docs
5. **Git operations** — Commits each logical change separately with clean messages
6. **Push to GitHub** — Pushes all changes to the repository

### Video Script

**[0:00 - 0:25] INTRO**

"Hey guys, it's Nino from Pokee AI. I would love to show you all today how you can take a GitHub repo that has working code but looks unprofessional, and turn it into something that looks like a legit open source project. README, CI/CD, templates, the works. One prompt. Let's go."

---

**[0:25 - 0:55] NAVIGATING IN**

"pokee.ai, Launch PokeeClaw.

So what's really cool about this is Pokee actually reads and understands your code first. So the README it writes isn't generic — it documents YOUR actual API, YOUR actual methods, with real examples. Let me show you."

---

**[0:55 - 1:45] THE PROMPT**

"I have a Python SDK on GitHub. The code works but the repo looks like it was put together by one developer in a weekend — no README, no CI, no issue templates. I want Pokee to read the code, write a production README, set up CI/CD with GitHub Actions, create all the standard open source files, and push it all with clean commit history."

*[Type/paste prompt]*

"Let's run it."

---

**[1:45 - 3:15] POKEE WORKING**

"It's cloning the repo, reading through the codebase. Found the main client class, the authentication module, the various API methods. It's understanding how the SDK actually works.

Now it's writing the README — badge row, installation instructions, quick start example using the actual class names from the code. API reference section documenting every public method... This looks like the Stripe SDK README.

Creating the contribution guide, issue templates, PR template. Setting up the GitHub Actions workflows — tests running on four Python versions, auto-publish to PyPI on release...

Committing separately — README first, then CI/CD, then templates. Clean git history. Now pushing to GitHub..."

---

**[3:15 - 4:45] THE REVEAL**

*[Show GitHub repo page]*

"Look at this. Before — just a list of files with no README. Now..."

*[Show the README rendering on GitHub]*

"Badges at the top. Clean description. Installation options. Quick start that actually works — these are the real class names from the codebase. Full API reference organized by module.

*[Show Actions tab]*

"CI/CD is set up. Tests, linting, type checking, auto-publish. Green checkmarks.

*[Show Issues tab]*

"Issue templates ready. Click 'New Issue' — you get a structured bug report or feature request form.

This went from 'random personal project' to 'I'd trust this in production' in about 12 minutes. With Pokee we have hundreds of integrations — GitHub is just one. You could also set up a Slack notification for new stars, auto-tweet on releases, whatever you need."

---

**[4:45 - 5:20] WRAP UP**

"So that's a professional open source setup — README, CI/CD, templates, all pushed with clean commits. If you all would prefer step-by-step tutorials on the CI/CD part specifically, we can absolutely do that. Really appreciate you all watching. Be sure to check out pokee.ai. Thank you everyone!"

---
---

## Demo 8: "Personal CRM from Your Inbox" (NEW — Unexpected/Creative Wow Factor)

### The Prompt (copy-paste ready)

```
I want you to build me a personal CRM by analyzing my Gmail inbox. Here's what I mean:

1. SCAN MY RECENT EMAILS:
   - Look at my last 200 sent emails and last 200 received emails
   - Identify every unique person I've been communicating with
   - For each person, determine: their name, email, what we discussed (topic summary), how frequently we talk, when we last communicated, and the relationship type (client, prospect, collaborator, friend, vendor, investor, etc.) based on context clues in the emails

2. IDENTIFY KEY RELATIONSHIPS:
   - Who are my top 20 most important contacts? (based on frequency + recency + apparent business value)
   - Who have I been neglecting? (important people I haven't emailed in 30+ days)
   - Are there any introductions I was supposed to make that I might have forgotten?
   - Any follow-ups I promised but haven't sent?

3. BUILD A PERSONAL CRM:
   Create a Google Sheet called "Personal CRM — Nino" with:
   - Tab 1 "All Contacts": Name, Email, Relationship Type, Last Contact Date, Frequency (emails/month), Key Topics, Notes
   - Tab 2 "Priority Follow-ups": People I should reach out to this week, with suggested reason/context
   - Tab 3 "Neglected": Important contacts I haven't spoken to in 30+ days, sorted by importance
   - Tab 4 "Relationship Map": Grouped by type (clients, prospects, collaborators, etc.) with count and recent activity summary

4. DRAFT FOLLOW-UP EMAILS:
   For the top 5 people I've been neglecting, draft short, natural follow-up emails:
   - Reference our last conversation specifically
   - Don't be weird about it — just a casual check-in or relevant share
   - Each should be 2-3 sentences max
   - Create these as Gmail drafts so I can review and send

5. BUILD A SIMPLE WEB DASHBOARD:
   - Deploy a simple relationship dashboard to Cloudflare showing: contact count, relationship breakdown pie chart, "needs attention" list, communication frequency heatmap (like GitHub's contribution graph but for emails)
   - Dark mode, minimal, personal use only

This should feel like having a personal assistant who keeps track of all my relationships and nudges me when I'm dropping the ball.
```

### What PokeeClaw Will Do

1. **Gmail analysis** — Reads 400 recent emails (sent + received), extracts contacts and conversation context
2. **Relationship classification** — Uses email content to categorize each contact and assess relationship importance
3. **Gap identification** — Finds neglected contacts, missed follow-ups, forgotten introductions
4. **CRM spreadsheet** — Builds structured Google Sheet with all relationship data
5. **Follow-up drafting** — Writes natural re-engagement emails based on past conversation context
6. **Dashboard deployment** — Builds and deploys a personal relationship visualization tool

### Video Script

**[0:00 - 0:30] INTRO**

"Hey guys, it's Nino from Pokee AI. I would love to show you all today something a little different — building a personal CRM by analyzing my actual Gmail inbox. Pokee is going to scan my recent emails, figure out who I've been talking to, identify relationships I'm neglecting, and even draft follow-up emails. Plus build a dashboard to keep track of it all. Let's see this."

---

**[0:30 - 1:00] NAVIGATING IN**

"pokee.ai, Launch PokeeClaw.

What's really great about this is it combines multiple integrations — Gmail for reading and drafting, Google Sheets for the CRM, Cloudflare for the dashboard. All working together from one prompt. That's the power of having hundreds of integrations in one workspace."

---

**[1:00 - 1:50] THE PROMPT**

"So I want Pokee to scan my last 200 sent and received emails, identify everyone I'm communicating with, figure out the relationship type from context, find people I've been neglecting, build a CRM spreadsheet, draft follow-up emails for the people I need to reconnect with, and deploy a relationship dashboard. All automatic."

*[Type/paste prompt]*

"This is the kind of thing a personal assistant would take a full day to do. Let's see how Pokee handles it."

---

**[1:50 - 3:20] POKEE WORKING**

"It's scanning my inbox now. Processing emails, extracting contacts, understanding context from the conversations. It's figuring out who's a client, who's a prospect, who's a collaborator — all from the email content.

This is interesting — it found someone I was talking to about a partnership six weeks ago and I never followed up. It also found a client I haven't emailed in 35 days who usually hears from me weekly. Those are exactly the drops I needed to know about.

Now it's building the CRM spreadsheet, writing the follow-up drafts, building the dashboard..."

---

**[3:20 - 5:00] THE REVEAL**

*[Show Google Sheet]*

"Here's the CRM. All contacts tab — every person from my recent emails, categorized with last contact date and frequency. Priority follow-ups tab — five people I should reach out to this week.

And look at this Neglected tab — sorted by importance. This client I haven't emailed in 35 days? Pokee flagged that and drafted a follow-up."

*[Show Gmail drafts]*

"Here are the five draft emails. Look at this one — 'Hey Sarah, been thinking about the onboarding flow we discussed last month. We ended up implementing something similar and I'd love to share what we learned. Coffee next week?' That's natural. It references our actual last conversation."

*[Show dashboard]*

"And here's the relationship dashboard. Contact breakdown by type, communication frequency heatmap — I can see exactly when I'm active and when I go quiet. 'Needs attention' list right at the top."

"You can expand on this more if you wanted — set up a weekly schedule where Pokee re-scans and updates the CRM, pings you on Slack when someone important goes quiet. The sky's the limit."

---

**[5:00 - 5:35] WRAP UP**

"So that's a personal CRM built from your actual inbox — contacts identified, relationships mapped, follow-ups drafted. This is the kind of thing that separates people who maintain great relationships from those who don't — and now it's automated. Really appreciate you all watching. Be sure to try pokee.ai. Thank you everyone!"

---
---

## Demo 9: "Full-Stack Bug Fix from Issue to Deploy" (NEW — Developer Workflow)

### The Prompt (copy-paste ready)

```
I have an open GitHub issue on my repo (github.com/ninoamor/pokee-app) — issue #47 "Login page crashes on mobile Safari when password field is focused." Three users reported it this week.

Here's what I need:

1. INVESTIGATE THE BUG:
   - Read issue #47 and all comments for context
   - Look at the login page code (likely in src/pages/Login or similar)
   - Research this specific Safari mobile bug pattern — it's probably a known iOS keyboard/viewport issue
   - Identify the root cause
   - Check if this affects any other pages with form inputs

2. FIX THE BUG:
   - Write the fix on a new branch called "fix/mobile-safari-login-crash"
   - Make sure the fix handles edge cases (different iOS versions, iPad, landscape mode)
   - Don't just patch it — fix it properly so it won't recur
   - Add a comment in the code explaining WHY (for the next developer who encounters this)

3. ADD A TEST:
   - Write a test that would catch this regression
   - If there's an existing test file for the login page, add it there
   - If not, create one following the repo's testing patterns

4. CREATE THE PR:
   - Title: Clear, descriptive
   - Description: What was the bug, what caused it, how this fixes it, what was tested
   - Reference issue #47 (so it auto-closes on merge)
   - Add screenshots or description of before/after behavior
   - Request review from whoever wrote the original login code (check git blame)

5. UPDATE THE ISSUE:
   - Comment on issue #47: "Fix submitted in PR #[number]. Root cause was [explanation]. Should be resolved once merged."
   - Tag the users who reported it so they know

6. ALSO:
   - Check if there are any other open issues that might be related to this same root cause
   - If so, comment on those too linking to the PR

The whole flow: investigate → fix → test → PR → communicate. Like a senior dev would handle it.
```

### What PokeeClaw Will Do

1. **Issue investigation** — Reads the GitHub issue and comments, understands the bug context
2. **Code analysis** — Reads the login page code, identifies the problematic pattern
3. **Root cause research** — Searches for the specific Safari viewport bug, finds the proper fix
4. **Branch creation & fix** — Creates a new branch, writes the fix with proper code comments
5. **Test writing** — Adds regression test following repo conventions
6. **PR creation** — Opens a well-documented pull request referencing the issue
7. **Issue communication** — Updates the issue and notifies reporters

### Video Script

**[0:00 - 0:25] INTRO**

"Hey guys, it's Nino from Pokee AI. I would love to show you all today a developer workflow — taking an open GitHub issue, investigating the bug, writing the fix, adding tests, creating a PR, and communicating with the reporters. The full senior dev workflow from one prompt. Let's see it."

---

**[0:25 - 0:55] NAVIGATING IN**

"pokee.ai, Launch PokeeClaw.

What's really great about this for dev teams is Pokee understands the full lifecycle — it's not just a code generator. It reads the issue, investigates root cause, checks for related bugs, handles the git workflow, and communicates with stakeholders. All of it."

---

**[0:55 - 1:45] THE PROMPT**

"So I have a bug reported by three users — login page crashes on mobile Safari when the password field gets focus. I want Pokee to investigate the bug, find the root cause, fix it properly with tests, create a PR, update the issue, and let the reporters know. Like a senior developer would handle the entire thing."

*[Type/paste prompt]*

"Let's watch."

---

**[1:45 - 3:15] POKEE WORKING**

"It's reading the issue first — three comments from users, all on iOS 17. Now it's looking at the login page code... found the form component. 

It's researching the Safari viewport bug — this is actually a known iOS issue where the keyboard push causes a reflow that crashes certain CSS layouts. Found the root cause.

Creating a new branch, writing the fix. And look — it's checking other form pages to see if they're affected too. Found one more page with the same pattern. Fixing both.

Writing a test... creating the PR with a detailed description... commenting on the issue..."

---

**[3:15 - 4:45] THE REVEAL**

*[Show GitHub PR]*

"Here's the PR. Clear title, detailed description — explains the root cause, the fix, what was tested. References issue #47. Has the diff showing exactly what changed.

*[Show the fix code]*

"The fix itself — clean, handles edge cases, has a comment explaining why this specific approach is needed for Safari.

*[Show the test]*

"Regression test added. If this bug pattern appears again, the test catches it.

*[Show issue comment]*

"And on the issue — commented with the root cause explanation, linked the PR. Tagged the reporters so they know it's being handled.

That's the full workflow. A senior developer would take 30-60 minutes doing this. With Pokee we have hundreds of integrations — GitHub, your CI/CD, Slack for notifications. You could also have it ping your team channel when the PR is ready for review."

---

**[4:45 - 5:20] WRAP UP**

"So that's a full dev workflow — issue to fix to PR to communication. Feel free to ask it whatever you'd like — different repos, different types of bugs, code reviews, refactoring. Really appreciate you all watching. Be sure to check out pokee.ai. Thank you everyone!"

---
---

## Demo 10: "Event-Triggered Multi-Platform Campaign" (NEW — Automation/Integration Showcase)

### The Prompt (copy-paste ready)

```
I just hit a milestone — Pokee AI reached 10,000 users. I want to create a full announcement campaign across every channel in the next 30 minutes. Here's what I need:

1. WRITE THE ANNOUNCEMENT COPY:
   - Core message: "10,000 builders are now using Pokee AI to automate their work" — frame it as a community milestone, not just our growth
   - Stats to include: 10,000 users, 90+ integrations, X tasks automated (make up a reasonable number like 2.3M), top 5 use cases our users love
   - Tone: Grateful, energized, forward-looking. Not braggy.

2. TWITTER/X ANNOUNCEMENT:
   - Thread: 5 tweets. Hook → milestone → what users build → what's coming next → thank you + CTA
   - Post it immediately to our Twitter account
   - Pin the first tweet

3. LINKEDIN POST:
   - Professional angle: "What 10,000 users taught us about the future of AI agents"
   - Include 3 insights/learnings
   - Format for LinkedIn (short paragraphs, line breaks)
   - Post it to LinkedIn

4. EMAIL TO USERS (via Gmail):
   - Subject: "You helped us reach 10,000 🎉"
   - Body: Short, warm thank-you email. Include what's coming next (3 teaser features). Link to a feedback form.
   - Don't actually send to all users — just create a draft I can review. Address it to "community@pokee.ai"

5. REDDIT POST:
   - Post in r/SaaS and r/artificial
   - Title: "We just hit 10K users — here's what we learned building an AI agent platform"
   - Body: Genuine lessons learned post. 5 non-obvious insights. End with "AMA in the comments"
   - Don't make it feel like marketing — make it genuinely valuable

6. BUILD A MILESTONE PAGE:
   - Simple one-page site: animated counter hitting 10,000, timeline of our journey (5-6 key dates), user testimonials section (3 quotes), "what's next" teaser, big CTA to try Pokee
   - Confetti animation on load
   - Deploy to Cloudflare Pages at a clean URL
   - This will be linked from all the social posts

7. UPDATE MY GOOGLE SHEET:
   - Add a row to my "Growth Milestones" sheet: Date, Milestone, Channels Announced, Links to Posts

8. SLACK NOTIFICATION:
   - Post in our team's #announcements channel: "🎉 10K campaign is live! [links to all posts]"

Execute everything in the right order — build the milestone page first (so we have a link), then post everywhere, then log and notify.
```

### What PokeeClaw Will Do

1. **Copywriting** — Creates platform-native announcement copy for each channel
2. **Milestone page** — Builds and deploys a celebration page with animations
3. **Twitter posting** — Posts a 5-tweet thread and pins it
4. **LinkedIn posting** — Posts the professional version
5. **Gmail draft** — Creates user email draft for review
6. **Reddit posting** — Posts genuinely valuable content in relevant subreddits
7. **Google Sheets logging** — Records the milestone and links
8. **Slack notification** — Notifies the team with all post links
9. **Orchestration** — Handles the dependency order (page first → posts → logging → notification)

### Video Script

**[0:00 - 0:30] INTRO**

"Hey guys, it's Nino from Pokee AI. I would love to show you all today something that showcases what makes PokeeClaw really special — orchestrating across multiple platforms at once. We just hit 10,000 users, and I want to announce it everywhere — Twitter, LinkedIn, Reddit, email, a milestone page, Slack. All coordinated. One prompt. Let's see it happen."

---

**[0:30 - 1:00] NAVIGATING IN**

"pokee.ai, Launch PokeeClaw.

So this is where having hundreds of integrations in one workspace really shines. Instead of going platform by platform — write in Twitter, switch to LinkedIn, open Gmail, edit a spreadsheet — Pokee handles all of it from one place. And it's smart about the order of operations."

---

**[1:00 - 1:50] THE PROMPT**

"So we hit 10K users and I want to announce it everywhere in the next 30 minutes. I want Pokee to write platform-specific copy for Twitter, LinkedIn, Reddit, and email. Build and deploy a milestone celebration page. Post everything, log it in my Sheets, and notify the team on Slack. All coordinated in the right order — build the page first so we have a URL to link, then post everywhere, then log and notify."

*[Type/paste prompt]*

"This would normally take me 2-3 hours doing it platform by platform. Let's see how fast Pokee does it."

---

**[1:50 - 3:30] POKEE WORKING**

"So it's writing all the copy first — adapting the message for each platform. The Twitter thread is punchy and forward-looking. The LinkedIn post is more reflective — 'what we learned.' The Reddit post is genuinely valuable — not marketing-speak but real lessons.

Now it's building the milestone page. Animated counter, timeline, confetti animation on load. Deploying to Cloudflare...

Got the URL. Now it's posting to Twitter — there's the thread, five tweets, pinned the first one. LinkedIn post going up. Reddit posts in r/SaaS and r/artificial.

Gmail draft created for the user email. Logging everything to Google Sheets. And... Slack notification to our team channel with links to all the posts."

---

**[3:30 - 5:00] THE REVEAL**

*[Show milestone page in browser]*

"Here's the celebration page. Animated counter, confetti, our journey timeline, testimonials. Deployed and live."

*[Show Twitter thread]*

"Twitter thread is up and pinned. Five tweets, engagement-optimized."

*[Show LinkedIn post]*

"LinkedIn version — same milestone, different angle, platform-native formatting."

*[Show Reddit post]*

"Reddit — genuine value post with real learnings. Not a hidden ad."

*[Show Slack notification]*

"Team notified with all the links."

*[Show Google Sheet with logged row]*

"And everything logged here for our records.

That's eight platforms coordinated in about 15 minutes. With Pokee we have hundreds of integrations working together. You can expand on this — schedule follow-up posts for the next day, set up monitoring for engagement metrics, auto-respond to comments. The sky's the limit."

---

**[5:00 - 5:35] WRAP UP**

"So that's a full multi-platform campaign — written, deployed, posted, and coordinated — from one prompt. This is the kind of thing that separates Pokee from single-purpose tools. Feel free to ask it whatever you'd like. Really appreciate you all watching. Be sure to check out pokee.ai. Thank you everyone!"

---
---

# RECORDING NOTES (All Demos)

## Pacing
- YOUR narration: 5-6 minutes real-time
- Total video: 8-15 min with sped-up build sections (3-4x speed)
- Don't over-explain. Show, narrate briefly, move on.

## The Kiri Formula (follow for every demo)
1. "Hey guys, it's Nino from Pokee AI" (5 sec)
2. "I would love to show you all today..." (15 sec)
3. Show how to get into PokeeClaw (30 sec)
4. Explain what you're about to do (30 sec)
5. Type the prompt, let it run (narrate over it) (2-3 min)
6. Show the result (1-2 min)
7. "Really appreciate you all watching, pokee.ai" (15 sec)

## Key Phrases (hit at least 4-5 per video, naturally)
- "What's really great/cool is..."
- "So you can basically just tell Pokee what you'd like to do"
- "It'll work with you to achieve that"
- "With Pokee we have hundreds of integrations"
- "You can expand on this more if you wanted"
- "The sky's the limit"
- "If you all would prefer step-by-step tutorials, we can absolutely do that too"
- "Feel free to ask it whatever you'd like"
- "Really appreciate you all watching"
- "Be sure to check out / try pokee.ai"

## What NOT to Do
- Don't over-hype ("this is INSANE" / "mind-blowing")
- Don't trash competitors
- Don't sound scripted — keep it conversational and warm
- Don't recap too much at the end — one sentence is enough
- Don't explain what PokeeClaw is for too long — show it
- Don't apologize or hedge ("this isn't perfect but...")
- Don't say "AI" too many times — focus on what it DOES not what it IS

## Filming Tips
- Screen record in 1080p or 4K
- Use a clean desktop / browser with no distracting tabs
- Zoom in on important text/results so mobile viewers can read
- Speed up build sections 3-4x but keep narration at normal speed
- Add subtle background music (lo-fi or minimal electronic)
- Cut dead air — if Pokee is thinking for 10+ seconds, jump cut or speed up

## Demo Selection Strategy for Social Media
- **Short-form (TikTok/Reels/Shorts):** Demos 4 (outreach), 8 (CRM from inbox), 10 (multi-platform) — most visual "wow"
- **YouTube main channel:** Demos 1, 3, 7 — most technically impressive, longer format
- **LinkedIn/Twitter clips:** Demos 2 (proposal), 5 (content), 6 (analytics) — most relevant to professional audience
- **Developer audience:** Demos 7 (GitHub), 9 (bug fix) — shows technical credibility

---

## Quick Reference: Demo Capabilities Covered

| Demo | Key Integrations | Primary Wow Factor |
|------|-----------------|-------------------|
| 1. Idea to Website | Cloudflare, Google Sheets, Gmail | Full startup launch from a paragraph |
| 2. Client Proposal | Google Search, Google Sheets, Gmail, PDF | Personalized research → ready-to-send proposal |
| 3. Competitor Intel | Google Search, Reddit, Twitter, Cloudflare, Sheets | Deep research → interactive dashboard |
| 4. Email Outreach | Gmail, Google Search, Google Sheets | Personalized at scale with real research |
| 5. Content Engine | Twitter, LinkedIn, Google Sheets, Reddit, HN | Week of content from trending topics |
| 6. Data Analytics | Google Sheets, Gmail, PDF | Raw data → executive insights |
| 7. GitHub DevOps | GitHub (Issues, PRs, Actions, Code) | Repo goes from amateur to professional |
| 8. Personal CRM | Gmail, Google Sheets, Cloudflare | Inbox → relationship intelligence |
| 9. Bug Fix Flow | GitHub (Issues, PRs, Code) | Full senior developer workflow |
| 10. Multi-Platform | Twitter, LinkedIn, Reddit, Gmail, Cloudflare, Sheets, Slack | 8 platforms coordinated from one prompt |
