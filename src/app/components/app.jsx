import React from "react";
import "/public/styles.css";
import contacts from "../contact.js";
import Avatar from "./Avatar.jsx";
import PhoneDetails, { EmailDetails } from "./Details.jsx";

function Card(props) {
    return <div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.imgURL} />
        </div>
        <div className="bottom">
            <PhoneDetails number={props.phone} />
            <EmailDetails email={props.email} />
        </div>
    </div>
}


function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img="data:image/jpeg;base64,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" />

            <Card
                name={contacts[0].name}
                imgURL={contacts[0].imgURL}
                phone={contacts[0].phone}
                email={contacts[0].email}
            />
            <Card
                name={contacts[1].name}
                imgURL={contacts[1].imgURL}
                phone={contacts[1].phone}
                email={contacts[1].email}
            />
            <Card
                name={contacts[2].name}
                imgURL={contacts[2].imgURL}
                phone={contacts[2].phone}
                email={contacts[2].email}
            />

        </div>
    );
}

export default App;
