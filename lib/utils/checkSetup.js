module.exports = (config) => {
  if (!config) return false
  if (config.labels && !Array.isArray(config.labels)) return false
  return true
}
