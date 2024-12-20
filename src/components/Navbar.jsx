import { Bell, ChevronLeft, Search, MessageCircleMore, ChevronDown } from "lucide-react";

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-white border-b p-4 shadow-sm">
        <div className="flex mr-56">
        <ChevronLeft className="text-gray-400"/>
        <span className="text-gray-400">Back</span>
        </div>

      {/* Right Icons, Search Input, and Profile */}
      <div className="flex justify-end space-x-4 w-full">
        {/* Search Input */}
        <div className="flex items-center w-full ml-60 border rounded-md">
          <Search className="text-gray-500 ml-2"/>
        <input
          type="text"
          placeholder="Search here..."
          className="px-3 py-2 w-full outline-none"
        />
        </div>

        {/* Notification Icon */}
       <Bell className="h-10 w-10 text-gray-500"/>

       <MessageCircleMore className="h-10 w-10  text-gray-500"/>

        {/* Profile Image */}
        <img
          src="https://avatar.iran.liara.run/public/girl?username=Sarah"
          alt="Profile"
          className="rounded-full w-10 h-10 object-cover"
        />

        <ChevronDown className="h-10 w-10 text-gray-500"/>
      </div>
    </div>
  );
};

export default TopNavbar;