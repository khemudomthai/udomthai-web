import { useState } from 'react';

export function HolidayModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Close button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Holiday Hours!</h2>
          
          <p className="text-gray-700 mb-6 font-medium">
            We’re open on Tuesday the 23rd and 30th.
          </p>

          <div className="space-y-3 text-left inline-block">
            <div>
              <span className="font-bold text-gray-800">Christmas Eve:</span>
              <br/>
              <span className="text-gray-600">11:30 AM–2:00 PM, 4:00 PM–8:30 PM</span>
            </div>
            
            <div>
              <span className="font-bold text-gray-800">Christmas Day:</span>
              <br/>
              <span className="text-gray-600">12:00 PM–8:00 PM</span>
            </div>

            <div>
              <span className="font-bold text-gray-800">New Year’s Eve:</span>
              <br/>
              <span className="text-gray-600">11:30 AM–2:00 PM, 4:00 PM–8:30 PM</span>
            </div>

            <div>
              <span className="font-bold text-gray-800">New Year’s Day:</span>
              <br/>
              <span className="text-gray-600">Closed</span>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
