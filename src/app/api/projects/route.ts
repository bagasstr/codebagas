import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

// Inisialisasi Supabase Client
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL! || process.env.SUPABASE_URL!;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! || process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Fungsi untuk mentransformasi data
const transformLongDesc = (longDesc: any[]) => {
  return JSON.stringify(
    longDesc.map((desc) => desc.children.map((text: any) => text.text))
  );
};
const transformData = (dataSanity: any) => {
  return {
    id: dataSanity._id,
    title: dataSanity.title,
    slug: dataSanity.slug.current,
    short_desc: dataSanity.short_desc || dataSanity.shortDesc,
    long_desc: transformLongDesc(dataSanity.long_desc || dataSanity.longDesc),
    tools: dataSanity.tools,
    github: dataSanity.github,
    demo: dataSanity.demo,
    thumbnail: dataSanity.thumbnail.asset._ref,
    image: dataSanity.image.map((img: any) => img.asset._ref),
    created_at: dataSanity._createdAt,
  };
};

// POST request from sanity studio to supabase
export async function POST(req: Request) {
  try {
    const dataSanity = await req.json();

    // Validasi data yang diterima
    if (
      !dataSanity._id ||
      !dataSanity.title ||
      !dataSanity.slug ||
      !dataSanity.thumbnail ||
      !dataSanity.image
    ) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const transformedData = transformData(dataSanity);

    // Insert atau update data di Supabase
    const { error } = await supabase.from("projects").upsert([transformedData]);

    if (error) {
      console.error("Error inserting data:", error);
      throw new Error(error.message);
    }

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

// GET request from supabase
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching data:", error);
      throw new Error(error.message);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
