import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const DropDown = () => {
  const menuOption = [{ menu: "DropDown1" }];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-32 rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[#E5EBE4] p-2 w-full flex items-center justify-between text-sm rounded-lg border-2 active:border-white duration-300 active:text-white"
      >
        DropDown
        {!isOpen ? (
          <AiOutlineCaretDown className="h-4"></AiOutlineCaretDown>
        ) : (
          <AiOutlineCaretUp className="h-4"></AiOutlineCaretUp>
        )}
      </button>
      {isOpen && (
        <div className="bg-[#3F8825] bg-opacity-[31%] absolute top-11 flex flex-col items-start rounded-lg p-1 w-full">
          {menuOption.map((item, i) => (
            <h3
              className="p-1 w-full hover:bg-[#3F8825] hover:bg-opacity-[70%] cursor-pointer rounded-lg"
              key={i}
            >
              {item.menu}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
