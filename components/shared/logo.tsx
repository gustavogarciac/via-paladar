import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="relative flex items-center">
      <span className="text-4xl text-zinc-950 z-20 font-playfair_display font-bold">
        Via Paladar
      </span>
      <Image
        src={"/assets/logo_ellipse.svg"}
        width={120}
        height={120}
        alt=""
        className="absolute z-10 left-8"
      />
    </div>
  );
};
