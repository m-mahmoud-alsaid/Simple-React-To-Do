import styles from './ToDoItem.module.css'
import { RiDeleteBin6Fill } from "react-icons/ri";

function ToDoItem({ task, deleteTask, handleDone }) {
    return (
        <div className={styles.item}>
            <div className={styles.task}>
                <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => {
                        handleDone(task.id)
                    }}
                />
                <p>{task.title}</p>
            </div>
            <RiDeleteBin6Fill onClick={() => deleteTask(task.id)} />
        </div>
    )
}
export default ToDoItem;