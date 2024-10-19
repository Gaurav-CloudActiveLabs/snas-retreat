"use client";

import React from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close Modal"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
