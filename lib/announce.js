import chalk from 'chalk'
import figlet from 'figlet'
import boxen from 'boxen'
import { boxError } from '../tests/cliboxTesting.js'

// const announceClear = true

// use to test config options
function ginitAnnounce(announce, announceClear, err) {
	if (err) {
		// console.log('Something went wrong, what did you do?')
		// console.dir(err)
		boxError(console.dir(err))
		return
	}
	if (announce === false) {
		return
	} else {
		if (announceClear === true) {
			console.clear()
		}
	}
	console.log(chalk.yellow(figlet.textSync('Ginit', { horizontalLayout: 'full' })))
	console.log(
		boxen('Ginit', {
			padding: 1
		})
	)
	console.log(
		boxen(chalk.yellow(figlet.textSync('Ginit')), {
			width: 25,
			textAlignment: 'center'
		})
	)
}

export { ginitAnnounce }
