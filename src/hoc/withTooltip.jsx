import React from "react";

function withTooltip(Component) {
  return class WithTooltip extends Component {
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
        <Component
          {...this.props}
          showTooltip={this.state.showTooltip}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        />
      );
    }
  };
}

export default withTooltip;
