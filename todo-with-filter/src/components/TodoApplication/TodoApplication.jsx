import { useState } from 'react';
import FilterButton from '../FilterButton/FilterButton';
import Task from '../Task/Task'

function markDone(list, index) {
    return list.map(
        (item, i) => (i === index ? {...item, done: !item.done} : item)
    );
}

const TodoApplication = ({initialList}) => {
    const [todos, setTodos] = useState(initialList);
    const [hideDone, setHideDone] = useState(false);

    const filteredTodos = hideDone ? todos.filter(({done}) => !done) : todos;
    
    return (
        <>
            <div style={{display: 'flex'}}>
                <FilterButton
                    current={hideDone}
                    flag={false}
                    setFilter={setHideDone}
                    >
                    Show all
                </FilterButton>
                <FilterButton
                    current={hideDone}
                    flag={true}
                    setFilter={setHideDone}
                >
                    Hide done
                </FilterButton>
            </div>
            {filteredTodos.map((todo) => (
                <Task 
                    key={todo.task}
                    task={todo.task}
                    done={todo.done}
                    markDone={() => setTodos((value) => markDone(value, todo.index))}
                
                />
            ))}
        </>
    )
}

export default TodoApplication