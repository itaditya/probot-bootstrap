const config = require('./utils/config')
const checkSetup = require('./utils/checkSetup')
const { informRevertStarted, informIncorrectSetup, informRevertEnded } = require('./utils/conversation')
const { removeLabelsFromRepo } = require('./utils/labels')

const task = async (context, {labels}) => {
  await removeLabelsFromRepo(context, labels)
  informRevertEnded(context)
}

module.exports = async context => {
  informRevertStarted(context)
  const c = await config(context)
  checkSetup(c) ? task(context, {labels: c.labels}) : informIncorrectSetup(context)
}
