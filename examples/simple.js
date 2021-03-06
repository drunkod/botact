const bodyParser = require('body-parser')
const express = require('express')
const { Botact } = require('../index')

const app = express()

const bot = new Botact({
  confirmation: process.env.CONFIRMATION,
  token: process.env.TOKEN,
  secret: process.env.SECRET
})

app.use(bodyParser.json())

app.post('/', (req, res) => {
  bot.command('start', ({ reply }) => reply('This is start!'))
  bot.command('help', ({ reply }) => reply('Do you need help?'))

  bot.hears('car', ({ reply }) => reply('I love Tesla!'))
  bot.hears('skate', ({ reply }) => reply('Good job, skaterino!'))

  bot.listen(req, res)
})

app.listen(80, () => {
  console.log('Server was started on 80 port...')
})
