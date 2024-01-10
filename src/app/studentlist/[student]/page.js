"use client";
import Link from "next/link";
export default function Student({ params }) {
  console.log(params);
  return (
    <div>
      <h2>Name : {params.student}</h2>
    </div>
  );
}
