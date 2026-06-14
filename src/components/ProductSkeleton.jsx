import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow border border-gray-200 animate-pulse">
      <div className="w-full h-52 bg-gray-200"></div>

      <div className="p-5">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>

        <div className="h-5 w-1/2 bg-gray-200 rounded mb-6"></div>

        <div className="flex gap-3">
          <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>

          <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
