// setting up a connection to a MongoDB database using the Mongoose library,

import mongoose from "mongoose";
import fp from "fastify-plugin";
import Item from "../model/Item.js";
import environment from "./enviroment.js";

async function database(fastify, options) {
  try {
    mongoose.connection.on("connected", () => {
      fastify.log.info({ actor: "MongoDB" }, "Connected!!");
    });

    mongoose.connection.on("Disconnected", () => {
      fastify.log.info({ actor: "MongoDB" }, "Disconnected!!");
    });

    await mongoose.connect(environment.DB_URL);

    const models = { Item };

    // Adding a hook to the Fastify web framework to attach the connection and
    // the Item model to each request.
    fastify.addHook("onRequest", async (request, response) => {
      request.db = { models };
    });
  } catch (error) {}
}

export default fp(database);
