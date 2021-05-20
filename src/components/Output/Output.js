import React from 'react';
import './Output.css';

const Output = ({fact}) => {
	return(
		<div className="wrapperOutput">
        	<h2>Fact:</h2>
        	<br />
          	<p>{fact}</p>
      	</div>
	);
}

export default Output;