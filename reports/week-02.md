# Week 02 Report

## Completed

- Learn JavaScript (chapters 7–15)
- Learn TypeScript (chapters 1–5)
- Task T2: CLI todo app in TypeScript
- PR:https://github.com/MarahDwikat8/bootdev-exercises/pull/3

## Key Takeaways

- `then()` registers a callback and returns immediately — it does not wait.
  This is why synchronous code written after it runs first.
- `await` is the modern form of `then()`, and `try/catch` replaces `.catch()`.
  A rejected promise inside `await` throws, so error handling is not optional.
- JavaScript is single-threaded but non-blocking: the call stack must empty
  before the event loop runs anything, and all microtasks (promise callbacks)
  clear before the next macrotask — which is why `setTimeout(fn, 0)` lands
  after `.then()` even when written first.
- Discriminated unions give exhaustiveness checking: adding a new variant
  makes the compiler flag every switch that no longer covers all cases.
- Index signatures keep a type open to future keys, while `readonly` and
  `as const` lock down what must not change. Narrowing where it matters,
  staying flexible where it doesn't, is the actual skill.
- Typing the data model first made the rest of the CLI straightforward —
  the compiler caught mistakes before the code ran.

## Challenges

- Pushed a day's work to the week-01 branch by mistake. Moved the commit to
  main with `cherry-pick`, then reset the remote branch. Settled on a clear
  rule: work on main during the week, branch only on delivery day.
- Staged `node_modules` before realising it should never be committed. Reset
  the staging area and added a `.gitignore` covering `node_modules/`and `dist/`

- Delivery slipped past Thursday. Starting T2 earlier in the week would have
  left room for the report and PR on time.

## Self-assessment

**4/5** — Completed all required courses and T2. The work itself went smoothly;
the gap was pacing, not difficulty.

## Hours

Required: ~22 · Optional: ~3

## Questions for next week

- The plan lists optional courses (File Servers and CDNs, Web Security,
  Pub/Sub). Are any of them worth doing early because they come up again in
  the Laravel phase, or is buffer time better spent on review?
