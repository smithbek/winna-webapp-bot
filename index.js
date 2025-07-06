const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = 'https://link.winna.com/tg-webapp';
const IMAGE_URL = 'https://winna.fra1.cdn.digitaloceanspaces.com/casino_promotions/telegram%20bot%20banner/Reddit%20-%201920x384%20(2).png'; //

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendPhoto(chatId, IMAGE_URL, {
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
});
