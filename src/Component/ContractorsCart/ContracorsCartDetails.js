import React from "react";
import profile from "../../asset/profile.png";
import arow1 from "../../asset/arrow1.png";
import corss from "../../asset/Vector (2).png";

const ContracorsCartDetails = () => {
  return (
    <div className="p-5 lg:p-14 mt-10 bg-[#FFF] rounded-2xl ">
      <div className="flex justify-between">
        {/* profile  */}
        <div className="flex items-center">
          <div className="lg:mr-5 mr-2">
            <img src={profile} alt="" />
          </div>
          <div>
            <h1 className="font-bold">
              Paul Smith <small className="font-thin">(Area B32 NH)</small>
            </h1>
            <p>
              <small>(2 feb 2023)</small>
            </p>
            <p>
              <small>Self employed</small>
            </p>
          </div>
        </div>
        {/* right side profile button  */}
        <div className="lg:flex md:flex ">
          <div className="lg:mr-4 md:mr-3">
            <p className="mb-1 text-xs lg:text-lg md:text-lg ">STATUS</p>
            <div className="flex rounded-full bg-[#3F8825] lg:w-40 justify-around p-1 lg:p-2 md:w-36 w-28 md:p-2 ">
              <button className="lg:mr-6 text-[#FFFFFF] lg:text-sm text-xs">Unverified </button>
              <img src={arow1} alt="" />
            </div>
          </div>
          <div>
            <p className="mb-1  lg:text-lg md:text-lg text-xs">ACCOUNT</p>
            <div className="flex rounded-full bg-[#3F8825] lg:w-40 justify-around p-1 md:w-36 lg:p-2 md:p-2 w-28">
              <button className="lg:mr-6 text-[#FFFFFF] lg:text-sm text-xs">Active </button>
              <img className=" " src={arow1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6 w-full" />
      {/* information section section  */}
      <div className="flex lg:mx-28 md:mx-12 mt-7">
        <div className="lg:mr-40 md:mr-20 mr-3">
          <div>
            <h1 className="lg:text-2xl text-xl font-bold">Name</h1>
            <p>Kirk Smith</p>
          </div>
          <div>
            <h1 className="lg:text-2xl text-xl font-bold">Contact details</h1>
            <p>07902345507</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="lg:text-2xl text-xl font-bold">Email address</h1>
            <p>kirk@gmail.com</p>
          </div>
          <div>
            <h1 className="lg:text-2xl text-xl font-bold">UserName</h1>
            <p>Kirk</p>
          </div>
        </div>
      </div>
      <hr className="mt-6 " />
      <div className=" lg:mx-28 md:mx-12 mt-7">
        <h1 className=" lg:text-2xl text-xl font-bold">Introduction</h1>
        <p>
          Hello mate how are you this is a test descrpiton Hello mate how are
          you this is a test descrpiton Hello mate how are you this is a test
          descrpiton
        </p>
      </div>
      <hr className="mt-6 " />
      <div className=" lg:mx-28 md:mx-12 mt-7">
        <h1 className="lg:text-2xl text-xl font-bold">Trades</h1>
        <div className="mt-4 flex mb-10">
            <div className="bg-[#E5EBE4] p-2 w-32 flex rounded-full items-center justify-around lg:mr-4 mr-2">
                <button className="">Building </button>
                <img className=" h-4" src={corss} alt="" />
            </div>
            <div className="bg-[#E5EBE4] p-2 w-32 flex rounded-full items-center justify-around lg:mr-4 mr-2">
                <button className="">Arcitecture </button>
                <img className=" h-4" src={corss} alt="" />
            </div>
            <div className="bg-[#E5EBE4] p-2 w-32 flex rounded-full items-center justify-around">
                <button className="">Gardening </button>
                <img className=" h-4" src={corss} alt="" />
            </div>
        </div>
      </div>
      <hr className="mt-6 " />
    </div>
  );
};

export default ContracorsCartDetails;
