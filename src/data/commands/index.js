import debugHandler from 'debug';
import replacer from "../modules/replacer";

const debug = debugHandler('replaceBot:commands');

export default bot => {
    bot.catch(err => {
        debug(err);
    });

    bot.start(async ctx => ctx.reply('Hello world!'));

    bot.hears('бот', async ctx => ctx.reply(replacer(ctx.message.reply_to_message.text)));
};