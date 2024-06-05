import { sanityClient } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    const query = `*[_type == "projects"]{_id, _type, title, slug, short_desc, long_desc, tools, github, demo, thumbnail, image}`;
    const data = await sanityClient.fetch(query);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
