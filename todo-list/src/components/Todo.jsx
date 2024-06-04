import React from "react";
import DeleteButton from "./DeleteButton";

export default function Todo({ item, onDelete }) {
  return (
    <li>
      {item.title} <DeleteButton onDelete={() => onDelete(item.id)} />
    </li>
  );
}
