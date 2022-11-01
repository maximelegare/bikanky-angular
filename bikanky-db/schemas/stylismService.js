export default {
    name: "stylismService",
    title: "Stylism Service",
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
        title: "Price",
        name: "price",
        type: "number",
      },
      {
        title: "Tags",
        name: "tags",
        type: "array",
        of: [
          {
            type: "reference",
            to:[{type:'tag'}]
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
  