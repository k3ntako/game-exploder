import React from 'react';

const ScoreField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        id={props.id}
        type='text'
        value={props.content}
        onChange={props.handleScoreChange}
      />
    </label>
  );
}

export default ScoreField;
