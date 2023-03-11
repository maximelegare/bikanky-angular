export default {
    name: 'findMe',
    title: 'Find me',
    type: 'document',
    fields: [
      
      {
        name: 'isActive',
        title: 'Is Active',
        type: 'boolean',
        initialValue: true,
      },
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
        name: 'website',
        title: 'Website',
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
        name:"logo",
        title:"Logo",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name:"image",
        title:"Image",
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
  