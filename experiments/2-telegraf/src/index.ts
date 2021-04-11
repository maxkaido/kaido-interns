import { Telegraf } from "telegraf";

const Bot = function (this: any, { botToken }: any) {
  this.bot = new Telegraf(botToken);
  this.bot.telegram.getMe().then(console.log);
  this.bot.start((ctx: any) => ctx.reply("telegraf experiment"));
  this.bot.launch();
  return this;
};

export { Bot };
