import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const QuoteDetailsSection = () => {
  return (
  <div className="bg-white rounded-lg p-2 mb-6 flex justify-between items-center">
    <div>
    <h2 className="text-xl font-semibold text-gray-800">Quote details</h2>
    <p className="text-sm text-gray-500">Created on Wed, 12th June 2022, 08:00am</p>
    </div>
    <div className="flex justify-end mt-4 gap-3">
      <Link to={'/request-information'}>
      <button  className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium">Respond</button>
      </Link>
      <button className="px-4 py-2 bg-red-600 text-white rounded-md font-medium">Reject</button>
    </div>
  </div>
  )
}

export default QuoteDetailsSection
