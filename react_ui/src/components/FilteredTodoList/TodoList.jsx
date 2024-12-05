import {useState} from 'react'

const initialList = [
    {
        task: 'Feed the plants', done: false, index: 0
    },
    {
        task: 'Water the dishes', done: false, index: 1
    },
    {
        task: 'Clean the cat', done: false, index: 2
    }
]

function markDone(list, index) {
    return list.map(
        (item, i) => (i === index ? {...item, done: true} : item)
    );
}

const TodoList = () => {
    const [todos, setTodos] = useState(initialList);
    const [hideDone, setHideDone] = useState(false);
    const filteredTodos = hideDone
        ? todos.filter(({done}) => !done)
        : todos;
    
    
    return (
        <>
            <div style={{display: 'flex'}}>
                <button onClick={() => setHideDone(false)}>
                    Show All
                </button>
                <button onClick={() => setHideDone(true)}>
                    Hide done
                </button>
            </div>
            {
                filteredTodos.map((todo, index) => (
                    <p key={todo.task}>
                        {todo.done ? (
                            <strike>{todo.task}</strike>
                        ) : (
                            <>
                                {todo.task}
                                <button
                                    onClick={() => setTodos((value) => markDone(value, todo.index))}
                                >X</button>
                            </>
                        )}
                    </p>
                ))
            }
        </>
    )
}

export default TodoList;