export const getData = async () => {
  const response = await fetch("https://codebagas.vercel.app/api/projects", {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};

export const getSingleData = async (slug: string) => {
  const items = await getData();
  return items.find((item: any) => item.slug.current == slug);
};
