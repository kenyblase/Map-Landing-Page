import React from 'react'

const ItemsSection = () => {
  return (
    <div class="bg-white rounded-lg border p-6 mb-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Item(s)</h3>
    <div className='border p-4 rounded-lg'>
    <table class="w-full text-left ">
      <thead>
        <tr>
          <th class="border-b-2 pb-2 text-gray-400 font-normal"><input type="checkbox" className='w-4 h-4 mr-2'/> Items</th>
          <th class="border-b-2 pb-2 pl-24 text-gray-400 font-normal">Variants</th>
          <th class="border-b-2 pb-2 pl-24 text-gray-400 font-normal">Quantity</th>
          <th class="border-b-2 pb-2 pl-24 text-gray-400 font-normal">Price</th>
          <th class="border-b-2 pb-2 pl-24 text-gray-400 font-normal">Amount</th>
          <th class="border-b-2 pb-2 pl-24 text-gray-400 font-normal">Expected Delivery Date</th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-b'>
          <td class="pt-2 flex items-center"> <input type="checkbox" className='w-4 h-4 mr-2' /><img src="/placeholder.jpg" alt="item picture" className='w-10 h-10 mx-2 rounded-lg' /><p className='flex flex-col'><span>Oxygen Concentrator</span> <span>#123456</span></p></td>
          <td class="pt-2 pl-24">Blue</td>
          <td class="pt-2 pl-24">100 pieces</td>
          <td class="pt-2 pl-24">$200.00</td>
          <td class="pt-2 pl-24">$2,000.00</td>
          <td class="pt-2 pl-24">2024-08-07</td>
        </tr>
        <tr className='border-b'>
          <td class="pt-2 flex items-center"> <input type="checkbox" className='w-4 h-4 mr-2' /><img src="/placeholder.jpg" alt="item picture" className='w-10 h-10 mx-2 rounded-lg' /><p className='flex flex-col'><span>Mechanical Ventilator</span> <span>#123456</span></p></td>
          <td class="pt-2 pl-24">NIL</td>
          <td class="pt-2 pl-24">45 Kg</td>
          <td class="pt-2 pl-24">$350.00</td>
          <td class="pt-2 pl-24">$2,500.00</td>
          <td class="pt-2 pl-24">2024-08-07</td>
        </tr>
        <tr>
          <td class="pt-2 flex items-center"> <input type="checkbox" className='w-4 h-4 mr-2' /><img src="/placeholder.jpg" alt="item picture" className='w-10 h-10 mx-2 rounded-lg' /><p className='flex flex-col'><span>Patient Monitor</span> <span>#123456</span></p></td>
          <td class="pt-2 pl-24">Blue</td>
          <td class="pt-2 pl-24">30 Units</td>
          <td class="pt-2 pl-24" >$300.00</td>
          <td class="pt-2 pl-24">$1,500.00</td>
          <td class="pt-2 pl-24">2024-08-07</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="flex justify-end mt-4 mr-24">
      <div>
        <p class="text-sm text-gray-500">Sub Total: $8,000.00</p>
        <p class="text-lg font-semibold text-gray-800">Total: $8,750.00</p>
      </div>
    </div>
  </div>
  )
}

export default ItemsSection
