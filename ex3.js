window.X=window.X||{};
/* HEURISTICS */
X["Nielsen’s 10 heuristics"]=["A pilot’s pre-flight checklist. Experts still use it, because it catches the mistakes everyone makes when rushing.",[
["Jakob Nielsen (1994)","Nielsen published the 10 heuristics in 1994, and NN/g still teaches them today.","They’re the most widely used checklist for judging an interface quickly."],
["Bank app audit","Checking a bank app: does it show payment status (heuristic 1)? Can you undo a wrong payee (3)? Are error messages clear (9)?","Each finding links to a named principle, which makes your critique credible."],
["Interview task","‘Critique this app’ questions are often answered best by walking through a few heuristics with examples.","A structured critique beats ‘I don’t like the colours’."]]];
X["Visibility of system status"]=["A lift that shows the floor number. Without it, you wonder if it’s moving at all.",[
["Uber / Rapido","Shows the driver’s live position and minutes away.","You always know what’s happening, so waiting feels less stressful."],
["File uploads","Google Drive shows upload progress and ‘Upload complete’.","Without it, people upload twice or close the tab too early."],
["Silent payments","A payment screen that just shows a spinner for 30 seconds with no text.","Users panic, press back, and may pay twice.","bad"]]];
X["Recognition over recall"]=["A multiple-choice question is easier than a fill-in-the-blank, because you recognise the answer instead of remembering it.",[
["Recent payees","Google Pay and PhonePe show the people you’ve paid recently.","You tap a face instead of remembering a phone number."],
["Recent searches","Amazon and YouTube show your recent searches when you tap the search box.","You recognise what you wanted again."],
["Command-line tools","Typing exact commands from memory is recall-heavy, which is why menus and buttons exist.","Recall is harder, especially for beginners."]]];
X["Error prevention"]=["A three-pin plug that only fits one way. You can’t plug it in wrong.",[
["Booking calendars","MakeMyTrip and IRCTC disable past dates.","You can’t book a train that’s already left."],
["Gmail attachment reminder","If you write ‘attached’ but forget the file, Gmail warns you before sending.","Prevents a common slip."],
["Amount confirmation","Showing ‘₹5,000 (five thousand)’ before you pay.","Catches an extra zero."]]];
X["User control and freedom"]=["A clear ‘Exit’ sign in every room. You may not need it, but knowing it’s there makes you comfortable exploring.",[
["Gmail ‘Undo send’","Gmail gives you a few seconds to pull back an email after sending.","An easy way back from a mistake."],
["Swiggy / Zomato cart","You can remove items or change quantities right until you pay.","Users stay in control."],
["Unskippable flows","Onboarding tours with no ‘Skip’ button.","People feel trapped.","bad"]]];
X["Consistency and standards"]=["Traffic lights are red, amber, green in the same order everywhere. Imagine if each city chose its own colours.",[
["Google Material apps","Gmail, Drive and Calendar share icons, buttons and patterns.","Learning one helps you use the others."],
["Platform conventions","iPhone apps use the back swipe from the left edge; Android uses the system back button or gesture.","Following platform standards meets expectations."],
["Inconsistent words","‘Remove’ in one place, ‘Delete’ in another, ‘Discard’ in a third, all for the same action.","Users wonder if they do different things.","bad"]]];
X["Affordance"]=["A chair’s shape invites you to sit. A door handle invites you to pull.",[
["Buttons","A filled shape with a label looks tappable.","Its shape suggests the action."],
["Sliders","A brightness slider’s knob looks draggable.","The form invites sliding."],
["Flat design problems","Some flat designs made plain text and buttons look identical, so people didn’t know what was clickable.","Losing affordance hurts usability.","bad"]]];
X["Signifier"]=["A ‘PUSH’ sign on a door. The door already could be pushed; the sign tells you how.",[
["Chevron on list rows","Settings rows in iOS show ‘>’ to signal they open another screen.","A small cue about the action."],
["Blue underlined links","The classic signal that text is clickable on the web.","A widely understood signifier."],
["Carousel dots","Dots under a banner signal there are more slides.","Tells users to swipe."]]];
X["Mapping"]=["Stove knobs laid out in the same pattern as the burners, so you instantly know which knob controls which burner.",[
["Car seat controls","Mercedes-Benz famously places seat-adjustment buttons shaped like a seat on the door.","Moving the button part moves that part of the seat."],
["Volume sliders","Slide up for louder, down for quieter.","Direction matches the effect."],
["Seat maps","Airline and movie seat pickers show seats laid out like the real hall.","The screen maps to the physical space."]]];
X["Feedback"]=["When you press a lift button, it lights up. Without the light, you’d keep pressing.",[
["Like animations","Instagram’s heart fills and pops when you double-tap.","Instant confirmation the action worked."],
["Payment success","PhonePe and Google Pay show a clear success screen with a sound and tick.","Users know the money has gone."],
["No feedback","A ‘Submit’ button that does nothing visible for 3 seconds.","People tap again and submit twice.","bad"]]];
X["Constraints (Norman)"]=["A USB plug that only fits one way limits what you can do, so you can’t do it wrong.",[
["Numeric keyboard","OTP and amount fields open the number keypad only.","Users can’t enter letters by mistake."],
["Greyed-out options","Sold-out sizes on Myntra can’t be selected.","Prevents an impossible order."],
["Character limits","Twitter/X’s character limit with a live counter.","The constraint is shown, so users adapt."]]];
X["Dieter Rams’ principles"]=["A plain, well-made steel bottle that works perfectly for 20 years. Nothing extra, nothing missing.",[
["Braun","Rams designed products for Braun from the 1950s to the 1990s, including radios and calculators.","The source of the principles."],
["Apple","Jonathan Ive has openly praised Rams, and comparisons between Braun products and early Apple designs are well known.","Shows the influence on modern products."],
["‘Honest’ principle","A UI shouldn’t make a product seem to do more than it does.","Useful when arguing against misleading design."]]];
X["Progressive disclosure"]=["A restaurant shows a short menu first, and the waiter brings the wine list only if you ask.",[
["Google Search","Basic search box first; ‘Advanced search’ only for those who look for it.","Simple for most, powerful for some."],
["Filters","Amazon shows a few key filters; ‘See more’ reveals the rest.","Reduces clutter."],
["Camera apps","The iPhone camera shows shutter and modes; settings like exposure appear only when you tap.","Experts get control without confusing beginners."]]];
/* VISUAL */
X["Visual hierarchy"]=["A newspaper front page: the biggest headline is read first, then the photo, then smaller stories.",[
["Credit card bill","CRED shows the amount due largest, then the due date, then the pay button.","Users see what matters most first."],
["Weak hierarchy","A screen where the promo banner is bigger than the order status.","The eye goes to the wrong thing.","bad"],
["Squint test","Squint at a screen until it blurs; what you still see is what leads.","A quick way to check hierarchy."]]];
X["Gestalt: proximity"]=["People standing close together at a party look like a group, even if they’re strangers.",[
["Form labels","A label placed closer to its own field than to the next one.","The eye pairs them correctly."],
["Product cards","Price, name and rating sit tight together, with more space between cards.","Each card reads as one unit without borders."],
["Ambiguous spacing","Equal space above and below a label.","Users can’t tell which field it belongs to.","bad"]]];
X["Gestalt: similarity"]=["In a cricket stadium, people in the same team jersey look like one group.",[
["Link colour","All links in one colour, all body text in another.","Users learn what’s tappable."],
["Status chips","Green chips for delivered, orange for in progress, across the whole app.","Same look, same meaning."],
["Confusing similarity","Disabled items and secondary text both in light grey.","Users think secondary text is disabled.","bad"]]];
X["Gestalt: common region"]=["Items on the same tray in a canteen seem to belong to one person.",[
["Order summary card","Items, taxes and total inside one card.","Read as one block of information."],
["iOS Settings","Grouped settings sit inside rounded sections.","Each group reads as related."],
["Overuse","Boxes inside boxes inside boxes.","Too many containers create clutter.","bad"]]];
X["Gestalt: figure-ground"]=["A spotlight on a stage: the lit actor is the figure, the dark stage is the ground.",[
["Modals and bottom sheets","The background dims when a sheet opens.","Your attention goes to the sheet."],
["FedEx logo","The arrow hidden between the E and x is a famous figure-ground example.","Shows how the eye separates shapes."],
["Text on photos","Text placed on a busy photo without a dark overlay is hard to read.","Weak figure-ground.","bad"]]];
X["Gestalt: closure and continuity"]=["Seeing a circle in a dotted ring even though the dots don’t touch.",[
["Peeking cards","Swiggy and Netflix rows cut off the last card at the screen edge.","Your brain completes it and knows to scroll."],
["WWF panda logo","Parts of the panda’s outline are missing, but you see the whole animal.","Closure in action."],
["Progress steps","A line connecting steps 1 to 4 guides the eye along.","Continuity leads the reading order."]]];
X["Gestalt: common fate"]=["Birds flying together in the same direction look like one flock.",[
["Multi-select drag","In Google Drive, selected files move together when dragged.","They read as one group."],
["Carousels","Cards slide together as one row.","Movement shows they’re related."],
["Loading animations","Dots bouncing in sequence read as one indicator.","Shared motion groups them."]]];
X["Whitespace"]=["A luxury shop shows a few items with lots of space; a discount market crams everything together.",[
["Apple product pages","Large empty areas around one product image.","Focus and a premium feel."],
["Google home page","Mostly empty, with one search box.","Space makes the task obvious."],
["Cramped apps","Tight spacing everywhere makes every element compete.","Users struggle to know where to look.","bad"]]];
X["Grid and 8-point system"]=["Ruled lines in a notebook. You don’t notice them, but everything written on them looks neat.",[
["Material Design","Google’s Material Design uses an 8dp spacing grid.","Consistent spacing across all Google apps."],
["Developer handoff","Spacing values of 8, 16, 24, 32 mean engineers never guess.","Faster, cleaner builds."],
["Random spacing","13px here, 17px there, 22px elsewhere.","Looks slightly off and slows everyone down.","bad"]]];
X["Typography basics"]=["Good handwriting: the right size, enough space between lines, not too long a line to read.",[
["Medium","Medium’s articles use a comfortable text size, generous line height and a limited line length.","Easy, long reading."],
["Type scale","Headings at 32, 24, 20 and body at 16, all from one ratio.","Clear hierarchy without random sizes."],
["Long lines","Text running across a wide desktop screen.","The eye loses its place returning to the next line.","bad"]]];
X["Contrast (visual)"]=["A black dot on white paper jumps out; a grey dot on light grey paper hides.",[
["Payment amount","Large bold total, smaller light breakdown below.","The difference tells you what matters."],
["Flat hierarchy","Everything medium size, medium weight.","Nothing leads.","bad"],
["Spotify","Bright green accent on a dark background for the play button.","High contrast draws the eye to the main action."]]];
X["Colour roles (60-30-10)"]=["Dressing: mostly one base colour, some of a second, and a small bright accent like a scarf.",[
["Swiggy","Mostly white and neutral backgrounds, with orange used for actions and brand moments.","The accent stays meaningful."],
["Semantic colours","Green for success, red for errors, amber for warnings.","Colour carries meaning consistently."],
["Accent everywhere","Banners, icons, links and buttons all in the brand colour.","The main button loses its pull.","bad"]]];
X["F-pattern and Z-pattern"]=["Reading a newspaper (F: across the top, then down the left) versus a poster (Z: corner to corner).",[
["Google results","Eye-tracking research by NN/g shows people scan the first words of result titles down the left side.","The F-pattern."],
["Landing pages","Logo top-left, menu top-right, headline, then a button bottom-right.","A Z-pattern layout."],
["Writing tip","Put key words at the start of headings and list items.","People scanning an F see them."]]];
X["Above the fold"]=["The top half of a folded newspaper on a stand: what you see before picking it up.",[
["Payment screen","Amount, merchant and pay button all visible without scrolling.","The essentials are seen immediately."],
["Myth","‘Users don’t scroll.’ They do, if the first screen gives a reason.","Don’t cram everything at the top.","bad"],
["Landing pages","Value proposition and main action in the first screen.","Clear first impression."]]];
X["Responsive vs adaptive"]=["Responsive is water filling any glass. Adaptive is having three fixed glass sizes and picking the closest.",[
["Responsive sites","Most modern sites reflow product cards from 4 to 2 to 1 column.","One layout that stretches smoothly."],
["Adaptive","Some older sites had a separate ‘m.’ mobile site.","Distinct layouts per device type."],
["Today","Most teams build responsive and design key breakpoints as checkpoints.","Practical answer in interviews."]]];
X["Breakpoint"]=["The point where a table becomes too wide for a room and you rearrange the furniture.",[
["Common breakpoints","Many systems use widths around 600, 900 and 1200 pixels.","Where layouts switch."],
["Content-based","Change the layout where the content starts breaking, not at ‘iPad width’.","Better than device-based."],
["Material Design","Defines breakpoints for compact, medium and expanded windows.","A standard reference."]]];
X["Visual style eras"]=["Fashion trends: what feels modern changes, but good fit never goes out of style.",[
["iOS 6 to iOS 7 (2013)","Apple moved from leather and paper textures to flat, clean design.","The famous shift from skeuomorphism to flat."],
["Material Design (2014)","Google added shadows and layers to flat design to show depth.","A middle path."],
["Neumorphism","Soft, raised shapes were popular on Dribbble around 2020, but buttons often lacked contrast.","Trendy, but bad for accessibility.","bad"]]];
/* INTERACTION */
X["Microinteraction"]=["The click of a good pen. Tiny, but it tells you something happened and feels satisfying.",[
["Instagram heart","Double-tap a post and a heart pops.","Confirms the like instantly with personality."],
["Toggle switches","iOS switches slide and change colour.","Clear on/off state."],
["Pull to refresh","The spinner appears as you pull, and the feed updates.","A tiny interaction with clear feedback."]]];
X["Easing"]=["A car that speeds up and slows down smoothly feels natural; one that jumps to full speed and stops dead feels jarring.",[
["Bottom sheets","Sheets slide in fast and slow down at the end (ease-out).","Feels responsive and natural."],
["Linear motion","Elements moving at constant speed look mechanical.","Rarely used for UI.","bad"],
["Material motion","Google’s Material guidelines define standard easing curves.","Consistency across apps."]]];
X["Duration"]=["A door that opens in half a second feels normal; one that takes three seconds feels broken.",[
["Typical timings","Button feedback around 100–200 ms, sheets and page transitions around 250–350 ms.","Fast enough to feel instant, slow enough to see."],
["Frequent actions","Actions people repeat many times a day should animate very quickly or not at all.","Slow animations become irritating."],
["Long splash animations","Apps showing a 4-second logo animation every launch.","Users wait for nothing.","bad"]]];
X["Spring animation"]=["A rubber band: pull it and let go, it snaps back with a little bounce, and you can grab it mid-motion.",[
["iOS","Apple uses spring animations widely, for app launches, sheets and scrolling bounce.","Motion feels physical and responds to your finger’s speed."],
["Swipe cards","Dating apps snap a card back if you don’t swipe far enough.","Springs make gestures feel connected."],
["Interruptible","You can grab a moving sheet mid-animation.","Springs handle interruptions naturally."]]];
X["Choreography and stagger"]=["Dancers entering one after another instead of all at once, so you can follow them.",[
["Lists loading","Items appear a few milliseconds apart, top to bottom.","The eye follows the order."],
["Page entrance","Title first, then content, then image.","Guides attention."],
["Too much stagger","A list where the last item appears a full second later.","Feels slow.","bad"]]];
X["Interaction states"]=["A traffic light has several states, and every one must be clear. A button does too.",[
["Material and iOS buttons","Default, pressed, focused, disabled and loading states are all defined in the system.","Every state is designed, not left to chance."],
["Keyboard focus","A visible ring when you Tab to a button.","Essential for keyboard users."],
["Missing loading state","A button that stays clickable during submission.","Leads to double payments.","bad"]]];
X["Thumb zone"]=["Reaching things on a high shelf versus a counter at waist height.",[
["Bottom navigation","Most Indian apps (Swiggy, Zomato, PhonePe) put main tabs and buttons at the bottom.","Easy to reach one-handed."],
["Steven Hoober","Research on how people hold phones showed most use one hand often.","The source of thumb-zone thinking."],
["Top-right actions","Key actions in the top corner of a large phone.","Hard to reach one-handed.","bad"]]];
X["Interaction cost"]=["The total effort of a task: walking, searching, thinking and waiting, not just steps.",[
["Fewer screens vs harder screens","Three simple screens can beat one crowded screen.","Count effort, not just taps."],
["Autofill","Phone keyboards and browsers filling OTP codes automatically.","Removes reading and typing."],
["Hidden menus","Settings hidden three menus deep.","High cost to reach a common task.","bad"]]];
X["Modal vs non-modal"]=["A modal is a guard stopping you at a gate until you answer. Non-modal is a notice board you can glance at while walking.",[
["Delete confirmation","‘Delete 47 photos?’ needs a decision, so a modal is fine.","Modals for critical choices."],
["Saved toast","‘Saved’ appears briefly while you keep working.","Non-modal for information."],
["Pop-up abuse","Newsletter pop-ups appearing as soon as a page loads.","Interrupting before giving value.","bad"]]];
X["Toast and snackbar"]=["A shopkeeper saying ‘done!’ as you walk out. Short, informative, no need to stop.",[
["Gmail","‘Conversation archived. Undo.’","A snackbar with one action."],
["Android","Toasts confirm simple actions, like ‘Copied to clipboard’.","Quick feedback."],
["Errors in toasts","A payment error shown in a toast that vanishes in 3 seconds.","People miss it.","bad"]]];
X["Inline validation"]=["A teacher checking each answer as you write instead of marking the whole paper at the end.",[
["UPI ID field","Shows ‘Looks like name@bank’ if the format is wrong, right below the field.","Fix it immediately, in place."],
["Password strength","Shows which rules are met as you type.","Guides users rather than rejecting them."],
["Too early","Showing ‘invalid email’ after the first letter.","Feels like being scolded mid-sentence.","bad"]]];
X["Smart defaults"]=["A waiter who remembers you always order chai with less sugar.",[
["Last address","Food apps pre-select your last delivery address.","Most people order to the same place."],
["Google Calendar","New events default to 30 minutes or 1 hour.","The common choice is pre-filled."],
["Location-based","Weather apps open on your current city.","Context makes the default correct more often."]]];
X["Forgiving formats"]=["A ticket counter that accepts both ‘Delhi’ and ‘New Delhi’.",[
["Card numbers","Payment forms that accept spaces in card numbers.","Users type the way it appears on the card."],
["Search","Google understands typos and suggests ‘Did you mean’.","Forgiving search."],
["Strict date fields","Forms rejecting ‘1/2/2026’ because they want ‘01/02/2026’.","Pushes work onto users.","bad"]]];
X["Undo vs confirm"]=["A pencil with an eraser is better than someone asking ‘are you sure?’ before every line.",[
["Gmail Undo","Undo send and undo archive instead of confirmation dialogs.","Flow stays fast and mistakes are fixable."],
["WhatsApp ‘Delete for everyone’","Lets you take back a message after sending.","A form of undo for a social mistake."],
["Confirm fatigue","‘Are you sure?’ on every action.","People click yes without reading.","bad"]]];
X["Onboarding patterns"]=["Learning to drive with an instructor beside you as situations come up, rather than reading the whole manual first.",[
["Duolingo","Starts you in a lesson within seconds and asks for sign-up after you’ve tried it.","Show value before asking for effort."],
["Contextual tips","Gmail showing a hint about swipe actions when you first view your inbox.","Teach at the moment of need."],
["Long tours","Five-screen product tours before you can use anything.","Most people skip them and remember nothing.","bad"]]];
X["Navigation patterns"]=["A building’s signage: clear room numbers and lift directions versus hidden doors.",[
["Bottom tab bar","Instagram, Swiggy and PhonePe use bottom tabs for main areas.","Always visible and easy to reach."],
["Hamburger menu","Facebook moved away from a hamburger menu toward tab bars on iOS in 2013 as part of its navigation changes.","Hidden menus reduce discovery."],
["Breadcrumbs","Amazon shows Electronics > Phones > Accessories on web.","Users know where they are."]]];
X["Bottom sheet"]=["A tray slid in front of you at a counter, so you choose without leaving your seat.",[
["Google Maps","Place details slide up from the bottom while the map stays visible.","Keeps context."],
["Payment options","Choosing UPI app or card in a sheet during checkout.","Users don’t lose their cart."],
["Uber","Ride options shown in a sheet over the map.","Map and choices together."]]];
X["Infinite scroll vs pagination"]=["A never-ending buffet line versus a numbered menu you can go back to.",[
["Instagram feed","Infinite scroll suits browsing with no specific goal.","Endless discovery."],
["Google Search","Results were paginated for years; Google later moved to continuous scrolling, then back to pages on desktop in 2024.","Even big companies change approach based on use."],
["Shopping comparison","Infinite scroll makes it hard to return to item 37.","Pagination or ‘Load more’ helps.","bad"]]];
X["Gesture"]=["Waving to a friend. Understood, but only if they’re looking and know your gesture.",[
["Swipe to delete","iOS Mail and Gmail support swiping to archive or delete.","Fast for those who know."],
["Hidden gestures","If the only way to delete is a swipe, many users never find it.","Always provide a visible option too.","bad"],
["Pinch to zoom","Universal on maps and photos.","Gestures work best when they’re standard."]]];
X["Haptic feedback"]=["A gentle tap on your shoulder confirming ‘got it’.",[
["Apple Pay","A subtle vibration and tick when payment succeeds.","Physical confirmation."],
["iPhone keyboard","Optional haptic feedback on typing.","Confirms key presses."],
["Overuse","Buzzing on every scroll or tap.","Annoying and meaningless.","bad"]]];
/* STATES */
X["Happy path"]=["Planning a trip assuming every train is on time and the weather is perfect.",[
["Checkout","Add item → pay → success. Everything works.","Usually designed first."],
["Portfolios","Many student portfolios show only the happy path.","Interviewers want more.","bad"],
["Interview line","‘That’s the happy path. Let me show what happens when payment fails.’","Instantly sounds more experienced."]]];
X["Unhappy path"]=["Planning for a delayed train: what will you do, who will you call, where will you wait?",[
["UPI timeout","Payment times out. The screen says whether money was deducted and when it will be refunded.","Trust is won or lost here."],
["Expired session","User is logged out mid-checkout, but the cart is saved.","Recovery without starting over."],
["Denied permission","User denies location access; the app asks them to enter an area instead.","A path forward, not a dead end."]]];
X["Edge case"]=["A restaurant that can seat 2 or 20, but what about 1 person, or 60?",[
["Long names","A merchant called ‘Sri Venkateshwara Super Market and General Stores’ in a card built for ‘Dmart’.","Does it truncate, wrap or break?"],
["Zero and huge counts","0 orders versus 4,000 orders in order history.","Both must look right."],
["No profile photo","Initials or a default avatar instead of a broken image.","Every app needs a fallback."]]];
X["Corner case"]=["Your train is delayed, and your phone is dying, and it’s raining. Several problems at once.",[
["Offline during payment","Network drops at the exact moment of paying.","The app must check status when it reconnects."],
["Expired card during auto-renewal at midnight","Two edge conditions overlapping.","Rare, but painful if unhandled."],
["Why they matter","Bugs and angry reviews often come from corner cases.","Thinking about them shows depth."]]];
X["Stress case"]=["Not just unusual data, but people in difficult moments: grief, panic, emergencies.",[
["Facebook ‘Year in Review’ (2014)","Showed a user a celebration-styled collage featuring his daughter who had died that year.","Eric Meyer’s experience led to the ‘design for crisis’ idea.","bad"],
["Lost card","A user blocking a stolen card in a panic needs the option in two taps, not hidden in settings.","Design for the stressed version of the user."],
["Health apps","Period trackers predicting periods for users who are pregnant or have had a loss.","Sensitive context needs options to pause or adjust."]]];
X["Empty state"]=["An empty shop shelf with a sign ‘New stock arriving Friday’ is better than an empty shelf with no sign.",[
["First use","Notion and Canva show templates when you have no documents.","Turns an empty screen into a starting point."],
["No search results","Amazon suggests related items or checking spelling when nothing matches.","Never a dead end."],
["Cleared inbox","Gmail’s empty inbox and Superhuman’s ‘Inbox zero’ visuals reward finishing.","Celebrates a user-cleared state."]]];
X["Loading state"]=["A waiter saying ‘your food is being cooked’ instead of disappearing.",[
["Skeletons","LinkedIn and YouTube show grey shapes of the content while it loads.","You know what’s coming."],
["Spinners","Used when the layout can’t be predicted, like a quick search.","Short waits only."],
["Progress bars","WhatsApp shows progress for downloading large files.","For waits that can be measured."]]];
X["Skeleton screen"]=["Seeing chairs and tables set out before guests arrive, so you know where everyone will sit.",[
["YouTube","Grey boxes for thumbnails and lines for titles.","Perceived wait is shorter."],
["Facebook","Was one of the early large apps to use skeleton screens widely.","Popularised the pattern."],
["Prevents jumps","Content fills in the same places as the skeleton.","No layout shift."]]];
X["Optimistic UI"]=["Saying ‘sent!’ the moment you post a letter, trusting it will arrive.",[
["Instagram likes","The heart fills instantly even before the server confirms.","Feels fast."],
["WhatsApp messages","Message appears with a clock icon, then a tick when sent.","Optimistic, with honest status."],
["Never for money","Showing ‘Payment successful’ before the bank confirms.","Dangerous if it fails.","bad"]]];
X["Error state"]=["A good doctor tells you what’s wrong, whether it’s serious, and what to do next.",[
["Good payment error","‘Your bank didn’t respond. No money was taken. Try again or use another UPI app.’","What happened, is money safe, what next."],
["Bad error","‘Error 500. Something went wrong.’","No explanation, no next step.","bad"],
["Inline field errors","‘Pin code should be 6 digits.’ under the field.","Specific and in place."]]];
X["Partial state"]=["A meal arrives with everything except the bread. The waiter tells you it’s coming instead of taking the whole plate away.",[
["Order page","Order details load, but live tracking fails. Show the order with ‘Tracking unavailable, retrying’.","Don’t hide everything because one part failed."],
["Profile","Name added but no photo.","Design for half-complete data."],
["Dashboards","One chart fails to load while others work.","Isolate the failure."]]];
X["Success state"]=["A receipt after paying at a shop. Proof, plus what to do next.",[
["Google Pay / PhonePe","Big tick, amount, recipient, time and transaction ID, with a share button.","Users screenshot it as proof."],
["Swiggy order placed","Shows ETA and what’s next.","Success plus next step."],
["Silent success","A form that just reloads with no confirmation.","Users aren’t sure it worked.","bad"]]];
X["Pending state"]=["Waiting for exam results: you need to know when they’re coming and where to check.",[
["UPI pending","‘Payment pending. Usually resolves within a few minutes. If it fails, money is returned to your account.’","Reduces panic."],
["Refunds","Amazon shows refund status with expected days.","Expectation plus a way to check."],
["Bad pending","A spinner with no explanation for hours.","Users call support or retry.","bad"]]];
X["Offline state"]=["A shop that still lets you browse when the card machine is down, and tells you clearly you’ll need cash.",[
["Google Maps offline","Lets you download maps to use without internet.","Planned offline use."],
["WhatsApp","Messages queue with a clock icon and send when connected.","Writes queued, status shown."],
["YouTube downloads","Videos saved for offline watching.","Common in low-connectivity markets like India."]]];
X["Permission priming"]=["A neighbour explaining ‘Can I borrow your ladder? I need to clean the water tank’ before asking.",[
["Location","Swiggy explains it needs location to find restaurants that deliver to you, before the system popup.","Higher acceptance."],
["Notifications","Apps ask ‘Want updates when your order arrives?’ before the system prompt.","The user sees the benefit first."],
["iOS reality","If users deny the system prompt, the app can’t ask again; they must go to Settings.","So the first ask must count."]]];
X["Locked and paywall state"]=["A museum showing a preview of the special exhibition through a glass door.",[
["LinkedIn Premium","Shows you there are people who viewed your profile but blurs details.","Shows value being locked."],
["Spotify free","Shows premium features with ‘Get Premium’ prompts in context.","Locked, not hidden."],
["Dead ends","A blank page saying ‘Upgrade to access’.","No reason to upgrade.","bad"]]];
X["Disabled state"]=["A closed shop shutter with a note ‘Back at 4 pm’ versus a shutter with no note.",[
["Pay button","Disabled with ‘Enter an amount’ shown beneath.","Explains how to enable it."],
["Sold-out sizes","Myntra shows sold-out sizes crossed out, sometimes with ‘Notify me’.","Disabled, with a path forward."],
["Mystery greys","A greyed button with no reason.","Users don’t know what to do.","bad"]]];
X["Destructive action"]=["Before shredding documents, someone reads the list out: ‘These 3 files, gone forever. Sure?’",[
["GitHub","Deleting a repository requires typing its name.","Friction proportional to the damage."],
["Google account deletion","Explains exactly what data will be lost.","Clear consequences."],
["Red buttons","Destructive actions in red, separate from safe ones.","Visual warning."]]];
X["Expired state"]=["An expired coupon at a shop counter: the cashier tells you why and offers today’s deal.",[
["Magic links","‘This link has expired. Send a new one.’ with a button.","Easy recovery."],
["Sessions","Banking apps log you out after inactivity but keep you on the same page after login.","Security without losing work."],
["Offers","Expired coupon codes suggesting current offers.","Turns a dead end into a path."]]];
X["Content stress testing"]=["Trying on clothes in different poses, not just standing still in the mirror.",[
["Long names","Testing cards with ‘Venkatanarasimharajuvaripeta’ as a place name.","Real Indian place names can be very long."],
["Emoji and scripts","Names with emoji, Hindi, Tamil or Arabic text.","Fonts and line heights must handle them."],
["Lorem ipsum","Designing only with short fake text.","Breaks when real content arrives.","bad"]]];
X["Localisation"]=["Translating a menu isn’t enough. Prices, portions and even which dishes you show change by city.",[
["Indian numbers","₹1,50,000 (Indian grouping) versus 150,000.","Format matters to users."],
["Text length","German text is often much longer than English; Hindi needs more line height.","Layouts must flex."],
["Right-to-left","Arabic and Urdu layouts mirror the interface.","Icons like back arrows flip too."]]];
X["Graceful degradation"]=["If the lift breaks, the stairs still work.",[
["Maps fail","If the map doesn’t load, show the address as text.","Core info survives."],
["Images fail","Show alt text or a placeholder instead of a broken icon.","The page still makes sense."],
["Slow networks","Lite modes like Facebook Lite for weak connections.","Experience shrinks, doesn’t break."]]];
X["Defensive design"]=["Childproof medicine bottles: designed for what will go wrong.",[
["Auto-save","Google Docs saves continuously.","Crashes don’t lose work."],
["Double-tap protection","Disable the pay button after the first tap.","Prevents double payments."],
["Clear undo","Gmail Undo for accidental actions.","Expect mistakes."]]];
X["UI stack (Scott Hurff)"]=["A dish isn’t ready until you’ve checked it hot, cold, spicy and mild. A screen isn’t ready until all five states are designed.",[
["Orders screen","Ideal (orders listed), empty (no orders yet), loading (skeleton), partial (one failed to load), error (couldn’t connect).","Every state designed before handoff."],
["Scott Hurff","Popularised in his article ‘Why your user interface is awkward’.","Good reference."],
["Interview signal","Showing all five states for one screen in your portfolio.","Instantly signals maturity."]]];
