import React from "react";
import useGetBalance from "../hooks/useGetBalance";

const Balance = () => {
  const { balance } = useGetBalance();
  return (
    <div className="text-2xl px-4 py-3 font-semibold text-slate-700">
      Your Available Balance : ${balance}
    </div>
  );
};

export default Balance;
