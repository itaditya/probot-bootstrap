const availableCommandsMessage = `
    /check - see if you have setup everything correctly.

    /bootstrap - start the bootstrap process.

    /revert - undo the bootstrap process.

    /help - to get this list of commands.
`

const informInstallSuccess = async (context) => {
  const { owner, repo } = context.repo()
  console.log('owner, repo', owner, repo);

  const informMessage = `@${owner}, the app has been installed on this repo successfully.
You can use this issue to communicate with the app.
Here is a list of things you should try.

${availableCommandsMessage}
`

  await context.github.issues.create({
    owner,
    repo,
    title: '[bootstrap] App Installed Successfully',
    body: informMessage
  })
}

const informBoostrapStarted = async (context) => {
  await context.github.issues.createComment(context.issue({
    body: `let's bootstrap this repo :fire:`
  }))
}

const informBoostrapEnded = async (context) => {
  await context.github.issues.createComment(context.issue({
    body: `Heads Up !! Bootstrapping is completed, now you can take your repo for a spin :racehorse: `
  }))
}

const informRevertStarted = async (context) => {
  await context.github.issues.createComment(context.issue({
    body: `reverting the changes made by me in this repo :cyclone: `
  }))
}

const informRevertEnded = async (context) => {
  await context.github.issues.createComment(context.issue({
    body: `Hey there !! changes have been reverted back :smile: `
  }))
}

const informCorrectSetup = async (context) => {
  await context.github.issues.createComment(context.issue({
    body: `Awesome !! the config is set correctly. :tada: `
  }))
}

const informIncorrectSetup = async (context) => {
  await context.github.issues.createComment(context.issue({
    body: `Sorry !! Bad news, the config is incorrect, don't loose hope though. I'm sure you'll figure something out :smile: `
  }))
}

const informBootstrapNotAllowed = async (context) => {
  await context.github.issues.createComment(context.issue({
    body: `Sorry !! the config is incorrect, so I can't complete the bootstrap process. I'm sure you'll figure out the issue. To verify again use /check command`
  }))
}

const provideHelp = async (context) => {
  await context.github.issues.createComment(context.issue({
    body: `
List of commands available - 
${availableCommandsMessage}
`
  }))
}

module.exports = {
  informInstallSuccess,
  informBoostrapStarted,
  informBoostrapEnded,
  informRevertStarted,
  informRevertEnded,
  informCorrectSetup,
  informIncorrectSetup,
  informBootstrapNotAllowed,
  provideHelp
}
