import { getSingleData } from "@/app/utils/helpers";
import { ProjectsPortableText } from "@/components/ProjectsPortableText";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { HtmlHTMLAttributes } from "react";
import { urlForImage } from "../../../../sanity/lib/image";

const components: any = {};
const page = async ({ params }: { params: { slug: string } }) => {
  let slug = params.slug;
  const data = await getSingleData(slug);

  return (
    <>
      <PortableText value={data.long_desc} components={ProjectsPortableText} />
    </>
  );
};

export default page;
