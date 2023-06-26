import "./styles.css";

const CardFront = (props) => {
  return (
    <div>
      <div className="card-front">
        <div className="flex">
          <div className="circle-left"></div>
          <div className="circle-right"></div>
        </div>

        <div className="card-number">
          {props.cardNumber === "" ? (
            <h2>0000 0000 0000 0000</h2>
          ) : (
            <h2>{props.cardNumber}</h2>
          )}
        </div>

        <div className="flex">
          {props.cardName === "" ? (
            <p>Jane Appleseed</p>
          ) : (
            <p>{props.cardName}</p>
          )}
          <p className="expDetails">
            {props.expDateMonth === "" && props.expDateYear === "" ? (
              <p>00/00</p>
            ) : (
              <p>
                {props.expDateMonth}/{props.expDateYear}
              </p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
