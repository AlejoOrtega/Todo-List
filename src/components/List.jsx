import React from "react";

const List = ({ todos, children }) => {
  return (
    <ul className="todo__list">
      <React.Fragment>{children}</React.Fragment>
    </ul>
  );
};

export default List;
