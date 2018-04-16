const { informInstallSuccess } = require('./utils/conversation')

module.exports = async context => {
  const owner = context.payload.installation.account.login
  const repos = context.payload.repositories_added
  repos.forEach(({name}) => {
    const c = Object.create(context)
    c.repo = () => ({owner, repo: name})
    informInstallSuccess(c)
  })
}
