import React from "react";
import contacts from "../contacts";
import Card from "./Card";
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgUrl={contact.imgURL}
      email={contact.email}
      phone={contact.phone}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
