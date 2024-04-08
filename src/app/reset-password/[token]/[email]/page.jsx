"use client";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";
import { usePathname } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const ForgotPassword = () => {
  const [password, setPassword] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const pathname = usePathname();

  const handleSubmit = async (e) => {
    const token = pathname.split("/")[2];
    const email = pathname.split("/")[3];
    console.log(token, email);
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/reset-password", {
        email: email,
        token: token,
        password: password,
      });
      if (response.status === 200) {
        toast.success("Password updated successfully");
        setSuccess(true);
      }

      setLoading(false);
      console.log(response.data);
    } catch (error) {
      toast.error("Something went wrong!");
      setLoading(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-[65vh] flex items-center justify-center bg-slate-50">
      <Toaster />
      {loading ? (
        <MutatingDots color="#6366F1" size={50} speed={1} />
      ) : (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          {success ? (
            <div className="flex flex-col space-y-5">
              {/* password reset successfull */}
              <h1 className="text-4xl font-medium">Password Updated</h1>
              <p className="text-slate-500">
                Your password has been updated successfully.
              </p>
              <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <Link href="/login">
                  <span>Back to login</span>
                </Link>
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-4xl font-medium">Reset password</h1>
              <p className="text-slate-500">
                Fill up the form to reset the password
              </p>

              <form onSubmit={handleSubmit} className="my-10">
                <div className="flex flex-col space-y-5">
                  <label htmlFor="password" className="flex flex-col space-y-1">
                    <p className="font-medium text-slate-700 pb-2">
                      New Password
                    </p>
                    <input
                      onChange={handlePasswordChange}
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Enter New Password"
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                      />
                    </svg>

                    <span>Reset password</span>
                  </button>
                  <p className="text-center">
                    Not registered yet?{" "}
                    <Link
                      href="/signup"
                      className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                    >
                      <span>Register now </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
