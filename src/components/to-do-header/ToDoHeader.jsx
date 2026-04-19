import styles from './ToDoHeader.module.css'

function ToDoHeader() {
    return (
        <div className={styles['title-div']}>
            <h1 className={styles['main-title']}>To Do List</h1>
            <ul className={styles['filtering-buttons']}>
                <li>All</li>
                <li>Achievements</li>
                <li>Pending</li>
            </ul>
            <div className={styles['add-task-div']}>
                <input
                    type='text'
                    placeholder='Add New Task...'
                    className={styles['add-task-input']}
                />
                <button>add</button>
            </div>
        </div>
    )
}

export default ToDoHeader;