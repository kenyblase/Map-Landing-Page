import { useState } from "react";
import LoaderModal from "./Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ConfirmationModal = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate() 

    const handleConfirm = ()=>{
        setIsLoading(true)
        setTimeout(() => {
            toast.success('RFQ ID sent sucessfully!')
            setIsLoading(false)
            navigate('/', {replace: true})
        }, 3000);
    }

  return (
    <>{
        isLoading ? (<LoaderModal/>) : (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-lg font-semibold text-black">Confirmation</h2>
        <p className="mb-6 text-sm text-gray-700">
          You are about to submit this quote in response to RFQ ID. This will immediately be sent to the client 
         “Westend Clear Hospital”. Are you sure you want to proceed?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={()=>{navigate(-1)}}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
          onClick={handleConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
        )
    }
    </>
  );
};

export default ConfirmationModal;