var go = require('go')

go.registerCommand('install', async () => {
  console.log('Answer folowing questions to generate the template')

  const name = (await go.ask('name of the plugin:', { default: 'my-plugin' }))
    .toLowerCase().replace(/[^a-z\d]+/g, '-').replace(/(^-|-$)/g, '')
  const description = await go.ask('short description:')
  const year = (new Date).getFullYear()

  const context = { name, description, year }

  const writeReadme = await go.loadTemplate('README.md')
  const writePackage = await go.loadTemplate('package.json')

  await writeReadme(context, 'README.md')
  await writePackage(context, 'package.json')
})
