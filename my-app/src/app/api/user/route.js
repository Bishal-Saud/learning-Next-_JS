import { user } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  // console.log(content);
  return NextResponse.json(user, { status: 200 });
}

export async function POST(req) {
  const payload = await req.json();
  console.log(payload.name);

  if (!payload.name || !payload.email || !payload.age) {
    return NextResponse.json({ result: "Data not Found" }, { status: 404 });
  }

  return NextResponse.json(
    { result: "result successfully found!" },
    { status: 202 }
  );
}
