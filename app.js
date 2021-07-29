const TelegramBot = require('node-telegram-bot-api');

const fs = require('fs');
const token = fs.readFileSync('.token', 'utf8');
const replies = fs.readFileSync('replies.txt', 'utf8').split('\n');

console.log(token, replies);

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, replies[Math.floor(Math.random()*replies.length)]);
});
