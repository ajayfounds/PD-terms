window.X=window.X||{};
/* TECH */
X["API"]=["A waiter in a restaurant. You (the app) give your order to the waiter (the API), who brings it to the kitchen (the server) and brings back your food (the data).",[
["Swiggy / Zomato tracking","The app asks the server for the delivery partner’s location every few seconds through an API.","The tracking screen can only show what the API returns."],
["Google Maps API","Many apps (Uber, Ola, food apps) show maps by calling Google’s Maps API.","They don’t build maps themselves."],
["Design impact","If the refund API doesn’t return an expected date, the design can’t show it without backend work.","Ask engineers early what data exists."]]];
X["Frontend and backend"]=["A restaurant’s dining area (frontend) and its kitchen (backend). Guests only see the dining area, but the kitchen decides how good the food is.",[
["Frontend","The buttons, screens and animations in the PhonePe app.","What designers mostly specify."],
["Backend","The servers that talk to banks, check balances and record payments.","Where many ‘UI’ problems actually come from."],
["Slow screens","A slow screen may be a backend delay, not a design problem.","Know which side to ask about."]]];
X["Client-side vs server-side"]=["Doing a quick sum in your head (client) versus calling the bank to check your balance (server).",[
["Instant format checks","Checking a phone number has 10 digits happens on the phone immediately.","Fast feedback."],
["Server checks","Checking whether that phone number is registered needs the server.","Takes longer, needs network."],
["Offline apps","Google Docs offline does more on your device.","Works without internet."]]];
X["Latency"]=["The delay between asking a question on a long-distance phone call and hearing the reply.",[
["4G in India","Network speed varies a lot between cities and towns.","Designs must stay usable with delays."],
["Optimistic UI","Instagram likes appear instantly to hide latency.","Design covers the wait."],
["Gaming","Online games show ‘ping’ because latency affects play.","Latency is felt directly."]]];
X["Caching"]=["Keeping your most-used spices on the counter instead of fetching them from the store room every time.",[
["Order history","Shows your previous orders instantly from memory, then updates.","Fast and still fresh."],
["Images","Instagram and YouTube cache thumbnails.","Scrolling back is instant."],
["Stale data","Showing yesterday’s price as today’s.","Caches need refresh rules.","bad"]]];
X["Technical debt"]=["Fixing a leaking tap with tape. It works, but every future plumber has to deal with your tape.",[
["Hard-coded values","Colours typed directly in 200 places instead of tokens.","A brand change becomes huge work."],
["Old code","Teams sometimes rewrite whole apps because old code slows everything down.","Debt that eventually must be paid."],
["Design conversations","‘This looks simple, but tech debt makes it a two-week job.’","Respect engineering constraints."]]];
X["Native, web, cross-platform"]=["Clothes tailored for one person (native), one-size-fits-all (web), or adjustable (cross-platform).",[
["Native","Many large apps build separate iOS (Swift) and Android (Kotlin) apps.","Best performance and platform feel."],
["Cross-platform","Flutter and React Native are used by many startups to build both at once.","Faster, but platform details need care."],
["PWA","Twitter Lite was a progressive web app aimed at slow networks.","Web apps that feel app-like."]]];
X["Deep link"]=["A direct line to someone’s desk instead of calling reception.",[
["Order notifications","Tapping ‘Your order is arriving’ opens the tracking screen directly.","No hunting through menus."],
["Shared products","A Myntra product link opens that product in the app.","Smooth from WhatsApp to app."],
["Broken deep links","Link opens the home screen instead of the item.","Users give up.","bad"]]];
X["Push notification"]=["A tap on the shoulder. Welcome when it’s important; annoying when it’s an advert.",[
["Transactional","‘Your order is 2 minutes away.’","Useful and expected."],
["Zomato’s playful copy","Zomato became known for witty notification copy.","Tone can make notifications memorable."],
["Spam","Five promo notifications a day.","Users disable notifications or uninstall.","bad"]]];
X["Event tracking (instrumentation)"]=["Putting a counter on each door of a mall to see which entrances people actually use.",[
["Checkout events","checkout_started, address_added, payment_failed.","Shows exactly where people drop off."],
["Tools","Mixpanel, Amplitude, Firebase, Google Analytics.","Common in product teams."],
["Missing tracking","Launching a redesign without events.","No way to prove it worked.","bad"]]];
X["Edge network and CDN"]=["Keeping stock in local warehouses across India instead of shipping everything from one city.",[
["Images","Product photos served from servers near users.","Faster loading."],
["Netflix","Netflix places its own content servers inside internet providers’ networks.","Video starts faster."],
["Design impact","Large uncompressed images still load slowly.","Designers should care about image weight."]]];
/* AI */
X["Human-in-the-loop"]=["A trainee doctor who suggests a diagnosis, but a senior doctor signs off before treatment.",[
["Gmail Smart Compose","Suggests the rest of a sentence; you choose to accept it.","AI suggests, the human decides."],
["Customer support","AI drafts replies; agents review before sending.","Common in support tools."],
["Money actions","An AI assistant prepares a payment, but you confirm with your PIN.","High-risk actions keep a human step."]]];
X["Hallucination"]=["A confident friend giving you directions to a place they’ve never been.",[
["Chatbots","AI assistants can invent facts, quotes or sources.","Design must expect occasional errors."],
["Air Canada (2024)","A tribunal held Air Canada responsible after its website chatbot gave a customer wrong refund-policy information.","Companies are accountable for what their AI says.","bad"],
["Design response","Show sources, allow easy correction, avoid false certainty.","Reduce the harm of mistakes."]]];
X["Grounding and citations"]=["A student essay with references, so the teacher can check each claim.",[
["Perplexity","Answers include numbered source links.","Users can verify."],
["Google AI Overviews","Show links to the pages used.","Builds trust through transparency."],
["Internal tools","An HR bot answering from the company policy PDF and linking the section.","Answers tied to real documents."]]];
X["Confidence and uncertainty UI"]=["A weather forecast saying ‘70% chance of rain’ instead of ‘it will rain’.",[
["Google Translate","Sometimes shows alternative translations.","Signals uncertainty."],
["Medical AI","Tools showing ‘possible’ rather than ‘confirmed’ findings.","Avoids over-trust."],
["False precision","‘98.7% match’ when the model can’t be that precise.","Misleading certainty.","bad"]]];
X["Trust calibration"]=["Trusting a GPS on highways but double-checking it in narrow old-city lanes.",[
["Tesla Autopilot debates","Concerns about drivers over-trusting driver-assist features.","Over-trust is a design risk."],
["AI writing tools","Encouraging users to review before sending.","Right-sized trust."],
["Track record","Showing how often suggestions were accepted or correct.","Helps users judge reliability."]]];
X["Explainability"]=["A teacher explaining why you lost marks, not just giving the score.",[
["Netflix","‘Because you watched…’ rows explain recommendations.","Simple reasons build trust."],
["Amazon","‘Customers who bought this also bought…’","The logic is visible."],
["Credit decisions","Lenders are often required to give reasons for rejecting a loan.","Explainability can be a legal requirement."]]];
X["Agentic UX and autonomy levels"]=["Hiring a new assistant: first they suggest, then they draft, then they act with your approval, and only later act on their own.",[
["Email assistants","AI that drafts replies for you to send.","Low autonomy."],
["Shopping agents","An agent that builds a grocery cart and shows it before paying.","Act with approval."],
["Activity logs","Showing what the agent did and allowing undo.","Users stay in control."]]];
X["Streaming responses"]=["A friend telling a story as they remember it, rather than going silent for a minute and then saying everything at once.",[
["ChatGPT and Claude","Text appears word by word.","Feels faster than waiting."],
["Stop button","Users can stop a long or wrong answer.","Control during generation."],
["Layout jumps","Content that jumps around as text arrives.","Keep layout stable.","bad"]]];
X["Prompt affordances"]=["A blank menu is hard to order from; a menu with ‘chef’s suggestions’ is easy.",[
["Starter prompts","AI apps show example questions on an empty chat.","Users learn what’s possible."],
["Follow-up suggestions","Suggested next questions after an answer.","Keeps the conversation useful."],
["Blank box","Only a text box with no hints.","Many users don’t know what to ask.","bad"]]];
X["Guardrails (AI)"]=["Railings on a mountain road: you can still drive, but you won’t fall off.",[
["Banking assistants","Refuse to move money without confirmation.","Prevents serious harm."],
["Content filters","AI tools blocking harmful requests.","Safety built in."],
["Helpful refusals","A refusal that explains why and suggests what it can do.","Guardrails still need good UX."]]];
X["AI feedback loop and evals"]=["A restaurant asking diners which dishes they didn’t finish, and using that to improve the menu.",[
["Thumbs up/down","ChatGPT and Claude let users rate answers.","Feedback improves future quality."],
["Evals","Teams test AI answers against sets of known questions before releases.","Quality measured, not guessed."],
["Design role","Making feedback quick and specific (‘incorrect’, ‘too long’).","Better data for improvement."]]];
/* ETHICS */
X["Dark patterns (deceptive design)"]=["A shop that hides the exit sign so you wander past more shelves.",[
["India’s guidelines (2023)","The Central Consumer Protection Authority listed specified dark patterns including false urgency, basket sneaking and confirmshaming.","Now a regulatory issue in India."],
["Pre-ticked insurance","Travel sites adding insurance by default.","A classic dark pattern.","bad"],
["deceptive.design","Harry Brignull’s site catalogues examples.","Good reference."]]];
X["Confirmshaming"]=["A shopkeeper saying ‘Only cheap people say no to this offer.’",[
["Pop-ups","‘No thanks, I don’t want to save money.’","Guilt instead of choice.","bad"],
["Neutral option","‘No thanks’ or ‘Maybe later’.","Respectful alternative."],
["India’s list","Confirmshaming is one of the dark patterns named in the 2023 guidelines.","Legal risk."]]];
X["Roach motel"]=["Easy to walk in, hard to find the way out.",[
["Hard cancellations","Subscriptions that need a phone call to cancel.","Classic roach motel.","bad"],
["FTC action","The US FTC’s ‘click to cancel’ efforts targeted hard-to-cancel subscriptions.","Regulators are acting."],
["Good practice","Cancel in-app with the same ease as subscribing.","Builds long-term trust."]]];
X["Drip pricing and hidden costs"]=["A price tag that shows ₹500, then ₹80 ‘handling’, ₹50 ‘convenience’, ₹30 ‘platform’ at the till.",[
["Ticketing","Movie and event tickets adding convenience fees at the end.","Users feel tricked.","bad"],
["Food delivery","Platform fees and packaging charges shown late.","Better shown clearly on the cart."],
["Good practice","Show the full price early.","Fewer surprise drop-offs at payment."]]];
X["Basket sneaking"]=["A cashier adding a chocolate bar to your bill without asking.",[
["Donations","A small donation added by default at checkout.","Opt-in is the honest version.","bad"],
["Insurance or protection plans","Pre-added to cart.","Often flagged as a dark pattern.","bad"],
["India","Listed as a specified dark pattern in 2023.","Legal risk."]]];
X["Forced continuity"]=["A free gym trial that silently starts charging your card every month.",[
["Silent conversion","Trial ends and billing starts without reminder.","Angry users.","bad"],
["Reminder emails","Some services remind users before charging.","Honest version."],
["Easy cancel","Cancel link in the reminder.","Respects users."]]];
X["Privacy by design"]=["Building curtains into a house plan, rather than taping paper on windows after people move in.",[
["Apple App Tracking Transparency","Apps must ask before tracking users across other apps (iOS 14.5, 2021).","Privacy choice at the system level."],
["Contacts permission","Ask only when users choose to invite friends.","Data collected only when needed."],
["DPDP Act 2023","India’s data protection law sets consent rules for personal data.","Designers need to know it exists."]]];
X["Attention economy"]=["TV channels competing for your evening; apps competing for every free minute.",[
["Autoplay","YouTube and Netflix auto-play the next video.","Keeps attention, sometimes against user wishes."],
["Infinite feeds","Endless scrolling with no natural end.","Designed for time spent."],
["Tension","Engagement metrics can conflict with user wellbeing.","Good designers name this tension."]]];
X["Digital wellbeing"]=["A friend who says ‘it’s late, go to sleep’ instead of ‘one more episode?’",[
["Instagram","‘You’re all caught up’ marks the end of new posts.","A natural stopping point."],
["Android Digital Wellbeing","Screen time dashboards and app timers.","Tools for healthier use."],
["YouTube","‘Take a break’ reminders.","Built-in limits."]]];
/* SENIOR */
X["Problem framing"]=["A patient asks for antibiotics. A good doctor first asks about symptoms to find out what’s really wrong.",[
["‘Add a chatbot’","The brief is a solution. Reframing: ‘users can’t find refund status’. Maybe a clear status page solves it better.","Seniors question the brief politely."],
["Henry Ford quote (often attributed)","‘If I had asked people what they wanted, they would have said faster horses.’","Requests contain solutions; find the real need."],
["Interview line","‘Before I solve it, can I check the problem? The brief describes a solution.’","Shows maturity."]]];
X["Trade-off"]=["Choosing a fast train with no food versus a slower train with a dining car. Each choice gives something up.",[
["One-page checkout","Faster, but crowded on small screens.","Name both sides."],
["Apple","Simplicity at the cost of customisation.","A deliberate trade-off."],
["Interview line","‘I chose fewer options for faster checkout, and here’s how I’d know if it was wrong.’","The most senior-sounding sentence you can say."]]];
X["Constraints"]=["Cooking a great dinner with only what’s in the fridge and 30 minutes.",[
["Time","Two sprints to ship.","Scope accordingly."],
["Regulation","RBI rules requiring additional authentication for card payments.","Design within the rules."],
["Tech","No backend changes possible this quarter.","Work with existing data."]]];
X["Design rationale"]=["A judge explaining the reasons behind a verdict, not just announcing it.",[
["Button placement","‘Bottom placement because most users hold the phone one-handed, and testing showed faster completion.’","Evidence, not taste."],
["Portfolio","Each decision with its reason next to it.","Interviewers can follow your thinking."],
["Weak rationale","‘I liked it better.’","Not convincing.","bad"]]];
X["Outcome over output"]=["Output: you went to the gym 20 times. Outcome: you can now run 5 km.",[
["Onboarding redesign","Output: new onboarding shipped. Outcome: activation up 12%.","Outcome is what matters."],
["Teams","Good teams measure success by results, not features shipped.","Common modern practice."],
["Interview line","‘The deliverable was the flow; the outcome was a 12% lift in activation.’","Clear and strong."]]];
X["Success criteria"]=["Agreeing before a cricket match that winning means scoring 200 runs, not arguing afterwards.",[
["Refund redesign","‘Refund-status tickets down 30% within a month.’","Measurable and agreed early."],
["Prototype test","‘4 of 5 users complete the task unaided.’","Clear bar for research."],
["Interview line","‘What does success look like, and how will we measure it?’","Ask it early."]]];
X["Alignment"]=["A rowing team where everyone pulls in the same direction at the same time.",[
["Kick-off","PM, engineering and design agree the problem and success measure.","Fewer surprises later."],
["Early sketches","Sharing rough ideas with engineers before polishing.","Avoids designing the impossible."],
["Misalignment","Designer optimises for delight, PM for speed, engineer for reuse.","Conflicts appear late.","bad"]]];
X["Disagree and commit"]=["Arguing for your restaurant choice, then enjoying dinner wherever the group decides.",[
["Amazon","One of Amazon’s leadership principles.","Well-known source."],
["Design debates","You prefer option A; the team picks B. You make B excellent.","Professional maturity."],
["Interview story","Interviewers often ask about a disagreement. This structure answers it well.","Prepare one real example."]]];
X["Ambiguity"]=["Being told ‘plan something fun for Saturday’ with no budget or location.",[
["Vague briefs","‘Improve engagement.’","Seniors narrow it with questions and a hypothesis."],
["Design challenges","Interview prompts are deliberately vague.","They test how you handle ambiguity."],
["Interview line","‘When the brief is ambiguous, I narrow it with a hypothesis and test quickly.’","Shows calm under uncertainty."]]];
X["Second-order effects"]=["Cheap flights mean more tourists, which means crowded beaches, which means locals leave.",[
["Free delivery","More orders, but more tiny orders that lose money.","The consequence after the first consequence."],
["Gamification","Streaks increase use, but some users feel anxious and quit after breaking one.","Hidden downsides."],
["Interview line","‘The second-order effect is…’","Shows systems thinking."]]];
X["First principles"]=["Instead of copying other bakeries’ menus, asking ‘what do people in this area actually want in the morning?’",[
["SpaceX","Elon Musk has described reasoning about rocket costs from raw material prices.","A widely cited example."],
["Payment receipt","What does a receipt fundamentally need to prove? Amount, recipient, time, reference.","Design from essentials."],
["Avoid","‘Competitor X does it this way, so we will.’","Copying without reasoning.","bad"]]];
X["Systems thinking"]=["A traffic jam isn’t caused by one car; it’s signals, roads, timing and drivers together.",[
["Checkout change","Affects support load, warehouse picking and refunds.","Not just one screen."],
["Design systems","One component change affects hundreds of screens.","Think in systems."],
["Interview line","‘This isn’t a screen problem, it’s a system problem across three teams.’","Senior perspective."]]];
X["Scope slicing"]=["Eating a pizza slice by slice instead of trying to swallow it whole.",[
["Refunds","Release refund status first, refund chat later.","Ship value early."],
["Vertical slices","Each slice works end to end for a small case.","Real learning from real users."],
["Interview line","‘I sliced it so the first release ships in two weeks.’","Practical delivery thinking."]]];
X["Signal vs noise"]=["One person complaining about a dish is noise; ten tables sending it back is signal.",[
["Anecdotes","A CEO’s friend dislikes the colour.","Noise unless backed by data."],
["Patterns","300 support tickets about the same issue.","Signal worth acting on."],
["A/B tests","Small random differences versus real effects.","Statistics help separate them."]]];
X["Craft"]=["A carpenter’s joints that nobody sees but make the chair last for decades.",[
["Payment moments","Spending extra care on the success screen everyone sees daily.","Craft where it matters most."],
["Real copy","Using real content instead of lorem ipsum.","Shows finished thinking."],
["Linear","The project tool Linear is often praised for its detailed, polished craft.","A product admired for craft."]]];
/* MARKET */
X["Next billion users"]=["Designing a shop for people visiting a mall for the first time, who might be unsure where to go.",[
["Google’s Next Billion Users team","Google set up a team focused on new internet users in countries like India.","A recognised design focus."],
["Voice search","Google Assistant and YouTube voice search in Indian languages.","Less typing, more speaking."],
["Simple flows","Fewer words, icons with labels, familiar patterns.","Lower literacy barriers."]]];
X["Vernacular-first design"]=["Opening a shop where the signs are in the local language first, not translated as an afterthought.",[
["ShareChat and Moj","Built around Indian languages from the start.","Language-first products."],
["Meesho","Supports multiple Indian languages for buyers and sellers.","Reaches users beyond English speakers."],
["Translation-only","Hindi text squeezed into English layouts, cut off.","Layouts must be designed for each script.","bad"]]];
X["Low-bandwidth design"]=["Packing light for a trip with narrow roads.",[
["Facebook Lite and YouTube Go","Lighter versions built for slow networks and low-end phones.","Data-saving design."],
["Image compression","Smaller images and placeholders.","Faster loading on weak networks."],
["Offline support","Saving content for later.","Useful in areas with patchy coverage."]]];
X["UPI flows"]=["A cheque that clears in seconds, but sometimes gets ‘stuck in the bank’ for a while.",[
["Intent flow","Paying on a website opens your chosen UPI app (Google Pay, PhonePe, Paytm).","Users switch apps, then return."],
["Pending payments","Money debited but merchant not confirmed yet; usually resolves or is refunded.","The hardest state to design."],
["UPI Lite","Small payments without entering a PIN every time.","Faster for tiny amounts."]]];
X["Trust signals"]=["A shop with a known brand name, a clear return policy and a proper bill feels safer than a street seller.",[
["Cash on delivery","Many Indian shoppers still choose COD for first orders.","Reduces fear of losing money."],
["Return policies","Myntra and Amazon show return windows near the buy button.","Reassures before purchase."],
["Verified badges","Seller ratings and ‘Assured’ badges on Flipkart.","Signals reliability."]]];
X["Quick-commerce ETA promise"]=["A pizza place that promised delivery in 30 minutes or it’s free. The promise becomes the brand.",[
["Blinkit, Zepto, Instamart","Show delivery time prominently on the home screen.","Speed is the product."],
["Delays","Proactively telling users when an order is late, with a reason.","Honesty protects trust."],
["Silent timers","A countdown that just keeps increasing.","Destroys confidence.","bad"]]];
