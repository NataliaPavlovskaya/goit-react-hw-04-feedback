import {useState} from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App ( ) {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);


	const onLeaveFeedback = option => {
        switch (option) {
			case 'good':
			  setGood(prevGood => prevGood + 1);
			  break;
			case 'neutral':
			  setNeutral(prevNeutral => prevNeutral + 1);
			  break;
			case 'bad':
			  setBad(prevBad => prevBad + 1);
			  break;
			default:
			  return;
		  }
    };
	 const countTotalFeedback = () => {
		const result = good + neutral + bad;
		return result;
	};
	const positivePercentage = () => {
		return Math.round((good / countTotalFeedback()) * 100) || 0;
	};

	return (
		<>
			<Section title="Please leave feedback">
				<FeedbackOptions 
				options = {['good', 'neutral', 'bad']} 
				onLeaveFeedback={onLeaveFeedback} />
			</Section>

			<Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
	  </>)




	// state = {
	// 	good: 0,
	// 	neutral: 0,
	// 	bad: 0
	// };

	// onLeaveFeedback = (option) => {
    //     this.setState((prevState) => ({
    //         [option]: prevState[option] + 1
    //     }));
    // };
	// render() {
	// 	const { good, neutral, bad } = this.state;
	// 	const total = this.countTotalFeedback();
	// 	const positivePercentage = this.countPositiveFeedbackPercentage();

	// 	const objKey = Object.keys(this.state);
		
	// };
}
