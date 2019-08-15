import React from 'react';

const Ghibli = props => {
  return (
    <div>
      <h4>{props.Ghibli.name}</h4>
      <img src={props.Ghibli.url} alt={props.Ghibli.name} />
    </div>
  );
};

export default Ghibli;