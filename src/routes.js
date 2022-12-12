import * as controllers from "./controllers.js";
import * as schemas from "./schemas.js";

async function ItemRoutes(server, options) {
  server.route({
    method: "POST",
    url: "/items",
    schema: schemas.AddItemSchema,
    handler: controllers.AddItemController,
  });

  server.route({
    method: "GET",
    url: "/items",
    schema: schemas.GetItemsSchema,
    handler: controllers.GetItemsController,
  });

  server.route({
    method: "DELETE",
    url: "/items",
    schema: schemas.DeleteItemSchema,
    handler: controllers.DeleteItemController,
  });
}

export default ItemRoutes;
