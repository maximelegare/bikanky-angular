export default {
  title: "Product variant",
  name: "productVariant",
  type: "object",
  fields: [
    {
      title: "Variant Title",
      name: "variantTitle",
      type: "string",
    },
    {
      title: "Weight in grams",
      name: "weight",
      type: "number",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    
  ],
};
