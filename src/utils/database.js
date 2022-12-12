// setting up a connection to a MongoDB database using the Mongoose library,

import mongoose from "mongoose";
import fp from "fastify-plugin";
import Item from "../model/Item.js";
import environment from "./environmnet.js";

async function database(server, options) {
  try {
    mongoose.connection.on("connected", () => {
      server.log.info({ actor: "MongoDB" }, "Connected!!");
    });

    mongoose.connection.on("disconnected", () => {
      server.log.info({ actor: "MongoDB" }, "Disconnected!!");
    });

    mongoose.set("strictQuery", true);
    await mongoose.connect(environment.DB_URL);

    const models = { Item };

    // Adding a hook to the Fastify web framework to attach the connection and
    // the Item model to each request.
    server.addHook("onRequest", async (request, response) => {
      request.database = { models };
    });
  } catch (error) {}
}

export default fp(database);
