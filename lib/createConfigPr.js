const branch = 'bootstrap-config-branch'

const createBranch = async(context, { owner, repo }) => {
  const refResponse = await context.github.gitdata.getReference({ owner, repo, ref: 'heads/master' })
  const { sha } = refResponse.data.object
  return context.github.gitdata.createReference({ owner, repo, ref: `refs/heads/${branch}`, sha })
}

const createFile = async(context, { owner, repo }) => {
  return context.github.repos.createFile({
    owner,
    repo,
    path: '.github/bootstrap.yml',
    message: 'create bootstrap.yml config file',
    content: 'X2V4dGVuZHM6IC5naXRodWINCg==',
    branch
  })
}

const createPR = async(context, { owner, repo }) => {
  await context.github.pullRequests.create({
    owner,
    repo,
    head: branch,
    base: 'master',
    title: '[bootstrap] PR to setup config',
    body: 'Merge this PR to set the basic config of bootstrap bot',
    maintainer_can_modify: true
  })
}

module.exports = async(context) => {
  const { owner, repo } = context.repo()

  await createBranch(context, {owner, repo})
  await createFile(context, { owner, repo })
  await createPR(context, { owner, repo })
}
