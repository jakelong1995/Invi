import { useState, useEffect } from "react";
import { getAsync, createAsync } from '../../../api';

export default function AppContainer() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await getAsync('task-management');
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = async() =>{
    try{
      const data = {
        title: 'test add',
        description: 'test add',
        completed: false
      };
      await createAsync('task-management', data)
    }
    catch(ex){
      console.error(ex);
    }
  }

  return (
    <div className="taskManager">
      <header>Task Manager</header>
      <div onClick={handleAdd}>add</div>
      <div className="taskManager__container">
        <div className="taskManager__tasks">
          {tasks && tasks.length > 0 && tasks.map(task => (
            <div key={task.id}>{task.data.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
