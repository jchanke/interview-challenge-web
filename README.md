# BibleProject Web Challenge Overview

This is my solution for the [BibleProject Web Challenge](https://github.com/thebibleproject/interview-challenge-web). The goals were to 
 - match the [given image](https://github.com/thebibleproject/interview-challenge-web/blob/main/index.png) as close as possible,
 - when the video thumbnails are clicked, launch a YouTube embed in the right of the hero-banner,
 - make the website responsive, and
 - handle errors gracefully.

View the website [here](https://jchanke.github.io/interview-challenge-web/?debug)!

## Technical highlights

Sharing some technical highlights to document what I learnt from building this. :)

### Highlight 1: Responsive UI
 - Page layout: CSS Grid + Flexbox (video grid), and media queries (hero banner)
 - Video player: the right end of the hero banner (wide screens), and a separate modal (small screens)

### Highlight 2: Error handling
When the query parameter `?debug` is set, clicking on video thumbnails fails with probability 0.3. 
 - Disappearing toast component for error messages: using CSS transitions
 - Simple, custom React hook to display/hide toast (by setting & clearing timeouts)

### Highlight 3: Fun with CSS
 - Hero banner: color gradients using Perlin noise + `radial-gradient` and `linear-gradient` (repsonsive for free!)

## Further improvements
 - _Polish the video thumbnails._ Make a box and set the `background-color` (from returned API data) + put the image on the lower right
 - _Weird zoom-out behaviour._ When zoomed out (a lot), the video grows while everything else shrinks
 - _Toast queue._ Allow the Toast component to have multiple colors (success, info, warning) + with a queue (store multiple timeouts)

## AI usage
I used VSCode's Copilot (GPT-5 Codex) and Claude Code while building this site. As a learning exercise, I kept AI usage to a minimum, using it to suggest ideas  
(for the video player), or to help with configuration & deployment. Instead of copy-pasting code, I asked it to explain components I didn't understand.

I'm now a bit more familiar with working with Claude Code. I liked using it to draft the type interface, summarize changes and draft commit messages, or suggest
possible re-factorings. It wasn't perfect, but seems pretty good with writing components.

I spent aounrd 12-16 hours on this over 2 days, instead of the suggested 6 — but mostly because I had fun and learnt so much from it! :)
