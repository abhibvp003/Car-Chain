import React, { Component } from 'react';
import { Grid } from 'material-ui'; 

class AssignOwnership extends Component {

	ownershipForm() {
		return (
			<Grid container>hello</Grid>
		);
	}

	render() {
		return(
			<div>
				<h4>Assign Ownership</h4>
				{this.ownershipForm()}
			</div>
		);
	}
}

export default AssignOwnership;