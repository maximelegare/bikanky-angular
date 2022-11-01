export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
          name: 'showOnHomePage',
          title: 'Show on Home Page',
          type: 'boolean',
        },
      {
        name: 'personName',
        title: 'Person\'s name',
        type: 'string',
      },
      {
        name: 'testimonial',
        title: 'Testimonial',
        type: 'localeBlockContent',
      },
    ],
    preview: {
        select: {
          title: "personName",
        },
      },
  }
  