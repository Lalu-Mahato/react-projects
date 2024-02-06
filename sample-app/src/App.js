import Card from "./components/props/Card";
import contacts from "./contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts:</h1>
      {contacts.map(contact => <Card key={contact.id}
        name={contact.name}
        imgURL={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />)}
    </div>
  );
}

export default App;
