import React from "react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import {
  openRegisterModel,
  openLoginModel,
} from "../../../redux/slices/uiSlice";
import { createUser } from "../../../redux/slices/authSlice";
import toast from "react-hot-toast";

export default function Register() {
  const dispatch = useDispatch();
  const isregister = useSelector(state => state.ui.isRegisterModelOpen);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(isregister);
  }, [isregister]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, userData } = useSelector(state => state.user);
  // console.log(userData);
  // toast.success("User Created Successfully");
  // if (userData.success == true) {
  //   toast.success("User Created Successfully");
  // }

  const handleSubmit = async e => {
    e.preventDefault();
    // console.log("Form Data:", formData);

    // Example: check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Submit data to API here
    const response = await dispatch(createUser(formData));
    // console.log(response?.payload?.success);
    if (response?.payload?.success) {
      toast.success("User Created Successfully");
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      toast.error(response?.payload?.message || "User creation failed");
    }
  };

  return (
    <div>
      {/* <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
      >
        Open dialog
      </button> */}
      <Dialog
        open={open}
        onClose={() => dispatch(openRegisterModel())}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[350px] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="">
                <div className="">
                  <div className=" ">
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white text-gray-500   md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
                    >
                      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                        Sign Up
                      </h2>
                      <input
                        id="fullname"
                        className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                        type="text"
                        name="fullName"
                        placeholder="Enter your Name"
                        required
                        value={formData.fullName}
                        onChange={e =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      {/* <input
                          id="mobileNo"
                          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                          type="number"
                          placeholder="Enter your Number"
                          required
                        /> */}
                      <input
                        id="email"
                        className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={e =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <input
                        id="password"
                        className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        value={formData.password}
                        onChange={e =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <input
                        id="confirmPassword"
                        className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        required
                        value={formData.confirmPassword}
                        onChange={e =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      {/* <div className="text-right py-4">
                          <a className="text-blue-600 underline" href="#">
                            Forgot Password
                          </a>
                        </div> */}
                      {loading ? (
                        <button
                          class="inline-block rounded-full bg-green-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-green-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 w-full"
                          type="button"
                        >
                          <div
                            role="status"
                            class="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                          >
                            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                              Loading...
                            </span>
                          </div>
                          Loading
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white"
                        >
                          Sign Up
                        </button>
                      )}

                      <p className="text-center mt-4">
                        Already have an Account ?{" "}
                        <button
                          onClick={() => {
                            dispatch(openLoginModel());
                            dispatch(openRegisterModel());
                          }}
                          className="text-blue-500 underline cursor-pointer"
                        >
                          Login Now
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div> */}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
