import chalk from 'chalk'
import figlet from 'figlet'
import boxen from 'boxen'

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
	console.log(
		boxen(chalk.yellow(
			figlet.textSync('Ginit')), {
			width: 25,
			textAlignment: 'center'
		})
	)
}

function boxError(_err) {
	console.error(
		boxen(_err, {
			borderColor: 'redBright',
			borderStyle: 'bold',
			title: 'ERROR',
			titleAlignment: 'right',
			padding: 0.5
		})
	)
}

export { ginitAnnounce, boxError }
