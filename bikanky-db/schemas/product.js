export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Default variant",
      name: "defaultProductVariant",
      type: "reference",
      to: [{ type: "productVariant" }],
    },
    {
      title: "Variants",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "reference",
          to: [{ type: "productVariant" }],
        },
      ],
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "localeBlockContent",
    },
    {
      name: "body",
      title: "Body",
      type: "localeBlockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "",
    },
  },
};
