window.X=window.X||{};
/* Format: X[term]=[everyday analogy, [[product, what they do, why it counts as this term, "bad" if it is a counter-example], ...]] */
/* METRICS */
X["North Star Metric"]=["A cricket team has many stats (strike rate, economy, catches), but one number decides everything: runs on the board compared with the other side. The North Star is that one number for a product.",[
["Airbnb","Airbnb’s North Star is widely reported as nights booked. A night booked only happens when a guest found a place they liked and a host earned money, so both sides got value.","It isn’t app opens or listings created. Those can grow while nobody actually travels. Nights booked only grows when the product is doing its job."],
["Spotify","Spotify is often cited as using time spent listening. Every team (search, playlists, podcasts, the home screen) can ask: does my change make people listen more?","Listening time is the moment Spotify delivers value. A feature that gets clicks but no extra listening doesn’t move the North Star, so it isn’t a priority."],
["Blinkit (how you’d reason about it)","A quick-commerce app like Blinkit could pick orders delivered on time and complete. Speed and accuracy are the whole promise, so one late or missing item hurts trust.","In an interview, you don’t need the company’s official number. Showing how you’d choose one, and why, is what they want to hear."]]];
X["Input and output metrics"]=["Your exam marks are the output. Hours studied, mock tests taken and sleep are the inputs. You can’t directly change your marks on exam day, but you can change the inputs every week.",[
["Amazon","Amazon is famous for focusing teams on controllable inputs (selection, low prices, fast delivery) rather than on revenue directly. Revenue is the output those inputs produce.","A designer can’t move revenue in one sprint, but can move an input like ‘search results that lead to add-to-cart’."],
["Swiggy or Zomato checkout","The output is orders per week. The inputs a checkout designer owns are things like cart-to-payment rate, payment success rate and time to place an order.","If you redesign checkout, you report on the input you changed (payment step completion), and explain how it feeds the output."],
["Duolingo","Daily active learners is an output. Inputs include lesson completion rate, streak reminders opened, and how many new users finish their first lesson.","Their growth team works on inputs like the first-lesson experience, because those reliably push the output up."]]];
X["Vanity metric"]=["Counting how many people walked past your shop instead of how many bought something. The first number always looks bigger and tells you almost nothing.",[
["App download counts","Many startups announce ‘1 million downloads’. But if 80% of those people opened the app once and deleted it, the business is not healthy.","Downloads only ever go up, so they can’t tell you whether your last change helped or hurt. That’s what makes it a vanity metric.","bad"],
["Instagram followers for a brand","A brand with 500,000 followers but very few saves, shares or purchases is getting little real value from that audience.","The useful number is engagement or sales from Instagram, not the follower count.","bad"],
["Total registered users","A fintech app reports ‘10 lakh users’. The real question is how many made a payment in the last 30 days.","Investors and senior PMs will immediately ask for active users or retention instead."]]];
X["Actionable metric"]=["A doctor saying ‘you’re unwell’ isn’t useful. ‘Your vitamin D is low’ tells you exactly what to do next. An actionable metric is the second kind.",[
["Google Analytics funnels","Instead of total visitors, a team looks at the funnel: product page → cart → address → payment, broken down by step.","If 40% drop at the address step, you know exactly which screen to fix. That’s what makes it actionable."],
["Uber","Uber can look at how many ride requests go unaccepted, split by city area and time of day.","That number points straight to a decision, like surge pricing or driver incentives in that area at that time."],
["Netflix","Netflix watches how often people start a title and stop within a few minutes.","High early stop rates on a title or a row suggest a problem with the thumbnail, description or recommendation, so the team knows where to look."]]];
X["Leading and lagging indicators"]=["Dark clouds are a leading indicator of rain. A wet road is a lagging indicator. One warns you in time to grab an umbrella; the other only confirms what already happened.",[
["Facebook (classic story)","Early Facebook found that new users who connected with about 7 friends in their first 10 days were far more likely to stick around.","Friends added in week one is a leading indicator. Long-term retention is the lagging one it predicts."],
["Slack","Slack has publicly mentioned that teams which exchanged around 2,000 messages were very likely to keep using it.","Message count early on leads; paid conversion and retention lag behind it by months."],
["Any subscription app","Cancellation (churn) is lagging: by the time someone cancels, it’s too late. Falling weekly usage is leading: you can still win them back.","Designers can act on leading indicators, for example a ‘we miss you’ moment when usage drops."]]];
X["Guardrail metric"]=["A cricket team chasing runs quickly still watches wickets. Scoring fast is the goal; not losing all wickets is the guardrail.",[
["E-commerce add-ons","A team adds ‘frequently bought together’ suggestions to raise order value. Guardrails: checkout completion and return rate must not get worse.","If order value goes up but more people abandon checkout, the experiment failed even though the main metric improved."],
["YouTube","Optimising purely for clicks can promote clickbait. Watch time and satisfaction surveys act as guardrails against misleading thumbnails.","The guardrail catches a ‘win’ that is actually hurting users."],
["Notifications","A team sends more push notifications to raise daily active users. Guardrail: notification opt-out rate and uninstalls.","More notifications can lift today’s numbers while users quietly switch them off for good."]]];
X["HEART framework"]=["A doctor’s check-up looks at heart rate, blood pressure, weight and sleep, not just one number. HEART is a check-up for user experience across five areas.",[
["Gmail (Google)","HEART came from Google’s research team, who used it on products like Gmail. Happiness from surveys, Engagement from how often people use it, Adoption of new features, Retention, and Task success such as finding an email.","Each area is turned into a goal, then a signal (something you can observe), then a metric. That’s the Goals-Signals-Metrics process."],
["A food delivery app","Happiness: rating after delivery. Engagement: orders per month. Adoption: % using the new ‘schedule order’. Retention: users ordering again in 30 days. Task success: % who complete checkout.","You don’t have to use all five. Pick the ones that match what your design change is meant to do."],
["Your portfolio","For a case study, you could say: ‘I measured task success in testing and planned to track adoption after launch.’","Naming HEART shows you think about measurement in a structured way."]]];
X["AARRR (pirate metrics)"]=["A leaky bucket. Water comes in at the top (new users), and leaks out at different holes. AARRR helps you find which hole is biggest.",[
["Dropbox","Dropbox famously grew through Referral, giving extra free storage to both people when someone invited a friend.","The referral stage became a growth engine, so it got heavy design attention."],
["CRED","CRED makes Acquisition selective (people with a good credit score) and puts effort into Activation: getting you to add your card and pay your first bill.","A designer working on onboarding is working on Activation."],
["Any app","If many people download the app (Acquisition is fine) but few finish sign-up (Activation is weak), more ads won’t help.","AARRR helps you say ‘the problem is activation, not acquisition’, which points to design."]]];
X["DAU/MAU (stickiness)"]=["How often you visit your local chai stall compared with a wedding hall. You might love both, but you naturally visit one daily and one rarely.",[
["WhatsApp","Most people who use WhatsApp in a month use it nearly every day, so its DAU/MAU is extremely high.","Messaging is a daily need, so high stickiness is expected."],
["MakeMyTrip","A travel app is used a few times a year. A low DAU/MAU is completely normal for it.","Judging it by daily use would push the team to add pointless daily features."],
["Instagram","Stories and Reels are built to give people a reason to open the app many times a day.","Those features are partly about stickiness: more days active out of the month."]]];
X["Retention curve"]=["A gym in January. Lots of people join, many stop by February, but the ones still coming in March usually keep coming. When the line stops falling and flattens, you’ve found your loyal group.",[
["Healthy curve","Out of 100 people who sign up, 40 are active after a week, 28 after a month and still about 25 after three months.","The line flattens, which means a core group found real value. That’s a sign of product-market fit."],
["Unhealthy curve","Out of 100 sign-ups, 30 after a week, 10 after a month, 2 after three months, heading towards zero.","No flattening means the product isn’t keeping anyone. More marketing just pours water into a leaking bucket.","bad"],
["Duolingo","Duolingo has written publicly about improving retention with streaks, leagues and reminders, which bend the curve upward.","Design features can change the shape of this curve. That’s why designers are asked about it."]]];
X["Churn rate"]=["A tuition centre that starts the month with 100 students and loses 5. Its churn that month is 5%.",[
["Netflix","Netflix makes it easy to cancel, but also shows what you’ll miss and offers to pause or change your plan instead.","Reducing voluntary churn without trapping users."],
["Spotify and other subscriptions","When a card payment fails, they show a banner and send emails asking you to update your card before access stops.","That’s fighting involuntary churn, people leaving only because a payment failed. It’s often a pure design fix."],
["Gyms with hard cancellation","Some services make you call or visit in person to cancel.","This lowers churn on paper but creates angry customers. It’s a dark pattern, not a solution.","bad"]]];
X["Conversion rate"]=["If 100 people walk into a shoe shop and 5 buy shoes, the shop converts 5%.",[
["Amazon 1-Click","Amazon patented 1-Click ordering in the late 1990s, removing the checkout steps for repeat buyers.","Fewer steps meant more people completed the purchase, a higher conversion rate."],
["Flipkart or Myntra product page","Clear size charts, delivery date and return policy near the ‘Add to bag’ button help people decide.","Answering doubts on the page raises the share of visitors who buy."],
["Sign-up with Google","Many apps add ‘Continue with Google’ instead of a long form.","Sign-up conversion usually rises because there’s almost nothing to type."]]];
X["Funnel and drop-off"]=["A wedding invite to 500 people: 400 reply, 300 say yes, 250 actually come. Each step loses people. The biggest drop tells you where to focus.",[
["Food delivery checkout","Cart → address → payment → order placed. If the drop is biggest at payment, you investigate failed UPI payments or missing options.","The funnel shows exactly which step to redesign first."],
["Swiggy and Zomato address pin","Both use a map pin with your current location to cut typing at the address step.","They target a known drop-off point: people struggling to type addresses."],
["Bank account opening","Video KYC, document upload and long forms cause drops. Apps like Jupiter and Fi save progress so you can resume later.","Save-and-resume recovers people who would otherwise leave at the hardest step."]]];
X["Bounce rate"]=["Someone walks into a shop, looks around for two seconds, and walks straight out. That’s a bounce.",[
["Landing page from an ad","An ad says ‘50% off sneakers’, but the page opens on the home page with no sneakers.","People bounce because the page doesn’t match the promise. The fix is message match, not a new colour.","bad"],
["Blog article","A how-to article can have high bounce and still be fine: the reader got their answer and left happy.","Bounce rate needs context. High isn’t always bad."],
["Zerodha Varsity","Varsity’s chapters link to the next chapter at the end of each lesson.","Giving readers a clear next step lowers bounce from learning pages."]]];
X["NPS (Net Promoter Score)"]=["Asking a friend: ‘Would you recommend this restaurant?’ The yes-definitely friends are promoters; the never-again friends are detractors.",[
["Apple retail","Apple has been widely reported to use NPS-style feedback after store visits and act on the comments.","The score tracks the relationship over time; the comments show what to fix."],
["Uber or Ola after a ride","A short rating and comment after a trip works more like CSAT, but it feeds the same idea: are people happy enough to come back and recommend you?","Survey timing matters. Asking right after the experience gets more honest answers."],
["Design interview trap","Saying ‘my redesign improved NPS’ is weak, because NPS is affected by price, delivery, support and much more.","Use NPS as context, and a closer metric like task success as proof."]]];
X["CSAT"]=["The smiley-face buttons at an airport washroom: one quick tap on how it was just now.",[
["Zomato or Swiggy","After an order arrives, you’re asked to rate the food and the delivery separately.","Separate ratings tell the team whether the problem was the restaurant or the delivery."],
["Customer support chats","Amazon and Flipkart ask ‘Was this helpful?’ right after a chat ends.","CSAT is collected at a touchpoint, so it measures that one interaction."],
["Indian bank apps","Some ask for a star rating right after a successful UPI payment.","Asking at the moment of success gets higher scores, so be careful comparing CSAT asked at different moments."]]];
X["CES (Customer Effort Score)"]=["After returning something at a shop, a friend asks ‘Was it a hassle?’ That’s effort, not satisfaction.",[
["Amazon returns","Amazon lets you choose a reason, pick a pickup slot and see the refund method in a few taps.","Low effort is the whole goal of a returns flow. Nobody is ‘delighted’ by a return."],
["Telecom SIM porting","Porting a number used to need paperwork and visits. Simpler flows reduce effort.","Effort is the right metric for chores people must do, not want to do."],
["Government portals","Long forms that reject your entry after submit create very high effort.","CES is useful in interviews when you redesign a ‘chore’ flow.","bad"]]];
X["SUS (System Usability Scale)"]=["A standard eye test chart. Every clinic uses the same chart, so results can be compared. SUS is a standard test for usability.",[
["Usability testing","After people finish tasks in your prototype, they answer 10 short statements like ‘I found the system unnecessarily complex’. You convert this to a score out of 100.","Because the questions are always the same, you can compare version 1 and version 2 fairly."],
["Enterprise software","Teams building internal tools often track SUS across releases, because there’s no revenue metric for an internal dashboard.","It gives a number to usability where business metrics don’t exist."],
["Portfolio use","‘SUS went from 58 to 79 after the redesign’ is a concrete, believable result for a student case study.","It shows you measured, not just guessed."]]];
X["Task success rate"]=["Asking five friends to find the light switch in your new flat. If only two find it, the switch is in the wrong place.",[
["Usability test","Five people are asked to ‘change your delivery address for this order’. Three manage it without help.","That’s 60% task success, and watching the other two shows you why they failed."],
["Gov.uk","The UK government’s design teams test services with real people and publish design principles focused on people completing tasks.","Completing the task is what matters for a public service, not engagement."],
["Your case study","‘Task success went from 2 of 5 to 5 of 5’ is one of the clearest results you can show.","Interviewers trust it because it’s directly caused by your design."]]];
X["Time on task"]=["How long it takes to make Maggi. If it’s promised as 2 minutes and takes 10, something’s wrong with the instructions.",[
["Google Pay or PhonePe","Paying a saved contact takes only a few taps: open, pick contact, amount, PIN.","For a task people do daily, shaving seconds really matters."],
["Instagram","Long time-on-app is the goal for a content app.","Time on task means different things: shorter is better for utilities, longer may be good for content."],
["Railway booking","Tatkal booking is a race against time, so speed through the form decides whether you get a ticket.","Reducing time on task here is the entire user need."]]];
X["Error rate"]=["Counting how often people pull a door that says ‘push’. If many do, the door is badly designed, not the people.",[
["Norman doors","Don Norman’s famous example: doors whose handles invite pulling when you need to push.","Repeated user errors point to a design problem."],
["Payment amount entry","People entering ₹5000 instead of ₹500 by adding a zero. Some apps show the amount in words or large type before confirming.","The design reduces a common, costly error."],
["Disabled button","If many users tap a greyed-out ‘Pay’ button before filling the amount, the design isn’t explaining why it’s disabled.","Counting those taps reveals a hidden error pattern."]]];
/* STRATEGY */
X["Jobs To Be Done (JTBD)"]=["People don’t want a drill; they want a hole in the wall, and really they want the picture hung. Focus on the job, not the tool.",[
["The milkshake story","Clayton Christensen’s team found many morning milkshake buyers were commuters who wanted something filling and slow to drink on a boring drive.","The ‘job’ was ‘make my commute less boring and keep me full’, so the competitors were bananas and bagels, not other milkshakes."],
["Blinkit","When you’re cooking and realise you’re out of tomatoes, you want them in minutes so dinner doesn’t stop.","The job is ‘rescue my cooking right now’. That explains why speed matters more than price for many orders."],
["Netflix vs sleep","Netflix’s CEO once joked that their biggest competitor is sleep.","The job is ‘entertain me in my free evening time’, so anything competing for that time is a competitor."]]];
X["Product-market fit (PMF)"]=["When a street food stall has a queue every evening without any advertising, it has product-market fit.",[
["Slack","Teams brought Slack in themselves and spread it to other teams in the company, long before sales teams were involved.","People pulling the product in on their own is the clearest PMF signal."],
["UPI apps","Once UPI became available, usage grew enormously across India, from big shops to small vegetable carts.","Demand pulled adoption, a classic sign of fit."],
["Google Glass","Google Glass (2013) got huge attention but never found a group of everyday users who couldn’t live without it.","Attention is not PMF. Keeping users is.","bad"]]];
X["Value proposition"]=["The one line a shopkeeper shouts to get you in: ‘Fresh samosas, made every 10 minutes!’",[
["Zepto / Blinkit","Groceries delivered in about 10 minutes.","The value proposition is speed, and the whole app (ETA on the home screen, quick checkout) reinforces it."],
["CRED","Pay your credit card bills and get rewarded.","It turned a boring chore into something with a reward."],
["Notion","Notes, docs, wikis and project tracking in one workspace.","The value is replacing several tools with one. Their home page leads with that."]]];
X["MVP"]=["Before opening a restaurant, you cook for friends at home and see what they ask for again. That’s your MVP.",[
["Zappos","The founder photographed shoes in local shops and put them online. When someone ordered, he bought the shoes from the shop and shipped them himself.","It tested ‘will people buy shoes online?’ without building warehouses."],
["Dropbox","Before the product was ready, Dropbox released a short demo video and sign-ups for the waiting list jumped.","The video was the MVP: it tested demand, not technology."],
["Airbnb","The founders rented air mattresses in their own flat during a design conference when hotels were full.","A tiny real test of whether strangers would pay to stay in someone’s home."]]];
X["MLP and MMP"]=["MVP is a plain dosa to see if people come back. MLP adds the chutney that makes them love it. MMP is when you also have a menu card, billing and a proper shop to sell it publicly.",[
["Superhuman","The email app spent a long time making the experience fast and polished before opening widely.","They aimed for something people would love, not just something that works."],
["Duolingo’s owl and sounds","Small moments like celebrations after a lesson add emotional value beyond basic learning.","Those touches are what make a viable product lovable."],
["Payments launch","A payments feature can’t launch publicly without legal compliance, support and refund flows.","Those are what turn an MVP into a marketable product."]]];
X["Problem statement"]=["A doctor writing down ‘sharp pain in lower right side for two days’ instead of ‘patient unwell’. Specific problems get specific solutions.",[
["UPI payment failures","‘First-time UPI users abandon payments after a failure because they can’t tell if their money was deducted.’","It names who, what goes wrong, and why. Every design idea can now be judged against it."],
["Weak version","‘Improve the payments experience.’","Too vague. Nobody can tell whether a solution worked.","bad"],
["Airbnb’s photo problem","Early Airbnb noticed listings with poor photos weren’t getting booked, and the founders went to New York to photograph homes themselves.","A clear problem (bad photos reduce trust and bookings) led to a clear action."]]];
X["How Might We (HMW)"]=["Instead of saying ‘our kitchen is too small’, asking ‘How might we cook big meals in a small kitchen?’ It turns a complaint into a puzzle.",[
["Payment anxiety","‘How might we make a failed payment feel safe instead of scary?’","It invites many ideas: clear status, refund timeline, support link, calm language."],
["Too broad","‘How might we fix banking?’","Too big to brainstorm on.","bad"],
["Too narrow","‘How might we make the retry button green?’","This already contains the solution.","bad"]]];
X["Double Diamond"]=["Planning a holiday: first you consider many places (open up), then pick one (narrow down). Then you consider many plans for that place (open up), then book one (narrow down).",[
["Design Council (UK)","The UK’s Design Council introduced the Double Diamond in 2005 to describe how designers work.","It’s a common way to explain your process in an interview."],
["Checkout redesign","Diamond one: research all the reasons people abandon carts, then pick the main one. Diamond two: sketch many fixes, then test and ship the best.","It stops you jumping to solutions before you understand the problem."],
["Common mistake","A team starts sketching screens on day one without research.","They’ve skipped the first diamond and may solve the wrong problem.","bad"]]];
X["Design thinking"]=["How a good tailor works: listen to you, understand what the clothes are for, try ideas, make a trial fit, adjust, then stitch.",[
["IDEO and Stanford d.school","IDEO popularised design thinking; Stanford’s d.school teaches the five steps: empathise, define, ideate, prototype, test.","It’s the most common process language in design interviews."],
["GE Healthcare MRI","Designer Doug Dietz redesigned MRI machines as adventure scenes for children after seeing how scared kids were.","Empathy changed the problem from ‘machine design’ to ‘child fear’, and fewer children needed sedation."],
["Your portfolio","Walk through how testing sent you back to redefine the problem.","Showing the loop is more convincing than a neat straight line."]]];
X["Lean UX"]=["Testing a new dish as a weekend special before adding it to the permanent menu.",[
["Startups","Small teams test a clickable prototype with 5 users in a week instead of writing a 40-page spec.","Less documentation, more learning."],
["Spotify’s squads","Spotify’s model of small cross-functional teams that ship and learn quickly became widely copied.","Close teams make fast experiments possible."],
["Feature flags","Shipping a simple version to 5% of users and watching what happens.","Build-measure-learn in practice."]]];
X["Hypothesis-driven design"]=["Saying ‘I think the plant is dying because of too little sunlight. I’ll move it to the window for a week and see if new leaves grow.’",[
["Refund status","‘We believe showing refund status on the failure screen will cut support tickets by 20%. We’ll know when tickets about refunds drop.’","It’s testable, and you’ll know if you were wrong."],
["Booking.com","Booking.com is known for running a very large number of experiments, each based on a hypothesis about user behaviour.","Each test either supports or rejects the idea, so decisions are based on evidence."],
["Weak version","‘Users will like the new design.’","Not measurable, so not really a hypothesis.","bad"]]];
X["Opportunity solution tree"]=["A family tree, but for a goal: the goal at the top, the problems behind it as branches, ideas as leaves, and tests as the roots that check them.",[
["Reorder rate","Outcome: more reorders. Opportunities: people forget what they bought, finding items is slow, prices changed. Solutions: ‘buy again’ shelf, saved lists, price alerts.","Seeing three opportunities stops the team betting everything on one feature."],
["Teresa Torres","The tool comes from her book Continuous Discovery Habits, widely used by product teams.","Naming it shows you know modern product discovery practice."],
["Blinkit / Instamart","Their ‘buy again’ or ‘previously bought’ sections are a solution to the ‘I forget what I usually buy’ opportunity.","You can map existing features back to opportunities in an interview."]]];
X["Riskiest assumption"]=["Before buying a dog, the riskiest assumption is that your landlord allows pets. Check that first, not which collar colour to buy.",[
["Meal kits","The riskiest assumption is that people will plan meals a week ahead. If not, the whole business fails.","Test that first, perhaps with a simple sign-up page, before designing recipe screens."],
["Autopay features","Riskiest assumption: users trust the app to take money automatically.","A small test, like asking people to set up a mandate, reveals trust before you build the whole feature."],
["Quibi","Quibi (2020) assumed people wanted short premium shows only on phones. It shut down within about six months.","An untested core assumption can sink even a well-funded product.","bad"]]];
X["Vision, strategy, roadmap"]=["Vision: ‘I want to be fit.’ Strategy: ‘I’ll run, because it’s cheap and I can do it near home.’ Roadmap: ‘5 km by March, 10 km by June.’",[
["Tesla","Tesla’s published ‘master plan’ described starting with an expensive sports car, then cheaper cars, using profits to fund each next step.","Clear vision, a strategy, and a sequence of products."],
["Quick commerce","Vision: nobody runs out of essentials. Strategy: small dark stores close to homes. Roadmap: groceries now, electronics and pharmacy next.","Explains why some features wait."],
["In an interview","‘This idea fits the strategy, but it’s a next, not a now.’","Shows you understand sequencing, not just ideas."]]];
X["Blue ocean"]=["Opening the only good café on a highway instead of the tenth café on a busy street.",[
["Nintendo Wii","While Sony and Microsoft competed on graphics, Nintendo made simple motion controls for families and non-gamers.","They created new demand instead of fighting over the same gamers."],
["Cirque du Soleil","It removed animals and star performers and added theatre and music, creating a new kind of show for adults.","The original example in the Blue Ocean Strategy book."],
["Jio","Jio entered the Indian telecom market in 2016 with very cheap data and free voice, unlocking many first-time internet users.","It changed the rules of competition rather than matching others."]]];
X["10x vs 10%"]=["A slightly faster bicycle (10%) versus a motorbike (10x). Only the motorbike makes people change how they commute.",[
["UPI","UPI didn’t make cards slightly faster; it let anyone pay anyone with a phone, without a card machine.","A step change that changed behaviour across the country."],
["Google Search","Early Google results were dramatically more relevant than other search engines.","People switched because it was far better, not a little better."],
["Figma","Figma put design in the browser with real-time collaboration, like Google Docs for design.","Teams switched from desktop tools because collaboration was transformed."]]];
/* PRIORITY */
X["RICE"]=["Choosing which house repairs to do first: how many rooms it affects, how much better life gets, how sure you are it will work, and how much it costs.",[
["Intercom","RICE was created by Intercom’s product team to compare ideas fairly.","Naming the source shows you know where it comes from."],
["Example scores","Saved addresses: reach 20,000, impact 2, confidence 90%, effort 2 weeks = 18,000. Dark mode: reach 5,000, impact 0.5, confidence 80%, effort 3 weeks ≈ 667.","The numbers make it obvious which to build first."],
["Confidence matters","An exciting idea with no evidence gets a lower confidence score.","It keeps loud opinions from winning automatically."]]];
X["ICE"]=["A quick gut-check for small things: how much will it help, how sure am I, how easy is it?",[
["Growth teams","Growth teams scoring 30 small experiment ideas (copy changes, button placement) in one meeting.","Fast enough for long lists of small tests."],
["Sean Ellis","ICE is associated with growth expert Sean Ellis.","Useful context in growth-design interviews."],
["When not to use it","For a big multi-month bet, ICE is too rough.","Use RICE or deeper analysis there."]]];
X["MoSCoW"]=["Packing for a trip: must have passport, should have charger, could have a book, won’t have the second pair of shoes.",[
["App v1","Must: pay a bill. Should: payment reminders. Could: custom themes. Won’t (this time): international cards.","The won’t list stops scope creep later."],
["Agencies","Client projects often use MoSCoW to agree what fits a fixed budget.","It turns arguments into a shared list."],
["Interview line","‘Let’s agree the won’t-haves now so they don’t creep back mid-sprint.’","Sounds experienced."]]];
X["Kano model"]=["At a hotel: clean sheets are expected (you’re angry without them). Faster Wi-Fi is better the more you get. A free welcome dessert surprises you.",[
["Order tracking","Live order tracking once surprised people; now it’s simply expected in every delivery app.","Delighters become basics over time."],
["Flipkart / Amazon","A ‘delivery by tomorrow’ promise is a performance feature: the faster, the happier.","Performance features scale with how much you provide."],
["Swiggy / Zomato ‘no-contact delivery’","During COVID, it quickly turned into an expected basic.","Context can move features between Kano categories quickly."]]];
X["Impact/effort matrix"]=["Tidying your room: picking clothes off the floor (big difference, easy) before repainting the walls (big difference, hard).",[
["Quick win","Remembering a user’s last address at checkout: high impact, low effort.","Ship it now."],
["Money pit","Building a custom map engine instead of using Google Maps: high effort, low extra value for users.","Avoid it."],
["Big bet","A completely new checkout: high impact, high effort.","Plan it carefully, maybe test parts first."]]];
X["OKRs"]=["Objective: ‘Get fit this year.’ Key results: ‘Run 5 km under 30 minutes; do 20 push-ups.’ The results prove you reached the goal.",[
["Google","Google adopted OKRs early (introduced by investor John Doerr) and they spread across Silicon Valley.","The most common goal language in tech companies."],
["Good vs weak KR","Weak: ‘Launch new onboarding.’ Good: ‘Raise day-7 activation from 30% to 40%.’","A key result is an outcome, not a task."],
["Designer’s OKR","Objective: make payments feel effortless. KR: cut average payment time to under 20 seconds.","Shows design work tied to measurable goals."]]];
X["KPI"]=["Your car dashboard: speed, fuel and temperature, always visible. KPIs are the numbers a business always watches.",[
["Quick commerce","Average delivery time and order accuracy are watched constantly.","If they slip, the core promise breaks."],
["Banking app","Payment success rate and app crash rate.","These are health numbers, not quarterly goals."],
["KPI vs OKR","KPIs are always tracked; OKRs are goals for a time period.","Often an OKR is chosen to improve a weak KPI."]]];
X["Agile and Scrum"]=["Cooking a big dinner by finishing and tasting one dish at a time instead of cooking everything and tasting at the end.",[
["Most product companies","Swiggy, Razorpay and most tech companies work in sprints with stand-ups, reviews and retros.","You’ll be part of this rhythm from day one."],
["Designer’s place","Designers often work one sprint ahead, so designs are tested and ready when engineers pick them up.","A common, practical answer in interviews."],
["Waterfall (old way)","Plan everything, design everything, build everything, test at the end.","Agile replaced it because problems were found too late.","bad"]]];
X["Sprint"]=["A two-week exam revision plan with a fixed list of chapters to finish.",[
["Two-week sprints","Most teams use two weeks: planning on day one, a demo of finished work at the end.","Designers plan their work around these deadlines."],
["Splitting work","‘Can the error state land this sprint and the animation next sprint?’","Shows you can slice work to fit."],
["Google Ventures design sprint","A different thing: a 5-day workshop to answer one big question with a prototype.","Don’t mix up a ‘sprint’ and a ‘design sprint’."]]];
X["Kanban"]=["A restaurant order rail: tickets move from ‘ordered’ to ‘cooking’ to ‘served’. If too many pile up at cooking, the kitchen is the bottleneck.",[
["Toyota","Kanban started in Toyota factories as cards controlling parts flow.","Software teams borrowed the idea."],
["Trello and Jira boards","Columns like To do, In progress, Review, Done.","Many design teams track their work this way."],
["WIP limits","‘No more than 3 designs in review at once.’","Forces the team to finish things before starting new ones."]]];
X["Backlog"]=["Your ‘to watch’ list on Netflix, sorted by what you most want to watch next.",[
["Jira","Teams keep a backlog in Jira, ordered by priority, with the top items ready to work on.","Good ideas go here instead of disrupting the current sprint."],
["Refinement","Regular backlog refinement meetings make sure top items have designs and clear requirements.","Designers often attend to explain upcoming work."],
["Interview line","‘That’s valid, let’s add it to the backlog rather than the sprint.’","Shows calm prioritisation."]]];
X["User story and acceptance criteria"]=["A restaurant order: ‘As a vegetarian, I want a paneer dish, so I can eat with my friends.’ Acceptance: no onion, arrives hot, under 20 minutes.",[
["Refund story","As a customer whose payment failed, I want to see refund status, so I don’t worry about lost money.","Written from the user’s side, with the reason."],
["Given/When/Then","Given payment failed, when I open the order, then I see ‘Refund of ₹450 started, expected by 23 Nov’.","QA can test it exactly."],
["Design value","Adding acceptance criteria for empty, loading and error states.","Makes sure those states actually get built."]]];
X["Epic"]=["‘Plan the wedding’ is an epic. ‘Book the venue’, ‘send invites’ and ‘order food’ are the stories inside it.",[
["Subscriptions epic","Stories: choose a plan, pause, cancel, change delivery day, payment failure.","Designers usually map the whole epic first so the pieces fit."],
["Jira","Epics group related stories and track overall progress.","Common vocabulary in any product team."],
["Interview tip","Showing a full epic flow in your portfolio, not one screen, signals systems thinking.","Seniors think in flows, not screens."]]];
X["Scope creep"]=["You go to buy milk and come back with milk, bread, snacks and a new kettle. The trip took an hour instead of ten minutes.",[
["Bill split feature","It starts as ‘split a bill’ and grows into group chat, polls, reminders and stickers.","Each addition seems small, together they delay the launch."],
["Client projects","‘Can we just add one more page?’ repeated ten times.","Agencies protect against it with fixed scope and change requests."],
["How to handle it","‘Let’s ship the split first and see if people want the rest.’","Polite, practical pushback."]]];
X["Opportunity cost"]=["Spending Saturday at a movie means not spending it studying. The lost study time is the opportunity cost.",[
["Polishing animations","Two sprints on animations means two sprints not spent on a checkout that’s losing users.","Every yes is several nos."],
["Company level","A company building its own chat tool instead of improving its core product.","The cost is what they didn’t build."],
["Interview line","‘The real cost of this polish is the checkout fix we’d delay.’","Shows business thinking."]]];
