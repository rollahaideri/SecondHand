// A controller function that adds a new item to the database.
export async function AddItemController(request, response) {
  try {
    const { Item } = request.database.models;
    const newItem = await Item.create(request.body);
    response.status(201);
    return { success: true, message: `uploaded with id: ${newItem.id}` };
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

// A controller function that retrieves a list of all items from the database.
export async function GetItemsController(request, response) {
  try {
    const { Item } = request.database.models;
    const items = await Item.find({});

    return items;
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

// A controller function that delete a single item from database
export async function DeleteItemController(request, response) {
  try {
    const { Item } = request.database.models;
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

// A controller function that update a existing item from database by id.
export async function UpdateItemController(request, response) {
  const { Item } = request.database.models;
  const ItemExist = await Item.findById(request.body._id);

  if (ItemExist === null) {
    return await response.status(404).send("Item doesn't exist");
  }

  const updatedItem = await Item.findByIdAndUpdate(
    request.body._id,
    request.body,
    { new: true }
  );

  return await response.status(200).send(updatedItem);
}
