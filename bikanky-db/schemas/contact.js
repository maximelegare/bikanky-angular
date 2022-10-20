export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "contactText",
      title: "Contact text",
      type: "localeBlockContent",
    },

    {
      name: "contactMedias",
      title: "Contact Medias",
      type: "array",
      of: [
        {
          name: "media",
          title: "media",
          type:"document",
          fields: [
            {
              name: "mediaName",
              title: "Media Name",
              type: "string",
            },
            {
              name: "mediaLink",
              title: "media Link",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "personName",
    },
  },
};
