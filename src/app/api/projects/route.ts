import { sanityClient } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `*[_type == "projects"]{_id, _type, title, slug, short_desc, long_desc, tools, github, demo, thumbnail, image}`;
  const response = await sanityClient.fetch(query);
  return NextResponse.json(response);
}
