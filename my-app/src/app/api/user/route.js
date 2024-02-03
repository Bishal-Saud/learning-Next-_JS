import { Users } from "@/app/untils/db";
import { NextResponse } from "next/server";

export function GET() {
  // console.log(Users);
  return NextResponse.json({ Users }, { result: "ok working" });
}

export async function POST(res) {
  const data = await res.json();
  //console.log(data);
  return NextResponse.json(
    { details: data, result: "Data founded" },
    { status: 200 }
  );
}
