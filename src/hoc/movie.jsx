import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            padding: "20px",
            cursor: "pointer",
            display: "inline-block"
          }}
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
        >
          MOVIE
        </div>
        {this.props.showTooltip ? <div>TOOLTIP Movie</div> : null}
      </React.Fragment>
    );
  }
}

export default withTooltip(Movie);
