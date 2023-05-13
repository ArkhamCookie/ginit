import chalk from 'chalk'
import figlet from 'figlet'
// import cliBoxes from 'cli-boxes'

const announceClear = true

function ginitannounce(announce, err) {
	if (err) {
		console.log('Something went wrong, what did you do?')
		console.dir(err)
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
		chalk.yellow(figlet.textSync('Ginit', { horizontalLayout: 'full' }))
	)
}

export { ginitannounce }
