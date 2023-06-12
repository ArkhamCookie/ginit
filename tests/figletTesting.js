import figlet from 'figlet'

function figletBasic(text) {
	figlet(text, function(err, data) {
		if (err) {
			console.log('Something went wrong, what did you do?')
			console.dir(err)
			return
		}
		console.log(data)
	})
}

function figletPrintMetadata() {
	figlet.metadata('Standard', function(err, options, headerComment) {
		if (err) {
			console.log('Something went wrong, what did you do?')
			console.dir(err)
			return
		}
		console.dir(options)
		console.log(headerComment)
	})
}

function figletPrintFonts() {
	figlet.fonts(function(err, fonts) {
		if (err) {
			console.log('Something went wrong, what did you do?')
			console.dir(err)
			return
		}
		console.log(fonts)
	})
}

export { figletBasic, figletPrintMetadata, figletPrintFonts }
