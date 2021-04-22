module.exports = async (path) => {
  require('dotenv').config()
  const { Telegraf } = require('telegraf')
  const botToken = process.env.BOT_TOKEN
  const bot = new Telegraf(botToken)

  bot.start((ctx) => ctx.reply('bot on nuxt is here!'))

  const webhookUrl = 'https://dev7-kaido-team.loca.lt' + path
  await bot.telegram.setWebhook(webhookUrl)
  bot.launch()
  return bot.webhookCallback(path)
}
