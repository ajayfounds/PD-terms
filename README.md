# Product design field guide

An interactive study page for product and UX design interviews: 301 terms across 19 topics, each explained for beginners and for senior conversations.

Live version: https://claude.ai/artifact/DBhMqsZrtuM4Yh9nka1x3Y

## What's in it

Every term has:

- a plain explanation and a technical one
- a "think of it like" comparison from everyday life
- 2–3 real product examples (903 in total), each saying what the product does and why it counts as the term; some are marked "what not to do"
- a sentence you can say in an interview

Topics: metrics and measurement, product strategy, prioritisation and planning, team metaphors and slang, user research, psychology and UX laws, usability principles, visual design, interaction and motion, states and edge cases, accessibility, design systems and handoff, experimentation, growth and business, technical literacy, designing AI products, ethics and trust, how seniors talk, and designing for India.

The page also has:

- a practice deck with "I know this" / "Again later" and progress per topic
- search across terms, explanations and product names
- an interview playbook: structuring a design challenge, walking through a case study, junior vs senior phrasing, questions to ask the interviewer

## Run it

No build step. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server
```

Progress and starred terms are saved in the browser's local storage.

## Files

| File | Contents |
| --- | --- |
| `index.html` | The page: layout, styles and logic |
| `data.js` | Topics (`C`) and terms (`T`): name, topic, plain, technical, short example, interview line |
| `ex1.js` – `ex5.js` | Everyday comparisons and real product examples for every term (`X`) |

## A note on accuracy

Some company details (for example the North Star metrics of Airbnb or Spotify) are widely reported rather than officially confirmed, and are worded that way. Thresholds such as contrast ratios and target sizes come from WCAG 2.2, Apple's Human Interface Guidelines and Material Design. Check a current source before quoting an exact figure.
