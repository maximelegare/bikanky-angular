export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "mainProductTitle",
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
      title: "Variants",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "reference",
          to: [{ type: "productVariant" }],
        },
      ]
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
        title: "mainProductTitle",
      media: "",
      },    
    },
};
