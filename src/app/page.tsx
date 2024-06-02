import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className='sm:py-16 sm:px-4'>
        <div className='flex flex-col sm:items-center sm:justify-center'>
          <div className='flex flex-col sm:items-center sm:justify-center'>
            <h2 className='sm:text-2xl sm:font-medium'>Hi! I`m</h2>
            <h1 className='sm:text-4xl sm:font-semibold'>Bagas Satrio</h1>
            <p className='sm:mt-4 sm:text-lg sm:font-medium'>
              Front End developer
            </p>
          </div>
          <div className='flex sm:justify-center sm:mt-24'>
            <p className='text-center sm:w-2/3 sm:text-base sm:font-medium bg-secondary text-primary/75 dark:text-primary dark:bg-secondary p-4 rounded-xl'>
              Welcome to my portfolio website, this is where I showcase the
              projects I've created during my time as a web developer.
            </p>
          </div>
        </div>
        <Link href='/projects'>
          <div className='flex sm:justify-end sm:mt-12 sm:gap-x-2 items-center'>
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
