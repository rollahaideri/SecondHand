export const AddItemSchema = {
  body: {
    type: "object",
    required: ["title", "price", "description", "phoneNumber"],
    properties: {
      title: { description: "Title of the item", type: "string" },
      price: { description: "Price of the item", type: "string" },
      description: { description: "Details of the item", type: "string" },
      phoneNumber: {
        description: "Phone number to the item seller",
        type: "string",
      },
    },
  },
  response: {
    201: {
      type: "object",
      description: "Success response",

      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};

export const GetItemsSchema = {
  response: {
    200: {
      description: "List of all items",
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { description: "Title of the item", type: "string" },
          price: { description: "Price of the item", type: "string" },
          description: { description: "Details of the item", type: "string" },
          phoneNumber: {
            description: "Phone number to the item seller",
            type: "string",
          },
        },
      },
    },
  },
};

export const DeleteItemSchema = {
  body: {
    type: "object",
    required: ["title"],

    properties: {
      title: { description: "Title of the item to remove", type: "string" },
    },
  },
  response: {
    200: {
      description: "Delete status",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};
