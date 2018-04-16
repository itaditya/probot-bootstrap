const config = require('./utils/config')
const checkSetup = require('./utils/checkSetup')
const { informBoostrapStarted, informIncorrectSetup, informBoostrapEnded } = require('./utils/conversation')
const { addLabelsToRepo } = require('./utils/labels')

const task = async (context, {labels}) => {
  await addLabelsToRepo(context, labels)
  informBoostrapEnded(context)
}

module.exports = async context => {
  informBoostrapStarted(context)
  const c = await config(context)
  checkSetup(c) ? task(context, {labels: c.labels}) : informIncorrectSetup(context)
}
