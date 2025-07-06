const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = 'https://link.winna.com/tg-webapp';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '🚀 Start the Winna Telegram App', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: '🌐 Play Now!',
          web_app: { url: WEBAPP_URL }
        }
      ]]
    }
  });
});
