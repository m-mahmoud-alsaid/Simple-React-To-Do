import styles from './ToDoList.module.css'
import ToDoItem from '../to-do-item/ToDoItem'

function ToDoList({ taskList, deleteTask, handleDone }) {

    return (
        <div className={styles['to-do-list']}>
            {
                taskList.map((task) => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        handleDone={handleDone}
                    />
                ))
            }
        </div>
    )
}

export default ToDoList;