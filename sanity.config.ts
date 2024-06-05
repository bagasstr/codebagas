"use client";

// /**
//  * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
//  */

// import { visionTool } from "@sanity/vision";
// import { defineConfig } from "sanity";
// import { structureTool } from "sanity/structure";

// // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import { apiVersion, dataset, projectId } from "./sanity/env";
// import { schema } from "./sanity/schema";
// // const projectId = process.env.SANITY_PROJECT_ID!;
// // const dataset = process.env.DATASET!;

// export default defineConfig({
//   basePath: "/studio",
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schema' folder
//   schema,
//   plugins: [
//     structureTool(),
//     // Vision is a tool that lets you query your content with GROQ in the studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({ defaultApiVersion: apiVersion }),
//   ],
// });
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schema";
const projectId = process.env.SANITY_PROJECT_ID!;
const dataset = process.env.SANITY_DATASET || "production";
const apiVersion = process.env.SANITY_API_VERSION!;

export default defineConfig({
  sourceMaps: false,
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
