import React from 'react';

const ScoreField = (props) => {
  let nums = []
  for(let i = 1; i < 11; i++){
    nums.push(<option value={`${i}`} key={i}>{i}</option>)
  }
  return (
    <div>
      <label>{props.label}</label>
        <select id={props.id} name={props.name} onChange={props.handleScoreChange}>
          {nums}
        </select>
    </div>
  );
}

export default ScoreField;

//
// <option value=
//
//
//   type='text'
//   value={props.content}
//
// />
