import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <ul className={s.list}>
      <li className={s.item}>
        <p className={s.text}>Good:</p>
        <span className={s.text}>{good}</span>
      </li>
      <li className={s.item}>
        <p className={s.text}>Neutral:</p>
        <span className={s.text}>{neutral}</span>
      </li>
      <li className={s.item}>
        <p className={s.text}>Bad:</p>
        <span className={s.text}>{bad}</span>
      </li>
      <li className={s.item}>
        <p className={s.text}>Total:</p>
        <span className={s.text}>{total}</span>
      </li>
      <li className={s.item}>
        <p className={s.text}>PositivePercentage:</p>
        <span className={s.text}>{positivePercentage}%</span>
      </li>
    </ul>
  ) : (
    <Notification message="No feedback given" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
