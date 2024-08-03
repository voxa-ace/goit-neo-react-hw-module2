import { useState, useEffect } from "react";
import CafeInfo from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import styles from "./App.module.css"; 

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    if (savedFeedbacks) {
      setFeedbacks(savedFeedbacks);
    }
  }, []);

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
    <div className={styles.app}> {/* Використання класу через styles */}
      <CafeInfo
        name="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options 
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedbacks}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback 
          feedbacks={feedbacks} 
          totalFeedback={totalFeedback} 
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      )}
    </div>
  );
};

export default App;
