import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList.jsx"; //<-- relative URL
import SelectedContact from "./components/SelectedContact.jsx";
// import ContactRow from "./components/ContactRow.jsx";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          myId={selectedContactId}
          pickMyId={setSelectedContactId}
        />
      ) : (
        <ContactList chosenId={setSelectedContactId} />
      )}
    </>
  );
}

//ID which contact to render
//a new component for a detail view
//fetching a single id
