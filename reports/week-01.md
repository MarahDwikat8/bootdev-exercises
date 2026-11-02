# Week 01 Report

## Completed
- Learn Linux (7 chapters)
- Learn Git (11 chapters)
- Learn JavaScript (chapters 1–6)
- Task T1: dev environment, public repo, setup.sh
- PR: https://github.com/MarahDwikat8/bootdev-exercises/pull/1

## Key Takeaways
- Most Linux commands take a path, so there is no need to navigate to a file
  before acting on it. `cd` only works on directories.
- Environment variables separate configuration from code. `export` makes a
  variable available to any program started from the shell; prefixing a command
  with a variable sets it for that command only.
- `PATH` is the list of directories the shell searches for executables. This is
  why a command without a path works, and why `./` is needed for a local script.
- Programs compose through text streams. `grep | wc -l` works because neither
  command knows about the other — they both just handle text.
- Exit codes signal success or failure: zero means success, anything else is an
  error. `$?` holds the last one.

## Challenges
- Git Bash was installed but missing from Windows Terminal. Confirmed the binary
  existed with `Test-Path`, then registered it as a terminal profile.
- Overwrote `PATH` with a typo and lost access to every command. Rebuilt it from
  the default directories, then appended the new one with `$PATH:` so the
  existing entries were preserved.
- Working across three environments (Git Bash, WSL/Ubuntu, Boot.dev's browser
  shell) caused files to be created in the wrong place. Settled on a clear split:
  Ubuntu for exercises, Git Bash for the repository.
- Installed WSL 2 and Ubuntu to get a real Linux environment alongside Windows.

## Self-assessment
**4/5** — Completed all required courses and T1, and solved the environment
issues independently. Deliverables were submitted after the Thursday deadline.

## Hours
Required: ~22 · Optional: ~6
## Questions for next week
- Are Vitest unit tests expected for every task, or only where the rubric names them?
- Should Boot.dev exercise solutions be committed per chapter or per course?