# Week 03 Report

## Completed

- Learn HTTP Clients (TypeScript) — all chapters
- Task T3: typed API client with retries, timeout and in-memory cache
- PR: <link>

## In Progress

- Learn TypeScript (chapters 6–15) — carrying over to next week

## Key Takeaways

- Typing the response shape at the boundary means the rest of the code never
  guards against unexpected fields — the check happens once, where data enters.
- Retrying blindly makes failures worse. Backoff spaces attempts out, and only
  transient failures are worth retrying at all.
- A timeout is separate from a retry: without one, a hanging request blocks
  indefinitely and no retry policy ever fires.
- A short in-memory cache removes most duplicate requests without any
  invalidation logic, because entries expire on their own.
- Modelling errors as types rather than strings lets the caller handle each
  case explicitly instead of parsing messages.

## Challenges

- Untracked files on main blocked a branch switch. Used `git stash -u` to set
  them aside, switched, then restored them.
- `node_modules` was still being picked up at the repository root. Confirmed
  `.gitignore` coverage before committing.

## Self-assessment

**4/5** — HTTP Clients and T3 are complete and the branch workflow is cleaner
this week. TypeScript 6–15 is still outstanding and carries into week 4.

## Hours

Required: ~28 · Optional: ~4

## Questions for next week

- With TypeScript 6–15 carrying over, should I finish it before starting the
  Pokedex project, or run it alongside Learn SQL during week 4?
