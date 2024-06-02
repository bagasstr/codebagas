import React from "react";

const getData = async () => {
  let endpoint = "production";
  if (endpoint !== "development") {
    endpoint = "http://localhost:3000/api/projects";
  } else {
    endpoint = "/api/projects";
  }
  try {
    const data = await fetch(endpoint, {
      cache: "no-store",
    });
    if (!data) {
      throw new Error("Data not found");
    }

    return data.json();
  } catch (error) {}
};
const page = async () => {
  const data = await getData();
  console.log(data);

  return (
    <>
      <div className=''>
        <div className=''>
          {data?.map((project: any) => (
            <div key={project._id} className=''>
              <h1 className=''>{project.title}</h1>
              <div className=''>
                {project.longDesc ? (
                  JSON.parse(project.longDesc).map((desc: any, index: any) => (
                    <p key={index}>{desc}</p>
                  ))
                ) : (
                  <p>No description available</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
