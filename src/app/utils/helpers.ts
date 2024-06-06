export const getData = async () => {
  const response = await fetch("/api/projects", {
    cache: "no-store",
  });

  return response.json();
};

export const getSingleData = async (slug: string) => {
  const items = await getData();
  return items.find((item: any) => item.slug.current == slug);
};
