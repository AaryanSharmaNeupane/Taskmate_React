import React from "react";

export const ShowTask = () => {
  const tasks = [
    { id: 100001, name: "Task A", time: "2:09 AM 2024/3/3" },
    { id: 100002, name: "Task B", time: "2:09 AM 2024/3/3" },
    { id: 100003, name: "Task C", time: "2:09 AM 2024/3/3" },
    { id: 100004, name: "Task D", time: "2:09 AM 2024/3/3" },
  ];
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
