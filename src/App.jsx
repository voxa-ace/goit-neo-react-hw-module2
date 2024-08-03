import { useState, useEffect } from "react";
import CafeInfo from "./Components/Description/Description";
import Feedback from "./Components/Feedback/Feedback";
import Options from "./Components/Options/Options";
import styles from "./App.module.css"; 

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    // Зчитування даних з localStorage при першому завантаженні
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    // Збереження даних у localStorage при зміні стану
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
