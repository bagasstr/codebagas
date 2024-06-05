export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nama Situs",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "short_desc",
      title: "Description Singkat",
      type: "text",
    },
    {
      name: "long_desc",
      title: "Description Lengkap",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
    {
      name: "tools",
      title: "Teknologi",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "github",
      title: "Link Github",
      type: "url",
      validation: (Rule: any) =>
        Rule.required().uri({
          scheme: ["https"],
        }),
    },
    {
      name: "demo",
      title: "Link Demo ",
      type: "url",
      validation: (Rule: any) =>
        Rule.required().uri({
          scheme: ["http", "https"],
        }),
    },

    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
  ],
};
