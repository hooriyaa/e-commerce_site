export default function Loading() {
  return (
    <div className="flex flex-row mt-64 md:mt-52 justify-center items-center max-h-screen">
      <p className="text-lg font-semibold text-gray-700 mb-4 md:mb-0">
        Loading product Details...
      </p>
      {/* Loader */}
      <div className="loader border-x-4 ml-5 md:ml-10 border-orange-500 rounded-full w-12 h-12 md:w-16 md:h-16 animate-spin"></div>
    </div>
  );
}
