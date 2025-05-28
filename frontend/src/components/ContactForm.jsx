import { useForm } from "react-hook-form";
import { useState } from "react";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      // Add delay before submission
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setStatusMessage("There was an error submitting the form. Please try again later...");
        return;
      }

      const res = await response.json();
      console.log(res);
      setStatusMessage("Form submitted successfully!"); // Success message
    } catch (error) {
      setStatusMessage("An unexpected error occurred. Please try again later...");
      console.error(error);
    }
  };
  

  return (
    <div className="bg-[#ffffffb3] rounded-2xl p-8 font-[Outfit] font-medium heading text-[#334155]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Student Name */}
        <div>
          <label className="block mb-1" htmlFor="name">
            Student Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 px-2 text-black font-normal"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Student Age */}
        <div>
          <label className="block mb-2" htmlFor="age">
            Student Age
          </label>
          <input
            {...register("age", {
              required: "Age is required",
              minLength: {
                value: 1,
                message: "Minimum 2 digits required",
              },
              maxLength: {
                value: 3,
                message: "Maximum 3 digits allowed",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Age must be a number",
              },
            })}
            type="tel"
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 px-2 text-black font-normal"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            type="tel"
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 px-2 text-black font-normal"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            })}
            type="email"
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 px-2 text-black font-normal"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={3}
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 resize-y px-2 text-black font-normal"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded-lg font-semibold transition-opacity nml-text text-white flex items-center justify-center ${
            isSubmitting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#003a69] hover:bg-[#0099ff] hover:cursor-pointer"
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      {/* Status Message */}
      {statusMessage && (
        <div className="p-4 rounded-lg text-center nml-text">
          {statusMessage}
        </div>
      )}
    </div>
  );
}
