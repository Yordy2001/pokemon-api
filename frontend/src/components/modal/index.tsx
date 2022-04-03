import React from "react";

import "./modal.css";

type Props ={
  children: any,
  open: Boolean
  onClose: () => void
}

export default function Modal({
  children,
  open,
  onClose,
}: Props) {
  
  if (!open) {
    return null;
  }

  return (
    <div className="modal" onClick={()=>{
      onClose()
      }}>
      <div className="modal-content">
        {children}
  
      </div>
    </div>
  );
}
