import { ChevronDown, FileText } from 'lucide-react'
import React from 'react'

const TermsAndConditions = () => {
  return (
    <div  className='flex justify-between cursor-pointer items-center border p-4 rounded-lg'>
        <div className='flex items-center'>
            <FileText className='h-12 w-12 mr-3'/>
            <div>
                <h3 class="text-2xl font-bold text-gray-800">Terms and Attachments</h3>
                <p class="mt-2 text-gray-600">Review payment and delivery terms.</p>
            </div>
        </div>
        <ChevronDown className='text-gray-400'/>
    </div>
  )
}

export default TermsAndConditions
