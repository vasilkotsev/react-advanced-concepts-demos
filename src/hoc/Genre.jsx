import { Fragment } from "react";
import withTooltip from "./withTooltip";

const Genre = ({ tooltipText, showTooltip, ...restProps }) => {
  return (
    <Fragment>
      <div
        {...restProps}
        style={{
          padding: "20px",
          cursor: "pointer",
          display: "inline-block"
        }}
      >
        GENRE
      </div>
      {showTooltip && (
        <span
          style={{
            padding: "5px",
            border: "3px solid red",
            margin: "5px"
          }}
        >
          {tooltipText}
        </span>
      )}
    </Fragment>
  );
};

export default withTooltip(Genre);
