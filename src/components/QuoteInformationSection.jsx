import React from 'react'
import {Building2} from 'lucide-react'

const QuoteInformationSection = () => {
  return (
    <div class="bg-white rounded-lg border p-4 mb-6 w-full">
        <div className='flex items-center'>
            <div className='flex-1 '>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Quote Information</h3>
                <div>
                    <div className='w-full flex mb-4'>
                        <p class=" min-w-64 text-sm text-gray-400">Title</p>
                        <p class="font-medium text-gray-700 ">Request for Equipments</p>
                    </div>
                    <div className='w-full flex mb-4'>
                        <p class="min-w-64 text-sm text-gray-400">RFQ No</p>
                        <p class="font-medium text-gray-700">RQ #01234</p>
                    </div>
                    <div className='w-full flex  mb-4'>
                        <p class="min-w-64 text-sm text-gray-400">Requestor</p>
                        <div className='flex items-center'>
                        <img src="https://avatar.iran.liara.run/public/boy?username=jane" alt="profile pic" className='h-8 w-8 mr-2'/>
                        <p class="font-medium text-gray-700">Jane Doe - <span className='text-gray-400'> Head Nurse, Paediatrics</span></p>
                        </div>
                    </div>
                    <div className='w-full flex mb-4'>
                        <p class="min-w-64 text-sm text-gray-400">Status</p>
                        <p class="font-medium bg-orange-100 text-orange-500 rounded-full px-2">Awaiting</p>
                    </div>
                    <div className='w-full flex mb-4'>
                        <p class="min-w-64 text-sm text-gray-400">Department</p>
                        <p class="font-medium text-gray-700">Maternity</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between w-1/3'>
                
                <div>
                    <div className='flex flex-col'>
                        <p class="flex text-sm text-gray-400 ml-48">Expected delivery date: 2024-12-02</p>
                        <div className='border p-4 rounded-lg'>
                        <div className='flex items-center mt-2 mb-3'>
                        <Building2 className='text-gray-400 mr-2'/>
                        <p class="text-md text-gray-400">Client</p>
                        </div>
                        <div className='flex'>
                        <img src="https://avatar.iran.liara.run/public/boy?username=Bob" alt="profile picture" className='w-10 h-10'/>
                        <div className='ml-2'>
                        <p class="font-medium text-gray-700">Westend Hospital</p>
                        <p class="text-sm text-gray-400">Clear Street</p>
                        </div>
                        </div>
                    </div>
                        </div>
                </div>
            </div>
        </div>
  </div>
  )
}

export default QuoteInformationSection
