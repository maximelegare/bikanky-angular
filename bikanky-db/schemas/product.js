export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "showOnHomePage",
      title: "Show on Home Page",
      type: "boolean",
      initialValue: false,
    },
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
      type: "productVariant",
    },
    {
      title: "Variants",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "productVariant",
        },
      ],
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: {type: 'category'},
    //     },
    //   ],
    // },

    {
      title: "Bullet Points",
      name: "bulletPoints",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Text",
              type: "localeString",

            },
            {
              name: "icon",
              title: "Icon",
              type: "string",
            },
          ],
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
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]",
    },
  },
};
