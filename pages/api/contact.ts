import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import TelegramBot from 'node-telegram-bot-api';
import fs from "node:fs";
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!
const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`
export const config = {
    api: {
        bodyParser: false,
    },
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST allowed' })
    }
    const bot = new TelegramBot(TELEGRAM_TOKEN, {polling: false});
    console.log("test")
    try {
        const receivedForm = formidable({
            multiples: true,            // поддержка нескольких файлов
            keepExtensions: true,       // сохранять расширения
            // uploadDir: '/tmp',       // при необходимости — путь сохранения
            // maxFileSize: 50 * 1024 * 1024, // лимит, например 50MB
        })

        const [fields,files] = await receivedForm.parse(req)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const values=Object.values(fields).map((field,i) =>`<b>${Object.keys(fields)[i]}</b> ${field[0]}`).join("\n")
        const form = new FormData();
        form.append('parse_mode', 'html');
        form.append('chat_id', CHAT_ID);
        form.append('text', values); // текст
        if(files.file){
            const file = files.file[0]; // это PersistentFile
            const filePath = file.filepath; // путь к временному файлу
            bot.sendDocument(CHAT_ID, fs.createReadStream(filePath),{
                filename: values,
            });
        }

        await fetch(TELEGRAM_URL, {
            method: 'POST',
            body: form,
        })
        return res.status(200).json({ success: true })

    }
    catch (error) {
        console.log(error)
    }

    // if (!name||!contact ) {
    //     return res.status(400).json({ error: 'Missing `text` in body' })
    // }
    // try {
    //     const telegramRes = await fetch(TELEGRAM_URL, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             chat_id: CHAT_ID,
    //             text,
    //             parse_mode: 'HTML',
    //         }),
    //     })
    //     const resultText = await telegramRes.text()
    //     if (!telegramRes.ok) {
    //         console.error('Telegram API error:', resultText)
    //         return res
    //             .status(502)
    //             .json({ error: 'Telegram API error', detail: resultText })
    //     }
    //     return res.status(200).json({ success: true })
    // } catch (err) {
    //     console.error('Fetch threw:', err)
    //     return res
    //         .status(500)
    //         .json({ error: 'Internal error', detail: String(err) })
    // }
}
