import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import BaseButton from "./components/ui/BaseButton";
import CreateTaskModal from "./components/CreateTaskModal";

const App = () => {
  return (
    <div className="m-auto max-w-md p-3">
      <Header logo="todo" />
      <TaskList />
      <BaseButton label="create task" className="w-full" />
      <CreateTaskModal />
    </div>
  );
};

export default App;
