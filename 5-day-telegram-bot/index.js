const express = require("express");
const axios = require("axios");
const app = express();
const TelegramBot = require('node-telegram-bot-api');

const BOT_TOKEN="7345091785:AAHhZbOXE0QkNSFcEs3Uu4Io00MLGSMQjTI"
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/ceviri/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Lütfen burcunuzu giriniz:');
});

bot.on('text', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text.toLowerCase();
    console.log(text, "TEXT");

    try {
        const response = await axios.get(`http://localhost:6000/get/${text}`);
        const result = response.data;
        bot.sendMessage(chatId, `Burç yorumun sonucu:${JSON.stringify(result)}`);
    } catch (error) {
        console.error("Error fetching horoscope:", error);
        bot.sendMessage(chatId, "Üzgünüm, burç yorumunu alırken bir hata oluştu.");
    }
});

const PORT = process.env.PORT || 4999;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});