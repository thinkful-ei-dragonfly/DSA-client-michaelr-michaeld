import React from 'react';
import './Animal.css';


export default class Animal extends React.Component {
  render() {
    return (
      <div className="Animal">
        <img src={this.props.animalInfo.imageURL} alt="animal-image" />
        <p> {this.props.animalInfo.imageDescription} </p>
      </div>
    );
  }
}
