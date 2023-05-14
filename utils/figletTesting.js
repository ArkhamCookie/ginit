import figlet from 'figlet'

figlet('ginit', function(err, data) {
	if (err) {
		console.log('Something went wrong, what did you do?')
		console.dir(err)
		return
	}
	console.log(data)
})

figlet.metadata('Standard', function(err, options, headerComment) {
	if (err) {
		console.log('Something went wrong, what did you do?')
		console.dir(err)
		return
	}
	console.dir(options)
	console.log(headerComment)
})

figlet.fonts(function(err, fonts) {
	if (err) {
		console.log('Something went wrong, what did you do?')
		console.dir(err)
		return
	}
	console.log(fonts)
})
