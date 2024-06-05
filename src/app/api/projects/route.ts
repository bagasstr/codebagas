import { sanityClient } from "@/lib/utils";

export const runtime = "edge";
export async function GET(res: Response, req: Request) {
  try {
    const query = `*[_type == "projects"]{_id, _type, title, slug, short_desc, long_desc, tools, github, demo, thumbnail, image}`;
    const data = await sanityClient.fetch(query);

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
