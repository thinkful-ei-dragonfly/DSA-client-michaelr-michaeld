import React from 'react';
import './LandingPage.css';
import { withRouter } from 'react-router-dom';
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

  handeClick = () => {
    console.log('Click');
    this.props.history.push('/adoption');
  }

  render() {
    console.log(this.state);

    return (
      <div className="Landing-Page">
        <img src={this.state.imgUrl} alt={this.state.imgDesc} />
        <p>Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria Acceptance Criteria</p>
        <button onClick={this.handeClick}>Start Process</button>
      </div>
    )
  }
}

export default withRouter(LandingPage);