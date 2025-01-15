import { App, SayFn } from "@slack/bolt";
import { configDotenv } from "dotenv";

// Initialize the app with your bot token and signing secret

configDotenv();

const app = new App({
  appToken: process.env.SLACK_APP_LEVEL_TOKEN,
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
});

// Listen for messages containing "hello"
app.message("hello", async ({ message, say }: { message: any; say: SayFn }) => {
  await say(`Hey there, <@${message.user}>!`);
});

app.message("ping", async ({ message, say }: { message: any; say: SayFn }) => {
  await say(`Pong!!!`);
});

// Start the app
(async () => {
  const port = process.env.PORT || 3000;
  await app.start(port);
  console.log(`⚡️ Slack bot is running on port ${port}`);
})();
