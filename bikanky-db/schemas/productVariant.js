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
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to:[{type:'tag'}],
        },
      ],
      
    },
    
  ],
};
