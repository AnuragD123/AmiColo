"use client";
import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import Modal from "./Modal";
import ModalTwo from "./ModalTwo";
import ModalThree from "./ModalThree";
import { useState } from "react";

const Matches = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };
  const openModal3 = () => {
    setIsModalOpen3(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false); // Use setIsModalOpen1 to close Modal 1
  };

  const closeModal2 = () => {
    setIsModalOpen2(false); // Use setIsModalOpen2 to close Modal 2
  };

  const closeModal3 = () => {
    setIsModalOpen3(false); // Use setIsModalOpen3 to close Modal 3
  };

  return (
    <div className=" flex-1 p-2 flex flex-col items-center justify-center">
      {/* Reusable Modal Component */}
      <Modal isOpen={isModalOpen1} onClose={closeModal1} />
      <ModalTwo isOpen={isModalOpen2} onClose={closeModal2} />
      <ModalThree isOpen={isModalOpen3} onClose={closeModal3} />

      <p
        className=" w-4/5 text-center text-3xl text-white font-extrabold py-3"
        style={{
          backgroundImage: "linear-gradient(#EF8463, #7170F5 )",
          clipPath:
            "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)",
        }}
      >
        Improve My Matches
      </p>
      <div className="w-4/5 mt-10 h-full flex flex-col items-center justify-center gap-8">
        <Modal isOpen={isModalOpen1} onClose={closeModal1} />
        <ModalTwo isOpen={isModalOpen2} onClose={closeModal2} />
        <ModalThree isOpen={isModalOpen3} onClose={closeModal3} />

        <div className="w-3/5 mt-10 h-full flex flex-col items-center justify-center gap-8">
          <div onClick={openModal1} className="w-full cursor-pointer">
            <div
              className="text-center flex items-center py-4 rounded-2xl px-4"
              style={{
                backgroundImage: "linear-gradient(to right, #FF6AC0, #FFD75F )",
              }}
            >
              <FaRegFileLines className=" text-xl" />
              <span className="w-full text-center text-3xl font-semibold">
                Take Quiz 1
              </span>
            </div>
            <p className=" text-center text-lg font-semibold">
              40% Better Matches{" "}
            </p>
          </div>
          <div className="w-full cursor-pointer" onClick={openModal2}>
            <div
              className="text-center flex items-center py-4 rounded-2xl px-4"
              style={{
                backgroundImage: "linear-gradient(to right, #FFF6AF, #FFABF7 )",
              }}
            >
              <FaRegFileLines className=" text-xl" />
              <span className="w-full text-center text-3xl font-semibold">
                Take Quiz 2
              </span>
            </div>
            <p className=" text-center text-lg font-semibold">
              60% Better Matches{" "}
            </p>
          </div>
          <div className="w-full cursor-pointer" onClick={openModal3}>
            <div
              className="text-center flex items-center py-4 rounded-2xl px-4"
              style={{
                backgroundImage: "linear-gradient(to right, #0FC0DD, #FBDE5C )",
              }}
            >
              <FaRegFileLines className=" text-xl" />
              <span className="w-full text-center text-3xl font-semibold">
                Take Quiz 3
              </span>
            </div>
            <p className=" text-center text-lg font-semibold">
              75% Better Matches{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
