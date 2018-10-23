import React from 'react';

const BodyField = (props) => {
  return (
    <label>{props.label}
      <textarea
        name={props.name}
        type="text"
        id={props.id}
        value={props.content}
        onChange={props.handleBodyChange}
      />
    </label>
  );
}

export default BodyField;
