import { existsSync } from 'node:fs'
import chalk from 'chalk'
import figlet from 'figlet'
// import { askGithubCredentials } from './lib/inquirer.js'

// console.clear()
console.log(chalk.yellow(figlet.textSync('Ginit', { horizontalLayout: 'full' })))

if (existsSync(process.cwd() + '/.git')) {
	console.warn(chalk.bold.red('Git repository already exists.'))
	process.exit(1)
}

// const run = async() => {
// 	const credentials = await askGithubCredentials
// }
