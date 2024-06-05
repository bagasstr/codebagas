import Image from "next/image";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import CardProjects from "@/components/CardProjects";
import Link from "next/link";
import { getData } from "../utils/helpers";

const page = async () => {
  const data = await getData();
  // console.log(data);

  return (
    <>
      <div className='sm:px-4 md:px-4 lg:px-4 max-w-5xl mx-auto'>
        <h1 className='sm:text-lg sm:text-center sm:font-medium md:text-center lg:text-center lg:text-2xl lg:mt-8'>
          Collection of my projects that I've made.
        </h1>
        <div className='sm:mt-8 lg:mt-8 md:mt-8 grid sm:grid-cols-1 sm:gap-y-4 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-4'>
          {data.map((index: any) => (
            <Link
              href={`/projects/${index.slug.current}`}
              key={index._id}
              className={"w-full"}>
              <CardProjects key={index._id} props={index} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
