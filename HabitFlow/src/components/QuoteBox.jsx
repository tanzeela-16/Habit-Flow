import { useEffect, useState } from "react";
import { getQuote } from "../utils/quoteFetcher";
import { FaQuoteLeft } from "react-icons/fa";

const QuoteBox = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const data = await getQuote();
      if (data) setQuote(data);
    };
    fetchQuote();
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-100 to-teal-100 border-l-4 border-teal-500 p-6 rounded-2xl shadow-md my-6 max-w-5xl mx-auto transition-all duration-300 hover:shadow-lg">
      {quote ? (
        <div className="flex items-start gap-3">
          <FaQuoteLeft className="text-teal-600 text-2xl mt-1" />
          <div>
            <p className="italic text-gray-700 text-lg">"{quote.q}"</p>
            <p className="text-right mt-2 font-semibold text-green-800">— {quote.a}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center animate-pulse">Loading quote...</p>
      )}
    </div>
  );
};

export default QuoteBox;
