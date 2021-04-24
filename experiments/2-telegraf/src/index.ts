import { Telegraf } from "telegraf";

const Bot = function (this: any, { botToken }: any) {
  this.bot = new Telegraf(botToken);
  this.bot.telegram.getMe().then(console.log);
  this.bot.start((ctx: any) => ctx.reply("telegraf experiment"));
  this.bot.launch();
  this.bot.command("copy", (ctx: any) => {
    const { reply_to_message } = ctx.message;
    // console.log(reply_to_message);
    if (reply_to_message) {
      return ctx.telegram.sendCopy(ctx.from.id, reply_to_message);
    }
  });
  return this;
};

export { Bot };
