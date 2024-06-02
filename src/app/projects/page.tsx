import React from "react";

const getData = async () => {
  const isDevelopment = process.env.NODE_ENV === "development";
  const baseUrl = isDevelopment
    ? process.env.NEXT_PUBLIC_BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${baseUrl}/api/projects`);
  const data = await response.json();
  return data;
};
const page = async () => {
  const data = await getData();
  console.log(data);

  return (
    <>
      <div className=''>
        <div className=''>
          {data.map((index: any) => (
            <div key={index.id}>
              <h1 className=''>{index.title}</h1>
              <p className=''>{index.long_desc.map((i: string) => i)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
