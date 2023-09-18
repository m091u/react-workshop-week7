import { useState } from "react";
import "./App.css";

const avatars = [
  {
    firstName: "Bart",
    lastName: "Simpson",
    image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png",
  },
  {
    firstName: "Homer",
    lastName: "Simpson",
    image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
  },
];

const Avatar = ({ firstName, lastName , image}) => (
  <div className="avatar">

    <img src={image} alt="imageAlt" />
    <h2>
      {firstName} {lastName}
    </h2>
  </div>
);

export default function App() {
  return (
    <div>
      {avatars.map(({ firstName, lastName, image }, index) => {
        return (
          <Avatar className="pfff"
            key={index}
            firstName={firstName}
            lastName={lastName}
            image={image}
          />
        );
      })}
    </div>
  );
}
