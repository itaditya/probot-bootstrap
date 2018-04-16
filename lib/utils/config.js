const getConfig = require('probot-config')

module.exports = async context => {
  const config = await getConfig(context, 'bootstrap.yml')
  return config
}
