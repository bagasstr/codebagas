import { getSingleData } from "@/app/utils/helpers";
import { ProjectsPortableText } from "@/components/ProjectsPortableText";
import { PortableText } from "next-sanity";

const page = async ({ params }: { params: { slug: string } }) => {
  let slug = params.slug;
  const data = await getSingleData(slug);
  console.log(data);

  return (
    <>
      <PortableText value={data.long_desc} components={ProjectsPortableText} />
    </>
  );
};

export default page;
