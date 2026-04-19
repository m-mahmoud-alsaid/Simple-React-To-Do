import styles from './ToDoHeader.module.css'

function ToDoHeader({ addTask, inputValue, handleChange, setFilter }) {
    return (
        <div className={styles['title-div']}>
            <h1 className={styles['main-title']}>To Do List</h1>
            <ul className={styles['filtering-buttons']}>
                <li onClick={() => setFilter('all')}>All</li>
                <li onClick={() => setFilter('completed')}>Achievements</li>
            </ul>
            <div className={styles['add-task-div']}>
                <input
                    type='text'
                    placeholder='Add New Task...'
                    value={inputValue}
                    onChange={handleChange}
                    className={styles['add-task-input']}
                />
                <button onClick={addTask}>add</button>
            </div>
        </div>
    )
}

export default ToDoHeader;