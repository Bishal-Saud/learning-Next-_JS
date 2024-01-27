import { user } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  // console.log(content);
  return NextResponse.json(user, { status: 200 });
}
