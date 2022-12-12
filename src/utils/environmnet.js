// This file/code are used to load environment variables from a .env file.
//

import * as dotenv from "dotenv";
import path from "path";

// Setting the variable to the current working directory.
const dirname = path.resolve();

// Loading the dafault `.env` file from the current directory.
dotenv.config();

// Making sure that the environment variable is set first
if (!process.env.NODE_ENV) {
  throw "No valid environmnet set!";
}

// Building the path to the environment-specific `.env` file.
const NODE_ENV = process.env.NODE_ENV;

const envPath = path.resolve(dirname, `.env.${NODE_ENV}`);

// Loading the default `.env`file again and setting the path
dotenv.config({ path: envPath });

// Defining and setting the default values for environment variables.
const environmnet = {
  NODE_ENV,
  MESSAGE: process.env.MESSAGE || "NO Message",
  PORT: Number(process.env.PORT) || 3000,
  DB_URL: process.env.DB_URL || "NO URL"
};

export default environmnet;
