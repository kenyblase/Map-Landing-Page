import React from 'react'
import { FilePenIcon} from 'lucide-react'

const QuoteInformationSection2 = () => {
  return (
    <div class="bg-white rounded-lg border p-4 mb-6 w-full">
        <div className='flex'>
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
            <div className='flex justify-end w-1/3'>
                        <FilePenIcon className='text-gray-400'/>
            </div>
        </div>
  </div>
  )
}

export default QuoteInformationSection2
