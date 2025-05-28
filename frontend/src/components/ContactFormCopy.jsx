import React, { useState } from 'react';

export default function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission (e.g., send data to API)
    console.log('Submitted data:', formData);
  };

  return (
    <div
      className=""
    //   style={{ backgroundImage: `url('/path/to/your/background.jpg')` }}
    >
      <div className="bg-[#ffffffb3] rounded-2xl p-8 font-[Outfit] font-medium heading text-[#334155]">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student Name */}
          <div>
            <label className="block  mb-1" htmlFor="name">
              Student Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 px-2 text-black font-normal"
            />
          </div>

          {/* Student Age */}
          <div>
            <label className="block mb-2" htmlFor="age">
              Student Age
            </label>
            <input
              id="age"
              name="age"
              type="text"
              value={formData.age}
              onChange={handleChange}
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 px-2 text-black font-normal"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 px-2 text-black font-normal"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 px-2 text-black font-normal"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1 resize-y px-2 text-black font-normal"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#003a69] text-white py-2 rounded-lg transition-opacity hover:bg-[#0099ff] hover:cursor-pointer nml-text font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
