import select from '@inquirer/select'
// import input from '@inquirer/prompts'

const gitPlatform = await select({
	message: 'Select your git platform: ',
	choices: [
		{
			name: 'github',
			value: 'github',
			description: 'A popular Microsoft owned platform.'
		},
		{
			name: 'gitlab',
			value: 'gitlab',
			description: 'An open-core DevSecOps platform.'
		},
		{
			name: 'local',
			value: 'local',
			description: 'A local git repository.'
		},
		{
			name: 'selfhosted',
			value: 'selfhosted',
			description: 'A local or remote git server that you have access to.'
		},
		{
			name: 'other',
			value: null
		}
	]
})

// if (gitPlatform === 'github') {
// 	console.log(gitPlatform)
// }

// const answer = input({ message: 'Enter your name' })
