import chalk from 'chalk'
import figlet from 'figlet'
import cliBoxes from 'cli-boxes'

let annouce = true
let annouceClear = true

function ginitAnnouce(err) {
	if (err) {
		console.log('Something went wrong, what did you do?')
		console.dir(err)
		return
	}
	if (annouce === true) {
		if (annouceClear === true) {
			console.clear()
		}

		console.log(
			chalk.yellow(figlet.textSync('Ginit', { horizontalLayout: 'full' }))
		)
	}
}

export { ginitAnnouce }
