import { user } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  //   console.log(content.params.id);

  const userData = content.params.id;
  const getUser = user.filter((item) => item.id == userData);
  //   console.log(getUser);
  return NextResponse.json(
    getUser.length === 0
      ? { result: "Data not found", success: false }
      : { result: getUser[0], success: true },
    { status: 200 }
  );
}
