## GitHub Finder

An app that connect to the Github API, and list all public repositories from an user, and the last commits for the repositories.

## Run the project

- `git clone git@github.com:artusi/github-finder.git`
- `cd github-finder`
- `yarn install`
- `yarn start`
- Profit ;-) and `yarn test`

## Project stack

- Node: v10.14.1
- NPM: 6.4.1
- Framework: React
- Styleguide: StoryBook
- State manager: Redux
- Styles: CSS Modules
- Tests: Jest
- Router: React router
- ES6: Destructuring easy way to navigate through object, Arrow Functions easier to write (but not to test ;-)), Promises.

## Project progression (Changelog)

**0.0.1 - Hello World**

- Added basic setup with React, StoryBook and CSS
- Adde linters

**0.0.2 - Router**

- Basic router
- Improving tests setup

**0.0.3 - Find user**

- Adding redux store
- Basic requests to GithubApi
- UI SearchField and SubimitButton were added
- Improving test coverage
- Adding a request to mock data because GithubApi has a limit

**0.0.4 - List repos**

- Impoving redux store for repositories
- UI RepoCard added
- Listing repos

**0.0.5 - List commits**

- Impoving redux store for currentRepo
- UI Report added
- Adding new page /:username/:repository
- improving tests

**1.0.0 - R E L E A S E**

- Update READE.ME

**1.1.0 - Sorting repositories**

- Added sorting repos
- UI OptionSelect added
- Impoving redux store for sort

**1.2.0 - Endless scroll**

- Added endless scroll

**1.2.1 - Endless scroll**

- Improving components names
