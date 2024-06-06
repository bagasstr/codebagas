import { sanityClient } from "@/lib/utils";
export const revalidate = 10;
export const getData = async () => {
  const query = `*[_type == "projects"]{
    _id,
    _type,
    title,
    slug,
    short_desc,
    long_desc,
    tools,
    github,
    demo,
    thumbnail,
    image}`;
  const data = await sanityClient.fetch(query);
  return data;
};

export const getSingleData = async (slug: string) => {
  const items = await getData();
  return items.find((item: any) => item.slug.current == slug);
};
