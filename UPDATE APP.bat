git pull
docker compose --env-file ./.dev.env down
docker compose --env-file ./.dev.env up -d
start http://localhost:9000
npm i&&npm run dev






