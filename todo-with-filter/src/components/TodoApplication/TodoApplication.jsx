import { useState } from 'react';
import FilterButton from '../FilterButton/FilterButton';
function markDone(list, index) {
    return list.map(
        (item, i) => (i === index ? {...item, done: true} : item)
    );
}



const TodoApplication = ({initialList}) => {
    const [todos, setTodos] = useState(initialList);
    const [hideDone, setHideDone] = useState(false);

    const filteredTodos = hideDone ? todos.filter(({done}) => !done) : todos;
    
    return (
        <div>
            <FilterButton current={true} flag />
        </div>
    )
}

export default TodoApplication