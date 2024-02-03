import { Users } from "@/app/untils/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  //   console.log("content", content);

  let userId = content.params.id;
  //   console.log(userId);
  const userData = Users.find((user) => user.id == userId);

  return NextResponse.json({ data: userData, result: "Ok" }, { status: 202 });
}

export async function PUT(request, content) {
  let payload = await request.json();
  payload.id = content.params.id;

  // console.log(payload);
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json({ result: "Data not found" }, { status: 404 });
  }
  return NextResponse.json(
    { result: "Successfully data founded", data: payload },
    { status: 200 }
  );
}

export function DELETE(req, res) {
  const id = res.params.id;
  console.log(id);

  if (id) {
    return NextResponse.json(
      { result: "User Deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "User Invalid", success: false },
      { status: 400 }
    );
  }
}
