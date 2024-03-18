"use client";
import React, { useEffect, useState } from "react";
import { data1 } from "./data";
import { MutatingDots } from "react-loader-spinner";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
function Modal({ isOpen, onClose }) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();

      Object.entries(selectedOptions).forEach(([key, value]) => {
        formData.append(value.header, value.value);
      });

      const res = await axios.post(`/api/user/update_profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Handle response
      if (res.data.success) {
        setLoading(false);
        toast.success("Responses Collected Successfully!");
        onClose();
      }
      setUser(res.data?.getUser[0]);
      localStorage.setItem("user", JSON.stringify(res.data?.getUser[0]));
    } catch (e) {
      // Handle errors here
      setLoading(false);
      console.error(e);
    }
  };

  const handleOptionChange = (e, number, value, header, option) => {
    e.preventDefault();
    setSelectedOptions({
      ...selectedOptions,
      [number]: {
        header: header,
        option: option,
        value: value,
      },
    });
  };

<<<<<<< HEAD
    const handleOptionChange = (question, value) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [question]: value
        }));
    };

    return (
        <>
            {/* Modal */}
            {isOpen && (
                <div className="modal fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    {/* Modal Content */}
                    <div className="modal-content bg-white w-1/2 p-8 rounded-lg">





                        {/* Option Based Questions (Capsules) */}
                        <div className="mt-4" style={{ maxHeight: "60vh", overflowY: "auto" }} >
                            <button onClick={onClose} className="close-btn absolute top-0 right-0 p-2 hover:bg-gray-200 rounded-full">&#10005;</button>
                            {/* Header */}
                            <div className="bg-blue-500 p-4 mb-4 sticky w-full top-0 left-0 z-50">
                                <div className="max-w-md mx-auto text-center">
                                    <h1 className="text-white text-3xl font-semibold mb-2">Improve your matches</h1>
                                    <div className="border-b-4 border-white w-16 mx-auto"></div>
                                </div>
                            </div>
                            {/* Question 1: Nutrition/Plant-Based Diet */}
                            <div className="question mb-4">
                                <p className="font-semibold">1. The aroma of grilled meat is less appealing to me compared to other food aromas.</p>
                                <div className="options mt-2 flex flex-wrap">
                                    <button className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${selectedOptions.q1 === 'Strongly Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q1', 'Strongly Disagree')}>Strongly Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${selectedOptions.q1 === 'Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q1', 'Disagree')}>Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${selectedOptions.q1 === 'Neutral' ? 'border border-yellow-500' : ''}`} onClick={() => handleOptionChange('q1', 'Neutral')}>Neutral</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${selectedOptions.q1 === 'Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q1', 'Agree')}>Agree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${selectedOptions.q1 === 'Strongly Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q1', 'Strongly Agree')}>Strongly Agree</button>
                                </div>
                            </div>
                            <div className="question mb-4">
                                <p className="font-semibold">2. I often explore recipes or dishes that primarily use plant-based ingredients.</p>
                                <div className="options mt-2 flex flex-wrap">
                                    <button className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${selectedOptions.q1 === 'Strongly Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q1', 'Strongly Disagree')}>Strongly Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${selectedOptions.q1 === 'Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q1', 'Disagree')}>Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${selectedOptions.q1 === 'Neutral' ? 'border border-yellow-500' : ''}`} onClick={() => handleOptionChange('q1', 'Neutral')}>Neutral</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${selectedOptions.q1 === 'Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q1', 'Agree')}>Agree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${selectedOptions.q1 === 'Strongly Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q1', 'Strongly Agree')}>Strongly Agree</button>
                                </div>
                            </div>

                            {/* Question 3: Cleanliness */}
                            <div className="question mb-4">
                                <p className="font-semibold">3. I feel more relaxed in a space if I know it has been thoroughly cleaned recently.</p>
                                <div className="options mt-2 flex flex-wrap">
                                    <button className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Disagree')}>Strongly Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Disagree')}>Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Neutral' ? 'border border-yellow-500' : ''}`} onClick={() => handleOptionChange('q2', 'Neutral')}>Neutral</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Agree')}>Agree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Agree')}>Strongly Agree</button>
                                </div>
                            </div>
                            {/* Question 4: Cleanliness */}
                            <div className="question mb-4">
                                <p className="font-semibold">4. The sight of clutter and disorganization in living spaces mildly upsets me.</p>
                                <div className="options mt-2 flex flex-wrap">
                                    <button className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Disagree')}>Strongly Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Disagree')}>Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Neutral' ? 'border border-yellow-500' : ''}`} onClick={() => handleOptionChange('q2', 'Neutral')}>Neutral</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Agree')}>Agree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Agree')}>Strongly Agree</button>
                                </div>
                            </div>
                            {/* Question 5: Cleanliness */}
                            <div className="question mb-4">
                                <p className="font-semibold">5. The idea of missing a workout session makes me uneasy.</p>
                                <div className="options mt-2 flex flex-wrap">
                                    <button className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Disagree')}>Strongly Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Disagree')}>Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Neutral' ? 'border border-yellow-500' : ''}`} onClick={() => handleOptionChange('q2', 'Neutral')}>Neutral</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Agree')}>Agree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Agree')}>Strongly Agree</button>
                                </div>
                            </div>
                            {/* Question 6: Cleanliness */}
                            <div className="question mb-4">
                                <p className="font-semibold">6. The quality of my day is significantly affected by the amount of sleep I get.</p>
                                <div className="options mt-2 flex flex-wrap">
                                    <button className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Disagree')}>Strongly Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Disagree')}>Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Neutral' ? 'border border-yellow-500' : ''}`} onClick={() => handleOptionChange('q2', 'Neutral')}>Neutral</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Agree')}>Agree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Agree')}>Strongly Agree</button>
                                </div>
                            </div>
                            {/* Question 7: Cleanliness */}
                            <div className="question mb-4">
                                <p className="font-semibold">7. I find the smell of cigarette smoke to be unpleasant.</p>
                                <div className="options mt-2 flex flex-wrap">
                                    <button className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Disagree')}>Strongly Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Disagree')}>Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Neutral' ? 'border border-yellow-500' : ''}`} onClick={() => handleOptionChange('q2', 'Neutral')}>Neutral</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Agree')}>Agree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Agree')}>Strongly Agree</button>
                                </div>
                            </div>
                            {/* Question 8: Cleanliness */}
                            <div className="question mb-4">
                                <p className="font-semibold">8. I find non-alcoholic drinks to be more refreshing than alcoholic ones.
                                </p>
                                <div className="options mt-2 flex flex-wrap">
                                    <button className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Disagree')}>Strongly Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Disagree')}>Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Neutral' ? 'border border-yellow-500' : ''}`} onClick={() => handleOptionChange('q2', 'Neutral')}>Neutral</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Agree')}>Agree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Agree')}>Strongly Agree</button>
                                </div>
                            </div>
                            {/* Question 9: Cleanliness */}
                            <div className="question mb-4">
                                <p className="font-semibold">9. I prefer spending my free time in quiet, relaxed settings over loud or busy ones.</p>
                                <div className="options mt-2 flex flex-wrap">
                                    <button className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Disagree')}>Strongly Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Disagree')}>Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Neutral' ? 'border border-yellow-500' : ''}`} onClick={() => handleOptionChange('q2', 'Neutral')}>Neutral</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Agree')}>Agree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Agree')}>Strongly Agree</button>
                                </div>
                            </div>
                            {/* Question 10: Cleanliness */}
                            <div className="question mb-4">
                                <p className="font-semibold">10. Quiet evenings at home are often more appealing to me than going out to social events.</p>
                                <div className="options mt-2 flex flex-wrap">
                                    <button className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Disagree')}>Strongly Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Disagree' ? 'border border-red-500' : ''}`} onClick={() => handleOptionChange('q2', 'Disagree')}>Disagree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Neutral' ? 'border border-yellow-500' : ''}`} onClick={() => handleOptionChange('q2', 'Neutral')}>Neutral</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Agree')}>Agree</button>
                                    <button className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${selectedOptions.q2 === 'Strongly Agree' ? 'border border-green-500' : ''}`} onClick={() => handleOptionChange('q2', 'Strongly Agree')}>Strongly Agree</button>
                                </div>
                            </div>

                        </div>
                    </div>
=======
  useEffect(() => {
    if (Object.keys(selectedOptions).length === 10) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }, [selectedOptions]);

  return (
    <>
      {/* Modal */}
      <Toaster />
      {isOpen && (
        <div className="modal fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
          {/*  */}
          {/* Modal Content */}
          {loading ? (
            <MutatingDots
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              secondaryColor="#4fa94d"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            <div className="modal-content bg-white w-1/2 p-8 rounded-lg">
              {/* Option Based Questions (Capsules) */}
              <div
                className="mt-4"
                style={{ maxHeight: "60vh", overflowY: "auto" }}
              >
                <button
                  onClick={onClose}
                  className="close-btn absolute top-0 right-0 p-2 hover:bg-gray-200 rounded-full w-12 h-12"
                >
                  &#10005;
                </button>
                {/* Header */}
                <div className="bg-blue-500 p-4 mb-4 sticky w-full top-0 left-0 z-50">
                  <div className="max-w-md mx-auto text-center">
                    <h1 className="text-white text-3xl font-semibold mb-2">
                      Improve your matches
                    </h1>
                    <div className="border-b-4 border-white w-16 mx-auto"></div>
                  </div>
>>>>>>> ae3f6d19e0123b895e64d2e58040b71b0bda2432
                </div>
                {/* Question 1: Nutrition/Plant-Based Diet */}

                {data1.map((question, index) => (
                  <div key={index} className="question mb-4">
                    <p className="font-semibold">
                      {index + 1}. {question.question}
                    </p>
                    <div className="options mt-2 flex flex-wrap">
                      <button
                        className={`option-btn mr-2 mb-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full ${
                          selectedOptions?.[index + 1]?.option ===
                          "Strongly Disagree"
                            ? "border-4 border-black"
                            : ""
                        }`}
                        onClick={(e) => {
                          handleOptionChange(
                            e,
                            index + 1,
                            question["Strongly Disagree"],
                            question.header,
                            "Strongly Disagree"
                          );
                        }}
                      >
                        Strongly Disagree
                      </button>
                      <button
                        className={`option-btn mr-2 mb-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-full ${
                          selectedOptions?.[index + 1]?.option === "Disagree"
                            ? "border-4 border-black"
                            : ""
                        }`}
                        onClick={(e) => {
                          handleOptionChange(
                            e,
                            index + 1,
                            question.Disagree,
                            question.header,
                            "Disagree"
                          );
                        }}
                      >
                        Disagree
                      </button>
                      <button
                        className={`option-btn mr-2 mb-2 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full ${
                          selectedOptions?.[index + 1]?.option === "Neutral"
                            ? "border-4 border-black"
                            : ""
                        }`}
                        onClick={(e) => {
                          handleOptionChange(
                            e,
                            index + 1,
                            question.Neutral,
                            question.header,
                            "Neutral"
                          );
                        }}
                      >
                        Neutral
                      </button>
                      <button
                        className={`option-btn mr-2 mb-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full ${
                          selectedOptions?.[index + 1]?.option === "Agree"
                            ? "border-4 border-black"
                            : ""
                        }`}
                        onClick={(e) => {
                          handleOptionChange(
                            e,
                            index + 1,
                            question.Agree,
                            question.header,
                            "Agree"
                          );
                        }}
                      >
                        Agree
                      </button>
                      <button
                        className={`option-btn mr-2 mb-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full ${
                          selectedOptions?.[index + 1]?.option ===
                          "Strongly Agree"
                            ? "border-4 border-black"
                            : ""
                        }`}
                        onClick={(e) => {
                          handleOptionChange(
                            e,
                            index + 1,
                            question["Strongly Agree"],
                            question.header,
                            "Strongly Agree"
                          );
                        }}
                      >
                        Strongly Agree
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleSubmit}
                disabled={!completed}
                className={`bg-blue-500 text-white px-4 py-2 rounded-full mt-4
            ${!completed ? "opacity-50 cursor-not-allowed" : ""}
            `}
              >
                Submit Responses
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Modal;
