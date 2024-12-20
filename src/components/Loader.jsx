import { Loader2 } from "lucide-react";

const LoaderModal = () => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center justify-center px-40 py-16 bg-white rounded-2xl shadow-lg">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
        <p className="mt-4 text-md font-medium text-black">Sending Quote...</p>
      </div>
    </div>
  );
};

export default LoaderModal;
