export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "isActive",
        title: "Is Active",
        type: "boolean",
        initialValue: true,
      },
      {
        name: "showOnHomePage",
        title: "Show on Home Page",
        type: "boolean",
        initialValue: false,
      },
      {
        name: "star",
        title: "Star",
        type: "boolean",
        initialValue: false,
      },
      {
        name: "starOfTheSeason",
        title: "Star of the Season",
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
  