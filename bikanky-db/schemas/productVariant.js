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
      title: "Length Type",
      name: "lengthType",
      type: "reference",
      to:[ { type: "allLengthTypes" }],
    },
    {
      title: "Options",
      name: "options",
      type: "array",
      of: [
        {
          name: "option",
          type: "string",
        },
      ],
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
          to: [{ type: "tag" }],
        },
      ],
    },
  ],
};
