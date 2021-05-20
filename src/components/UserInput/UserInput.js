import React from 'react';
import './UserInput.css';

const UserInput = ({onInputChange, onClickButton}) => {
	return(
		<div className="wrapperInput">
	        <input 
	        	onChange={onInputChange}
	        	type="search" 
	        	placeholder="number/type"/>
	        <button onClick={onClickButton} type="submit">Get Fact</button>
      	</div>
	);
}

export default UserInput;