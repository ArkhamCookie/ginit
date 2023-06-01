import fetch from 'node-fetch'
import chalk from 'chalk'
// import fs from 'node:fs'
// import path from 'node:path'
// import https from 'node:https'

// const fileEditorconfig = await fetch(url)
// let fileName = '.editorconfig'
// const body = await fileEditorconfig.text()

async function getFile(url) {
	console.log(chalk.yellow('Start...'))
	const output = await fetch(url).text
	console.log(output)
	console.log(chalk.green.bold('Done'))
	// return output
}

getFile('https://raw.githubusercontent.com/ArkhamCookie/ginit/rigid-marmot-aqua/.editorconfig')

/*
https.get(fileEditorconfig, (res) => {
	const __dirname = path.resolve()
	const downloadPath = __dirname + fileName
	const filePath = fs.createWriteStream(downloadPath)
	res.path(filePath)
	filePath.on('finish', () => {
		filePath.close()
		console.log('Downloaded')
	})
})
*/
