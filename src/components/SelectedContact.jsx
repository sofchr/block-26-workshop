import { useState, useEffect } from "react";

export default function SelectedContact({ pickMyId, myId }) {
  const [contact, setContact] = useState({});
  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${myId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, []);
  return (
    <div>
      <p>
        <b>Name: </b>
        {contact.name}
      </p>
      <p>
        <b>Email: </b>
        {contact.email}
      </p>
      <p>
        <b>Phone: </b>
        {contact.phone}
      </p>
      <div>
        <b>Address:</b>
        <p>{contact.address?.street}</p>
        <p>{contact.address?.city}</p>
        <p>{contact.address?.zipcode}</p>
      </div>
      <button
        onClick={() => {
          pickMyId(null);
        }}
      >
        Back to Contact List
      </button>
    </div>
  );
}
