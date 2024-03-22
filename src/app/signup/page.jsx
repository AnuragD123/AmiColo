"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    dob: new Date(),
    email: "",
    password: "",
    gender: "",
  });

  const handleSignup = async () => {
    try {
      // setLoading(true);
      const response = await axios.post("/api/auth/signup", user);
      // console.log("Signup success", response.data);
      toast.success(response.data.message);

      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    }
    // finally {
    //     setLoading(false);
    // }
  };

  // useEffect(() => {
  //   if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
  //       setButtonDisabled(false);
  //   } else {
  //       setButtonDisabled(true);
  //   }
  // }, [user]);

  return (
    <section>
      <Toaster />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="first_name"
                      className="text-base font-medium text-gray-900"
                    >
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="First Name"
                        id="first_name"
                        value={user.first_name}
                        onChange={(e) =>
                          setUser({ ...user, first_name: e.target.value })
                        }
                      ></input>
                    </div>
                  </div>
                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="last_name"
                      className="text-base font-medium text-gray-900"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Last Name"
                        id="last_name"
                        value={user.last_name}
                        onChange={(e) =>
                          setUser({ ...user, last_name: e.target.value })
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Date of Birth */}
                  <div>
                    <label
                      htmlFor="date"
                      className="text-base font-medium text-gray-900"
                    >
                      Date of Birth
                    </label>
                    <div className="mt-2">
                      <DatePicker
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        selected={user.dob}
                        onChange={(date) => setUser({ ...user, dob: date })}
                      />
                    </div>
                  </div>
                  {/* Gender */}
                  <div>
                    <label
                      htmlFor="gender"
                      className="text-base font-medium text-gray-900"
                    >
                      Gender
                    </label>
                    <div className="mt-2">
                      <select
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        id="gender"
                        value={user.gender}
                        onChange={(e) =>
                          setUser({ ...user, gender: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    onClick={handleSignup}
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            {/* <div className="mt-3 space-y-3">

              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </span>
                Sign up with Facebook
              </button>
            </div> */}
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;
