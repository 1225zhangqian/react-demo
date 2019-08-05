import React from "react";
import PropTypes from "prop-types";

const Link = (props) => {
  console.log(props)
  const { active, children, setVisibilityFilter, filter } = props
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        // this.props.setVisibilityFilter()
        setVisibilityFilter(filter);
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
