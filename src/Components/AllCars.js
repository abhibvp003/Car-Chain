import React, { Component } from 'react';

class AllCars extends Component {
	
  componentDidMount() {
    fetch('http://ec2-54-85-254-219.compute-1.amazonaws.com:3000/api/vehicleDetail')
    .then(results => {
      console.log(results);
      return results.json();
    }).then(data => {
      console.log(data);
    });
  }

  render() {
    return(
      <div></div>
    );
  }
}

export default AllCars;