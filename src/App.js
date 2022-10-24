import React, { useState } from "react";

import List from "./components/List";
import ListItem from "./components/ListItem";
import Input from "./components/Input";
import "./styles.css";

export default function App() {
  let todos = ["buy new jump", "dinner with friends"];

  const [todo, setTodo] = useState(todos);

  const addTodo = (value) => {
    setTodo((prev) => [...prev, value]);
  };

  const deleteTodo = (itemIndex) => {
    setTodo((prev) => [...prev.filter((item, index) => index !== itemIndex)]);
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
              <ListItem todo={singleTodo} key={`todo-${index}`}>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </ListItem>
            );
          })}
        </List>
      </section>
    </div>
  );
}
