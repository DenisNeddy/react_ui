

const Task = ({task, done, markDone}) => {
    const paragraphStyle = {
        color: done ? 'gray' : 'black',
        borderLeft: '2px solid',
    };

    const buttonStyle = {
        border: 'none',
        background: 'transparent',
        display: 'inline',
        color: 'inherit',
    };
    return (
        <p style={paragraphStyle}>
            <button
                style={buttonStyle}
                onClick={done ? null : markDone}
            >
                {done ? 'V ' : 'O '}
            </button>
            {task}
        </p>
    )
  
}

export default Task