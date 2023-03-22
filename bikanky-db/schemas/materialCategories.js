export default {
  name: "materialCategories",
  title: "Material Categories",
  type: "document",
  fields: [
    {
      title: "Materials Category Title",
      name: "materialsCategoryTitle",
      type: "localeString",
    },
    {
      title: "Materials",
      name: "materials",
      type: "array",
      of: [
        { title: "material", type: "reference", to: [{ type: "material" }] },
      ],
    },
  ],

  preview: {
    select: {
      title: "materialsCategoryTitle.en",
    },
  },
};
