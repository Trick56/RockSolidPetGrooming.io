# Website maintenance

This is a plain HTML/CSS website. There is no build step or paid review service.

## Preview
From this repository folder run `python -m http.server 8000 --bind 127.0.0.1`, then open http://127.0.0.1:8000/. Stop the server with Ctrl+C when finished.

## Selected Google reviews
Edit the `selected-reviews` section in `index.html`. Each `figure` contains the exact review text, public reviewer name, and individual star rating. Move entire figures to reorder them. Keep about three reviews. Use verified wording; show omissions with an ellipsis if excerpting. Do not add an overall rating, review count, or review structured data.

The owner approved the selection of Ali so, christy pastor, and Ally Goff on October 4, 2026. Publishing is not approved. Their full wording and individual five-star ratings were checked against the business listing on October 4, 2026. Dates were omitted because Google displayed only relative dates.

Source supplied by owner: https://share.google/SY6koQmOG8WJrBc1O
The listing matches the website and phone (910) 620-0097.

The two anchors in `review-links` hold the Google destinations. Both were tested from the local website: the first opens this business's review list; the second opens Google's sign-in prompt for writing a review. No review was submitted. Recheck both links after changing them.

## Gallery (awaiting photos)
Keep originals in `incoming-photos/` (ignored by Git). Do not overwrite originals. The photo preparation process is still pending the first batch. Optimized derivatives will go in `images/gallery/`.

Photo links belong inside `.gallery-grid` in `gallery.html`, in display order. Each link should point to the full viewer derivative and contain an image with meaningful alt text, width/height, and responsive thumbnail sources. Add or remove an entire link to add/remove a photo. The viewer reads this HTML automatically. Ordinary links remain usable without JavaScript. Remove the development notice only after the supplied images are included and checked.

## Publish
Current work is on `feature/gallery-selected-reviews`. Nothing has been pushed or deployed. The repository contains a CNAME for www.rocksolidpetgrooming.com, but its deployment source has not been verified: there are no checked-in workflows, and the unauthenticated GitHub Pages settings endpoint returned 404. Check the repository hosting settings before any push; do not assume which branch deploys. Review the completed preview and obtain explicit owner approval before publishing or merging into production.

## Verification so far
- Reviews checked against Google text and visible individual stars.
- Desktop and 375px mobile review layout inspected; mobile uses a single column without horizontal overflow.
- No browser warnings/errors reported for the local home-page preview.
- Both review links tested, without signing in or submitting a review.
- Intake form markup compared to main; unchanged.
- Gallery viewer behavior, supplied-photo optimization, tablet layout, and full-site acceptance checks remain pending.
