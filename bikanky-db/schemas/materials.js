export default {
  name: "materials",
  title: "Materials",
  type: "document",
  fields: [
    {
      title: "Material Category Title",
      name: "materialCategoryTitle",
      type: "string",
    },
    {
      title: "MaterialCategories",
      name: "materialCategories",
      type: "array",
      of: [
        {
          name: "materialCategory",
          title: "Material Category",
          type: "document",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
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
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "materialCategoryTitle",
    },
  },
};
