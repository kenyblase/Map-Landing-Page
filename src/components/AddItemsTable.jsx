import { Calendar, ChevronDown, DollarSign, Trash2 } from 'lucide-react';
import React from 'react'

const AddItemsTable = () => {
  return (
    <div className="p-6 w-full bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add Items</h2>

      <table className="w-full  text-left text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-gray-400 p-2">Items</th>
            <th className="text-gray-400 p-2">Variant</th>
            <th className="text-gray-400 p-2">Quantity</th>
            <th className="text-gray-400 p-2">Price</th>
            <th className="text-gray-400 p-2">Expected delivery date</th>
            <th className="text-gray-400 p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr>
            <td className="p-2 bg-gray-100 rounded-lg">
                <div className='flex justify-between'>
                    <span className='text-lg'>Oxygen Concentrator</span>
                    <ChevronDown/>
                </div>
            </td>
            <td className="border p-2 ml-2 rounded-lg">
                <div className='flex justify-between'>
                    <span className='text-lg'>Blue</span>
                    <ChevronDown/>
                </div>
            </td>
            <td className="p-2 rounded-lg">
                <div className='flex justify-between items-center'>
                    <span className='text-lg'>100 </span>
                    <span className='bg-gray-200 rounded-lg p-2'>pack</span>
                </div>
            </td>
            <td className="border p-2">
                <div className='flex items-center'>
                    <DollarSign/>
                <span className='text-lg'>12.00</span>
                </div>
            </td>
            <td className="border p-2">
                <div className='flex items-center'>
                <Calendar className='mr-2'/>
                <span className='text-lg'>2023-12-02</span>
                </div>
            </td>
            <td className=" p-2 text-lg">
                <div className='flex justify-between'>
                <span>$1200.00</span>
                <Trash2/>
                </div>
            </td>
          </tr>
          <tr>
            <td className="p-2 bg-gray-100 rounded-lg">
                <div className='flex justify-between'>
                    <span className='text-lg'>Mechanical Ventilator</span>
                    <ChevronDown/>
                </div>
            </td>
            <td className="border p-2 ml-2 rounded-lg">
                <div className='flex justify-between'>
                    <span className='text-lg'>Blue</span>
                    <ChevronDown/>
                </div>
            </td>
            <td className="p-2 rounded-lg">
                <div className='flex justify-between items-center'>
                    <span className='text-lg'>100 </span>
                    <span className='bg-gray-200 rounded-lg p-2'>pack</span>
                </div>
            </td>
            <td className="border p-2">
                <div className='flex items-center'>
                    <DollarSign/>
                <span className='text-lg'>12.00</span>
                </div>
            </td>
            <td className="border p-2">
                <div className='flex items-center'>
                <Calendar className='mr-2'/>
                <span className='text-lg'>2023-12-02</span>
                </div>
            </td>
            <td className=" p-2 text-lg">
                <div className='flex justify-between'>
                <span>$1200.00</span>
                <Trash2/>
                </div>
            </td>
          </tr>
          <tr>
            <td className="p-2 bg-gray-100 rounded-lg">
                <div className='flex justify-between'>
                    <span className='text-lg'>Patient Monitor</span>
                    <ChevronDown/>
                </div>
            </td>
            <td className="border p-2 ml-2 rounded-lg">
                <div className='flex justify-between'>
                    <span className='text-lg'>Blue</span>
                    <ChevronDown/>
                </div>
            </td>
            <td className="p-2 rounded-lg">
                <div className='flex justify-between items-center'>
                    <span className='text-lg'>100 </span>
                    <span className='bg-gray-200 rounded-lg p-2'>pack</span>
                </div>
            </td>
            <td className="border p-2">
                <div className='flex items-center'>
                    <DollarSign/>
                <span className='text-lg'>12.00</span>
                </div>
            </td>
            <td className="border p-2">
                <div className='flex items-center'>
                <Calendar className='mr-2'/>
                <span className='text-lg'>2023-12-02</span>
                </div>
            </td>
            <td className=" p-2 text-lg">
                <div className='flex justify-between'>
                <span>$1200.00</span>
                <Trash2/>
                </div>
            </td>
          </tr>
          <tr>
            <td className="p-2 bg-gray-100 rounded-lg">
                <div className='flex justify-between'>
                    <span className='text-lg'>Mechanical Ventilator</span>
                    <ChevronDown/>
                </div>
            </td>
            <td className="border p-2 ml-2 rounded-lg">
                <div className='flex justify-between'>
                    <span className='text-lg'>Blue</span>
                    <ChevronDown/>
                </div>
            </td>
            <td className="p-2 rounded-lg">
                <div className='flex justify-between items-center'>
                    <span className='text-lg'>100 </span>
                    <span className='bg-gray-200 rounded-lg p-2'>pack</span>
                </div>
            </td>
            <td className="border p-2">
                <div className='flex items-center'>
                    <DollarSign/>
                <span className='text-lg'>12.00</span>
                </div>
            </td>
            <td className="border p-2">
                <div className='flex items-center'>
                <Calendar className='mr-2'/>
                <span className='text-lg'>2023-12-02</span>
                </div>
            </td>
            <td className=" p-2 text-lg">
                <div className='flex justify-between'>
                <span>$1200.00</span>
                <Trash2/>
                </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Sub Total */}
      <div className="flex justify-end mt-4">
        <span className="text-gray-500 text-lg">Sub Total: $4800.00</span>
      </div>
    </div>
  );
}

export default AddItemsTable
