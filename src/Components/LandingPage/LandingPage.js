import React from 'react';
import './LandingPage.css';
const API = require('../../Services/api');


class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      imgUrl: '',
      imgDesc: ''
    }
  }


  componentWillMount() {
    API.getCat()
      .then((res) => {
        console.log(res);
        this.setState({
          imgUrl: res.imageURL,
          imgDesc: res.imageDescription
        })
      })

  }

  render() {
    console.log(this.state);

    return (
      <div className="Landing-Page">
        <img src={this.state.imgUrl} alt={this.state.imgDesc} />
        <p>Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria</p>
        <button>Start Process</button>
      </div>
    )
  }
}

export default LandingPage;