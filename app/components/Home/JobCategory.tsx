import React from "react";
import Heading from "../Helper/Heading";
import JobCategoryCard from "../Helper/JobCategoryCard";

const JobCategory = () => {
  return (
    <div className="pt-20 pb-12 ">
      <Heading
        mainHeading="Popular Job Categories"
        subHeading="2020 job live - 293 add today."
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem gap-[3rem] items-center"></div>
      <JobCategoryCard
        image="/images/icon1.png"
        category="Finance"
        openPosition="23"
      />
      <JobCategoryCard
        image="/images/icon2.png"
        category="Marketing"
        openPosition="17"
      />
      <JobCategoryCard
        image="/images/icon3.png"
        category="Design"
        openPosition="19"
      />
      <JobCategoryCard
        image="/images/icon4.png"
        category="Development"
        openPosition="30"
      />
      <JobCategoryCard
        image="/images/icon5.png"
        category="Human Resource"
        openPosition="29"
      />
      <JobCategoryCard
        image="/images/icon6.png"
        category="Automative Job"
        openPosition="15"
      />
      <JobCategoryCard
        image="/images/icon7.png"
        category="Customer Services"
        openPosition="12"
      />
      <JobCategoryCard
        image="/images/icon8.png"
        category="Health and Care"
        openPosition="25"
      />
      <JobCategoryCard
        image="/images/icon9.png"
        category="Project Managment"
        openPosition="8"
      />
    </div>
  );
};

export default JobCategory;
