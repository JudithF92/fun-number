import React from 'react';
import './Explanation.css';


const Explanation = () => {
	return(
		<div className="wrapper">
			<h1>Fun Number Facts</h1>
	      	<div className="description">
		        <p>
		          Get a fact by entering a number and a type in the form <strong>number/type</strong>.
		        </p>
		        <p className="removeSpace">
		          A number can be
		        </p>
		        <ul className="list">
		          <li>integer,</li>
		          <li>random, or</li>
		          <li>a day of year (form: month/day).</li>
		        </ul>
		        <p className="removeSpace">
		          Type is optional and can be omitted.<br />
		          Possible values are
		        </p>
		        <ul className="list2">
		          <li>trivia,</li>
		          <li>math,</li>
		          <li>date, or</li>
		          <li>year.</li>
		        </ul>
		        <p className="removeSpaceTop">
		          Trivia is chosen if type is omitted.
		        </p>
		        <p className="removeSpaceTop">
		          Examples: 5/math or random/date
		        </p>
	      	</div>
	  	</div>
  	);
}

export default Explanation;