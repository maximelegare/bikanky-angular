export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      title:"title",
      name:"title",
      type:"string"
    },
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
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
              name: "isSocialMedia",
              title: "Is Social Media",
              type: "boolean",
              initialValue: false 
            },
            {
              name: "mediaName",
              title: "Media Name",
              type: "string",
            },
            {
              name: "contact",
              title: "Username / Contact Infos",
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
      title: "title",
    },
  },
};
