import React from "react";
import TodoCard from "./TodoCard";

async function getTodos() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  let todos = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return todos;
}

const PlaceholderList = async () => {
  let todos = await getTodos();
  return (
    <div className="flex flex-col gap-2">
      {todos.map(({ title }: any) => (
        <TodoCard />
      ))}
    </div>
  );
};

export default PlaceholderList;
