import styles from './ToDoItem.module.css'
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

function ToDoItem({ task = 'Task' }) {
    return (
        <div className={styles.item}>
            <div className={styles.task}>
                <input type='checkbox' />
                <p>{task}</p>
            </div>
            <div className={styles.icons}>
                <FaCheck />
                <RiDeleteBin6Fill />
            </div>
        </div>
    )
}
export default ToDoItem;