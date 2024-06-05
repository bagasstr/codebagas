import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className='sm:py-16 sm:px-4 md:px-4 md:py-16 lg:px-4 lg:py-16 max-w-5xl mx-auto'>
        <div className='flex flex-col sm:items-center sm:justify-center md:items-center md:justify-center lg:items-center lg:justify-center'>
          <div className='flex flex-col sm:items-center sm:justify-center md:items-center md:justify-center lg:items-center lg:justify-center'>
            <h2 className='sm:text-2xl sm:font-medium md:text-2xl md:font-medium lg:text-3xl lg:font-medium'>
              Hi! I`m
            </h2>
            <h1 className='sm:text-4xl sm:font-semibold md:text-5xl md:font-semibold lg:text-5xl lg:font-medium'>
              Bagas Satrio
            </h1>
            <p className='sm:mt-4 sm:text-lg sm:font-medium md:text-lg md:font-medium md:mt-4 lg:text-xl lg:font-normal lg:mt-4'>
              Front End developer
            </p>
          </div>
          <div className='flex sm:justify-center sm:mt-24 md:justify-center md:mt-20 lg:justify-center lg:mt-20'>
            <p className='text-center sm:w-2/3 sm:text-base sm:font-medium bg-secondary text-primary/75 dark:text-primary dark:bg-secondary p-4 rounded-xl md:w-1/2 md:text-lg md:font-medium lg:w-2/5 lg:text-lg lg:font-light'>
              Welcome to my portfolio website, this is where I showcase the
              projects I've created during my time as a web developer.
            </p>
          </div>
        </div>
        <Link href='/projects'>
          <div className='flex sm:justify-end sm:mt-12 sm:gap-x-2 items-center md:justify-end md:mt-12 md:gap-x-2 lg:justify-end lg:mt-12 lg:gap-x-2'>
            <p className='sm:text-lg'>See my projects</p>
            <span>
              <MoveRight />
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
