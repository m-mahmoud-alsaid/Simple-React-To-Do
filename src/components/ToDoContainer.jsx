import styles from './ToDoContainer.module.css'
import ToDoHeader from '../components/to-do-header/ToDoHeader'
import ToDoItem from './to-do-item/ToDoItem'

function ToDoContainer() {
    return (
        <div className={`${styles['to-do-container']} container`} >
            <div className={styles.box}>
                <ToDoHeader />
                <ToDoItem />
            </div>
        </div>
    )
}

export default ToDoContainer;