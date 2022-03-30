import axios from "axios";
import React, { ChangeEvent, useState } from "react";

import "./modal.css";
import AddUpdatePokemon from "../addUpdateForm";


export default function Modal({
  type,
  ability,
  open,
  onClose,
}: any) {
  
  if (!open) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <AddUpdatePokemon type={type} ability={ability} onClose={onClose} />
      </div>
    </div>
  );
}
