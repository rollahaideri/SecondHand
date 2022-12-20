import environmnet from "./utils/environmnet.js";
import fastify from "fastify";
import ItemRoutes from "./routes.js";
import database from "./utils/database.js";

// server is a Fastify server instance
const server = fastify({ logger: true });

/**
 * start is an async function that initializes the server and starts
 *  listening for incoming requests.
 */
const start = async () => {
  try {
    // registers the database plugin
    await server.register(database);

    //registers the item routes
    await server.register(ItemRoutes);

    //starts listening for requests on the specified port and host
    await server.listen({ port: environmnet.PORT, host: "0.0.0.0" });
    console.log("server is running!");
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

// start the server
start();
