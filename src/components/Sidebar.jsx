import React from 'react'
import { Package, ShoppingCart, LayoutDashboard, Banknote, MessageCircleMore, CalendarRange, FileText, CircleHelp, Settings, LogOut, ChevronUp, ChevronDown } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-50 h-screen w-80 p-5 flex flex-col justify-between">
        <div>
            <div className='flex space-x-3'>
            <img src='/logo.jpg'
            className='h-14 w-28'/>
            <h3 className='font-medium'>Medical Advanced Platform</h3>
            </div>
            <nav className="flex-1 px-4">
        <ul className="space-y-2 -ml-3">
          {/* Dashboard */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-500"><LayoutDashboard fill='gray'/></span> {/* Replace with icon */}
            <span className="text-gray-700">Dashboard</span>
          </li>

          {/* Inventory */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-500"><Package fill='gray' className='text-gray-50'/></span> {/* Replace with icon */}
            <span className="text-gray-700">Inventory</span>
          </li>

          {/* Procurement */}
          <li className="flex flex-col">
            <div className="flex justify-between items-center space-x-2 p-2 bg-violet-100 rounded-lg">
              <div className='flex space-x-2'>
              <span className="text-blue-600"><ShoppingCart fill='blue'/></span> {/* Replace with icon */}
              <span className="text-blue-600">Procurement</span>
              </div>
              <ChevronUp/>
            </div>
            <ul className="ml-10 space-y-3 py-2">
              <li className="bg-violet-100 text-blue-600 p-2 rounded-lg -ml-10 pl-10">Quotes</li>
              <li>Orders</li>
            </ul>
          </li>

          {/* Finance */}
          <li className="flex justify-between items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <div className='flex space-x-2'>
            <span className="text-gray-500"><Banknote fill='gray' className='text-white'/></span> {/* Replace with icon */}
            <span className="text-gray-700">Finance</span>
            </div>
            <ChevronDown/>
          </li>

          {/* Communication */}
          <li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500"><MessageCircleMore fill='gray' className='text-white'/></span> {/* Replace with icon */}
              <span className="text-gray-700">Communication</span>
            </div>
            <span className="bg-blue-500 text-white text-xs rounded-full px-2">10</span>
          </li>

          {/* Calendar */}
          <li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500"><CalendarRange fill='gray' className='text-white'/></span> {/* Replace with icon */}
              <span className="text-gray-700">Calendar</span>
            </div>
            <span className="bg-blue-500 text-white text-xs rounded-full px-2">10</span>
          </li>

          {/* Contracts */}
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-500"><FileText className='text-white' fill='gray'/></span> {/* Replace with icon */}
            <span className="text-gray-700">Contracts</span>
          </li>
        </ul>
      </nav>

        </div>
        <div className="mt-auto">
        <ul className='space-y-2'>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-500"><CircleHelp className='text-white' fill='gray'/></span> {/* Replace with icon */}
            <span className="text-gray-700">Support</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-500"><Settings className='text-white' fill='gray'/></span> {/* Replace with icon */}
            <span className="text-gray-700">Settings</span>
          </li>
        </ul>
        <div className="px-4 py-4">
        <div className="border-t pt-4">
          <div className="flex items-center space-x-2">
            <img src='https://avatar.iran.liara.run/public/boy?username=Mark' className='h-10 w-10 rounded-full'/>
            <div className='flex'>
              <div className='truncate'>
              <p className="text-sm font-bold text-gray-700">Mark Benson</p>
              <p className="text-xs text-gray-500 text-ellipsis">markbenson@demo.com</p>
              </div>
              <LogOut className='ml-8'/>
            </div>
          </div>
        </div>
      </div>

        </div>
    </aside>
  );
};

export default Sidebar;
