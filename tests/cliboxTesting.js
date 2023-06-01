import boxen from 'boxen'
import { boxError } from '../lib/announce.js'

function boxStyle(text, boxenConfig) {
	if (text === undefined) {
		boxError('boxStyle()\nrequires text')
	}
	console.log(text, boxenConfig)
	console.log(boxen(text, boxenConfig))
}

export { boxStyle }

boxError('test')
