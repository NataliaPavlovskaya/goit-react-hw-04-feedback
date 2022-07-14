import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
	return options.map(option => (
				<button 
				key={shortid.generate()} 
				type="button" 
				name={option} 
				onClick={() => onLeaveFeedback(option)}>
					{option}
				</button>
			))}
		
;
FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired),
	onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;