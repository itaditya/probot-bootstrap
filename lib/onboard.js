const { informInstallSuccess } = require('./utils/conversation')
const createConfigPr = require('./createConfigPr')

module.exports = async (context) => {
  const { payload } = context
  const owner = payload.installation.account.login
  const repos = payload.repositories || payload.repositories_added

  repos.forEach(({name: repo}) => {
    const c = Object.create(context)
    c.repo = () => ({owner, repo})
    informInstallSuccess(c)
    createConfigPr(c)
  })
}
