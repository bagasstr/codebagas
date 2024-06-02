"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeMode } from "./ThemeMode";

const Navbar = () => {
  const pathName = usePathname();
  const filterPath = pathName?.split("/").filter((item) => item);

  const checkPath = "/" + (filterPath.length > 0 ? filterPath[0] : "");

  const dataLink = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/projects",
      name: "Projects",
    },
    {
      link: "/about",
      name: "About",
    },
  ];

  return (
    <>
      <div className='py-8 sm:mt-4 lg:mt-8 md:mt-4'>
        <ul className='flex sm:gap-x-8 justify-center items-center md:gap-x-8 lg:gap-x-8'>
          {dataLink.map((item, index) => (
            <li key={index}>
              <Link href={item.link} passHref>
                {checkPath === item.link ? (
                  <span className='border-b-2 md:border-b-4 border-primary dark:border-primary text-primary dark:text-primary sm:text-lg sm:font-semibold pb-1 md:text-lg md:font-medium lg:text-xl lg:font-medium'>
                    {item.name}
                  </span>
                ) : (
                  <span className='sm:text-lg sm:font-semibold text-primary dark:text-primary lg:text-xl md:text-lg md:font-medium lg:font-medium'>
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
          <ThemeMode />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
