import PropTypes from "prop-types";
import styles from "./Feedback.module.css"; 

const Feedback = ({ feedbacks, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div className={styles.feedback}> 
      <h3>Feedback Statistics</h3>
      <ul>
        <li>Good: {feedbacks.good}</li>
        <li>Neutral: {feedbacks.neutral}</li>
        <li>Bad: {feedbacks.bad}</li>
        <li>Total Feedback: {totalFeedback}</li>
        <li>Positive Feedback: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired
};

export default Feedback;
