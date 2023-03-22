export default {
  name: "material",
  title: "-- Material",
  type: "document",
  fields: [
    {
      name: "isLimitedQuantity",
      title: "Limited Quantity",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          title: "tag",
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title.en",
      media: "mainImage",
    },
  },
};
