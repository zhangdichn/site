---
title: Contributor Guide
sidebar_position: 2
---

## Submit an issue

1. Before submitting your issues, please go through a comprehensive search to make sure the problem cannot be solved just by searching.
1. Check the Issue List to make sure the problem is not repeated.
1. Create a new issue and choose the type of issue.
1. Define the issue with a clear and descriptive title.
1. Fill in necessary information according to the template.
1. Choose a label after the issue is created.
1. Please pay attention to your issue, you may need to provide more information during discussion.

## Developer Flow

### Fork repo

Fork the BeyondStorage repo to your repo to work, then setting proper upstream.

Take [go-storage](https://github.com/beyondstorage/go-storage) as an example:

```shell
# Clone the forked repo to local, replace the username with your github login.
# Clone the forked repo to local, replace the username with your github login.
git clone git@github.com:<username>/go-storage.git
# Setup beyondstorage/go-storage as a new remote called upstream.
git remote add upstream git@github.com:beyondstorage/go-storage.git
git remote add upstream git@github.com:beyondstorage/go-storage.git
```

### Choose an issue

1. Please choose your target issue. Please choose your target issue. If it is a new issue discovered or a new function enhancement to offer, please create an issue and set the right label for it.
1. After choosing the relevant issue, please reply with a deadline to indicate that you are working on it.
1. Depends on your working on projects, please ping different groups to give you feedback about your PR or issue in time.

For go-storage related projects (including `go-storage` and `go-service-*`):

- `@go-storage-maintainer`
- `@go-storage-committer`
- `@go-storage-reviewer`

For `BeyondTP`:

- `@beyond-tp-maintainer`
- `@beyond-tp-committer`
- `@beyond-tp-reviewer`

For other projects, there are no dedicated teams responsible for, our community members will try our best.

### Create your branch

Switch to your forked master branch, pull codes from upstream, then create a new branch.

Notice: **Every time you try to fix an issue, you should update the upstream and checkout from the master branch to make sure your code is up to date.**
```shell
git checkout master
git pull upstream master
git checkout -b IssueNo
```

### Coding

1. Please obey the Code of Conduct during the process of development and finish the check before submitting the pull request.
1. Then push codes to your fork repo.

```shell
git add modified-file-names
git commit -m 'commit message'
git push origin <IssueNo>
```

### Submit PR

1. Send a pull request to the master branch.
1. Make sure that the pull request title has a semantic prefix like `fix:` or `feat:` or any other [conventional commit types](https://github.com/commitizen/conventional-commit-types/blob/master/index.json).
1. Add `fix #xxx` or `close #xxx` in PR description to link to the related issues.
1. The mentor will do a code review before discussing some details (including the design, the implementation, and the performance) with you.
1. Then congratulate you to be an official contributor of BeyondStorage.

## Notice

- Please note that to show your ID in the contributor list, please DO NOT forget to set the configurations below:

    ```shell
    git config --global user.name "username"
    git config --global user.email "mail address"
    ```
- Please don't do a force push.
    - We will use `squash merging` for all our projects, so there is no need to do a force push to re-organize the commit history.
    - Besides, force push makes it hard for the reviewer to track the changes.

---

> This guide is highly inspired by [Apache APISIX](https://apisix.apache.org/docs/general/contributor-guide)
