const addLabelsToRepo = async (context, labels) => {
  const { owner, repo } = context.repo()
  const promises = labels.map(({name, color}) => context.github.issues.createLabel({owner, repo, name, color}))
  await Promise.all(promises)
}

const removeLabelsFromRepo = async (context, labels) => {
  const { owner, repo } = context.repo()
  const promises = labels.map(({name}) => context.github.issues.deleteLabel({owner, repo, name}))
  await Promise.all(promises)
}

module.exports = {
  addLabelsToRepo,
  removeLabelsFromRepo
}
