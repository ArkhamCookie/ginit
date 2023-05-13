import { existsSync } from 'node:fs'
import process from 'node:process'
import chalk from 'chalk'
import { ginitannounce } from './lib/announce.js'
// import { gitPlatform } from './lib/gitCredentials.js'

process.on('exit', (code) => {
	if (code === 1) {
		console.warn(chalk.bold.red('Git repository already exists.'))
	}
})

if (!existsSync(process.cwd() + '/.git')) {
	process.exit(1)
}

ginitannounce()

/*
const run = async() => {
	const credentials = gitPlatform
}
*/
