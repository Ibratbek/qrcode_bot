const TelegramBot = require('node-telegram-bot-api');
const QRCode = require('qrcode');

const token = '5448753293:AAG9Ez9g3ZM1CKjEXVV0ufxrMf9hXAPIDik';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  const link = await bot.getFileLink(msg.audio.file_id);

  await generatorQR(`http://http://104.200.136.131:3001/qrcode?link=${link}`);

  bot.sendPhoto(chatId, './images/temp.png');
});

const generatorQR = async (text) => {
  try {
    return await QRCode.toFile(`./images/temp.png`, text);
  } catch (error) {
    console.log(error);
  }
};
