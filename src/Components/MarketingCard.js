import React from "react";

const MarketingCard = ({ header, detail, icon }) => {
  return (
    <div>
      <div
        className="block rounded-xl border  p-8 shadow-sm hover:shadow-md transition font-[poppins]"
        href="/services/digital-campaigns"
      >
        <div className="text-4xl " >
        {icon}
        </div>

        <h2 className="mt-4 text-xl font-bold text-black">{header}</h2>

        <p className="mt-1 text-sm text-black">{detail}</p>
      </div>
    </div>
  );
};

export default MarketingCard;
