import { Calendar1, X } from 'lucide-react';
import React from 'react'

const InputFields = () => {
   return (
    <div className="p-10  mx-auto bg-white rounded-lg w-full">
      <h2 className="text-xl font-bold mb-2">Request for Quote</h2>
      <p className="text-gray-600 mb-6">Fill out these details to send the RFQ</p>

      <form className="space-y-4 flex items-center justify-center">
        <div className='w-1/2'>
            <div className='mb-5'>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                RFQ No
            </label>
            <input
                type="text"
                value="RFQ-10234"
                readOnly
                className="w-[98%] p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
            />
            </div>

            {/* Title */}

            {/* Department */}
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
            </label>
            <div className='flex items-center bg-gray-100 border border-gray-300 w-[98%] rounded-lg'>
            <input
                type="text"
                value="Maternity"
                readOnly
                className="w-[98%] p-2 rounded-md bg-gray-100 text-gray-700"
            />
            <X/>
            </div>
            </div>
        </div>

        <div className='w-1/2 pt-2'>
        <div className='mb-5'>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value="Request for Equipments"
            readOnly
            className="w-[98%] p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
          />
        </div>
        {/* Expected Delivery Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expected delivery date
          </label>
          <div className='flex items-center bg-gray-100 border border-gray-300 w-[98%] rounded-lg'>
          <Calendar1/>
          <input
            type="text"
            value="2024-12-02"
            readOnly
            className="w-[98%] p-2  rounded-md bg-gray-100 text-gray-700"
          />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Calculated based on lead time and issue date
          </p>
        </div>
        </div>
      </form>
    </div>
  );
}

export default InputFields
