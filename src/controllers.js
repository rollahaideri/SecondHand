
export async function AddItemController(request, response) {
    try {
      const { Item } = request.db.models;
      const newItem = await Item.create(request.body);
      response.status(201);
      return { success: true, message: `uploaded with id: ${newItem.id}` };
    } catch (error) {
      request.log.error(error);
      await response.status(500).send("An error occurred!");
    }
  }
  
  export async function GetItemsController(request, response) {
    try {
      const { Item } = request.db.models;
      const items = await Item.find({});
  
      return items;
    } catch (error) {
      request.log.error(error);
      await response.status(500).send("An error occurred!");
    }
  }
  
  export async function DeleteItemController(request, response) {
    try {
      const { Item } = request.db.models;
      const { deletedCount } = await Item.deleteOne({
        title: request.body.title,
      });
  
      if (deletedCount === 0) {
        response.code(404);
        return { success: false, message: "Item could not be found!" };
      }
      return { success: true, message: "Item has benn deleted!" };
    } catch (error) {
      request.log.error(error);
      await response.status(500).send("An error occurred!");
    }
  }
  