import ApplyButton from "@/app/components/Helper/ApplyButton";
import JobCard from "@/app/components/Helper/JobCard";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const jobdetails = async ({ params }: { params: { id: string } }) => {
  const singleJob = JobData.find((job) => job.id.toString() == params.id);
  const session = await getServerSession(authOptions);
  const firstFourJob = JobData.slice(0, 4);

  return (
    <div className="mt-20 mb-12">
      <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7] ">
          <JobCard job={singleJob!} />
        </div>
        {session && <ApplyButton />}
        {!session && (
          <Link href="/signup">
            <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">
              Sign Up To Apply
            </button>
          </Link>
        )}
      </div>
      <div className="mt-16 w-[80%] mx-auto">
        <h1 className="text-[20px] font-semibold">Job Describtion</h1>
        <p className="mb-4 text-gray-500 text-opacity-70">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          doloremque maiores animi, atque asperiores voluptatibus
          necessitatibus! Nulla consequuntur quos iure maiores voluptates
          consequatur! Veniam assumenda, fuga veritatis itaque aliquid nisi.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          corrupti repellendus consequatur doloribus beatae debitis. Libero
          sequi voluptates molestiae, perspiciatis veniam quisquam deleniti
          ducimus.
        </p>
        <h1 className="text-[20px] mt-8 font-semibold">Key Responsibility </h1>
        <p className="mb-4 text-gray-500 text-opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut ex!
          Delectus nesciunt ex maiores odit amet pariatur, quas dolorum repellat
          natus optio quos tempora voluptatem ratione quis. Magni, laborum!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam illo
          explicabo numquam velit. Ipsam asperiores facilis voluptatum rem ut
          totam inventore repellendus obcaecati labore accusamus deleniti atque,
          a illum doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ea, vero beatae ut nisi quas accusamus iusto voluptatem. Eaque
          hic beatae necessitatibus error sapiente blanditiis culpa deserunt
          quae doloremque. Tenetur, ullam.
        </p>
        <h1 className="text-[20px] mt-8 font-semibold">Skills</h1>
        <ul className="mt-4">
          <li className="mt-4 text-gray-500 text-opacity-70">React Js</li>
          <li className="mt-4 text-gray-500 text-opacity-70">Next Js</li>
          <li className="mt-4 text-gray-500 text-opacity-70">Tailwind CSS</li>
          <li className="mt-4 text-gray-500 text-opacity-70">Typecript</li>
          <li className="mt-4 text-gray-500 text-opacity-70">Next Auth</li>
        </ul>
        <h1 className="text-[20px] mt-8 font-semibold">Related Job</h1>
        <div className="mt-4">
          {firstFourJob.map((job) => {
            return (
              <Link
                href={`/job/jobdetails/${job.id}`}
                className="space-y-6"
                key={job.id}
              >
                <JobCard job={job} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default jobdetails;
