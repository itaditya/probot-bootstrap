const commands = require('probot-commands')

const onboard = require('./lib/onboard')
const check = require('./lib/check')
const bootstrap = require('./lib/bootstrap')
const revert = require('./lib/revert')
const { provideHelp } = require('./lib/utils/conversation')

module.exports = (robot) => {
  const app = robot.route('/')
  app.use(require('express').static('public'))

  robot.on('installation.created', context => {
    onboard(context, {type: 1})
  })

  robot.on('installation_repositories.added', context => {
    onboard(context, {type: 2})
  })

  commands(robot, 'check', async(context, command) => {
    if (context.isBot) return
    check(context)
  })

  commands(robot, 'bootstrap', async(context, command) => {
    if (context.isBot) return
    bootstrap(context)
  })

  commands(robot, 'revert', async(context, command) => {
    if (context.isBot) return
    revert(context)
  })

  commands(robot, 'help', async(context, command) => {
    if (context.isBot) return
    provideHelp(context)
  })
}
