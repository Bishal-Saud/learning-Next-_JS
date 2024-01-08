"use client";
export default function Lecture({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Lecture of the day</h1>
      <h3>Lecture Day: {params.lecture[0]}</h3>
      <h3>Lecture Title: {params.lecture[1]}</h3>
      <h3>Lecture Part: {params.lecture[2]}</h3>
    </div>
  );
}
