import React from "react";

import "./modal.css";


export default function Modal({
  children,
  open,
  onClose,
}: any) {
  
  if (!open) {
    return null;
  }
  console.log(open)
  console.log(children)
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
  
      </div>
    </div>
  );
}
