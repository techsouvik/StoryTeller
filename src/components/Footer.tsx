import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[80vw] mx-auto border-t border-green-800 mt-20 mb-5 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start">
          <Link
            href={"/"}
            className="text-2xl py-4  flex items-center gap-2  font-bold"
          >
            <Image
              width={60}
              height={60}
              src={
                "https://utfs.io/f/V7kCML5PZ5mcU2dAsPAYf6QSOxPzstWrbh9FadMwj8eNmkK1"
              }
              alt="App Logo"
            />
            <div className="text-green-900 underline decoration-wavy text-4xl font-bold">
              StoryDev
            </div>
          </Link>
        </div>
        <p className="mt-4 text-center text-sm text-green-700 lg:mt-0 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
