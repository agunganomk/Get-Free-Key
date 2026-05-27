const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = process.env.PORT || 3000;

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true }); // Pakai polling, lebih simple

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Halo! Bot berjalan di Render 🚀");
});

bot.on('message', (msg) => {
  if (msg.text !== '/start') {
    bot.sendMessage(msg.chat.id, "Ketik /start untuk mulai");
  }
});

app.get('/', (req, res) => {
  res.send('Bot Telegram aktif!');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});