import { ginitAnnounce } from '../lib/announce.js'
import { ginitOctokit, octokitGreet } from '../ext/ginit-octokit/index.js'

ginitAnnounce(true, true)

const octokit = ginitOctokit
octokitGreet(octokit)
