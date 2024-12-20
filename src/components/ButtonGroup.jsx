import React from 'react'
import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div className="flex justify-end mt-6 space-x-4">
      <Link to={'/'}>
      <button className="py-2 px-4 text-gray-600 border border-gray-200 rounded-md hover:bg-gray-100">
        Cancel
      </button>
      </Link>
      <button className="py-2 px-8 text-blue-600 font-bold border border-blue-500 rounded-md hover:bg-blue-50">
        Save as draft
      </button>
      <Link to={'/request-terms'}>
      <button  className="py-2 px-8 text-white font-bold bg-blue-600 rounded-md hover:bg-blue-700">
        Continue
      </button>
      </Link>
    </div>
  );
};

export default ButtonGroup;
