// import process from 'node:process'
import chalk from 'chalk'
import { ginitAnnounce } from '../lib/announce.js'
import { ginitOctokit, octokitGreet } from '../ext/ginit-octokit/index.js'

process.on('exit', (code) => {
	if (code === 10) {
		console.warn(chalk.bold.red('Git repository already exists.'))
	}
})

ginitAnnounce(true, false)

const octokit = ginitOctokit
octokitGreet(octokit)
