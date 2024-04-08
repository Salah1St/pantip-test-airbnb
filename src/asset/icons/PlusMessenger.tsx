"use client";
import React from "react";
interface props {
  color?: string;
  size?: string;
}
function PlusMessenger({ size = "32px", color = "black" }: props) {
  return (
    <svg width={`${size}`} height={`${size}`} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path stroke={`${color}`} strokeLinecap="round" strokeWidth="12" d="M96 65v44m22-22H74" />
      <path
        stroke={`${color}`}
        strokeLinejoin="round"
        strokeWidth="12"
        d="M96 151.5c35.898 0 65-28.99 65-64.75C161 50.99 131.898 22 96 22c-35.898 0-65 28.99-65 64.75 0 42.55 39 74 65 83.25v-18.5Z"
      />
    </svg>
  );
}

export default PlusMessenger;
