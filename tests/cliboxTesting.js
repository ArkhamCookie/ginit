import boxen from 'boxen'

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

function boxStyle(text, boxenConfig) {
	if (text === undefined) {
		boxError('boxStyle()\nrequires text')
	}
	console.log(text, boxenConfig)
	console.log(boxen(text, boxenConfig))
}

export { boxStyle, boxError }
