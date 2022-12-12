import environmnet from "./utils/environmnet.js";
import fastify from "fastify";
import ItemRoutes from "./routes.js";
import database from "./utils/database.js";

const server = fastify({ logger: true });

const start = async () => {
  try {
    await server.register(database);
    await server.register(ItemRoutes);
    await server.listen({ port: environmnet.PORT });
    console.log("server is running!");
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};
start();
