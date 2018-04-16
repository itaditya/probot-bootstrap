const config = require('./utils/config')
const { informCorrectSetup, informIncorrectSetup } = require('./utils/conversation')
const checkSetup = require('./utils/checkSetup')

module.exports = async context => {
  const c = await config(context)
  checkSetup(c) ? informCorrectSetup(context) : informIncorrectSetup(context)
}
