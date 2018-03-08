# How to contribute

It is paramount to the development of `ng-faker` that the community is empowered to make changes and get them into the library. Here are some guidelines to make that process a cake walk.

## Reporting issues

To report a bug, request a feature, or even ask a question, make use of the GitHub Issues
section for [ng-faker][issues]. When submitting an issue please take the following steps:

1. **Seach for existing issues.** Your question or bug may have already been answered or fixed, be sure to search the issues first before putting in a duplicate issue.

2. **Create an isolated and reproducible test case.** If you are reporting a bug, make sure you also have a minimal, runnable, code example that reproduces the problem you have.

3. **Include a live example.** After narrowing your code down to only the problem areas, make use of [repl.it][repl] or a link to your live site so that we can view a live example of the problem.

4. **Share as much information as possible.** Include browser version affected, your OS, version of
the library, steps to reproduce, etc. "X isn't working!!!1!" will probably just be closed.

## Contributing Changes

### Setting Up

To setup for making changes you will need to take a few steps, we've outlined them below:

1. Ensure you have [node][node] and npm installed.

2. Fork the [ng-faker][ng-faker] repository, if you are unsure how to do this GitHub has a guides for the [command line][fork-cli] and for the [GitHub Client][fork-gui].

3. Next, run `npm install` from within the clone of your fork. That will install all dependencies necessary to build ng-faker.


### Making a Change

Once you have the repository on your machine and have installed dependencies you are almost ready to make your change(s). The only other thing to do before you start is to checkout to the correct branch. Which branch you should make your change to (and send a PR to) depends on the type of change you are making.

Always make your change to `develop` as it is the branch for QA testing and feature compilation before pushing to master.

Your change should be made directly to the branch in your fork, or to a branch in your fork made off of one of the above branches.

### Testing Your Change

You can run these tests by running `npm run test` from the command line. If you fix a bug please add a test that will catch that bug if it ever happens again. This prevents regressions from sneaking in.

### Submitting Your Change

After you have made and tested your change, commit and push it to your fork. Then, open a Pull Request from your fork to the main `ng-faker` repository on the branch you used in the `Making a Change` section of this document.

## Quickie Code Style Guide

`ng-faker` adheres stricty to the [eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base) style guide. Read below for a quickie style guide:

- Rely heavily on ES5 style of writing code.
- Indentation of two spaces

[issues]: https://github.com/BolajiOlajide/ng-faker/issues
[ng-faker]: https://github.com/BolajiOlajide/ng-faker
[repl]: http://repl.it
[node]: https://nodejs.org/en/
[fork-cli]: https://help.github.com/articles/fork-a-repo/
[fork-gui]: https://guides.github.com/activities/forking/

## Support

`ng-faker` relies on [commonJS](http://www.commonjs.org/) standard and supports node.js.
Keep this in mind, when modifying and/or extending the sources.

# Important

* Please make sure that you run both `gulp` and tests before making a PR.

## Contributor Code of Conduct

[Code of Conduct](CONTRIBUTOR_CONVENANT.md) is adapted from [Contributor Covenant, version 1.4](http://contributor-covenant.org/version/1/4)
