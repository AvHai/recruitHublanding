import { Mail, MessageSquare, UserRound, Phone } from "lucide-react";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

function Support() {
  return (
    <div className="w-full md:w-5/6 mx-auto mt-10">
      <h1 className="text-2xl sm:text-3xl text-blue-500 font-bold mb-6">Contact Us</h1>
      <div className="bg-white w-full flex flex-col p-4 sm:p-6 md:p-10 rounded-lg shadow-md gap-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex justify-center items-center lg:w-1/2">
            <img src="/support_asset.png" alt="support" className="w-full max-w-xs sm:max-w-md object-contain" />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 gap-4">
            {/* Form Fields */}
            <input type="text" placeholder="Full Name" className="p-3 rounded-md border" />
            <input type="email" placeholder="Email Address" className="p-3 rounded-md border" />
            <input type="tel" placeholder="Phone Number" className="p-3 rounded-md border" />
            <textarea placeholder="Your Message" className="p-3 rounded-md border h-32 resize-none"></textarea>
            <button className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
