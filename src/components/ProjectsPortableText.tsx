import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import { ReactNode } from "react";

export const ProjectsPortableText: any = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className='relative w-full h-96'>
          <Image
            className='object-contain'
            src={urlForImage(value)}
            width={1000}
            height={1000}
            alt='image'
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: { children: ReactNode }) => (
      <ul className='mt-xl'>{children}</ul>
    ),
    number: ({ children }: { children: ReactNode }) => (
      <ol className='mt-lg'>{children}</ol>
    ),
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className='text-5xl font-bold'>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className='text-4xl font-bold'>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className='text-3xl font-bold'>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className='text-2xl font-bold'>{children}</h4>
    ),
    normal: ({ children }: any) => <p className='text-lg'>{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className='border-l-4 border-gray-500 pl-4 italic'>
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          className='text-primary dark:text-primary'
          rel={rel}>
          {children}
        </Link>
      );
    },
  },
};
