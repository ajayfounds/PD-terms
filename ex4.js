window.X=window.X||{};
/* A11Y */
X["WCAG"]=["Building codes for ramps, railings and fire exits, but for websites and apps.",[
["Government and banks","Many governments require public websites to meet WCAG AA; India’s GIGW guidelines for government sites build on WCAG.","Accessibility is often a legal requirement, not a choice."],
["Big tech","Apple, Google and Microsoft publish accessibility guidelines that align with WCAG.","It’s the shared standard across the industry."],
["Lawsuits","In the US, many companies (Domino’s is a well-known case) have faced lawsuits over inaccessible websites and apps.","Ignoring WCAG has real business risk."]]];
X["POUR"]=["Four questions about a building: can you see the signs, can you reach the doors, are the directions clear, will it work with your wheelchair?",[
["Perceivable","YouTube auto-captions for people who can’t hear the audio.","Information reaches every sense needed."],
["Operable","Every button reachable by keyboard on a website.","People who can’t use a mouse can still use it."],
["Understandable and robust","Clear error messages, and clean code that screen readers can interpret.","The last two pillars."]]];
X["Contrast ratio"]=["Black text on white paper is easy to read. Light grey on white is hard, especially in sunlight or with weaker eyesight.",[
["Outdoor use in India","Delivery partners read their app in bright sun.","Higher contrast is essential, not optional."],
["Placeholder text","Light grey placeholder text in forms often fails 4.5:1.","Don’t put instructions only in placeholders.","bad"],
["Tools","Figma plugins like Stark, or the WebAIM contrast checker.","Check before handoff."]]];
X["Screen reader"]=["Someone reading a web page out loud to you, in order, telling you what each thing is.",[
["VoiceOver","Built into every iPhone; blind users navigate apps by swiping and listening.","Your app must make sense when heard, not just seen."],
["TalkBack","Android’s screen reader, important in India where most phones are Android.","Test on it too."],
["Unlabelled icons","A heart icon with no label is read as ‘button’.","The user has no idea what it does.","bad"]]];
X["Semantic HTML and ARIA"]=["Labelling boxes in a warehouse correctly so the forklift robot knows what’s inside.",[
["Real buttons","Using a proper button element instead of a styled div means keyboard and screen readers work automatically.","Semantics for free."],
["aria-label","An icon-only close button gets aria-label=\"Close\".","Screen readers announce ‘Close, button’."],
["Headings","Proper heading levels let screen reader users jump between sections.","Like a table of contents."]]];
X["Keyboard navigation and focus order"]=["Moving through a queue in order, one by one. If the queue jumps around randomly, you get lost.",[
["Gmail shortcuts","Gmail supports keyboard navigation and shortcuts.","Power users and people who can’t use a mouse benefit."],
["Modals","When a dialog opens, focus moves into it and returns to the button that opened it when closed.","Keyboard users don’t lose their place."],
["Keyboard traps","A date picker that you can Tab into but never out of.","A serious accessibility failure.","bad"]]];
X["Focus indicator"]=["A highlighter marking where you are on a page.",[
["Visible rings","Most browsers draw an outline around the focused element.","Keyboard users can see where they are."],
["Removed outlines","Designers removing the outline because it ‘looks ugly’.","Keyboard users are lost.","bad"],
["Styled focus","GOV.UK uses a bold yellow focus style.","Clear and on-brand."]]];
X["Alt text"]=["Describing a photo to a friend on the phone: what matters about it, not every pixel.",[
["Product images","‘Blue cotton kurta, front view’ instead of ‘IMG_2034’.","Useful to a blind shopper."],
["Decorative images","Background patterns get empty alt text so screen readers skip them.","Less noise."],
["Instagram","Instagram offers automatic and custom alt text for photos.","Built into a major product."]]];
X["Don’t rely on colour alone"]=["A traffic light also has position (top, middle, bottom), so colourblind drivers still know which light is on.",[
["Status chips","‘Delivered’ in green with a tick icon and the word.","Works without seeing colour."],
["Charts","Different line styles or labels, not just colours.","Readable for colourblind users."],
["Form errors","Red border only, no message.","Many users won’t notice.","bad"]]];
X["Touch target size"]=["Light switches are big enough to hit in the dark. Tiny buttons are like switches the size of a grain of rice.",[
["Apple and Google","Apple recommends at least 44×44 points; Material Design recommends 48×48 dp.","Industry minimums."],
["Small icons","A 16px icon can have a 44px invisible tap area.","Looks small, taps easily."],
["Tiny close buttons","Ad close buttons that are hard to hit.","Frustrating, often deliberate.","bad"]]];
X["Reduced motion"]=["Some people get motion sickness on a swinging boat. Some get it from a screen.",[
["iOS and Android settings","Both have a ‘reduce motion’ setting apps can read.","Respect the user’s choice."],
["Parallax effects","Apple reduces parallax effects when the setting is on.","Same info, less movement."],
["Vestibular disorders","Large, sweeping animations can cause dizziness and nausea.","Not just preference, a health issue."]]];
X["Dynamic type and text scaling"]=["Large-print books for people who need bigger text.",[
["iOS Dynamic Type","Users set text size once; well-built apps follow it.","Older users and people with low vision benefit."],
["WhatsApp","Respects system font size settings.","Readable for many older users."],
["Truncation","Buttons that cut text off at larger sizes.","Layouts must wrap and grow.","bad"]]];
X["Inclusive design and persona spectrum"]=["A ramp helps a wheelchair user, a parent with a pram, and someone with heavy luggage.",[
["Microsoft","Microsoft’s Inclusive Design toolkit introduced the persona spectrum: permanent (one arm), temporary (arm injury), situational (holding a baby).","One design helps all three."],
["Voice input","Helps blind users, people with motor issues, and people driving.","Broad benefit."],
["Captions","Help Deaf users and people watching muted on a metro.","Situational use is huge."]]];
X["Curb-cut effect"]=["Pavement dips built for wheelchairs now help bikes, prams and suitcases.",[
["Captions","Many people watch social videos with sound off.","Built for Deaf users, used by everyone."],
["Dark mode","Helps people with light sensitivity, and people using phones at night.","Wider benefit."],
["Voice assistants","Valuable for blind users and hands-busy cooking.","Accessibility features become mainstream."]]];
X["Cognitive accessibility"]=["Clear road signs help everyone, especially tired or stressed drivers.",[
["Plain language","‘Your money is safe’ instead of ‘Transaction reversal initiated’.","Easier for everyone to understand."],
["Save and resume","KYC flows that let you continue later.","Supports people who get interrupted."],
["Timeouts","Forms that expire after 2 minutes.","Hard for many users.","bad"]]];
/* SYSTEMS */
X["Design system"]=["LEGO bricks with a building guide. Everyone builds different things, but the pieces fit together.",[
["Material Design (Google)","Used across Google’s own apps and by many Android apps.","The best-known public system."],
["Razorpay Blade","Razorpay’s open-source design system for its products.","An Indian example worth knowing."],
["Atlassian","Jira and Confluence share Atlassian’s design system.","Consistency across a product family."]]];
X["Design tokens"]=["Naming paint colours ‘Wall colour’ and ‘Trim colour’ instead of specific shades, so you can repaint the whole house by changing two names.",[
["Dark mode","Components use ‘background-primary’; switching theme swaps what that token means.","Dark mode becomes a token change."],
["Salesforce","Salesforce’s Lightning design system helped popularise design tokens.","Origin of the term in industry use."],
["Brand refresh","Changing the brand colour once updates every button.","No hunting through screens."]]];
X["Atomic design"]=["Chemistry: atoms join into molecules, molecules into larger structures.",[
["Search bar","Atoms: input, icon, button. Molecule: search field. Organism: header with logo, search and menu.","Build big things from small, reusable parts."],
["Brad Frost","Coined in his 2016 book Atomic Design.","Good source to name."],
["Figma libraries","Component libraries are often organised this way.","Matches real files."]]];
X["Components and variants"]=["One shirt design available in sizes S, M, L and in three colours.",[
["Button","Variants: primary, secondary, ghost. Sizes: small, medium, large. States: default, disabled, loading.","One component covers many cases."],
["Figma variants","Figma lets you switch variants in a menu.","Matches how developers code components."],
["Detached components","Designers detaching and editing instances.","Causes inconsistency over time.","bad"]]];
X["Auto layout"]=["A bookshelf that adjusts its shelf spacing when you add a thicker book.",[
["Buttons","A button that grows with longer text.","No manual resizing."],
["Lists","Adding a row pushes everything down automatically.","Like real code."],
["Figma","Auto layout follows the same logic as CSS flexbox.","Designs behave like the built product."]]];
X["Wireframe, mockup, prototype"]=["An architect’s floor plan, then the painted rendering, then a show flat you can walk through.",[
["Wireframe","Grey boxes for a checkout flow.","Discuss structure without colour debates."],
["Mockup","Final colours, type and images.","How it will look."],
["Prototype","Clickable Figma flow for testing.","How it will work."]]];
X["Design handoff"]=["Giving a builder the full drawings, materials list and notes, not just a pretty picture of the house.",[
["Figma Dev Mode","Developers inspect spacing, colours and assets directly.","Fewer questions and mistakes."],
["States and edge cases","Handoff includes empty, loading, error and long-text cases.","Engineers build what you designed, not what they guess."],
["Annotations","‘Truncate after 2 lines.’","Behaviour that pictures can’t show."]]];
X["Annotations"]=["Notes in a recipe margin: ‘use less salt if the stock is salty’.",[
["Truncation","‘Merchant name: max 2 lines, then ellipsis.’","Prevents layout surprises."],
["Accessibility","‘Heading level 2’, ‘Focus moves to error message’.","Engineers implement accessibility correctly."],
["Analytics","‘Fire event checkout_address_viewed’.","Measurement built in from day one."]]];
X["Design QA"]=["Inspecting a built house against the drawings before handing over the keys.",[
["Staging review","Designer checks the build on a test server before release.","Catches wrong spacing, missing states."],
["Bug severity","Crash > wrong amount shown > 4px misalignment.","Prioritise what matters."],
["Skipping QA","Launching without design review.","Small mistakes pile into design debt.","bad"]]];
X["Design debt"]=["A house where every renovation used different tiles. Fixing it later costs more than doing it right.",[
["Five button styles","Different launches created five slightly different buttons.","Users notice; maintenance grows."],
["Paying it down","Some teams dedicate time each quarter to consolidating components.","Planned cleanup."],
["Interview line","‘We should budget time to pay down design debt.’","Shows long-term thinking."]]];
X["DesignOps"]=["Stage managers in a theatre. The audience never sees them, but the show falls apart without them.",[
["Airbnb","Airbnb is known for investing early in design operations alongside its design language system.","Supports designers at scale."],
["Research ops","Recruiting participants, consent forms and a shared research library.","Researchers spend time researching."],
["File conventions","Naming rules and page structures in Figma.","Everyone can find things."]]];
X["Single source of truth"]=["One family calendar on the fridge instead of everyone keeping their own.",[
["Component library","The coded library is the truth; Figma mirrors it.","No mismatch between design and product."],
["Product specs","One doc for requirements, linked everywhere.","Avoids conflicting versions."],
["Interview question","‘If Figma and code disagree, which wins?’","Shows you’ve thought about it."]]];
/* EXPERIMENT */
X["A/B test"]=["Cooking two versions of a dish, serving each to different tables, and seeing which gets finished more.",[
["Booking.com","Famous for running a very large number of experiments on its site.","Decisions are tested, not guessed."],
["Google’s 41 shades of blue","Google tested many shades of blue for links to see which got more clicks.","A famous (and debated) example of testing small details."],
["Checkout test","Old checkout (A) vs one-page checkout (B), measured on completed orders.","Clear primary metric."]]];
X["Statistical significance"]=["Flipping a coin 5 times and getting 4 heads isn’t proof it’s unfair. Flipping 1,000 times and getting 800 heads is.",[
["Small samples","A +3% lift after one day might be noise.","Wait for enough data."],
["p < 0.05","Common threshold for ‘unlikely to be chance’.","The number you’ll hear most."],
["Peeking","Stopping a test the moment it looks good.","Leads to false wins.","bad"]]];
X["Sample size and MDE"]=["To notice a tiny difference in two cricket bats, you need many balls. A huge difference shows up quickly.",[
["Small startups","Not enough users to detect a 1% change.","Use qualitative research instead."],
["Big platforms","Amazon or Flipkart can detect tiny differences quickly.","Traffic changes what’s testable."],
["Planning","Decide sample size before starting.","Prevents biased stopping."]]];
X["Novelty effect"]=["A new phone gets used constantly for a week, then settles to normal.",[
["Redesigns","Clicks spike on a new home screen just because it’s new.","Judge after a few weeks."],
["New features","A new button gets tapped out of curiosity.","Not proof of value."],
["The opposite","Change aversion: regulars dislike any change at first.","Both fade over time."]]];
X["Multivariate test"]=["Testing a recipe with different amounts of salt, spice and sugar at the same time.",[
["Landing pages","Headline × image × button text combinations.","Finds the best mix."],
["Traffic needs","Eight combinations need much more traffic than two.","Mostly for large sites."],
["Simpler path","Test one element at a time when traffic is low.","More practical for most teams."]]];
X["Feature flag"]=["A light switch for a feature. Turn it on for some rooms, off for others, without rewiring the house.",[
["Gradual rollouts","New checkout on for 5% of users first.","Safe testing in real conditions."],
["Kill switch","Turn off a broken feature instantly without an app update.","Critical for mobile apps."],
["Tools","LaunchDarkly, Firebase Remote Config.","Common names in teams."]]];
X["Staged rollout / canary"]=["Coal miners took a canary into mines; if the bird got sick, miners knew to leave before they were harmed.",[
["Play Store staged rollouts","Android apps can release to a percentage of users first.","Catches crashes early."],
["Big companies","Updates often roll out over days or weeks.","Limits damage from bugs."],
["Origin","The name comes from canaries in coal mines.","Good to know."]]];
X["Fake door test"]=["Putting up a ‘Coming soon: Pizza’ sign at a café and counting how many people ask about it.",[
["Buffer","Buffer’s early landing page tested interest in pricing plans before the product was built.","Demand checked cheaply."],
["In-app","A ‘Split bill’ button that shows ‘Coming soon, want early access?’","Measures real intent."],
["Overuse","Too many fake features annoy users.","Use sparingly and honestly.","bad"]]];
X["Wizard of Oz test"]=["The wizard was just a man behind a curtain. Users think the system is automatic, but a person is doing it.",[
["IBM speech recognition (1980s)","Users dictated to a ‘computer’ while a typist secretly transcribed.","Tested the experience before the technology existed."],
["AI features","A person writes ‘AI’ recommendations behind the scenes in a test.","Checks whether people value the idea."],
["Ethics","Debrief participants afterwards.","Be honest once the test is done."]]];
X["Concierge MVP"]=["A personal shopper doing everything by hand for a few customers before opening a store.",[
["Food on the Table","This startup’s founder planned meals and shopped manually for early customers.","A well-known Lean Startup example."],
["WhatsApp ordering","A local service taking orders on WhatsApp before building an app.","Common in India."],
["Learning","Shows which steps customers actually value.","Then automate those."]]];
X["Five-second, first-click, preference tests"]=["Flashing a shop sign for five seconds and asking what the shop sells.",[
["Five-second test","Show a landing page for 5 seconds: ‘What does this company do?’","Tests clarity."],
["First-click test","‘Where would you click to track your order?’","First click predicts task success."],
["Preference test","‘Which design do you prefer?’","Weakest evidence; combine with task tests."]]];
/* GROWTH */
X["CAC"]=["Spending ₹1,000 on flyers and getting 10 new customers means each cost ₹100.",[
["Food delivery","Big discounts on first orders raise CAC.","Expensive if users don’t return."],
["Referrals","Referred users often cost less to acquire.","Design of referral flows lowers CAC."],
["Organic growth","Word of mouth and SEO reduce CAC.","Good product design helps."]]];
X["LTV (lifetime value)"]=["A regular customer at a chai stall who comes every day for years is worth far more than one who comes once.",[
["Subscriptions","Netflix earns monthly fees for as long as you stay.","Longer retention, higher LTV."],
["E-commerce","Repeat buyers on Amazon generate most value over time.","Retention design raises LTV."],
["Interview link","‘Retention work raises LTV.’","Ties design to money."]]];
X["LTV:CAC ratio"]=["If each customer costs ₹100 to get and spends ₹300 over time, you’re fine. If they spend ₹80, every new customer loses money.",[
["Healthy","3:1 or better is a common benchmark.","Growth is sustainable."],
["Unhealthy","Discount-driven growth with low repeat use.","Many startups learned this painfully.","bad"],
["Design role","Better onboarding and retention lift LTV.","Design affects the ratio."]]];
X["ARPU and AOV"]=["ARPU: average spend per customer per month. AOV: average bill size per visit.",[
["Quick commerce","Free delivery above a minimum order raises AOV.","Bigger baskets cover delivery costs."],
["Telecom","Jio and Airtel report ARPU in earnings.","A well-known Indian metric."],
["Basket suggestions","‘Add bread for ₹30?’ at checkout.","Raises AOV if relevant."]]];
X["GMV"]=["The total value of all goods sold in a market, before anyone’s costs or commissions.",[
["Marketplaces","Flipkart, Amazon and Meesho talk about GMV.","Size of the marketplace."],
["Not revenue","A marketplace with ₹100 crore GMV and 15% commission earns ₹15 crore.","Important distinction."],
["Discount-driven GMV","GMV can grow just from heavy discounts.","Watch profit too.","bad"]]];
X["MRR and ARR"]=["A rent-collecting landlord: steady money every month.",[
["SaaS","Notion, Figma and Slack plans bring monthly recurring revenue.","Predictable income."],
["Expansion","Teams upgrading plans grows MRR.","Design of upgrade flows matters."],
["Contraction","Users downgrading plans shrinks MRR.","Plan pages need care."]]];
X["Freemium and paywall"]=["A sweet shop giving free samples, but you pay for the box.",[
["Spotify","Free with ads; Premium for offline and ad-free.","Free tier attracts, paid tier earns."],
["Canva","Free design tools; Pro for premium templates and features.","Paywall after value is clear."],
["Too early paywalls","Asking for payment before users see value.","Users leave.","bad"]]];
X["Free trial (opt-in vs opt-out)"]=["Test-driving a car with or without handing over your credit card first.",[
["Netflix (past)","Netflix used free trials for years before ending them in many markets.","Trials were a key acquisition tool."],
["Reminders","Some apps remind users before the trial converts.","Builds trust."],
["Silent conversion","Charging without warning.","Angry users and refund requests.","bad"]]];
X["Cohort analysis"]=["Comparing how the 2024 batch of students performed versus the 2025 batch, instead of mixing everyone together.",[
["Onboarding change","January sign-ups retained 30% after a month; March sign-ups 38% after new onboarding.","Shows the redesign worked."],
["Seasonal users","Diwali sign-ups behave differently from regular months.","Cohorts reveal this."],
["Tools","Mixpanel and Amplitude have cohort charts.","Names you’ll hear."]]];
X["Aha moment"]=["The first time you taste a dish and say ‘oh, now I get why people love this place’.",[
["Facebook","The often-quoted ‘7 friends in 10 days’ signal.","When the feed became interesting."],
["Dropbox","Seeing a file sync across devices for the first time.","Value becomes obvious."],
["Zomato / Swiggy","First order arriving quickly and correctly.","The moment trust forms."]]];
X["Activation"]=["A gym member becomes ‘real’ after attending their first three sessions, not just paying the fee.",[
["Payments app","Activated = first successful payment within 7 days.","Clear behavioural definition."],
["Slack","Teams sending enough messages to make it part of work.","Leads to retention."],
["Design work","Onboarding focused on the activation action.","Everything else can wait."]]];
X["FTUE"]=["The first five minutes in a new office: if nobody shows you around, you feel lost.",[
["Duolingo","Lesson first, account later.","Value before effort."],
["Permission overload","Asking for location, contacts, notifications and camera on first launch.","Many users deny or leave.","bad"],
["Interview angle","Redesigning the first-time experience is a common design challenge.","Know how to answer it."]]];
X["Time to value"]=["How long before a new gym member sees any results.",[
["Guest checkout","Letting people buy without creating an account.","Value faster."],
["Templates","Canva and Notion templates let you produce something in minutes.","Quick first win."],
["Long setups","Forcing a 10-step profile setup first.","Delays value.","bad"]]];
X["Network effect"]=["A phone is useless if you’re the only one with one; it gets more useful as friends get phones.",[
["WhatsApp","More users means more people you can message.","Direct network effect."],
["Swiggy / Zomato","More restaurants attract more diners, which attracts more restaurants.","Two-sided network effect."],
["LinkedIn","More professionals means more connections and jobs.","Value grows with users."]]];
X["Flywheel"]=["A heavy wheel: hard to start, but each push adds to its speed until it spins almost by itself.",[
["Amazon","Lower prices → more customers → more sellers → wider selection → lower costs.","The famous flywheel drawn by Jeff Bezos."],
["Reviews","More reviews → better decisions → more purchases → more reviews.","Design feeds each step."],
["Interview line","‘This feature feeds the review flywheel.’","Ties design to growth."]]];
X["Viral coefficient (K-factor)"]=["If each person who catches a cold passes it to more than one person, it spreads by itself.",[
["Hotmail","Added ‘Get your free email at Hotmail’ to the end of every email sent.","A classic viral growth example."],
["Referral codes","‘Invite a friend, both get ₹100.’","Common in Indian fintech and delivery apps."],
["K > 1","Each user brings more than one new user.","Self-sustaining growth, rare in practice."]]];
X["Product-led growth (PLG)"]=["A free sample so good that people buy the full product without any salesperson.",[
["Figma","Free to start; sharing a file invites colleagues into the product.","The product spreads itself."],
["Slack","Teams start free and upgrade when they hit limits.","Usage drives revenue."],
["Zoom","Free meetings with a time limit for groups.","Product use leads to purchase."]]];
X["Switching cost"]=["Moving house: even if a better flat appears, packing everything up feels like too much effort.",[
["Apple ecosystem","iMessage, iCloud and AirPods make leaving iPhone harder.","High switching costs."],
["Spotify playlists","Years of saved music.","Healthy switching cost based on value."],
["Number portability","India’s mobile number portability lowered switching costs for telecom.","Regulation can change this."]]];
X["Unit economics"]=["A vada pav stall: each vada pav costs ₹12 to make and sells for ₹20. That’s positive unit economics.",[
["Quick commerce","Each order must cover delivery, packaging and store costs.","Why small orders cost a delivery fee."],
["Free delivery on tiny orders","Lots of orders, losing money on each one.","Growth makes losses bigger.","bad"],
["Design role","Minimum-order nudges and basket suggestions.","Design supports healthier economics."]]];
