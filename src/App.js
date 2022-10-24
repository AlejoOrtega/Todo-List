import React, { useState } from "react";

import List from "./components/List";
import ListItem from "./components/ListItem";
import Input from "./components/Input";
import "./styles.css";
import uuid from 'react-uuid';

export default function App() {
  let todos = [{id: uuid(), content:"buy new jump"}, {id:uuid(), content:"dinner with friends"}];

  const [todo, setTodo] = useState(todos);

  const addTodo = (value) => {
    setTodo((prev) => [...prev, {id: uuid(), content: value}]);
  };

  const deleteTodo = (itemIndex) => {
    setTodo((prev) => [...prev.filter((item) => item.id !== itemIndex)]);
  };

  return (
    <div className="container">
      {/* Todo */}
      <section className="todo">
        {/* Todo input */}
        <Input onClick={addTodo} />
        {/* Todo list */}
        <List>
          {todo.map((singleTodo, index) => {
            return (
              <ListItem todo={singleTodo.content} key={`todo-${singleTodo.id}`}>
                <button onClick={() => deleteTodo(singleTodo.id)}>Delete</button>
              </ListItem>
            );
          })}
        </List>
      </section>
    </div>
  );
}
