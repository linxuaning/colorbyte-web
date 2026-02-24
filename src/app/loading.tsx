export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f5f0e8] flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="relative mx-auto w-16 h-16 mb-6">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-[#d4bc91]/30 rounded-full"></div>
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-amber-500 rounded-full animate-spin"></div>
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="font-lora text-[#6b5c4c] text-lg">
          Loading...
        </p>
      </div>
    </div>
  );
}
