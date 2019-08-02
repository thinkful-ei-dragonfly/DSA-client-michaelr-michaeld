import React from 'react';
import './AdoptionPage.css';
import Animal from '../Animal/Animal'
const API = require('../../Services/api');

export default class AdoptionPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cat: {},
      dog: {}
    };
  }

  componentWillMount() {
    API.getDog().then(res => {
      this.setState({ dog: res });
    });
    API.getCat().then(res => {
      this.setState({ cat: res })
    })
  }

  render() {
    console.log(this.state.cat)
    console.log(this.state.dog)
    return (
      <div className="Adoption-Page">
        <Animal animalInfo={this.state.cat} />
        <Animal animalInfo={this.state.dog} />
      </div>
    )
  }
}
