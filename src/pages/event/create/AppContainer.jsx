import { useState, useEffect } from "react";
import { getAsync } from "../../../api";

export default function AppContainer() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await getAsync("task-management");
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="taskManager">
      <header>Task Manager</header>
      <div className="taskManager__container">
        <div className="taskManager__tasks">
          {tasks &&
            tasks.length > 0 &&
            tasks.map((task) => <div key={task.id}>{task.data.title}</div>)}
        </div>
      </div>
    </div>
  );
}
