import React from "react";
import img from "../../asset/plus (11) 59.png";
import TreadDetails from "./TreadDetails";

const Trades = () => {
  const jobCategories = [
    {
      title: "Architectural services",
      image: img,
    },
    {
      title: "Bathroom fitting",
      image: img,
    },
    {
      title: "Bricklaying & Repointing",
      image: img,
    },
    {
      title: "Carpentry & Joinery",
      image: img,
    },
    {
      title: "Carpets, Lino & Flooring",
      image: img,
    },
    {
      title: "Central heating",
      image: img,
    },
    {
      title: "Chimney & Fireplace",
      image: img,
    },
    {
      title: "Conservatories",
      image: img,
    },
    {
      title: "Conversions",
      image: img,
    },
    {
      title: "Damp Proofing",
      image: img,
    },
    {
      title: "Demolition & Clearance ",
      image: img,
    },
    {
      title: "Driveways & Paving",
      image: img,
    },
    {
      title: "Electrical",
      image: img,
    },
    {
      title: "Extensions",
      image: img,
    },
    {
      title: "Fascias, Soffits & Guttering",
      image: img,
    },
    {
      title: "Fencing",
      image: img,
    },
    {
      title: "Gardening & Landscaping",
      image: img,
    },
    {
      title: "Gas work",
      image: img,
    },
    {
      title: "Groundwork & Foundations",
      image: img,
    },
    {
      title: "Handyman",
      image: img,
    },
    {
      title: "Insulation",
      image: img,
    },
    {
      title: "Kitchen Fitting",
      image: img,
    },
    {
      title: "Extensions",
      image: img,
    },
    {
      title: "Extensions",
      image: img,
    },
  ];
  return (
    <div className="p-5 lg:p-14 mt-10 bg-[#FFF] rounded-2xl">
      <div className="flex flex-wrap sm:mt-3 lg:mt-20  mx-auto w-full">
        {jobCategories.map((category, index) => (
          <TreadDetails key={index} category={category}></TreadDetails>
        ))}
      </div>
    </div>
  );
};

export default Trades;
