import React from 'react';

import './modal.css';

type Props = {
  children: JSX.Element;
  open: Boolean;
  onClose: () => void;
};

export default function Modal({ children, open, onClose }: Props) {
  if (!open) {
    return null;
  }
  const target = (e: any) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };
  return (
    <div className="modal" onClick={target}>
      <div className="modal-content">{children}</div>
    </div>
  );
}
