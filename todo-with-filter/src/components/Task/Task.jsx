// import { useEffect } from "react";


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
        cursor: 'pointer'
    };

  
    return (
        <p style={paragraphStyle}>
            <button
                style={buttonStyle}
                onClick={markDone}
            >
                {done ? `V ${task}` : `O ${task}`}
            </button>
            
        </p>
    )
  
}

export default Task