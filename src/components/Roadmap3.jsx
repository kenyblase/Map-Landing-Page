import React from 'react'

const Roadmap3 = () => {
  return (
    <div className="bg-white border-gray-200 mb-8">
      <div className="text-md text-gray-500 mb-12">
        <span className="text-blue-500">Quotes  </span> /{"  "}
        <span className="text-gray-400">Quote Response</span>
      </div>

      {/* Steps */}
      <div className="flex items-center justify-between border p-6 rounded-lg">
        {/* Step 1 */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-green-200 text-green-500 flex items-center justify-center rounded-full text-lg font-medium">
            1
          </div>
          <div className="ml-2">
            <p className="font-medium text-gray-800">Request Information</p>
            <p className="text-sm text-gray-500">Provide details about the RFQ</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-green-200 text-green-500 flex items-center justify-center rounded-full text-lg font-medium border">
            2
          </div>
          <div className="ml-2">
            <p className="font-medium text-gray-800">Terms and Attachments</p>
            <p className="text-sm text-gray-500">Payment and delivery terms</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-medium border">
            3
          </div>
          <div className="ml-2">
            <p className="font-medium text-gray-400">Review</p>
            <p className="text-sm text-gray-300">Confirm all information provided</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap3
