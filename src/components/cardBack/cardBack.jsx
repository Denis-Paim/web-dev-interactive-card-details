import "./styles.css";

const CardBack = (props) => {
  return (
    <div className="card-back">
      {props.cardVerification === "" ? (
        <div className="card-verification">000</div>
      ) : (
        <div className="card-verification">{props.cardVerification}</div>
      )}
    </div>
  );
};

export default CardBack;
