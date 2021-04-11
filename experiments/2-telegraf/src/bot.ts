require("dotenv").config();
import { Bot } from "./";
Bot({ botToken: process.env.BOT_TOKEN });
