import React from 'react';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="map-container" ref="map">

      </div>
    );
  }
}
