import { Users } from "@/app/untils/db";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ Users }, { result: "ok working" });
}

export async function POST(res) {
  const data = await res.json();
  return NextResponse.json(
    { details: data, result: "Data founded" },
    { status: 200 }
  );
}
