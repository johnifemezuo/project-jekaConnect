import { useAtom } from "jotai";
import React from "react";
import { reviewTopButton } from "../../../base/atom/useAtom";
import UpIcon from "../Icons/UpIcon";

const TopButton = () => {
  const [useRevealButton] = useAtom(reviewTopButton);

  return (
    <a href="#top">
      <div
        className={`"rounded-full ml-5 lg:ml-12 cursor-pointer z-30 p-6 bg-gray-dark text-white transitions  bg-[#219E82] fixed bottom-9 left-0" ${
          useRevealButton
            ? " opacity-1"
            : " opacity-0"
        }`}
      >
        <UpIcon />
      </div>
    </a>
  );
};

export default TopButton;
