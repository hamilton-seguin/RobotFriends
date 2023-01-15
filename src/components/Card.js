import React from "react";

const Card = ({ id, name, email, selected }) => {

  const onClick = () => {
    return selected(id);
  };

  return (
    <div
      className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      onClick={onClick}
    >
      <img
        alt="robots"
        src={`https://robohash.org/${id}?200x200`}
        id={`robot-${id}`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
