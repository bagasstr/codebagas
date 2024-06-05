import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import { Dot } from "lucide-react";

interface IProps {
  title: string;
  short_desc: string;
  demo: string;
  github: string;
  thumbnail: any;
  tools: string[];
}
const CardProjects = ({ props }: { props: IProps }) => {
  return (
    <>
      <Card className=''>
        <CardHeader>
          <CardTitle className='sm:text-lg sm:font-normal md:text-lg md:font-medium lg:text-xl lg:font-medium lg:text-center'>
            {props.title}
          </CardTitle>
        </CardHeader>
        <CardContent className=''>
          <Image
            src={urlForImage(props.thumbnail)}
            width={1000}
            height={1000}
            alt={props.title}
          />
        </CardContent>
        <CardFooter className='grid sm:grid-cols-[repeat(1,90px)] sm:justify-start md:grid-cols-[repeat(1,80px)]'>
          {props.tools.map((index: string) => (
            <div
              key={index}
              className='flex sm:text-sm md:text-sm items-center'>
              <span>
                <Dot />
              </span>
              {index}
            </div>
          ))}
        </CardFooter>
      </Card>
    </>
  );
};

export default CardProjects;
