import boxen from 'boxen'

function boxStyle(text, boxenConfig) {
	if (text === undefined) {
		console.error(
			boxen('boxStyle()\nrequires text', {
				borderColor: 'redBright',
				borderStyle: 'bold',
				title: 'ERROR',
				titleAlignment: 'right',
				padding: 0.5
			})
		)
		process.exit(1)
	}
	console.log(text, boxenConfig)
	console.log(boxen(text, boxenConfig))
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

export { boxStyle, boxError }
