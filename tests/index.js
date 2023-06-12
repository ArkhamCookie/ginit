import process from 'node:process'
import chalk from 'chalk'
import { ginitAnnounce } from '../lib/announce.js'

process.on('exit', (code) => {
	if (code === 1) {
		console.warn(chalk.bold.red('Git repository already exists.'))
	}
})

ginitAnnounce(true, true)
