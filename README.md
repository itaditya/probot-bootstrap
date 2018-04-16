# react-preview

> a GitHub App built with [probot](https://github.com/probot/probot) that bootstraps your repo with global settings.

## How to Use

We will have be using two repos.
1. `.github` - holds all the global config to be used by every repo which will install the app.
1. `repo-having-app` - it's the repo on which we will install the github app.

Now this is clear, let's go ahead and set things up. The first time you do it, it will feel complicated so hang tight !!

* Create a repo named `.github` if it doesn't exist already.
* In the repo, create a folder named `.github/` in repo root.
* Inside `.github/` folder create a `bootstrap.yml` file.
* Put this code in the `bootstrap.yml`.
```yml
labels:
    - name: bug
      color: CC0000
    - name: feature
      color: 336699
```

> The `bootstrap.yml` will have the shared config. The above steps were one time only. Phew !!

Next we have to configure the repo so it can get bootstrapped.

* Install the github [app](https://github.com/apps/bootstrap) on your repo.
* In the repo create `bootstrap.yml` file inside `.github` folder.
* Put this code in the `bootstrap.yml`.
```yml
_extends: .github
```

> Here we have specify that config has to be read from the .github repo. If you want some configs different for the particular repo mention it after `_extends: .github` line.

## Setup for Development

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this app.
