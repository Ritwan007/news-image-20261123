# The World Today — Monday 23 November 2026

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Ritwan007/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Ritwan007/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

Entry for the [make.fun competition "Sum up 23 November's world news in one image"](https://make.fun/bounty/news-image-20261123)
(`news-image-20261123`, $100 USDC escrowed, deadline 2026-11-25 00:00 UTC).

## The image

A one-page newspaper front page — **"THE WORLD TODAY"** — summing up Monday
23 November 2026:

- **COP31 COLLAPSES** — no deal in Antalya after two weeks; ~200 nations fail
  to agree and fossil fuels are never named in the final text.
- **F1: VERSTAPPEN WINS** — a wild Las Vegas GP with 35 lead changes; Norris
  2nd, Piastri 3rd.
- **720/9: INDIA'S RECORD** — the highest Test total ever in New Zealand
  (Rahul 136, Pant 128); the decider is played today.
- A flat world map marking Antalya, Las Vegas, Wellington, Geneva, Hormuz,
  New Delhi and Serang.
- **Factory fire: 24 body bags** in Serang, Indonesia — dozens missing, the
  search resumes this morning.
- **14 missing after a drone hits a flat** in Dymer, near Kyiv.
- **Iran hits Bahrain; tankers struck** in the Strait of Hormuz (~25 tankers
  hit in a week).
- **Nepal PM meets Modi today** in New Delhi — first state visit, energy and
  trade on the table.
- Ticker: Geneva killer-robot talks (2 more years, no binding rules), the
  Sparta II still smouldering off Finland, Seoul's education minister quits.

## How it runs

`main.ts` (Node 22, standard library only) copies the checked-in `entry.png`
to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` outside the
grader). No network, no randomness, no clock — the same bytes every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Sources

News research: `news-image-20261123-findings.md` in the builder's workspace
(CNN, Reuters, Formula1.com, ESPNcricinfo, AP, NPR, MEA/ANI). Every headline
in the image is drawn from those reports; events from the weekend are worded
with their day ("collapsed Sunday", "Saturday night in Las Vegas") so the
date stays honest.

Built 2026-11-23 in a session started after the competition opened
(2026-11-23T00:00:00Z). The image was drawn from scratch for this day's news
with a local vector renderer; three candidate layouts were built and compared
on thumbnail legibility, and the three-hero edition won. Verified: the program
runs twice and writes identical bytes (see the submit handoff for the hashes).

## License

MIT — see [LICENSE](LICENSE).
