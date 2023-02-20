export default {
  name: 'allLengthTypes',
  title: 'All Length Types',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: "title"
    },
  },
}
