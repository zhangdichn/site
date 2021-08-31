---
title: How to bump a version
---

Triggering the jobs that will push the new gems by following the steps below.

- Ensure you have the latest merged changes: `git checkout master` and `git pull`.
- Switch to a new branch from master to do the release modification: `git checkout -b <branch name>`.
- Update the `CHANGELOG`: use `compare` to find the changes to the previous version.
- Push the release branch then start a new pull request.
- Check the pull request for dependency update opened by `Dependabot` and merge the updated dependency branch into the release branch if necessary: `git merge dependabot/xxx`.
  - `Dependabot` will resolve conflicts and close the pull request for dependency update as long as you don't alter it yourself.
  - You should add the dependency upgrade into the `CHANGELOG`.
- Create a tag after the release branch merged into master: `git tag <tag name>` and `git push origin <tag name>`.