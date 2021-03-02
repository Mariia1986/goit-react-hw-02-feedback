import React from "react";
import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  let arr = [];
  for (let key in options) {
    arr.push(
      <button key={uuidv4()} type="button" name={key} className={s.button} onClick={onLeaveFeedback}>
        {key[0].toUpperCase(0) + key.slice(1)}
      </button>
    );
  }
  return <div>{arr}</div>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
