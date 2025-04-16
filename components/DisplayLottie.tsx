import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to prevent SSR error
const Lottie = dynamic(() => Promise.resolve(require("react-lottie")), {
  ssr: false,
});
type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
