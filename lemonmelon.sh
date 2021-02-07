#! bin/bash

echo "
BOT_TOKEN=$BOT_TOKEN
WEBSOCKET_URL=$WEBSOCKET_URL
" >> .env

npm start
