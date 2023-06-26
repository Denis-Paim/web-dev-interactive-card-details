import React from "react";
import "./styles.css";
import iconImg from "../images/icon-complete.svg";

const Form = (props) => {
  const handleClick = (event) => {
    const numberRegex = /^[0-9]+$/;
    const nameRegex = /[A-Z][a-z]* [A-Z][a-z]*/;

    let card = props.cardNumber;
    let name = props.cardName;
    let month = props.expDateMonth;
    let year = props.expDateYear;
    let cvc = props.cardVerification;

    let resultCard = numberRegex.test(card);
    let nameResult = nameRegex.test(name);
    let monthResult = numberRegex.test(month);
    let yearResult = numberRegex.test(year);
    let cvcResult = numberRegex.test(cvc);

    if (card.length === 0) {
      document.getElementById("card-blank").style.display = "block";
      document.getElementById("card-required-error").style.display = "none";
      document.getElementById("inputCard").style.border = "1px solid red";
    } else if (!resultCard) {
      document.getElementById("card-required-error").style.display = "block";
      document.getElementById("card-blank").style.display = "none";
      document.getElementById("inputCard").style.border = "1px solid red";
    } else {
      document.getElementById("card-required-error").style.display = "none";
      document.getElementById("card-blank").style.display = "none";
    }

    if (name.length === 0) {
      document.getElementById("name-blank").style.display = "block";
      document.getElementById("name-required-error").style.display = "none";
      document.getElementById("inputName").style.border = "1px solid red";
    } else if (!nameResult) {
      document.getElementById("name-required-error").style.display = "block";
      document.getElementById("name-blank").style.display = "none";
      document.getElementById("inputName").style.border = "1px solid red";
    } else {
      document.getElementById("name-required-error").style.display = "none";
      document.getElementById("name-blank").style.display = "none";
    }

    if (month.length === 0) {
      document.getElementById("exp-blank").style.display = "block";
      document.getElementById("inputMonth").style.border = "1px solid red";
    } else if (!monthResult) {
      document.getElementById("card-required-error").style.display = "block";
      document.getElementById("inputMonth").style.border = "1px solid red";
    } else {
      document.getElementById("card-required-error").style.display = "none";
      document.getElementById("exp-blank").style.display = "none";
    }

    if (year.length === 0) {
      document.getElementById("exp-blank").style.display = "block";
      document.getElementById("inputYear").style.border = "1px solid red";
    } else if (!yearResult) {
      document.getElementById("card-required-error").style.display = "block";
      document.getElementById("inputYear").style.border = "1px solid red";
    } else {
      document.getElementById("card-required-error").style.display = "none";
      document.getElementById("exp-blank").style.display = "none";
    }

    if (cvc.length === 0) {
      document.getElementById("cvc-blank").style.display = "block";
      document.getElementById("cvc-required-error").style.display = "none";
      document.getElementById("inputCvc").style.border = "1px solid red";
    } else if (!cvcResult) {
      document.getElementById("cvc-required-error").style.display = "block";
      document.getElementById("cvc-blank").style.display = "none";
      document.getElementById("inputCvc").style.border = "1px solid red";
    } else {
      document.getElementById("cvc-required-error").style.display = "none";
      document.getElementById("cvc-blank").style.display = "none";
    }

    if (resultCard && nameResult && monthResult && yearResult && cvcResult) {
      document.getElementById("formConcluded").style.display = "none";
      document.getElementById("cardAdded").style.display = "block";
    }

    event.preventDefault();
  };

  function handleChange(event) {
    const name = event.target.name;
    name === "cardholder"
      ? props.setCardName(event.target.value)
      : name === "cardNumber"
      ? props.setCardNumber(event.target.value)
      : name === "expMonth"
      ? props.setExpDateMonth(event.target.value)
      : name === "expYear"
      ? props.setExpDateYear(event.target.value)
      : props.setCardVerification(event.target.value);
  }

  return (
    <div className="form-section">
      <form
        onSubmit={handleClick}
        className="form"
        action=""
        id="formConcluded"
      >
        <div className="form-row">
          <div className="form-group col-lg-12">
            <label for="inputName">CARDHOLDER NAME</label>
            <input
              name="cardholder"
              onChange={handleChange}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="e.g. Jane Appleseed"
            />
            <div className="error" id="name-required-error">
              Wrong format, letters only
            </div>
            <div className="error" id="name-blank">
              Can't be blank
            </div>
          </div>
          <div className="form-group col-lg-12">
            <label for="inputNumber">CARD NUMBER</label>
            <input
              name="cardNumber"
              onChange={handleChange}
              type="text"
              className="form-control"
              id="inputCard"
              placeholder="e.g. 1234 5678 9123 0000"
              maxlength="16"
            />
            <div className="error" id="card-required-error">
              Wrong format, numbers only
            </div>
            <div className="error" id="card-blank">
              Can't be blank
            </div>
          </div>
          <div className="form-row">
            <div className="form-group input-left col-lg-6">
              <label for="inputExp">EXP. DATE (MM/YY)</label>
              <div className="flex ">
                <input
                  name="expMonth"
                  min="1"
                  max="12"
                  maxLength="2"
                  onChange={handleChange}
                  type="number"
                  className="form-control"
                  id="inputMonth"
                  placeholder="MM"
                />
                <input
                  name="expYear"
                  minLength="2"
                  maxLength="2"
                  onChange={handleChange}
                  type="number"
                  className="form-control inputLeft"
                  id="inputYear"
                  placeholder="YY"
                />
              </div>
              <div className="error" id="exp-blank">
                Can't be blank
              </div>
            </div>
            <div className="form-group input-right col-sm-6 col-lg-6">
              <label for="inputCvc">CVC</label>
              <input
                name="cvc"
                minLength="3"
                maxLength="3"
                onChange={handleChange}
                type="text"
                className="form-control"
                id="inputCvc"
                placeholder="e.g. 123"
              />
              <div className="error" id="cvc-required-error">
                Wrong format, numbers only
              </div>
              <div className="error" id="cvc-blank">
                Can't be blank
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary col-lg-12">
          Confirm
        </button>
      </form>
      <div id="cardAdded" className="formCompleted">
        <img src={iconImg} alt="icon" />
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button type="submit" className="btn btn-primary col-lg-12">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Form;
