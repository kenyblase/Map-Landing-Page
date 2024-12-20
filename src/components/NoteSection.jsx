const NoteSection = () => {
  return (
    <div className="w-1/3 p-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Note
      </label>
      <textarea
        className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter note here"
        maxLength="200"
      ></textarea>
      <div className="text-right text-sm text-gray-500 mt-1">0/200</div>
    </div>
  );
};

export default NoteSection;