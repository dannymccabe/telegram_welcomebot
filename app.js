const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', (message) => {
    let chat_id = message.from.id;

    // middlewear
    // dialogue flow

    bot.sendMessage(chat_id, "Hello from Node.JS");
})

