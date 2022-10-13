import TelegramBot from 'node-telegram-bot-api'
import * as dotenv from 'dotenv'
dotenv.config()
import { create } from './hook/fetch.js'
import { button, buttonArr } from './components/button.js'

const bot = new TelegramBot(process.env.TOKEN, { polling: true })
// const data = { name: 'example23' }
button()
const keyMy = {
	reply_markup: JSON.stringify({
		inline_keyboard: buttonArr,
	}),
}

bot.on('message', msg => {
	const text = msg.text
	const cId = msg.chat.id
	if (text === '/start') {
		bot.sendMessage(
			cId,
			`Привіт, ${msg.from.username} 👋\nЯ Juniorc_bot 😉\nРадий тебе бачити, вибирай тему 👇`,
			keyMy
		)
		create(msg.from.username)
	}
})
