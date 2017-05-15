import React from 'react';
import { withRouter } from 'react-router-dom';


class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { description } = this.props.bench;
    return(
      <div className="Bench-Index-Item">
        <span>{description}</span>
      </div>
    );
  }
}

export default withRouter(BenchIndexItem);
