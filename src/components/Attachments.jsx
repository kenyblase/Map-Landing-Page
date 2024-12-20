import { CloudUpload, UploadCloud } from 'lucide-react';
import React from 'react';

const Attachment = () => {
   return (
    <div className="w-1/2 p-10">
      <label className="block text-md font-medium text-gray-600 mb-2">
        Attachments
      </label>
      <p className="mb-6 text-sm text-gray-400">
          Attach all necessary files or documents
        </p>
      <label
      htmlFor='file-upload'
        className="flex items-center justify-center cursor-pointer flex-col w-full h-60 p-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <UploadCloud className='bg-gray-200 p-4 rounded-full h-16 w-16 mb-5'/>
        <div className='flex flex-col mb-5'>
             <p className="text-sm text-gray-600">
            <span className="text-blue-500 cursor-pointer hover:underline">
              Click to upload
            </span>{' '}
            or drag and drop
          </p>
          <p className="text-xs text-gray-300">SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </div>
        <hr className='w-full'/>
        <button className="mt-5 px-4 py-2 text-sm font-medium text-blue-700 border border-blue-700 bg-white rounded-md hover:bg-blue-600">
            Browse Files
          </button>
          <input id='file-upload'
          type='file'
          className='hidden'/>
      </label>
    </div>
  );
};

export default Attachment