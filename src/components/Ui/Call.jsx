import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Call = () => {
  return (
    <div className="flex items-center gap-4 bg-green-100 text-green-800 p-4 rounded-2xl shadow-md">
      <div className="text-green-600 text-4xl">
        <FaWhatsapp />
      </div>

      <div>
        <p className="font-semibold text-green-700 text-lg">
          Call to Schedule!
        </p>
        <p className="text-green-700 text-xl font-bold">+9099479474747</p>
      </div>
    </div>
  );
};

export default Call;
