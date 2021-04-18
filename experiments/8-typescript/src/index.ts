const A = "A";

class Bot {
  readonly botToken: string;

  bot: any;
  botInfo: any;

  constructor({
    botToken,
    redisUrl,
    mongoUrl,
  }: {
    botToken: string;
    redisUrl: string;
    mongoUrl: string;
  }) {
    this.botToken = botToken;
  }

  queues: any; // { pulseQueue, notificationQueue }
  models: any; // { User, Bot }
  redis: any; // redis client
  mongo: any; // mongo connection
  api: any; // express app

  launch() {
    // connectionFactory(mongoUrl, pool)
    this.bot.launch();
    this.api.listen(5000, process.env.HOST);
  }
}

class NotificationBot extends Bot {
  // queues: { notificationQueue }
  // models : { Notification }
}

class PulseBot {
  // queues: { PulseQueue }
}

class SupportBot {
  // models: {SupportTicket}
}

export { A, Bot, NotificationBot, PulseBot };
