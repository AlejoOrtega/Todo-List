const ListItem = ({ index, todo, children }) => {
  return (
    <li key={`todo-${index}`}>
      {todo}
      {children}
    </li>
  );
};

export default ListItem;
