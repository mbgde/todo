import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import CreateTaskButton from "./components/ui/CreateTaskButton";

const App = () => {
  return (
    <div className="m-auto max-w-md p-3">
      <Header logo="todo" />
      <TaskList />
      <CreateTaskButton />
    </div>
  );
};

export default App;
