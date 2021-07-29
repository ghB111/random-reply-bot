import TelegramBot from "node-telegram-bot-api";
import * as fs from 'fs';

const token: string = fs.readFileSync('.token', 'utf8').split('\n')[0];
const replies: string[] = fs.readFileSync('replies.txt', 'utf8').split('\n');

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, replies[Math.floor(Math.random()*replies.length)]);
});
