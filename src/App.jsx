import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList.jsx";
import SelectedContact from "./components/SelectedContact.jsx";
// import ContactRow from "./components/ContactRow.jsx";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(0);

  return (
    <>
      {selectedContactId ? <div>Selected Contact View</div> : <ContactList />}
    </>
  );
}
