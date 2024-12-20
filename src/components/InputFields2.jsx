import { ChevronDown } from 'lucide-react';
import React from 'react'

const InputFields2 = () => {
   return (
    <div className="p-10  mx-auto bg-white rounded-lg w-full">
      <h2 className="text-xl font-bold mb-2">Terms and Attachments</h2>
      <p className="text-gray-600 mb-6">Provide detailed information on payment and delivery terms</p>

      <form className="space-y-4 flex items-center justify-center">
        <div className='w-1/2'>
            <label className="block text-md font-medium text-gray-700 mb-1">
                Payment Terms
            </label>
            <div className='mb-5 flex items-center bg-white border border-gray-300 w-[98%] rounded-lg'>
            <input
                type="text"
                value="Net 30"
                readOnly
                className="w-[98%] p-2 rounded-md bg-white text-gray-700"
            />
            <ChevronDown/>
            </div>

            {/* Title */}

            {/* Department */}
            <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
                Shipping Method
            </label>
                <div className='flex items-center bg-white border border-gray-300 w-[98%] rounded-lg'>
                    <input
                        type="text"
                        value="Courier Services"
                        readOnly
                        className="w-[98%] p-2 rounded-md bg-white text-gray-700"
                    />
                    <ChevronDown/>
                </div>
            </div>
        </div>

        <div className='w-1/2 pb-4'>
<div>
            <label className="block text-md font-medium text-gray-700 mb-1">
                Delivery Schedule
            </label>
            <div className='mb-5 flex items-center bg-white border border-gray-300 w-[98%] rounded-lg'>
            <input
                type="text"
                value="immediate delivery"
                readOnly
                className="w-[98%] p-2 rounded-md bg-white text-gray-700"
            />
            <ChevronDown/>
            </div>
        </div>
        {/* Expected Delivery Date */}
        <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
                Lead Time
            </label>
            <div className='flex items-center bg-white border border-gray-300 w-[98%] rounded-lg'>
            <input
                type="text"
                value="10"
                readOnly
                className="w-[98%] p-2 rounded-md bg-white text-gray-700"
            />
            <ChevronDown/>
            </div>
        </div>
        </div>
      </form>
    </div>
  );
}

export default InputFields2
