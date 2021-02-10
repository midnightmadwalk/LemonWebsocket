import { bot } from './bot';
import { initHandlers } from './handlers';

(async () => {
    initHandlers();
    await bot.telegram.deleteWebhook({drop_pending_updates: true});
    await bot.launch();
    console.log(`@${bot.botInfo?.username} is running...`);
})();
