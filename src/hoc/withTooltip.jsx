import React from "react";

function withTooltip(Component) {
  return class WithTooltip extends React.Component {
    state = {
      showTooltip: false
    };

    handleMouseOver = () => {
      this.setState({ showTooltip: true });
    };

    handleMouseOut = () => {
      this.setState({ showTooltip: false });
    };

    render() {
      return (
        <div>
          <Component
            {...this.props}
            showTooltip={this.state.showTooltip}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          />
        </div>
      );
    }
  };
}

export default withTooltip;
