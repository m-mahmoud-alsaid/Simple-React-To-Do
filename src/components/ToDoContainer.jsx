import styles from './ToDoContainer.module.css'
import ToDoHeader from '../components/to-do-header/ToDoHeader'
import ToDoList from './to-do-list/ToDoList'

import { useState } from 'react'

function ToDoContainer() {
    const [tasks, setTask] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all');

    const handleChange = e => setInputValue(e.target.value);
    const handleDone = (id) => {
        setTask(prev =>
            prev.map(tasks =>
                tasks.id === id
                    ? { ...tasks, completed: !tasks.completed }
                    : tasks
            )
        );
    };

    const addTask = () => {
        if (inputValue.trim() === '' || inputValue.length < 3) return;
        setTask((prev) => [...prev, { id: Date.now(), title: inputValue, completed: false }]);
        setInputValue('');
    };
    const deleteTask = (id) => setTask(prev => prev.filter(tasks => tasks.id !== id));

    const completedTasks = tasks.filter(taskObj => {
        if (filter === 'all') return !taskObj.completed;
        if (filter === 'completed') return taskObj.completed;
        return true;
    }
    );

    return (
        <div className={`${styles['to-do-container']} container`} >
            <div className={styles.box}>
                <ToDoHeader
                    addTask={addTask}
                    inputValue={inputValue}
                    handleChange={handleChange}
                    setFilter={setFilter}
                />
                <ToDoList
                    taskList={completedTasks}
                    deleteTask={deleteTask}
                    handleDone={handleDone}
                />
            </div>
        </div>
    )
}

export default ToDoContainer;