import data from "../../helper/data";
import "./card.css";

const Cards = (props) => {
  return (
    <div className="kapsayıcıcard">
      {data.slice(props.count - 1, props.count + 4).map((person) => {
        return (
          <div className="flexkısım">
            <div>
              <img className="image" src={person.image} alt="1" />
            </div>
            <div className="yazılar">
              <p className="name">{person.name}</p>
              <p className="email">{person.email}</p>
              <p className="age">{person.age}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
