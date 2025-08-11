import { useState } from 'react';
import './App.css';
import CafeInfo from './components/CafeInfo/CafeInfo';
import VoteOptions from './components/VoteOptions/VoteOptions';
import VoteStats from './components/VoteStats/VoteStats';
import Notification from './components/Notification/Notification';

// Тип для голосу
type VoteType = 'good' | 'neutral' | 'bad';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleVote = (type: VoteType) => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
    }
  };

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const total = good + neutral + bad;

  return (
    <div>
      <CafeInfo title="Expresso Cafe Feedback" />
      <VoteOptions
        onVote={handleVote}
        onReset={handleReset}
        canReset={total > 0}
      />
      <h2>Statistics</h2>
      {total > 0 ? (
        <VoteStats
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

export default App;
