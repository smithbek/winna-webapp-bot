const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = 'https://link.winna.com/tg-webapp';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const welcomeMessage = `
*Welcome to the official Winna Telegram App!*

You can now play on [Winna.com](https://winna.com) — fully integrated inside Telegram 🎉

*Before you start*, please make sure you’re using *@WinnaTelegramApp_Bot* to avoid fake or compromised apps.

If you have any questions, our 24/7 Live Support is ready to help at [Winna.com](https://winna.com).

Good luck, Winna's! 🚀
`;

  bot.sendMessage(chatId, welcomeMessage, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [[
        {
          text: 'Start the Winna Telegram App',
          web_app: { url: WEBAPP_URL }
        }
      ]]
    }
  });
});
