"use client";
export default function page({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Profile</h1>
      <div className="mt-5">
      <p className="text-4xl">
        Profile page
        <span className=" p-1 ml-2 rounded bg-orange-500 text-black">
          {params.id}
        </span>
      </p>
      </div>
    </div>
  );
}
