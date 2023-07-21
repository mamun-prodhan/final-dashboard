import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const DropDown = () => {
  const menuOption = [
    { menu: "DropDown1" },
    { menu: "DropDown2" },
    { menu: "DropDown3" },
    { menu: "DropDown4" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-32 rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[##E5EBE4] p-2 w-full flex items-center justify-between font-bold text-sm rounded-lg border-2 active:border-white duration-300 active:text-white"
      >
        DropDown
        {
            !isOpen ? (
                <AiOutlineCaretDown className="h-4"></AiOutlineCaretDown>
            ): (
                <AiOutlineCaretUp className="h-4"></AiOutlineCaretUp>
            )
        }
      </button>
      {
        isOpen && (
            <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                {
                    menuOption.map((item, i)=>(
                        <h3 className="font-bold p-2 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-2" key={i}>{item.menu}</h3>
                    ))
                }
            </div>
        )
      }
    </div>
  );
};

export default DropDown;
