import * as controllers from "./controllers.js";
import * as schemas from "./schemas.js";

/**
 * ItemRoutes is a function that adds routes to the specified server for
 * interacting with items.
 * These routes include:
 * - POST /items: adds a new item to the database
 * - GET /items: retrieves a list of items from the database
 * - DELETE /items: deletes an item from the database
 * - PUT /items: updates an existing item in the database
 */
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

  server.route({
    method: "PUT",
    url: "/items",
    schema: schemas.UpdateItemSchema,
    handler: controllers.UpdateItemController,
  });
}

export default ItemRoutes;
