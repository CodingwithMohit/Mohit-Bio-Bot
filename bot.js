const telegramBot = require("node-telegram-bot-api");
const token = "7239143989:AAGYCuJQtUaeTSEcsYlwsj-7TjBX_B39ZiQ";

const bot = new telegramBot(token, {
    polling: true
});

bot.on("message", (msg) => {
    bot.sendMessage(msg.chat.id, "Hello bro");
});