import React from "react";
import { useState } from "react";
import ContactList from "./ContactList";

export default function ContactRow({ bubbles, pickId }) {
  //{bubbles, pickId} is accessing the object in ContactList.jsx
  return (
    <tr
      onClick={() => {
        pickId(bubbles.id);
      }}
    >
      <td>{bubbles.name}</td>
      <td>{bubbles.email}</td>
      <td>{bubbles.phone}</td>
    </tr>
  );
}
