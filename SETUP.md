# Development Environment

Setup required to run the exercises in this repository.

## Prerequisites

| Tool | Version | Verify |
|------|---------|--------|
| Node.js | 22.15.0 (LTS) | `node -v` |
| npm | 10.9.2 | `npm -v` |
| Git | 2.45.2 | `git --version` |

## Git Configuration

```bash
git config --global user.name "<MarahDwikat8>"
git config --global user.email "<marahdwk.edu@gmail.com>"
git config --global init.defaultBranch main
```



## Shell

Windows — Git Bash, registered as a Windows Terminal profile:

C:\Program Files\Git\bin\bash.exe -i -l


A Kali Linux VM (VirtualBox) is used for practising commands that require a full
Linux environment, such as `sudo`, `apt` and POSIX file permissions.

## Repository Structure

bootdev-exercises/
├── SETUP.md
├── README.md
└── <course-name>/



One directory per Boot.dev course, one subdirectory per chapter. Guided projects
(Pokedex, Blog Aggregator, Chirpy) live in their own public repositories.

## Workflow

Boot.dev runs in free mode: lessons are read on the site, exercises are solved
locally and committed here. This repository is the record of work.

```bash
git add .
git commit -m "<course>: <what changed>"
git push
```
