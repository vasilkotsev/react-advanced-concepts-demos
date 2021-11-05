import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    const { showTooltip, tooltipText, ...restProps } = this.props;
    return (
      <React.Fragment>
        <div
          {...restProps}
          style={{
            padding: "20px",
            cursor: "pointer",
            display: "inline-block"
          }}
        >
          MOVIE
        </div>
        {this.props.showTooltip ? (
          <span
            style={{
              padding: "5px",
              border: "3px solid red",
              margin: "5px"
            }}
          >
            {this.props.tooltipText}
          </span>
        ) : null}
      </React.Fragment>
    );
  }
}

export default withTooltip(Movie);
