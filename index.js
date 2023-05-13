import { existsSync } from 'node:fs'
import chalk from 'chalk'
import { ginitAnnouce } from './lib/annouce.js'
import { gitPlatform } from './lib/gitCredentials.js'

if (existsSync(process.cwd() + '/.git')) {
	console.warn(chalk.bold.red('Git repository already exists.'))
	process.exit(1)
}

ginitAnnouce()

const run = async() => {
	const credentials = gitPlatform
}
