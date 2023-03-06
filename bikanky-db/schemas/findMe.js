export default {
    name: 'findMe',
    title: 'Find me',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'phoneNumber',
        title: 'Phone number',
        type: 'string',
      },
      
      {
        name: 'address',
        title: 'Address',
        type: 'object',
        fields:[
            {
                name:"street",
                title:"Street",
                type:"string"
            },
            {
                name:"city",
                title:"City",
                type:"string"
            },
            {
                name:"state",
                title:"State",
                type:"string"
            },
            {
                name:"postalCode",
                title:"Postal Code",
                type:"string"
            },
            {
                name:"country",
                title:"Country",
                type:"string"
            },
        ]
      },

      
      {
        name:"image",
        title:"image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: "title"
      },
    },
  }
  