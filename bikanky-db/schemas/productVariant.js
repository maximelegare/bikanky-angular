export default {
  title: "Product variant",
  name: "productVariant",
  type: "document",
  fields: [
    {
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "showOnHomePage",
      title: "Show on Home Page",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "star",
      title: "Star",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "starOfTheSeason",
      title: "Star of the Season",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "limitedEdition",
      title: "Limited Edition",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Main Product Title",
      name: "mainProductTitle",
      type: "string",
    },
    {
      title: "SKU",
      name: "sku",
      type: "slug",
    },
    {
      title: "Length Type",
      name: "lengthType",
      type: "reference",
      to:[ { type: "allLengthTypes" }],
    },
    {
      title: "Dimensions",
      name: "dimensions",
      type: "array",
      of: [
        {
          name: "dimension",
          type: "localeString",
        },
      ],
    },
    {
      title: "Materials",
      name: "materials",
      type: "array",
      of: [
        {
          name: "material",
          type: "reference",
          to: [{ type: "material" }],
        },
      ],
    },
    {
      title: "Maintenance",
      name: "maintenance",
      type: "array",
      of: [
        {
          name: "bullet",
          type: "localeString",
        },
      ],
    },
    {
      title: "Options",
      name: "options",
      type: "array",
      of: [
        {
          name: "option",
          type: "localeString",
        },
      ],
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
     
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
          weak:true
        },
      ],
    },
  ],
  preview: {
    select: {
      mainProductTitle: "mainProductTitle",
      sku:"sku",
      media: "mainImage",
      starOfTheSeason:"starOfTheSeason",
      isActive:"isActive",
      showOnHomePage:"showOnHomePage",
      star:"star",
      limitedEdition:"limitedEdition"
    },
    prepare({mainProductTitle, sku, media, starOfTheSeason, isActive, showOnHomePage, star, limitedEdition}){
      let status = []
      if(isActive) status.push("🟢")  
      if(showOnHomePage) status.push("🏠")
      if(star) status.push("⭐")
      if(starOfTheSeason) status.push("🔅")
      if(limitedEdition) status.push("⏳")

      let formatTitle =  mainProductTitle && sku?  `${mainProductTitle} | ${sku.current.toLowerCase()}` : 'No title yet'
      let formatSubtitle =  status.toString().replace(/[ ,.]/g, " ");
      return{
        title:formatTitle,
        subtitle:formatSubtitle,
        media
      }
    }
  },
};
