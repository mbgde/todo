import React from "react";
import DeleteButton from "./ui/DeleteButton";

interface Task {
  title: string;
  summary: string;
}

const tasks: Task[] = [];

const TaskList = () => {
  return (
    <div>
      <div className="mt-1">
        {tasks.length < 1 ? (
          <p className="text-slateGray">there are no tasks</p>
        ) : (
          <div>
            {tasks.map((task, index) => (
              <div
                className="shadow-default mt-2 flex justify-between rounded-lg p-2"
                key={index}
              >
                <div>
                  <h3 className="font-semibold">{task.title}</h3>
                  <p className="text-deepPlum">{task.summary}</p>
                </div>
                <DeleteButton />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
