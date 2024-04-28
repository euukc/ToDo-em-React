import React, { useState} from 'react';
import './App.css';
import iconLixeira from './iconLixeira.png'




function App() {

  const [tasks, setTasks] = useState([]);
  const [novaTask, setNovaTask] = useState([]);

  const addTask = () => {
    if (novaTask.trim() !== ''){
      setTasks([...tasks, novaTask]);
      setNovaTask('')
  }};

  const taskClicada = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const taskDeletada = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <div className='container-app'>
        <div className='container-text-header'>
          <h1>TO DO LIST</h1>          
        </div>

        <div className='container-addtasks'>
          <div className='informar-task'>             
          <input
           className='informar-task' type='text' id='nome' placeholder='Adicione uma nova tarefa' value={novaTask} onChange={(e) => setNovaTask(e.target.value)}/>
          
          </div>
          <div className='add' onClick={addTask}>  
          <p> Criar</p>           
          </div>          
        </div>

        <div className='container-tasks'>
        {tasks.map((task, index) => (
        <div className='task' key={index}>
          <input type='checkbox' checked={task.completed} onChange={() => taskClicada(index)}/>
           {task}
          <img src={iconLixeira} alt='Icon Lixeira' onClick={() => taskDeletada(index)}/>
        </div>
  ))}
</div>
        </div>       
    </div>
  );
}



export default App;
