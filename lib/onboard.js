const { informInstallSuccess } = require('./utils/conversation')

module.exports = async (context, {type}) => {
  let owner, repos
  if (type === 1) {
    owner = context.payload.installation.account.login
    const userId = context.payload.installation.account.id
    const reposResponse = await context.github.apps.getInstallationRepositories({user_id: userId})
    repos = reposResponse.data.repositories
  }
  if (type === 2) {
    owner = context.payload.installation.account.login
    repos = context.payload.repositories_added
  }

  repos.forEach(({name}) => {
    const c = Object.create(context)
    c.repo = () => ({owner, repo: name})
    informInstallSuccess(c)
  })
}
