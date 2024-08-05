import { useState, useEffect } from "react";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx"; 
import styles from "./App.module.css";

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    setFeedbacks(prevFeedbacks => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1
    }));
  };

  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbackPercentage = totalFeedback > 0 
    ? Math.round((feedbacks.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={styles.app}>
      <Description
        name="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options 
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedbacks}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback 
          feedbacks={feedbacks} 
          totalFeedback={totalFeedback} 
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given" /> 
      )}
    </div>
  );
};

export default App;
