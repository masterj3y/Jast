import * as dotenv from 'dotenv';
import { Bot } from 'grammy';
import logger from './logger';

logger.info('Reading configs...')
dotenv.config();

const token = String(process.env.BOT_TOKEN);

const bot = new Bot(token);

bot.command('start', (ctx) => ctx.reply("Welcom to JAST"));

logger.info('Starting JAST...');
bot.start();
