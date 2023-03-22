export default {
  name: "materialsCategories",
  title: "Materials Categories",
  type: "document",
  fields: [
    {
      title: "Materials Category Title",
      name: "title",
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
      title: "title.en",
    },
  },
};
