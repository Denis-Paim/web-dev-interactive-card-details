import "./App.css";
import React, { useState } from "react";
import CardFront from "./components/cardFront/cardFront";
import CardBack from "./components/cardBack/cardBack";
import Form from "./components/form/form";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expDateMonth, setExpDateMonth] = useState("");
  const [expDateYear, setExpDateYear] = useState("");
  const [cardVerification, setCardVerification] = useState("");

  return (
    <div className="App">
      <div className="img-left">
        <CardFront
          cardNumber={cardNumber}
          cardName={cardName}
          expDateMonth={expDateMonth}
          expDateYear={expDateYear}
        />
        <CardBack cardVerification={cardVerification} />
      </div>
      <div className="right">
        <Form
          cardNumber={cardNumber}
          cardName={cardName}
          expDateMonth={expDateMonth}
          expDateYear={expDateYear}
          cardVerification={cardVerification}
          setCardNumber={setCardNumber}
          setCardName={setCardName}
          setExpDateMonth={setExpDateMonth}
          setExpDateYear={setExpDateYear}
          setCardVerification={setCardVerification}
        />
      </div>
    </div>
  );
}

export default App;
